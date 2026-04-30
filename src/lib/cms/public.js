import { cmsQuery } from './client';
import { PUBLIC_ASSETS_QUERY } from './queries';

export async function getPublicAssets({ preview = false } = {}) {
  const data = await cmsQuery(PUBLIC_ASSETS_QUERY, { preview });
  const pub = data?.public ?? null;

  const products = (pub?.products ?? [])
    .map((record) => {
      const img = record?.responsiveImage;
      if (!img?.src) return null;

      const caption = typeof img.title === 'string' && img.title.trim() ? img.title.trim() : null;

      return {
        id: record.id,
        title: caption ?? record.title ?? 'Produto',
        url: img.src,
        alt: typeof img.alt === 'string' ? img.alt : '',
      };
    })
    .filter(Boolean);

  return {
    logo: pub?.logo ?? null,
    ogImage: pub?.ogImage ?? null,
    hero: pub?.hero ?? null,
    products,
  };
}
