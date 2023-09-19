# Express - NodeJS vs BunJS

This repository is meant to be a HTTP benchmark between BunJS and NodeJS, using [Express](https://expressjs.com/pt-br/)

For benchmark scores I used this: https://github.com/wg/wrk

For the Operating System I used my personal computer. I know that it is not the best, but it is not meant to be a complex benchmark

## API Endpoints

#### Endpoint 1 - Plain Text "Hello World"

```http
  GET /
```

#### Endpoint 2 - Stringfy { message: "Hello World" }

```http
  GET /stringfy
```

## Benchmark - Endpoint 1

BunJS 🏆 (~2.3x faster)

```bash
> wrk -t12 -c400 -d30s --latency http://127.0.0.1:3000/
Running 30s test @ http://127.0.0.1:3000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.32ms    1.40ms  39.72ms   79.58%
    Req/Sec     1.81k   183.28     7.92k    89.63%
  Latency Distribution
     50%   18.35ms
     75%   19.09ms
     90%   19.77ms
     99%   21.07ms
  649426 requests in 30.08s, 118.29MB read
Requests/sec:  21589.80
Transfer/sec:      3.93MB
```

NodeJS

```bash
> wrk -t12 -c400 -d30s --latency http://127.0.0.1:3000/
Running 30s test @ http://127.0.0.1:3000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    45.11ms   78.61ms   2.00s    99.08%
    Req/Sec   828.01    268.50     2.98k    90.93%
  Latency Distribution
     50%   41.53ms
     75%   43.19ms
     90%   44.16ms
     99%   64.85ms
  279043 requests in 30.07s, 63.34MB read
  Socket errors: connect 0, read 0, write 0, timeout 202
Requests/sec:   9280.92
Transfer/sec:      2.11MB
```

## Benchmark - Endpoint 2

BunJS 🏆\*

\*Bun lost Performance compared to NodeJS for Stringfy api, I believe that Webkit JsCore JSON.stringfy impl is slower than the V8 Engine's

```bash
> wrk -t12 -c400 -d30s --latency http://127.0.0.1:3000/
Running 30s test @ http://127.0.0.1:3000/stringfy
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    19.60ms    1.46ms  55.21ms   87.38%
    Req/Sec     1.69k   150.37     4.00k    81.91%
  Latency Distribution
     50%   19.53ms
     75%   20.21ms
     90%   20.82ms
     99%   23.12ms
  606848 requests in 30.10s, 123.27MB read
Requests/sec:  20163.52
Transfer/sec:      4.10MB
```

NodeJS

\*Performance was almost the same from plain text, but latency still higher

```bash
> wrk -t12 -c400 -d30s --latency http://127.0.0.1:3000/
Running 30s test @ http://127.0.0.1:3000/stringfy
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    45.95ms   75.75ms   1.99s    99.14%
    Req/Sec   787.34    236.98     3.68k    88.86%
  Latency Distribution
     50%   43.20ms
     75%   44.86ms
     90%   45.97ms
     99%   62.01ms
  270252 requests in 30.09s, 67.01MB read
  Socket errors: connect 0, read 0, write 0, timeout 199
Requests/sec:   8982.81
Transfer/sec:      2.23MB
```
