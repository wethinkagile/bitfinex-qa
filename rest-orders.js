const config = require('./config');
const crypto = require('crypto');
const request = require('request');
const chai = require('chai');
const assert = chai.assert;

const apiKey = config.apiKey;
const apiSecret = config.apiSecret;
const apiRestAuth = config.apiRestAuth;

const apiPath = 'v2/auth/r/orders/tBTCUSD';
const nonce = Date.now().toString();
const queryParams = '';
const body = {};
const signature = `/api/${apiPath}${nonce}${JSON.stringify(body)}`;
const sig = crypto.createHmac('sha384', apiSecret).update(signature);
const shex = sig.digest('hex');

const options = {
    url: `${apiRestAuth}${apiPath}?${queryParams}`,
    headers: {
        'bfx-nonce': nonce,
        'bfx-apikey': apiKey,
        'bfx-signature': shex
    },
    body: body,
    json: true
};

request.post(options, (error, response, body) => {

    console.log(body);

    if (body[0] !== undefined) {
        assert.equal(body[0].length, 32, 'Must be an Array of Length 32');
        assert.typeOf(body[0][0], 'Number', 'Must be a Number');
        assert.typeOf(body[0][3], 'String', 'Must be a String');
        assert.typeOf(body[0][6], 'Number', 'Must be a Number');
        assert.typeOf(body[0][7], 'Number', 'Must be a Number');
        assert.typeOf(body[0][8], 'String', 'Must be a String');
        assert.typeOf(body[0][16], 'Number', 'Must be a Number');

        console.log('\x1b[42m%s\x1b[0m', 'OK. Orders Array Length and Sample Types are valid.');
    } else {
        console.log('\x1b[43m%s\x1b[0m', 'SKIPPED. You dont seem to have any orders.');
    }


});