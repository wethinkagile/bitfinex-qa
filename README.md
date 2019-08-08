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

Available Tests:

```
[
    rest-ticker, 
    rest-orders,
    rest-positions,
    socket-ticker,
    socket-trades,
    socket-auth-fail
]
```

```
$ node <testName>.js
```

## Reporting

Test failures will be thrown, otherwise an aggregate successful report will look similar to this:

```                 
OK. Trades Array Length and Types valid.
```

## Self-Tests

## Docker

This microservice can be pulled in from [Dockerhub](https://hub.docker.com/r/meshfields/bitfinex-qa) with

`docker pull meshfields/bitfinex-qa`

*Smoke Test* to be launched with `npm test`.

## Log

* Write ReadMe [YES]
* Float Int Distinguisher, -> consult with Chai Lib Community, postponed [NO]
* Test 2 more Endpoints from different REST API [YES]
* Test Rate Limits success and fail -> ArtilleryIO failed to succeed with Finex' Auth Method [NO]
* Test 3 Websocket Endpoints [YES]
* Re-Architecture from Artillery to vanilla NodeJS [YES]
* Remove all hard-coded Secrets and URLs from Sources [YES]
* Test-Run, Code Readability and README update [YES]
* Test-Run and Quick File Format [YES]
* ToDo: *socket-auth-success* test, consult with BitFinex/Node Community about minor issue in https://docs.bitfinex.com/v2/docs/ws-auth [OPEN]

## License

MIT © 2019 by Meshfields, Stephan Kristyn, contact me at steve@meshfields.de