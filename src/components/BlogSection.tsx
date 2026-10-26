"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  ShieldAlert,
  ArrowRight,
  Code2,
  CheckCircle2,
  Clock,
  Calendar,
  Sparkles,
  Share2,
  ChevronRight,
  Flame,
  ExternalLink,
} from "lucide-react";
import { ARTICLES_DATA } from "@/lib/articlesData";

export function BlogSection() {
  const [expandedArticle, setExpandedArticle] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const featuredArticle = ARTICLES_DATA[0];
  const secondaryArticles = ARTICLES_DATA.slice(1);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(`${window.location.origin}/articles/${featuredArticle.slug}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Insights & Systems Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Architectural Insights & Writings
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Deep-dives into modern web engineering, Next.js zero-trust security, enterprise backends, applied AI agents, and IoT telemetry authored by Bibek Lama.
          </p>

          <div className="mt-6 flex justify-center">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all hover:scale-105"
            >
              <span>Explore Full Dedicated Articles Library</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Featured Deep Dive Article */}
        <div className="p-6 sm:p-10 rounded-3xl bg-neutral-950 border border-white/10 relative overflow-hidden shadow-2xl mb-12">
          {/* Subtle Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 blur-[120px] pointer-events-none" />

          {/* Article Header Meta */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-mono font-semibold border border-indigo-500/20">
                {featuredArticle.badge}
              </span>
              <span className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{featuredArticle.readingTime}</span>
              </span>
              <span className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>{featuredArticle.date}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href={`/articles/${featuredArticle.slug}`}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/30 transition-colors"
              >
                <span>Read in Full Screen Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium border border-white/10 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? "Link Copied!" : "Share"}</span>
              </button>
            </div>
          </div>

          {/* Article Title & Author */}
          <div className="relative z-10 mt-6 max-w-4xl">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {featuredArticle.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
              {featuredArticle.subtitle}
            </p>

            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-indigo-500">
                <img
                  src="/bibek-portrait.png"
                  alt="Bibek Lama"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{featuredArticle.author}</div>
                <div className="text-xs text-neutral-400">{featuredArticle.authorRole}</div>
              </div>
            </div>
          </div>

          {/* Key Takeaways Card */}
          <div className="relative z-10 p-5 sm:p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-indigo-400 tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Architectural Takeaways & Executive Summary</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
              {featuredArticle.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {featuredArticle.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Main Body (Expanded / Collapsible view) */}
          <div className="relative z-10 space-y-8">
            {featuredArticle.contentSections
              .slice(0, expandedArticle ? undefined : 2)
              .map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="text-indigo-400 font-mono text-sm">#</span>
                    <span>{section.heading}</span>
                  </h4>
                  <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-line">
                    {section.body}
                  </div>

                  {section.callout && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 my-4">
                      <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-amber-300 mb-1">
                          {section.callout.title}
                        </div>
                        <div className="text-xs text-neutral-300">
                          {section.callout.text}
                        </div>
                      </div>
                    </div>
                  )}

                  {section.codeSnippet && (
                    <div className="my-4 rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden shadow-xl">
                      <div className="px-4 py-2 bg-neutral-950 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                        <span className="flex items-center gap-2 text-cyan-400">
                          <Code2 className="w-3.5 h-3.5" />
                          <span>actions/update-profile.ts (Zero-Trust Pattern)</span>
                        </span>
                        <span>{section.codeLanguage}</span>
                      </div>
                      <pre className="p-4 text-xs font-mono text-neutral-200 overflow-x-auto leading-relaxed">
                        <code>{section.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}

            {/* Read More / Collapse Toggle Button */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setExpandedArticle(!expandedArticle)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all"
              >
                <span>{expandedArticle ? "Collapse Article View" : "Read Full In-Line Blueprint (7 min)"}</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedArticle ? "rotate-90" : ""
                  }`}
                />
              </button>

              <Link
                href="/articles"
                className="text-xs text-neutral-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Browse All {ARTICLES_DATA.length} Architecture Publications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Technical Articles Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-400" />
              <span>More Architecture & Systems Publications</span>
            </h3>
            <Link
              href="/articles"
              className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>View Full Library ({ARTICLES_DATA.length})</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryArticles.map((art) => (
              <div
                key={art.id}
                className="p-6 rounded-3xl bg-neutral-950 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                      {art.badge}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">{art.readingTime}</span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                    {art.title}
                  </h4>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-mono">By Bibek Lama</span>
                  <Link
                    href={`/articles/${art.slug}`}
                    className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>Read Blueprint</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
