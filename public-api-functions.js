//
// public-api-functions.js
//

const chai = require('chai');
const assert = chai.assert;

module.exports = {
    platformStatus: platformStatus,
    tickersTrading: tickersTrading,
    tickersFunding: tickersFunding
};

function platformStatus(requestParams, response, context, ee, next) {

    let statusCode = response.statusCode;
    let statusBfx = response.body[1];

    assert.equal(statusCode, '200', 'HTTP Status Code is 200');
    assert.typeOf(statusBfx, 'string', 'BitFinex Status is a String');
    assert.equal(statusBfx, '1', 'BitFinex is Online');
    return next();
}

function tickersTrading(requestParams, response, context, ee, next) {

    let statusCode = response.statusCode;
    let tickersBfx = JSON.parse(response.body)[0];

    assert.equal(statusCode, '200', 'HTTP Status Code is 200');
    assert.typeOf(tickersBfx, 'Array', 'Ticker Trading is an Array');
    assert.equal(tickersBfx.length, 11, 'Ticker Trading has length 17');
    assert.equal(tickersBfx[0], 'tBTCUSD', 'Symbol is BTCUSD');
    assert.typeOf(tickersBfx[1], 'Number', 'Bid Price is a Number');
    assert.typeOf(tickersBfx[2], 'Number', 'Bid Size is a Number');
    assert.typeOf(tickersBfx[3], 'Number', 'Ask Price is a Number');
    assert.typeOf(tickersBfx[4], 'Number', 'Ask Size is a Number');
    assert.typeOf(tickersBfx[5], 'Number', 'Daily Change is a Number');
    assert.typeOf(tickersBfx[6], 'Number', 'Daily Change Percentage is a Number');
    assert.typeOf(tickersBfx[7], 'Number', 'Last Price is a Number');
    assert.typeOf(tickersBfx[8], 'Number', 'Volume is a Number');
    assert.typeOf(tickersBfx[9], 'Number', 'High is a Number');
    assert.typeOf(tickersBfx[10], 'Number', 'Low is a Number');

    return next();
}

function tickersFunding(requestParams, response, context, ee, next) {

    statusCode = response.statusCode;
    tickersBfx = JSON.parse(response.body)[0];

    assert.equal(statusCode, '200', 'HTTP Status Code is 200');
    assert.typeOf(tickersBfx, 'Array', 'Ticker Funding is an Array');
    assert.equal(tickersBfx.length, 17, 'Ticker Funding has length 17');
    assert.equal(tickersBfx[0], 'fBTC', 'Symbol is BTCUSD');
    assert.typeOf(tickersBfx[1], 'Number', 'FRR is a Number');
    assert.typeOf(tickersBfx[2], 'Number', 'Bid is a Number');
    assert.typeOf(tickersBfx[3], 'Number', 'Bid Size is a Number');
    assert.typeOf(tickersBfx[4], 'Number', 'Bid Period is a Number');
    assert.typeOf(tickersBfx[5], 'Number', 'Ask is a Number');
    assert.typeOf(tickersBfx[6], 'Number', 'Ask Size is a Number');
    assert.typeOf(tickersBfx[7], 'Number', 'Ask Period is a Number');
    assert.typeOf(tickersBfx[8], 'Number', 'Daily Change is a Number');
    assert.typeOf(tickersBfx[9], 'Number', 'Daily Change Percentage is a Number');
    assert.typeOf(tickersBfx[10], 'Number', 'Last Price is a Number');
    assert.typeOf(tickersBfx[11], 'Number', 'Volume is a Number');
    assert.typeOf(tickersBfx[12], 'Number', 'High is a Number');
    assert.typeOf(tickersBfx[13], 'Number', 'Low is a Number');

    return next();
}

