import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GsapAnimations } from "@/components/GsapAnimations";
import { ArticleDetailView } from "@/components/ArticleDetailView";
import { ContactSection } from "@/components/ContactSection";
import {
  ARTICLES_DATA,
  getArticleBySlug,
  getAdjacentArticles,
  getRelatedArticles,
} from "@/lib/articlesData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Bibek Lama Tamang",
      description: "The requested technical publication could not be found.",
    };
  }

  const canonicalUrl = `https://bibeklama.vercel.app/articles/${article.slug}`;

  return {
    title: `${article.title} | Bibek Lama Tamang`,
    description: article.summary,
    keywords: [
      article.category,
      article.badge,
      "Bibek Lama Tamang",
      "Going Genius",
      "Systems Architecture",
      "Next.js",
      "Software Engineering",
    ],
    authors: [{ name: article.author }],
    creator: article.author,
    publisher: "Going Genius Group",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.subtitle,
      url: canonicalUrl,
      siteName: "Bibek Lama Tamang - Architecture & Systems Publications",
      locale: "en_US",
      type: "article",
      publishedTime: "2026-10-01T00:00:00.000Z",
      modifiedTime: new Date().toISOString(),
      authors: [article.author],
      section: article.category,
      tags: [article.category, article.badge, "Architecture", "Engineering"],
      images: [
        {
          url: `${canonicalUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${article.title} - Architectural Blueprint by ${article.author}`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      creator: "@bibeklama",
      images: [`${canonicalUrl}/opengraph-image`],
    },
    other: {
      "article:published_time": "2026-10-01T00:00:00.000Z",
      "article:author": article.author,
      "article:section": article.category,
      "article:tag": article.badge,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { prev, next } = getAdjacentArticles(article.slug);
  const related = getRelatedArticles(article.slug, 3);
  const pageUrl = `https://bibeklama.vercel.app/articles/${article.slug}`;

  // Structured Data: Schema.org TechArticle for Google Search & Google Gemini AI Grounding
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    alternativeHeadline: article.subtitle,
    description: article.summary,
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
      url: "https://bibeklama.vercel.app",
      sameAs: [
        "https://linkedin.com/in/bibek-lama-tamang",
        "https://github.com/LBibek",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Going Genius Group",
      url: "https://bibeklama.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://bibeklama.vercel.app/logo.png",
      },
    },
    datePublished: "2026-10-01T00:00:00+05:45",
    dateModified: new Date().toISOString(),
    articleSection: article.category,
    keywords: `${article.category}, ${article.badge}, Bibek Lama Tamang, Next.js, Systems Architecture`,
    abstract: article.summary,
    proficiencyLevel: "Expert",
    inLanguage: "en-US",
  };

  // Structured Data: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bibeklama.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Architecture Library",
        item: "https://bibeklama.vercel.app/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
      {/* Inject JSON-LD Structured Data for Google Gemini & Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <GsapAnimations />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <ArticleDetailView
          article={article}
          prevArticle={prev}
          nextArticle={next}
          relatedArticles={related}
        />
      </main>

      {/* Direct Contact & Consulting Area */}
      <ContactSection />

      <Footer />
    </div>
  );
}
