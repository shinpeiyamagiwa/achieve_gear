/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的ファイルの出力を有効化
  assetPrefix: "/", // アセットのパスを絶対パスに
  basePath: "", // ベースパスの設定
  images: {
    unoptimized: true, // GitHub Pagesでの画像最適化を無効化
  },
};

module.exports = nextConfig;
