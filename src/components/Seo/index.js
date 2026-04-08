import Head from "next/head";

import {
  SITE_NAME,
  absoluteAssetUrl,
  absolutePageUrl,
  resolveOgImageUrl,
} from "lib/site";

/**
 * @param {string} [imagePath] — URL absoluta ou path (ex. `/og-image.png`). Só use para override explícito.
 * @param {{ url?: string } | null} [ogImageFromCms] — File field do Dato (`public.ogImage`, etc.).
 */
export function Seo({
  title,
  description,
  canonicalPath,
  imagePath,
  ogImageFromCms,
}) {
  const pageUrl = absolutePageUrl(canonicalPath);
  const ogPath = imagePath ?? resolveOgImageUrl(ogImageFromCms);
  const imageUrl = /^https?:\/\//i.test(ogPath)
    ? ogPath
    : absoluteAssetUrl(ogPath);

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
