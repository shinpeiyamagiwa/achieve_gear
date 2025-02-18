/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "", // カスタムドメインを使用するので空にする
  assetPrefix: "./", // 相対パスに変更
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // HTML出力時にトレイリングスラッシュを追加
};

module.exports = nextConfig;
