# 2. Custom static config

## Guides
https://www.tetrate.io/blog/get-started-with-envoy-in-5-minutes/
https://www.envoyproxy.io/docs/envoy/latest/start/sandboxes/front_proxy.html

## Steps
1. Start containers (envoy, and 2 dummy services)
```bash
docker-compose up
```

2. Verify
```bash
curl localhost:10000/blue

curl localhost:10000/green
```
