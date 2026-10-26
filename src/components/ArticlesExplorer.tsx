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
  ChevronRight,
  ArrowRight,
  Search,
  Filter,
  Check,
  Flame,
} from "lucide-react";
import { ARTICLES_DATA, Article } from "@/lib/articlesData";

export function ArticlesExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticleId, setActiveArticleId] = useState<string>(ARTICLES_DATA[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    "All",
    "Developer Cheatsheets",
    "Agentic AI & DevOps",
    "Systems Engineering",
    "Cloud & Modernization",
    "Full-Stack Security",
    "Backend Architecture",
    "Generative AI Systems",
    "Edge IoT & Systems",
  ];

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeArticle = ARTICLES_DATA.find((a) => a.id === activeArticleId) || ARTICLES_DATA[0];

  const handleShare = (article: Article) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/articles#${article.slug}`;
      navigator.clipboard.writeText(url);
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="space-y-12">
      {/* Search & Category Filter Controls */}
      <div className="p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-neutral-950 shadow-md shadow-cyan-500/20"
                  : "bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500 transition-all"
          />
        </div>
      </div>

      {/* Reader Layout: Left Article Catalog List & Right Reader Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: List of Articles */}
        <div className="lg:col-span-4 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center justify-between px-1">
            <span>Publications ({filteredArticles.length})</span>
            <span className="text-[10px] text-cyan-400">Click to load</span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-neutral-950 border border-white/5 text-xs text-neutral-400">
              No articles match your search criteria.
            </div>
          ) : (
            filteredArticles.map((article) => {
              const isActive = article.id === activeArticle.id;
              return (
                <div
                  key={article.id}
                  onClick={() => setActiveArticleId(article.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                    isActive
                      ? "bg-neutral-900 border-cyan-500/50 shadow-xl shadow-cyan-500/5"
                      : "bg-neutral-950/70 border-white/5 hover:border-white/20 hover:bg-neutral-900/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-cyan-300 border border-white/10">
                      {article.badge}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {article.readingTime}
                    </span>
                  </div>

                  <h3
                    className={`text-sm font-bold leading-snug mb-2 transition-colors ${
                      isActive ? "text-cyan-300" : "text-white hover:text-cyan-200"
                    }`}
                  >
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                    {article.summary}
                  </p>

                  <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/5">
                    <span className="text-neutral-500 font-mono">{article.date}</span>
                    <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold text-[11px]">
                      <span>Read Blueprint</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Full Interactive Article Reader Canvas */}
        <div
          id={activeArticle.slug}
          className="lg:col-span-8 p-6 sm:p-10 rounded-3xl bg-neutral-950 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] pointer-events-none" />

          {/* Meta Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-mono font-semibold border border-indigo-500/20">
                {activeArticle.badge}
              </span>
              <span className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{activeArticle.readingTime}</span>
              </span>
              <span className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>{activeArticle.date}</span>
              </span>
            </div>

            <button
              onClick={() => handleShare(activeArticle)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium border border-white/10 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedId === activeArticle.id ? "Link Copied!" : "Share Blueprint"}</span>
            </button>
          </div>

          {/* Title & Author */}
          <div className="mt-6 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
              {activeArticle.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              {activeArticle.subtitle}
            </p>

            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-indigo-500 shrink-0">
                <img
                  src="/bibek-portrait.png"
                  alt="Bibek Lama"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{activeArticle.author}</div>
                <div className="text-xs text-neutral-400">{activeArticle.authorRole}</div>
              </div>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-indigo-400 tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Architectural Takeaways & Executive Summary</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
              {activeArticle.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {activeArticle.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Sections */}
          <div className="space-y-8">
            {activeArticle.contentSections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-indigo-400 font-mono text-sm">#</span>
                  <span>{section.heading}</span>
                </h3>
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
                        <span>Source Blueprint Implementation</span>
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
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md transition-all"
            >
              <span>Consult with Bibek on this Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/#workshops"
              className="text-xs text-neutral-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Hands-On Student Workshops</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
