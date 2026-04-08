export const ASSET_FIELDS = `
  url
  alt
`;

export const PUBLIC_ASSETS_QUERY = `
  query PublicAssets {
    public {
      logo { ${ASSET_FIELDS} }
      ogImage { ${ASSET_FIELDS} }
      heroImage { ${ASSET_FIELDS} }
    }
  }
`;
