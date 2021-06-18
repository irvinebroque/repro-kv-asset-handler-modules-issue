import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

export default {
  async fetch(request) {
    const event = {
      request
    };
    try {
      return await getAssetFromKV(event);
    } catch (e) {
      return new Response(e.message || e.toString(), { status: 500 });
    }
  }
}
