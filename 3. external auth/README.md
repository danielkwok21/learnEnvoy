# 3. External Auth

## Guides
https://www.envoyproxy.io/docs/envoy/v1.24.0/configuration/http/http_filters/ext_authz_filter#configuration-examples

## Steps
1. Start containers (envoy, authorization service, and 2 dummy services)
```bash
docker-compose up
```

1. Visit [./api.rest](./api.rest) to play with requests