import { executeQuery } from '@datocms/cda-client';
import { assertServerOnly, getDatoCdnConfig } from './env';

/**
 * Executes GraphQL queries against DatoCMS Content Delivery API.
 * Keep this server-only so tokens never reach the browser bundle.
 */
export async function cmsQuery(query, { variables, preview = false } = {}) {
  assertServerOnly();
  const { token, environment } = getDatoCdnConfig({ preview });

  try {
    return await executeQuery(query, {
      token,
      environment,
      includeDrafts: preview,
      variables,
    });
  } catch (err) {
    const message = err?.message || (typeof err === 'string' ? err : 'Unknown DatoCMS error');
    const wrapped = new Error(`[DatoCMS] ${message}`);
    wrapped.cause = err;
    throw wrapped;
  }
}
