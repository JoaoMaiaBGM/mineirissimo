export const ASSET_FIELDS = `
  url
  alt
  title
`;

export const PRODUCT_RESPONSIVE_IMAGE_FIELDS = `
  src
  alt
  title
`;

export const GENERAL_IMAGE_FIELDS = `
  id
  responsiveImage {
    src
    alt
    title
    width
    height
  }
`;

export const STORE_FACADE_ASSET_ID = 'GvoMGbL4SQGBQ6RmT-zLBQ';

export const PUBLIC_ASSETS_QUERY = `
  query PublicAssets {
    public {
      logo { ${ASSET_FIELDS} }
      ogImage { ${ASSET_FIELDS} }
      hero { ${ASSET_FIELDS} }
      products {
        id
        title
        responsiveImage {
          ${PRODUCT_RESPONSIVE_IMAGE_FIELDS}
        }
      }
      generalImages {
        ${GENERAL_IMAGE_FIELDS}
      }
    }
  }
`;
