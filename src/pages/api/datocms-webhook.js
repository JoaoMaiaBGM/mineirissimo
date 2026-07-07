import {
  describeWebhookPayload,
  getPathsToRevalidate,
  verifyDatoCmsWebhookSecret,
} from 'lib/cms/revalidation';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!verifyDatoCmsWebhookSecret(req)) {
    console.warn('[api/datocms-webhook] Unauthorized request');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const summary = describeWebhookPayload(req.body);
  console.log('[api/datocms-webhook] Received', summary);

  try {
    const paths = getPathsToRevalidate(req.body);
    console.log('[api/datocms-webhook] Paths to revalidate', paths);

    if (!paths.length) {
      return res.status(200).json({
        revalidated: false,
        message: 'No paths matched this webhook payload',
        ...summary,
      });
    }

    const results = await Promise.allSettled(paths.map((path) => res.revalidate(path)));

    const revalidated = [];
    const failed = [];

    results.forEach((result, index) => {
      const path = paths[index];
      if (result.status === 'fulfilled') {
        revalidated.push(path);
      } else {
        failed.push({ path, reason: result.reason?.message ?? 'Unknown error' });
      }
    });

    if (failed.length) {
      console.error('[api/datocms-webhook] Partial revalidation failure', failed);
    }

    return res.status(failed.length && !revalidated.length ? 500 : 200).json({
      revalidated: revalidated.length > 0,
      paths: revalidated,
      ...summary,
      ...(failed.length ? { failed } : {}),
    });
  } catch (err) {
    console.error('[api/datocms-webhook] Revalidation failed', err);
    return res.status(500).json({ error: 'Revalidation failed' });
  }
}
