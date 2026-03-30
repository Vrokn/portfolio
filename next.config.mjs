const isGitHubPagesBuild = process.env.GITHUB_PAGES === 'true';
const repositoryName = 'portfolio';
const basePath = isGitHubPagesBuild ? `/${repositoryName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
