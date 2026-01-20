import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.semrush.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
    qualities: [75, 85, 95],
  },
  experimental: {
    optimizeCss: {
      "inlineFonts": true,
      "pruneSource": true,
    }, // Requires 'critters' package
    optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
  },
  reactStrictMode: true,
};

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

// Force rebuild
export default withNextIntl(nextConfig);
