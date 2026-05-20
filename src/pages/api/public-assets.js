import { getPublicAssets } from 'lib/cms';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const assets = await getPublicAssets();
    return res.status(200).json(assets);
  } catch (err) {
    // Surface the underlying error in Vercel logs to make Preview debugging possible.
    console.error('[api/public-assets] Failed to load public assets', err);

    const message =
      process.env.NODE_ENV === 'production'
        ? 'Failed to load public assets'
        : err?.message || 'Failed to load public assets';

    return res.status(500).json({ error: message });
  }
}

