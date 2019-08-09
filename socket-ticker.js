const config = require('./config');
const ws = require('ws');
const w = new ws(config.apiSocketPub);
const chai = require('chai');
const assert = chai.assert;

w.on('message', (msg) => {

    msg = JSON.parse(msg);
    console.log (msg);

    if (msg.event) {

        assert.typeOf(msg.event, 'String', 'Must be String');
        console.log('\x1b[42m%s\x1b[0m', 'OK. Event Received.');

    } else if (msg[1] !== 'hb') {

        assert.equal(msg.length, 2, 'Must be an Array of Length 2');
        assert.typeOf(msg[0], 'Number', 'Must be a Number');
        assert.equal(msg[1].length, 10, 'Number', 'Must be an Array of Length 10');

        assert.typeOf(msg[1][0], 'Number', 'Must be a Number');
        assert.typeOf(msg[1][1], 'Number', 'Must be a Number');
        assert.typeOf(msg[1][2], 'Number', 'Must be a Number');
        assert.typeOf(msg[1][3], 'Number', 'Must be a Number');
        assert.typeOf(msg[1][4], 'Number', 'Must be a Number');
        assert.typeOf(msg[1][5], 'Number', 'Must be a Number');
        assert.typeOf(msg[1][6], 'Number', 'Must be a Number');
        assert.typeOf(msg[1][7], 'Number', 'Must be a Number');
        assert.typeOf(msg[1][8], 'Number', 'Must be a Number');
        assert.typeOf(msg[1][9], 'Number', 'Must be a Number');

        console.log('\x1b[42m%s\x1b[0m', 'OK. Ticker Array Length and Types valid.');

        w.close();
    }

});

let msg = JSON.stringify({
    event: 'subscribe',
    channel: 'ticker',
    symbol: 'tBTCUSD'
});

w.on('open', () => w.send(msg));