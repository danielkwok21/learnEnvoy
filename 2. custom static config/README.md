# 2. Custom static config (wip)

## Guide
https://www.tetrate.io/blog/get-started-with-envoy-in-5-minutes/

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
