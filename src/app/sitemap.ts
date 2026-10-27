import { MetadataRoute } from "next";
import { ARTICLES_DATA } from "@/lib/articlesData";
import { VERIFIED_CERTIFICATES } from "@/lib/certificatesData";
import { CASE_STUDIES_DATA } from "@/lib/caseStudiesData";

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

  const caseStudyEntries: MetadataRoute.Sitemap = CASE_STUDIES_DATA.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
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
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
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
    ...caseStudyEntries,
  ];
}
