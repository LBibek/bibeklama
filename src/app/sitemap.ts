import { MetadataRoute } from "next";
import { ARTICLES_DATA } from "@/lib/articlesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bibeklama.vercel.app";

  const articleEntries: MetadataRoute.Sitemap = ARTICLES_DATA.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    ...articleEntries,
  ];
}
