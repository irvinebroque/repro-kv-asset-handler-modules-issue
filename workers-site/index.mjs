import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

export default {
  async fetch(request, env) {
    const event = {
      request
    };
    console.log(JSON.stringify(env))
    try {
      return await getAssetFromKV(event);
    } catch (e) {
      return new Response(e.message || e.toString(), { status: 500 });
    }
  }
}
