"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  ArrowUpRight,
  Flame,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { ARTICLES_DATA, Article } from "@/lib/articlesData";

export function BlogSection() {
  // Use the newest articles for maximum freshness
  const featuredArticle: Article =
    ARTICLES_DATA.find((a) => a.id.includes("interview")) || ARTICLES_DATA[0];

  const quickArticles: Article[] = ARTICLES_DATA.filter(
    (a) => a.id !== featuredArticle.id
  ).slice(0, 4);

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-neutral-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Chapter IV • Architectural Briefings & Publications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Architectural Insights & Briefings
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl">
              Curated blueprints on Next.js zero-trust security, distributed .NET clean architecture, AI agent workflows, and frontend performance.
            </p>
          </div>

          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-cyan-500/15 text-neutral-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 text-xs font-semibold transition-all group shrink-0"
          >
            <span>Explore All {ARTICLES_DATA.length} Publications</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Compact Split Showcase: Left Spotlight + Right Quick-Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          {/* Left Column: Spotlight Featured Article */}
          <div className="lg:col-span-5 rounded-3xl bg-neutral-950 p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden shadow-2xl flex flex-col justify-between group">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none group-hover:bg-cyan-500/20 transition-all" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-[10px] font-mono font-semibold border border-cyan-500/30">
                  <Flame className="w-3 h-3 text-cyan-400" />
                  <span>Featured Blueprint</span>
                </span>
                <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{featuredArticle.readingTime}</span>
                </span>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 block mb-1.5">
                {featuredArticle.category}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-cyan-200 transition-colors">
                {featuredArticle.title}
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed mb-5 line-clamp-3">
                {featuredArticle.summary}
              </p>

              {/* Quick Key Takeaways Chips */}
              <div className="space-y-2 mb-6">
                {featuredArticle.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-neutral-400 bg-white/[0.02] p-2 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-500">{featuredArticle.date}</span>
              <Link
                href={`/articles/${featuredArticle.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all active:scale-95"
              >
                <span>Read Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Trending Architecture Quick Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3">
            {quickArticles.map((art) => (
              <Link
                key={art.id}
                href={`/articles/${art.slug}`}
                className="p-4 sm:p-5 rounded-2xl bg-neutral-950/80 border border-white/5 hover:border-cyan-500/30 hover:bg-neutral-900/60 transition-all duration-200 group flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-cyan-300 border border-white/5">
                      {art.badge}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {art.readingTime}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug truncate">
                    {art.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-1 mt-1 font-normal">
                    {art.subtitle || art.summary}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-neutral-400 group-hover:text-cyan-400 shrink-0 self-end sm:self-center transition-colors">
                  <span>Read</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Compact Footer Banner with Link to Full Library */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900/90 to-neutral-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Looking for More Deep-Dive Technical Insights?</div>
              <div className="text-[11px] text-neutral-400">Read in-depth guides on Next.js, .NET Core, TypeScript, Tailwind, Zod, and Figma design systems.</div>
            </div>
          </div>

          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all shrink-0 active:scale-95"
          >
            <span>Open Dedicated Library</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
