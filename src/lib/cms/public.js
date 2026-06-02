import { cmsQuery } from './client';
import { findProductForCard, getAllProducts, mergeCardWithProductDetails } from './product';
import { PUBLIC_ASSETS_QUERY, STORE_FACADE_ASSET_ID } from './queries';

export async function getPublicAssets({ preview = false } = {}) {
  const [data, allProducts] = await Promise.all([
    cmsQuery(PUBLIC_ASSETS_QUERY, { preview }),
    getAllProducts({ preview }),
  ]);
  const pub = data?.public ?? null;

  const products = (pub?.products ?? [])
    .map((record) => {
      const img = record?.responsiveImage;
      if (!img?.src) return null;

      const caption = typeof img.title === 'string' && img.title.trim() ? img.title.trim() : null;

      const cardProduct = {
        id: record.id,
        title: caption ?? record.title ?? 'Produto',
        url: img.src,
        alt: typeof img.alt === 'string' ? img.alt : '',
      };

      const productRecord = findProductForCard(cardProduct, allProducts);
      return productRecord ? mergeCardWithProductDetails(cardProduct, productRecord) : cardProduct;
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
    contactHero: pub?.contactHero ?? null,
  };
}
