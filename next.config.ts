import type { NextConfig } from "next";

// Configure for static export + GitHub Pages compatibility
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const computedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions && repoName ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  // Export a fully static site (required for GitHub Pages)
  output: "export",
  // Disable server-side image optimization for static hosting
  images: { unoptimized: true },
  // Use basePath when deployed under a project subpath
  basePath: computedBasePath || undefined,
  // Helps static hosts resolve routes like /about -> /about/index.html
  trailingSlash: true,
};

export default nextConfig;
