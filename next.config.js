/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "", // カスタムドメインを使用するので空に
  assetPrefix: "", // カスタムドメインを使用するので空に
};

module.exports = nextConfig;
