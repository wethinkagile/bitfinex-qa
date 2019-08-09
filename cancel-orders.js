const config = require('./config');
const BFX = require('bitfinex-api-node');
const chai = require('chai');
const assert = chai.assert;
const crypto = require('crypto');

const apiKey = config.apiKey;
const apiSecret = config.apiSecret;

const bfx = new BFX({
    apiKey: apiKey,
    apiSecret: apiSecret,

    ws: {
        autoReconnect: true,
        seqAudit: true,
        packetWDDelay: 10 * 1000
    }
});

const ws = bfx.ws();

ws.on('error', (err) => console.log(err));
ws.on('open', ws.auth.bind(ws));

ws.onOrderSnapshot({}, (orders) => {

    if (orders.length === 0) {
        console.log('\x1b[47m%s\x1b[0m', 'SKIPPED. No Socket Orders Received.');
        ws.close();
        return
    }

    ws.cancelOrders(orders).then(() => {
        console.log('\x1b[42m%s\x1b[0m', `OK. ${orders.length} Orders cancelled.`);
        ws.close();
    });

});

ws.open();

