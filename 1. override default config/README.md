# 1. Override default config

## Guide
https://www.envoyproxy.io/docs/envoy/v1.24.0/start/quick-start/run-envoy#override-the-default-configuration

## Steps
1. Go through [../0. hello world](./../0.%20hello%20world/README.md)
2. Create [./envoy-override.yaml](./envoy-override.yaml)
```yaml
admin:
  address:
    socket_address:
      address: 0.0.0.0
      port_value: 9902
```
3. Apply config
The `-c` or `--config-path` flag tells Envoy the path to its initial configuration.
```bash
docker run --rm -it \
      -p 9902:9902 \
      -p 10000:10000 \
      envoyproxy/envoy:v1.24.0 \
          -c /etc/envoy/envoy.yaml \
          --config-yaml "$(cat envoy-override.yaml)"
```

4. Verify
```bash
curl localhost:9902
```

5. (optional) To quickly validate, just add a new flag `--mode validate`. E.g.
```bash
docker run --rm -it \
      -p 9902:9902 \
      -p 10000:10000 \
      envoyproxy/envoy:v1.24.0 \
          -c /etc/envoy/envoy.yaml \
          --mode validate \
          --config-yaml "$(cat envoy-override.yaml)"
```