export const SITE_NAME = "Mineiríssimo";

/** Fallback when `NEXT_PUBLIC_OG_IMAGE_URL` (ex.: ImageKit) não está definida. */
export const DEFAULT_OG_IMAGE_PATH = "/og-image.png";

/** URL completa da og-image (ImageKit/CDN) ou caminho local; usado em `Seo`. */
export function getDefaultOgImage() {
  const fromCms = process.env.NEXT_PUBLIC_OG_IMAGE_URL?.trim();
  if (fromCms) return fromCms;
  return DEFAULT_OG_IMAGE_PATH;
}

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");

  const productionHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL?.trim();

  if (process.env.VERCEL_ENV === "production" && productionHost) {
    const host = productionHost.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

/** Path for canonical URLs with trailing slash (see `trailingSlash` in next.config). */
export function siteCanonicalPath(route) {
  if (!route || route === "/") return "/";
  const withLeading = route.startsWith("/") ? route : `/${route}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

export function absolutePageUrl(route) {
  return `${getSiteUrl()}${siteCanonicalPath(route)}`;
}

export function absoluteAssetUrl(assetPath) {
  const p = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${getSiteUrl()}${p}`;
}
