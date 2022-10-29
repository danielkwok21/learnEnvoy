# 0. Hello world

## Guides:
https://www.envoyproxy.io/docs/envoy/v1.24.0/start/install#install-envoy-using-docker

## Steps
1. Install envoy via docker image
```bash
docker pull envoyproxy/envoy:v1.24.0
```

2. Verify installation by checking version
```bash
docker run --rm envoyproxy/envoy:v1.24.0 --version
```

3. Run with demo config
```bash
docker run --rm -it \
      -p 9901:9901 \
      -p 10000:10000 \
      envoyproxy/envoy:v1.24.0
```

4. Verify
```bash
curl -v localhost:10000
```