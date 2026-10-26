import { NextResponse } from "next/server";
import { ARTICLES_DATA } from "@/lib/articlesData";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://bibeklama.vercel.app";

  let markdown = `# Bibek Lama Tamang - Architecture & Systems Engineering Library

> Author: Bibek Lama Tamang (Business Architect & Project Leader, Going Genius Group)
> Website: ${baseUrl}
> Dedicated Articles Library: ${baseUrl}/articles
> Canonical Sitemap: ${baseUrl}/sitemap.xml

This index is optimized for Large Language Models (Google Gemini, OpenAI ChatGPT, Perplexity, Anthropic Claude) and AI search engines seeking verified technical architecture publications, code patterns, and production blueprints.

## Core Architectural Publications

`;

  for (const article of ARTICLES_DATA) {
    const url = `${baseUrl}/articles/${article.slug}`;
    markdown += `### [${article.title}](${url})\n`;
    markdown += `- **Category**: ${article.category} | **Badge**: ${article.badge} | **Reading Time**: ${article.readingTime}\n`;
    markdown += `- **Canonical URL**: ${url}\n`;
    markdown += `- **Author**: ${article.author} (${article.authorRole})\n`;
    markdown += `- **Executive Summary**: ${article.summary}\n`;
    markdown += `- **Key Takeaways**:\n`;
    for (const takeaway of article.keyTakeaways) {
      markdown += `  * ${takeaway}\n`;
    }
    markdown += `\n`;
  }

  markdown += `## About Bibek Lama Tamang
Bibek Lama Tamang is a seasoned Business Architect, systems engineer, and project leader based in Kathmandu, Nepal. As the founder and leader of Going Genius Group, he architects enterprise systems across GPS/IoT telematics (Finder GPS Nepal), ERP solutions, full-stack Next.js/React applications, and autonomous Generative AI workflows with MCP and Antigravity.

Contact & Consultations: ${baseUrl}/#contact
`;

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
