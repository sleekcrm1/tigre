const withNextIntl = require('next-intl/plugin')('./config/i18n.ts');

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      { hostname: 'www-static.capoeirabelgique.be' },
      { hostname: 'www.capoeirabelgique.be' },
    ],
  },
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // ... your other config parameters
};
module.exports = nextConfig;
