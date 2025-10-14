import type { NextConfig } from "next";

// Configure for static export + GitHub Pages compatibility
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const derived = repoName && !repoName.endsWith(".github.io") ? `/${repoName}` : "";
const computedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? derived : "");

const nextConfig: NextConfig = {
  // Export a fully static site (required for GitHub Pages)
  output: "export",
  // Disable server-side image optimization for static hosting
  images: { unoptimized: true },
  // Use basePath when deployed under a project subpath
  basePath: computedBasePath || undefined,
  // Ensure static assets (including public/ images) use the same prefix
  assetPrefix: computedBasePath || undefined,
  // Helps static hosts resolve routes like /about -> /about/index.html
  trailingSlash: true,
  // Expose base path for client code (e.g., building image src)
  env: {
    NEXT_PUBLIC_BASE_PATH: computedBasePath || "",
  },
};

export default nextConfig;
