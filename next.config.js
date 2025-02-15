/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/リポジトリ名',
  assetPrefix: '/リポジトリ名',
}

module.exports = nextConfig 