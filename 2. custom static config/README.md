# 2. Custom static config

## Guide
https://www.tetrate.io/blog/get-started-with-envoy-in-5-minutes/

## Steps
1. Apply config
The `-c` or `--config-path` flag tells Envoy the path to its initial configuration.
```bash
docker run --rm -it \
      -p 9902:9902 \
      -p 10000:10000 \
      envoyproxy/envoy:v1.24.0 \
          -c /etc/envoy/envoy.yaml \
          --config-yaml "$(cat envoy-demo.yaml)"

```
<!-- 

docker run --rm -it \
      -p 10000:10000 \
      envoyproxy/envoy:v1.24.0 \
          --config-yaml "$(cat envoy-demo.yaml)"

```bash

docker run --rm -it \
    -p 9901:9901 \
    -p 10000:10000 \
    -v ./envoy-demo.yaml:/envoy-demo.yaml \
    envoyproxy/envoy:v1.24.0 \
    -c /envoy-demo.yaml

```

 -->

1. Verify
```bash
curl localhost:9902
```