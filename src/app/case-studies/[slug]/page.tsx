import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GsapAnimations } from "@/components/GsapAnimations";
import { CaseStudyDetailView } from "@/components/CaseStudyDetailView";
import {
  CASE_STUDIES_DATA,
  getCaseStudyBySlug,
} from "@/lib/caseStudiesData";
import { ArrowLeft, Workflow, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES_DATA.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Bibek Lama Tamang",
      description: "The requested architecture case study could not be found.",
    };
  }

  const pageUrl = `https://bibeklama.vercel.app/case-studies/${study.slug}`;

  return {
    title: `${study.title} | Architecture Case Study by Bibek Lama`,
    description: study.subtitle,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${study.title} - Architecture Case Study`,
      description: study.subtitle,
      url: pageUrl,
      siteName: "Bibek Lama Tamang - Architecture Practice",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.subtitle,
      creator: "@bibeklama",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  // Schema: TechArticle
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `https://bibeklama.vercel.app/case-studies/${study.slug}#article`,
    headline: study.title,
    description: study.subtitle,
    author: {
      "@type": "Person",
      name: "Bibek Lama Tamang",
      url: "https://bibeklama.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Going Genius Group",
      url: "https://goinggenius.com.np",
    },
    about: {
      "@type": "SoftwareApplication",
      name: study.title,
      applicationCategory: study.industry,
    },
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <GsapAnimations />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Top Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Case Studies</span>
            </Link>

            <span className="text-xs font-mono text-neutral-500">
              SYSTEM ARCHITECTURE SPECIFICATION
            </span>
          </div>

          {/* Deep-Dive Case Study Component */}
          <CaseStudyDetailView caseStudy={study} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
