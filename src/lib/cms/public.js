import { cmsQuery } from './client';
import { PUBLIC_ASSETS_QUERY, STORE_FACADE_ASSET_ID } from './queries';

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

  const storeFrontRecord = (pub?.generalImages ?? []).find(
    (record) => record?.id === STORE_FACADE_ASSET_ID
  );
  const storeFrontImage = storeFrontRecord?.responsiveImage;

  return {
    logo: pub?.logo ?? null,
    ogImage: pub?.ogImage ?? null,
    hero: pub?.hero ?? null,
    products,
    storeFront: storeFrontImage?.src
      ? {
          id: storeFrontRecord.id,
          url: storeFrontImage.src,
          alt: typeof storeFrontImage.alt === 'string' ? storeFrontImage.alt : '',
          title: storeFrontImage.title ?? null,
          width: storeFrontImage.width,
          height: storeFrontImage.height,
        }
      : null,
  };
}
