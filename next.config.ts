import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // GitHub Pages configuration
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  images: {
    unoptimized: true,
  },

  // This ensures proper routing
  trailingSlash: true,
};

export default nextConfig;



