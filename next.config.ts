import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // GitHub Pages configuration
  // Uncomment if your site doesn't load assets properly
  // basePath: '/Quick_Medical_Certificate',
  // assetPrefix: '/Quick_Medical_Certificate/',

  images: {
    unoptimized: true,
  },

  // This ensures proper routing
  trailingSlash: true,
};

export default nextConfig;



