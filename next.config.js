/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/achieve_gear',
  assetPrefix: '/achieve_gear',
}

module.exports = nextConfig