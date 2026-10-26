"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  Calendar,
  Sparkles,
  CheckCircle2,
  Share2,
  Code2,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Copy,
  Check,
  Flame,
  ExternalLink,
  Layers,
  Terminal,
} from "lucide-react";
import { Article } from "@/lib/articlesData";

interface ArticleDetailViewProps {
  article: Article;
  prevArticle?: Article;
  nextArticle?: Article;
  relatedArticles: Article[];
}

export function ArticleDetailView({
  article,
  prevArticle,
  nextArticle,
  relatedArticles,
}: ArticleDetailViewProps) {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedCodeSnippet, setCopiedCodeSnippet] = useState<number | null>(null);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      const canonicalUrl = `${window.location.origin}/articles/${article.slug}`;
      if (navigator.share) {
        navigator
          .share({
            title: article.title,
            text: article.summary,
            url: canonicalUrl,
          })
          .catch(() => {
            navigator.clipboard.writeText(canonicalUrl);
            setCopiedUrl(true);
            setTimeout(() => setCopiedUrl(false), 2500);
          });
      } else {
        navigator.clipboard.writeText(canonicalUrl);
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2500);
      }
    }
  };

  const handleCopyCode = (code: string, index: number) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(code);
      setCopiedCodeSnippet(index);
      setTimeout(() => setCopiedCodeSnippet(null), 2000);
    }
  };

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
        <Link href="/" className="hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <Link href="/articles" className="hover:text-cyan-400 transition-colors">
          Architecture Library
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <span className="text-cyan-400 font-medium truncate max-w-[200px] sm:max-w-md">
          {article.category}
        </span>
      </nav>

      {/* Hero Header Box */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/20">
              {article.badge}
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-mono font-semibold border border-indigo-500/20">
              {article.category}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{article.readingTime}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>{article.date}</span>
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
          {article.title}
        </h1>

        <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal">
          {article.subtitle}
        </p>

        {/* Author Bio & Action Buttons */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-indigo-500 shrink-0">
              <img
                src="/bibek-portrait.png"
                alt="Bibek Lama Tamang"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>{article.author}</span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  Author
                </span>
              </div>
              <div className="text-xs text-neutral-400">{article.authorRole}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleShare}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-200 text-xs font-semibold border border-white/10 transition-colors shadow-sm"
            >
              {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copiedUrl ? "Link Copied!" : "Share Publication"}</span>
            </button>

            <Link
              href="/articles"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/20 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Library</span>
            </Link>
          </div>
        </div>
      </header>

      {/* AI & Gemini Grounding Notice (Optimized for Search Indexing) */}
      <section
        aria-label="AI Search Summary"
        className="p-5 sm:p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 relative overflow-hidden"
      >
        <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-cyan-400 tracking-wider mb-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>Generative AI Grounding & Executive Summary</span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
          {article.summary}
        </p>
      </section>

      {/* Executive Takeaways Box */}
      <section
        aria-label="Architectural Takeaways"
        className="p-6 sm:p-8 rounded-3xl bg-indigo-950/20 border border-indigo-500/30 relative overflow-hidden shadow-xl"
      >
        <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-indigo-400 tracking-wider mb-4">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>Key Architectural Takeaways</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {article.keyTakeaways.map((takeaway, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200 leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{takeaway}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Table of Contents Pill Bar */}
      <nav aria-label="Table of Contents" className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5">
        <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Document Outline</span>
        </div>
        <ol className="flex flex-wrap gap-2 text-xs">
          {article.contentSections.map((sec, idx) => (
            <li key={idx}>
              <a
                href={`#section-${idx + 1}`}
                className="inline-block px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-cyan-300 border border-white/5 transition-colors"
              >
                {sec.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Deep Dive Content Sections */}
      <div className="space-y-12">
        {article.contentSections.map((section, idx) => (
          <section
            key={idx}
            id={`section-${idx + 1}`}
            className="scroll-mt-24 space-y-4 pt-4 border-t border-white/5 first:border-none first:pt-0"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-cyan-400 font-mono text-sm sm:text-base">#{idx + 1}</span>
              <span>{section.heading}</span>
            </h2>

            <div className="text-sm sm:text-base text-neutral-300 leading-relaxed whitespace-pre-line space-y-4">
              {section.body}
            </div>

            {/* Callout Notice */}
            {section.callout && (
              <aside
                className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 my-6 ${
                  section.callout.type === "security"
                    ? "bg-rose-500/10 border-rose-500/30 text-rose-200"
                    : section.callout.type === "warning"
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-200"
                    : "bg-cyan-500/10 border-cyan-500/30 text-cyan-200"
                }`}
              >
                <ShieldAlert
                  className={`w-5 h-5 shrink-0 mt-0.5 ${
                    section.callout.type === "security"
                      ? "text-rose-400"
                      : section.callout.type === "warning"
                      ? "text-amber-400"
                      : "text-cyan-400"
                  }`}
                />
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                    {section.callout.title}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                    {section.callout.text}
                  </p>
                </div>
              </aside>
            )}

            {/* Code Snippet Block */}
            {section.codeSnippet && (
              <div className="my-6 rounded-2xl bg-neutral-950 border border-white/10 overflow-hidden shadow-2xl">
                <div className="px-4 py-2.5 bg-neutral-900 border-b border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Code2 className="w-4 h-4" />
                    <span>Implementation Blueprint</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400">{section.codeLanguage || "typescript"}</span>
                    <button
                      type="button"
                      onClick={() => handleCopyCode(section.codeSnippet!, idx)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                      title="Copy code"
                    >
                      {copiedCodeSnippet === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[11px] text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono text-neutral-200 overflow-x-auto leading-relaxed bg-black/40">
                  <code>{section.codeSnippet}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Author Footer Bio Card */}
      <footer className="pt-8 border-t border-white/10 space-y-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/50 border border-white/10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-indigo-500 shrink-0">
            <img
              src="/bibek-portrait.png"
              alt="Bibek Lama Tamang"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div className="text-lg font-bold text-white">{article.author}</div>
            <div className="text-xs font-mono text-cyan-400">{article.authorRole}</div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Business Architect and engineering leader at Going Genius Group. Specializing in high-concurrency cloud systems, distributed .NET/Next.js architectures, GPS/IoT telematics, and production generative AI workflows.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md transition-all"
              >
                <span>Consult on this Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium border border-white/10 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Publications</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Previous & Next Article Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/articles/${prevArticle.slug}`}
              className="p-5 rounded-2xl bg-neutral-950 border border-white/10 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
            >
              <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1 mb-2">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Publication</span>
              </div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                {prevArticle.title}
              </div>
            </Link>
          ) : (
            <div className="p-5 rounded-2xl bg-neutral-950/30 border border-white/5 text-xs text-neutral-600">
              Beginning of Engineering Library
            </div>
          )}

          {nextArticle ? (
            <Link
              href={`/articles/${nextArticle.slug}`}
              className="p-5 rounded-2xl bg-neutral-950 border border-white/10 hover:border-cyan-500/40 transition-all group flex flex-col justify-between text-right"
            >
              <div className="text-[11px] font-mono text-neutral-400 flex items-center justify-end gap-1 mb-2">
                <span>Next Publication</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                {nextArticle.title}
              </div>
            </Link>
          ) : (
            <div className="p-5 rounded-2xl bg-neutral-950/30 border border-white/5 text-xs text-neutral-600 text-right">
              End of Engineering Library
            </div>
          )}
        </div>

        {/* Related Publications Grid */}
        {relatedArticles.length > 0 && (
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-400" />
                <span>Related Architecture Publications</span>
              </h3>
              <Link href="/articles" className="text-xs text-cyan-400 hover:underline">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/articles/${rel.slug}`}
                  className="p-5 rounded-2xl bg-neutral-950 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/10">
                      {rel.badge}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/5 text-[11px] text-cyan-400 font-semibold flex items-center justify-between">
                    <span>Read Blueprint</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </footer>
    </article>
  );
}
