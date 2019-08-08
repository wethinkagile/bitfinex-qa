var config = require('./config.global');

config.env = 'test';
config.apiKey = process.env.API_KEY;
config.apiSecret = process.env.API_SECRET;

module.exports = config;