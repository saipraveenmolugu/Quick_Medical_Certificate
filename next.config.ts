import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Only enable static export for production builds
  ...(isProd && { output: 'export' }),

  // GitHub Pages - Enable for production deployment
  // Uncomment these lines if your site doesn't load properly on GitHub Pages
  // basePath: isProd ? '/Quick_Medical_Certificate' : '',
  // assetPrefix: isProd ? '/Quick_Medical_Certificate/' : '',

  images: {
    unoptimized: true,
  },

  // This ensures proper routing
  trailingSlash: true,
};

export default nextConfig;
