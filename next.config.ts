import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

  // GitHub Pages - IMPORTANT: Uncomment these after first successful build
  // basePath: '/Quick_Medical_Certificate',
  // assetPrefix: '/Quick_Medical_Certificate/',

  images: {
    unoptimized: true,
  },

  // This ensures proper routing for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
