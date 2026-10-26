"use client";

import React, { useState } from "react";
import {
  BookOpen,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Server,
  Zap,
  ArrowRight,
  Code2,
  CheckCircle2,
  Clock,
  Calendar,
  Sparkles,
  Share2,
  ExternalLink,
  ChevronRight,
  Flame,
  Terminal,
} from "lucide-react";

interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  category: string;
  readingTime: string;
  date: string;
  author: string;
  authorRole: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
    codeSnippet?: string;
    codeLanguage?: string;
    callout?: {
      type: "warning" | "tip" | "security";
      title: string;
      text: string;
    };
  }[];
}

const FEATURED_ARTICLE: Article = {
  id: "nextjs-server-actions-security",
  slug: "nextjs-server-actions-security-architecture",
  title: "The Critical Importance of Next.js: Mastering Server Actions with Zero-Trust Security",
  subtitle: "Why Next.js has become the gold standard for enterprise web engineering, and how to safeguard Server Actions against CSRF, unauthorized mutation, and data leakage.",
  badge: "Engineering & Architecture",
  category: "Full-Stack Security",
  readingTime: "7 min read",
  date: "October 2026",
  author: "Bibek Lama Tamang",
  authorRole: "Business Architect & Project Leader, Going Genius",
  summary:
    "Next.js has transformed web development from fragmented single-page apps into unified, high-performance edge architectures. However, the introduction of React Server Actions introduces a paradigm shift: every exported server action function becomes a public POST HTTP endpoint. Understanding this mental model is essential for architecting enterprise-grade applications that are impervious to unauthorized execution.",
  keyTakeaways: [
    "Next.js App Router unifies data fetching, static rendering, and streaming into a single compiler pipeline.",
    "Server Actions ('use server') are public HTTP endpoints callable by anyone who knows the action ID, not private internal functions.",
    "Zero-trust authentication, input validation (Zod), and role authorization must execute inside every Server Action.",
    "Secure closures with React taint APIs to prevent internal connection strings and secrets from leaking to client bundles.",
    "Leverage optimistic updates and Server Action form states for seamless UX without compromising backend integrity.",
  ],
  contentSections: [
    {
      heading: "1. Why Next.js is the Foundation of Modern Enterprise Web",
      body: `Over the past five years, the industry has transitioned away from the brittle 'SPA + detached REST API' pattern toward unified full-stack meta-frameworks. Next.js, powered by React Server Components (RSC) and Turbopack, is the frontrunner in this revolution.

By executing component logic on the server before streaming HTML to the browser, Next.js slashes client-side JavaScript payloads by up to 70%, guarantees instant first-contentful paint (FCP), and elevates organic SEO. For engineering teams at Going Genius and beyond, it provides a cohesive language across serverless edge lambdas, incremental static regeneration (ISR), and real-time user interfaces.`,
    },
    {
      heading: "2. The Mental Model: Server Actions Are Public Endpoints",
      body: `One of the most transformative features of Next.js is Server Actions—functions defined with the 'use server' directive that allow React components to trigger asynchronous server code without manually creating API route handlers or managing fetch request boilerplate.

However, many engineers fall into a dangerous cognitive trap: assuming that because a function lives in the same codebase as a React component, it is 'internal' or 'protected'. 

In reality, when Next.js compiles a file with 'use server', it assigns each action a cryptographically secure ID and registers an HTTP POST handler. Any client, automated curl script, or malicious actor can forge an HTTP POST request directly to that action ID with arbitrary JSON arguments.`,
      callout: {
        type: "security",
        title: "Security Imperative",
        text: "Never assume a Server Action was invoked by your own frontend UI. Treat every Server Action with the same rigorous threat model you would apply to an unauthenticated public REST endpoint.",
      },
    },
    {
      heading: "3. The 4-Layer Defense Architecture for Server Actions",
      body: `To build bulletproof enterprise backends in Next.js, our team at Going Genius enforces a 4-layer defense in every Server Action mutation:

1. Authentication & Session Verification: Verify caller identity before any business logic executes.
2. Strict Schema Validation (Zod): Validate argument structure and sanitise against injection attacks.
3. Granular Authorization & Role Enforcement: Verify the user holds write permissions for the specific resource.
4. Rate Limiting & Audit Logging: Prevent brute-force submissions and maintain forensic transparency.`,
      codeSnippet: `// actions/update-profile.ts
"use server";

import { z } from "zod";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

const ProfileSchema = z.object({
  fullName: z.string().min(2).max(100),
  bio: z.string().max(500).optional(),
});

export async function updateProfile(formData: FormData) {
  // Layer 1: Zero-Trust Authentication
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("401 Unauthorized: Session required");
  }

  // Layer 2: Strict Zod Parsing
  const parsed = ProfileSchema.safeParse({
    fullName: formData.get("fullName"),
    bio: formData.get("bio"),
  });

  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  // Layer 3: Scoped Authorization Mutation
  await db.user.update({
    where: { id: session.user.id }, // Scoped directly to session ID, preventing IDOR
    data: parsed.data,
  });

  // Layer 4: Cache Invalidation
  revalidatePath("/profile");
  return { success: true };
}`,
      codeLanguage: "typescript",
    },
    {
      heading: "4. Preventing Data Leakage with 'server-only' and React Taint",
      body: `A common vulnerability in Next.js applications is accidental secret leakage when database entities or private utility functions are inadvertently imported into Client Components ('use client').

Next.js provides two vital tools to eliminate this attack vector:
1. The 'server-only' package: Adding 'import \"server-only\"' at the top of a module causes the Next.js compiler to throw a build-time error if that file is ever imported by a client component.
2. Experimental React Taint APIs ('experimental_taintObjectReference' & 'experimental_taintUniqueValue'): Instructs React to throw an error if an environment token, user password hash, or payment secret is ever passed across the client-server boundary.`,
      callout: {
        type: "tip",
        title: "Compiler-Enforced Safety",
        text: "Make 'import \"server-only\"' standard boilerplate in all database adapters, API key registries, and private cryptographic helpers.",
      },
    },
    {
      heading: "5. Real-World UX: Optimistic UI & useActionState",
      body: `Security does not have to come at the cost of responsiveness. Modern Next.js patterns combine React 19 hooks—such as 'useActionState' and 'useOptimistic'—with secure Server Actions to deliver instantaneous UI updates while preserving server authority.

If a server mutation fails or is rejected by security validation, the optimistic state is automatically rolled back, keeping the client state strictly synchronized with the database ledger without brittle manual catch blocks.`,
    },
  ],
};

