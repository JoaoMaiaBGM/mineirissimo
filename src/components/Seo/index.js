import Head from "next/head";

import {
  SITE_NAME,
  absoluteAssetUrl,
  absolutePageUrl,
  getDefaultOgImage,
} from "lib/site";

export function Seo({
  title,
  description,
  canonicalPath,
  imagePath = getDefaultOgImage(),
}) {
  const pageUrl = absolutePageUrl(canonicalPath);
  const imageUrl = /^https?:\/\//i.test(imagePath)
    ? imagePath
    : absoluteAssetUrl(imagePath);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
