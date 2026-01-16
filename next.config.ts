import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.semrush.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
    qualities: [75, 85, 95],
  },
  experimental: {
    optimizeCss: true, // Requires 'critters' package
  },
};

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

// Force rebuild
export default withNextIntl(nextConfig);
