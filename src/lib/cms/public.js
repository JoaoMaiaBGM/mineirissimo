import { cmsQuery } from './client';
import { PUBLIC_ASSETS_QUERY } from './queries';

export async function getPublicAssets({ preview = false } = {}) {
  const data = await cmsQuery(PUBLIC_ASSETS_QUERY, { preview });
  const pub = data?.public ?? null;

  return {
    logo: pub?.logo ?? null,
    ogImage: pub?.ogImage ?? null,
    hero: pub?.hero ?? null,
  };
}
