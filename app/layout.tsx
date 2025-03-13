import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "継続、目標達成ができないあなたへ、目標達成支援サービス",
  description:
    "目標達成、継続できないあなたへ！専属サポートメンバーがあなたの目標達成をサポートします。パーソナライズされた戦略と進捗管理で、夢を現実に変えます。目標設定から習慣化まで、確実な達成へと導きます。",
  keywords:
    "目標達成, パーソナルコンサルティング, 習慣化, モチベーション管理, 進捗管理, 目標設定、継続",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-15%2014.38.23.jpeg-jj0J9UW8ivclW1C8NeKLy0fICClEKm.png",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-15%2014.38.23.jpeg-jj0J9UW8ivclW1C8NeKLy0fICClEKm.png",
  },
  openGraph: {
    title: "AchieveGear - 専属サポートメンバーによる目標達成支援サービス",
    description:
      "専属サポートメンバーがあなたの目標達成をサポート。あなたに合った方法と進捗管理で、夢を現実に変えます。",
    images: [
      {
        url: "/top_image.png",
        width: 1200,
        height: 630,
        alt: "継続、目標達成ができないあなたへ、目標達成支援サービス",
      },
    ],
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-15%2014.38.23.jpeg-jj0J9UW8ivclW1C8NeKLy0fICClEKm.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-15%2014.38.23.jpeg-jj0J9UW8ivclW1C8NeKLy0fICClEKm.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-15%2014.38.23.jpeg-jj0J9UW8ivclW1C8NeKLy0fICClEKm.png"
        />
        <meta name="theme-color" content="#dd6b20" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
