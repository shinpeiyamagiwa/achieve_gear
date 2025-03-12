import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://achievegear.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://achievegear.com/consultation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // 他のページも必要に応じて追加
  ];
}
