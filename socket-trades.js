const config = require('./config');
const ws = require('ws');
const w = new ws(config.apiSocketPub);
const chai = require('chai');
const assert = chai.assert;

w.on('message', (msg) => {

    msg = JSON.parse(msg);
    console.log(msg);

    if (msg.event) {

        assert.typeOf(msg.event, 'String', 'Must be String');
        console.log('\x1b[42m%s\x1b[0m', 'OK. Event Received.');

    } else if (msg[1] === 'te' || msg[1] === 'tu') {

        assert.typeOf(msg[0], 'Number', 'Must be a Number');
        assert.equal(msg[2].length, 4, 'Must be an Array of Length 4');

        assert.typeOf(msg[2][0], 'Number', 'Must be Type of Number');
        assert.typeOf(msg[2][1], 'Number', 'Must be Type of Number');
        assert.typeOf(msg[2][2], 'Number', 'Must be Type of Number');
        assert.typeOf(msg[2][3], 'Number', 'Must be Type of Number');

        console.log('\x1b[42m%s\x1b[0m', 'OK. Trades Array Length and Types valid.');

        w.close();
    }



});

let msg = JSON.stringify({
    event: 'subscribe',
    channel: 'trades',
    symbol: 'tBTCUSD'
});

w.on('open', () => w.send(msg));