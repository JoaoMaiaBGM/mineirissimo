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
    }
  }
`;
