const config = require('./config');
const request = require('request');
const url = config.apiRestPub;
const chai = require('chai');
const assert = chai.assert;

request.get(url + "ticker/tBTCUSD",
    (error, response, body) => {

        body = JSON.parse(body);
        console.log(body);

        assert.equal(body.length, 10, 'Must be an Array of Length 10');
        assert.typeOf(body[0], 'Number', 'Must be a Number');
        assert.typeOf(body[1], 'Number', 'Must be a Number');
        assert.typeOf(body[2], 'Number', 'Must be a Number');
        assert.typeOf(body[3], 'Number', 'Must be a Number');
        assert.typeOf(body[4], 'Number', 'Must be a Number');
        assert.typeOf(body[5], 'Number', 'Must be a Number');
        assert.typeOf(body[6], 'Number', 'Must be a Number');
        assert.typeOf(body[7], 'Number', 'Must be a Number');
        assert.typeOf(body[8], 'Number', 'Must be a Number');
        assert.typeOf(body[9], 'Number', 'Must be a Number');

        console.log('\x1b[42m%s\x1b[0m', 'OK. Ticker Array Length and Types valid.');
    });

