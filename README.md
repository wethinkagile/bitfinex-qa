# BitFinex QA
> NodeJS-based API Testing Demo against BitFinex API

[![Build Status](https://travis-ci.org/meshfields/bitfinex-qa.svg?branch=master)](https://travis-ci.org/meshfields/bitfinex-qa) 
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/meshfields/bitfinex-qa/issues) 
[![HitCount](http://hits.dwyl.io/meshfields/bitfinex-qa.svg)](http://hits.dwyl.io/meshfields/bitfinex-qa) 
[![Greenkeeper badge](https://badges.greenkeeper.io/meshfields/bitfinex-qa.svg)](https://greenkeeper.io/) 

## Setup

```bash
$ npm install
```


## Authentication

Make sure to provide a valid BitFinex API Key and Secret pair as environment variable with, e.g.

```
export API_KEY=<FinexApiKey>
export SECRET=<FinexApiSecret>
```

## Execute Tests

### Run Single Tests

Available Tests:

```
[
    rest-ticker, 
    rest-orders,
    rest-positions,
    socket-ticker,
    socket-trades,
    socket-auth-fail
    socket-get-orders
]
```

```
$ node <testName>.js
```

### Run All Tests 

```
$ npm start
```

## Reporting

Test failures will be thrown, otherwise a small report will appear, looking similar to this:

```                 
OK. Trades Array Length and Types valid.
```

## Integration Tests

In case it doesn't work on your machine.

https://travis-ci.org/meshfields/bitfinex-qa

## Docker Image

This microservice can be pulled in from [Dockerhub](https://hub.docker.com/r/meshfields/bitfinex-qa) with

`docker pull meshfields/bitfinex-qa`

*Smoke Test* to be launched with `npm test`.

## Version Log

### 1.0.0
* Created ReadMe
* Problem with Float/Int in Chai, test for String and Number Types instead for PoC
* Wrote more Endpoint tests against different REST API 
* Rate Limit Tests failed since ArtilleryIO failed with Finex Auth Methods

### 1.1.0
* Re-Architecture from Artillery to vanilla NodeJS 
* Wrote the remaining Websocket and Rest Endpoints tests
* Removed all hard-coded Secrets and URLs from Sources
* Set up ci/cd pipeline for automated testing. Code Readability and README Update
* Refactored for re-usable Config Parameters

### 1.2.0
* Added socket-get-orders.js for successful socket auth and play around with BFX library 
* Added *npm start* shorthand to execute all tests concurrently.

## License

MIT © 2019 by Meshfields, Stephan Kristyn, contact me at steve@meshfields.de