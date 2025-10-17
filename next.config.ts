import type { NextConfig } from "next";

const repoName = "upen-yadav";
const basePath = `/${repoName}`;

const nextConfig: NextConfig = {
  // Export a fully static site (required for GitHub Pages)
  output: "export",
  // Disable server-side image optimization for static hosting
  images: { unoptimized: true },
  // Use basePath when deployed under a project subpath
  basePath: basePath,
  // Ensure static assets (including public/ images) use the same prefix
  assetPrefix: basePath,
  // Helps static hosts resolve routes like /about -> /about/index.html
  trailingSlash: true,
};

export default nextConfig;
