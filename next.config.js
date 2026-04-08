/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: { optimizeCss: true },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
        pathname: `/${process.env.NEXT_PUBLIC_DATOCMS_PROJECT_ID}/**`,
      },
    ],
  },
};

module.exports = nextConfig;
