

refs https://github.com/cloudflare/kv-asset-handler/pull/188

1. `npm install`
2. replace account ID
3. `wrangler dev`
4. Open `http://127.0.0.1:8787/`
5. Observe `__STATIC_CONTENT is not defined` error
6. Observe that `env` contains an empty `__STATIC_CONTENT` object

``` json
{
  "__STATIC_CONTENT": {}
}
```