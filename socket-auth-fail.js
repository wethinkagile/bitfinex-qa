const config = require('./config');
const ws = require('ws');
const w = new ws(config.apiSocketPub);
const chai = require('chai');
const assert = chai.assert;
const crypto = require('crypto');

const apiKey = config.apiKey;
const apiSecret = config.apiSecret;

w.on('message', (msg) => {

    msg = JSON.parse(msg);
    console.log (msg);

    if (msg.event == 'info') {

        assert.typeOf(msg.event, 'String', 'Must be String');
        console.log('\x1b[42m%s\x1b[0m', 'OK. Info Event Received.');

    } else if (msg.event == 'auth') {

        assert.equal(msg.status, 'FAILED', 'Auth Status must FAIL');
        console.log('\x1b[42m%s\x1b[0m', 'OK. Auth Status FAILED Received. Press Ctrl/Cmd-C to Exit.');

    }

});

const authNonce = Date.now() * 1000;
const authPayload = 'AUTH' + authNonce;

// Problems with HmacSHA384 from https://docs.bitfinex.com/v2/docs/ws-auth
// So, provoke AUTH Failure
const authSig = 'jibberish';

const payload = {
    apiKey,
    authSig,
    authNonce,
    authPayload,
    event: 'auth',
    filter: [
        'balance'
    ]
};

let msg = JSON.stringify(payload);

w.on('open', () => w.send(msg));