const SECONDARY_ARTICLES = [
  {
    slug: "enterprise-dot-net-clean-architecture",
    title: "Scaling Distributed Backends: ASP.NET Core & Clean Architecture",
    badge: "Enterprise Systems",
    summary: "How CQRS, MediatR, and domain-driven design structure high-throughput financial and IoT backends.",
    readTime: "5 min read",
  },
  {
    slug: "ai-prompt-engineering-workflows",
    title: "From Chatbots to Autonomous Agents: The Modern AI Engineer",
    badge: "AI & Innovation",
    summary: "RAG architectures, few-shot prompting, and agentic workflows driving 10x engineering velocity.",
    readTime: "6 min read",
  },
  {
    slug: "iot-telematics-nepal",
    title: "IoT Telematics & Real-Time Tracking in Mountainous Geographies",
    badge: "Hardware & Edge",
    summary: "Lessons learned deploying GPS fleet management across 10,000+ commercial vehicles in South Asia.",
    readTime: "6 min read",
  },
];

export function BlogSection() {
  const [expandedArticle, setExpandedArticle] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.origin + "#blog");
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
            Deep-dives into modern web engineering, Next.js security paradigms, enterprise backends, and applied AI systems authored by Bibek Lama.
          </p>
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
                {FEATURED_ARTICLE.badge}
              </span>
              <span className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{FEATURED_ARTICLE.readingTime}</span>
              </span>
              <span className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>{FEATURED_ARTICLE.date}</span>
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium border border-white/10 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? "Link Copied!" : "Share Article"}</span>
            </button>
          </div>

          {/* Article Title & Author */}
          <div className="relative z-10 mt-6 max-w-4xl">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {FEATURED_ARTICLE.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
              {FEATURED_ARTICLE.subtitle}
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
                <div className="text-sm font-bold text-white">{FEATURED_ARTICLE.author}</div>
                <div className="text-xs text-neutral-400">{FEATURED_ARTICLE.authorRole}</div>
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
              {FEATURED_ARTICLE.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {FEATURED_ARTICLE.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Main Body (Expanded / Collapsible view) */}
          <div className="relative z-10 space-y-8">
            {FEATURED_ARTICLE.contentSections
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
                <span>{expandedArticle ? "Collapse Full Article" : "Read Complete Technical Analysis (7 min)"}</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedArticle ? "rotate-90" : ""
                  }`}
                />
              </button>

              <a
                href="#workshops"
                className="text-xs text-neutral-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Learn Next.js Security in our Live Student Workshops</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
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
            <span className="text-xs font-mono text-neutral-400">Going Genius Engineering Library</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SECONDARY_ARTICLES.map((art, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-neutral-950 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                      {art.badge}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">{art.readTime}</span>
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
                  <a
                    href="#contact"
                    className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>Discuss Topic</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
