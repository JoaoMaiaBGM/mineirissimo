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
    return res.status(500).json({ error: 'Failed to load public assets' });
  }
}

