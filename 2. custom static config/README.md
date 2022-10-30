# 2. Custom static config (wip)

## Guide
https://www.tetrate.io/blog/get-started-with-envoy-in-5-minutes/

## Steps
1. Apply config
The `-c` or `--config-path` flag tells Envoy the path to its initial configuration.
```bash
docker run --rm -it \
    -p 9901:9901 \
    -p 10000:10000 \
    -v ./envoy-demo.yaml:/envoy-demo.yaml \
    envoyproxy/envoy:v1.24.0 \
    -c /envoy-demo.yaml
```

1. Verify
```bash
curl localhost:10000
```