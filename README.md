# BitFinex QA
> NodeJS-based API Testing Demo against BitFinex API

[![Build Status](https://travis-ci.org/meshfields/bitfinex-qa.svg?branch=master)](https://travis-ci.org/meshfields/bitfinex-qa) 
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/meshfields/bitfinex-qa/issues) 
[![HitCount](http://hits.dwyl.io/meshfields/bitfinex-qa.svg)](http://hits.dwyl.io/meshfields/bitfinex-qa) 
[![Greenkeeper badge](https://badges.greenkeeper.io/meshfields/bitfinex-qa.svg)](https://greenkeeper.io/) 

## RoadMap

* Write ReadMe
* Code Float Int Distinguisher, -> there seem to be bugs in Chai Lib, postponed
* Test 2 more Endpoints from different REST API
* Test Rate Limits success and fail
* Test 3 Websocket Endpoints

## Possible Bugs found

v2/tickers - Bid Price is not a Float.


## Setup

```bash
$ npm install
$ npm install -g artillery
```

## Execute Tests

```
$ artillery run rest-apis.yml
```

## Reporting

Test failures will be thrown, otherwise an aggregate successful report will look similar to this:

```                 
   Complete report @ 2019-01-02T17:32:36.653Z
     Scenarios launched:  300
     Scenarios completed: 300
     Requests completed:  600
     RPS sent: 18.86
     Request latency:
       min: 52.1
       max: 11005.7
       median: 408.2
       p95: 1727.4
       p99: 3144
     Scenario counts:
       0: 300 (100%)
     Codes:
       200: 300
       302: 300
```

## Modes

### Test REST APIs

```
$ artillery run rest-api.yml
```

### Test Websockets

```
$ artillery run websocket.yml
```

### Rate Limit Tester

```
$ artillery run rate-limit.yml
```


## Docker

This microservice can be pulled in from [Dockerhub](https://hub.docker.com/r/meshfields/bitfinex-qa) with

`docker pull meshfields/bitfinex-qa`

*Prod mode* to be launched with `NODE_ENV=production npm start`.

## Authentication

Make sure to send a bearer token along in the header to get authenticate against Auth0.

```
curl --request GET --url 'http://localhost:3001/default/pods' --header 'authorization: Bearer {BEARER}' --header 'content-type: application/json'
```

## License

MIT © 2018 by Meshfields