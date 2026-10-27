import { MetadataRoute } from "next";
import { ARTICLES_DATA } from "@/lib/articlesData";
import { VERIFIED_CERTIFICATES } from "@/lib/certificatesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bibeklama.vercel.app";

  const articleEntries: MetadataRoute.Sitemap = ARTICLES_DATA.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const certificateEntries: MetadataRoute.Sitemap = VERIFIED_CERTIFICATES.map((cert) => ({
    url: `${baseUrl}/verify/${cert.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
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
    {
      url: `${baseUrl}/verify`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...articleEntries,
    ...certificateEntries,
  ];
}
