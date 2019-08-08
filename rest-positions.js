const config = require('./config');
const crypto = require('crypto');
const request = require('request');

const chai = require('chai');
const assert = chai.assert;

const apiKey = config.apiKey;
const apiSecret = config.apiSecret;
const apiRestAuth = config.apiRestAuth;

const apiPath = 'v2/auth/r/positions';
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

    assert.equal(body[0].length, 20, 'Must be an Array of Length 20');
    assert.typeOf(body[0][0], 'String', 'SYMBOL must be a String');
    assert.typeOf(body[0][1], 'String', 'STATUS must be a String');
    assert.typeOf(body[0][2], 'Number', 'AMOUNT must be a Number');
    assert.typeOf(body[0][3], 'Number', 'BASE_PRICE must be a Number');
    assert.typeOf(body[0][6], 'Number', 'PL must be a Number');
    assert.typeOf(body[0][7], 'Number', 'PL_PERC must be a Number');
    assert.typeOf(body[0][7], 'Number', 'PRICE_LIQ must be a Number');

    console.log('\x1b[42m%s\x1b[0m', 'OK. Positions Array Length and Sample Types are valid.');
});