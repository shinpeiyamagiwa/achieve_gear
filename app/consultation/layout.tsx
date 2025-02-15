import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "無料相談のお申し込み - AchieveGear",
  description: "AchieveGearの無料相談をお申し込みいただけます。専属コンサルタントがあなたの目標達成をサポートします。",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-15%2014.38.23.jpeg-jj0J9UW8ivclW1C8NeKLy0fICClEKm.png",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-15%2014.38.23.jpeg-jj0J9UW8ivclW1C8NeKLy0fICClEKm.png",
  },
  openGraph: {
    title: "無料相談のお申し込み - AchieveGear",
    description:
      "AchieveGearの無料相談をお申し込みいただけます。専属コンサルタントがあなたの目標達成をサポートします。",
  },
}

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

