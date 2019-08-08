//
// auth-api-functions.js
//

const chai = require('chai');
const assert = chai.assert;
const crypto = require('crypto');

const apiKey = 'rtIOt9jjhT71ik4WkZyJ37McGoLUzHbWjtJVrnUtUNo';
const apiSecret = 'ZIonxFeGtfaJvVVx8rZlXSQQJKn7BFh0Igw6Cr9WxcQ';

module.exports = {
    setAuthHeaders: setAuthHeaders,
    wallets: wallets
};

function setAuthHeaders(requestParams, context, ee, next) {

    requestParams.body.nonce = Date.now().toString();

    const payload = new Buffer(JSON.stringify(requestParams.body))
        .toString('base64');

    const signature = crypto
        .createHmac('sha384', apiSecret)
        .update(payload)
        .digest('hex');

    requestParams.headers = {
        'Content-Type': 'application/json',
        'X-BFX-APIKEY': apiKey,
        'X-BFX-PAYLOAD': payload,
        'X-BFX-SIGNATURE': signature
    };

    return next();
}

function wallets(requestParams, response, context, ee, next) {

    const statusCode = response.statusCode;
    const wallets = JSON.parse(response.body)[0];

    console.log (response.body);

    assert.equal(statusCode, '200', 'HTTP Status Code is 200');
    assert.typeOf(wallets, 'Array', 'Ticker Funding is an Array');
    assert.equal(wallets.length, 17, 'Ticker Funding has length 17');
    assert.equal(wallets[0], 'fBTC', 'Symbol is BTCUSD');

    return next();
}


