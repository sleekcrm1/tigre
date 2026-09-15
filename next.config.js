const withNextIntl = require('next-intl/plugin')('./config/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: 'www-static.capoeirabelgique.be' },
      { hostname: 'www.capoeirabelgique.be' },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
