"use client";

import React from "react";
import {
  Code,
  Terminal,
  Sparkles,
  Users2,
  GraduationCap,
  Layers,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Briefcase,
  Flame,
  BadgePercent,
  Tag,
} from "lucide-react";

export function Workshops() {
  const workshops = [
    {
      title: "Next.js Full-Stack Mastery",
      badge: "Modern Web & React",
      icon: Code,
      accentColor: "text-indigo-400",
      borderGlow: "hover:border-indigo-500/50",
      description:
        "Comprehensive hands-on training covering the App Router, Server Components, client-side state, API architecture, dynamic routing, and high-performance production deployment.",
      originalPrice: "NRS. 30,000",
      discountPrice: "NRS. 25,000",
      savings: "NRS. 5,000",
      modules: [
        "React Server Components (RSC) & Server Actions",
        "Next.js App Router Architecture & Layouts",
        "Tailwind CSS, UI Libraries & Responsive Systems",
        "Production Optimization, SEO & Cloud Hosting",
      ],
      outcome: "Build and deploy production-grade full-stack web applications.",
    },
    {
      title: "Enterprise .NET Core & Web APIs",
      badge: "Enterprise Backend",
      icon: Terminal,
      accentColor: "text-purple-400",
      borderGlow: "hover:border-purple-500/50",
      description:
        "Deep dive into Microsoft .NET ecosystem, ASP.NET Core Web APIs, clean architecture, Entity Framework Core, authentication, and high-throughput corporate backends.",
      originalPrice: "NRS. 30,000",
      discountPrice: "NRS. 25,000",
      savings: "NRS. 5,000",
      modules: [
        "C# Advanced Paradigms & Object-Oriented Principles",
        "ASP.NET Core Web API Architecture & Controllers",
        "Entity Framework Core, Linq & Database Migrations",
        "Dependency Injection, Repository Pattern & Security",
      ],
      outcome: "Develop rock-solid, scalable enterprise backend services.",
    },
    {
      title: "Prompt Engineering & Generative AI",
      badge: "AI & Future of Work",
      icon: Cpu,
      accentColor: "text-cyan-400",
      borderGlow: "hover:border-cyan-500/50",
      description:
        "Equipping students with modern AI capabilities: prompt engineering architectures, LLM orchestration, few-shot prompting, autonomous agents, and AI-accelerated programming.",
      originalPrice: "NRS. 30,000",
      discountPrice: "NRS. 25,000",
      savings: "NRS. 5,000",
      modules: [
        "Prompt Design Patterns, Context Structuring & Guardrails",
        "Few-Shot, Chain-of-Thought & Socratic Prompting",
        "Integrating LLMs into Software Development Workflows",
        "AI Agent Fundamentals & Retrieval Augmented Generation (RAG)",
      ],
      outcome: "Harness AI to achieve 5x-10x productivity as a modern engineer.",
    },
  ];

  return (
    <section id="workshops" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Applied Technical Pedagogy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industry-Ready Student Workshops
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Transforming learners from theoretical beginners into production-ready engineers.
            Over <strong className="text-white">90+ students</strong> successfully trained and mentored.
          </p>

          {/* Pricing Highlight Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 p-2 px-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Tag className="w-3.5 h-3.5 text-indigo-400" />
              <span>Standard Course Fee:</span>
              <span className="line-through text-neutral-500 font-semibold">NRS. 30,000</span>
            </span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <BadgePercent className="w-4 h-4 text-emerald-400" />
              <span>Special Discount Fee: NRS. 25,000</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
              Save NRS. 5,000
            </span>
          </div>
        </div>

        {/* Highlight Banner with Workshop photo */}
        <div className="relative mb-12 p-6 sm:p-8 rounded-3xl overflow-hidden border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <img
            src="/tech-education.jpg"
            alt="Technical Coding Workstation"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 via-neutral-950/80 to-cyan-950/70" />

          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
              <Users2 className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                90+ Students Empowered & Counting
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Direct hands-on workshops in Next.js, .NET Core & Prompt Engineering. Need-based scholarships also available for dedicated learners.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all"
            >
              Enroll at NRS. 25,000
            </a>
          </div>
        </div>

        {/* 3 Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((w, idx) => {
            const Icon = w.icon;
            return (
              <div
                key={idx}
                className={`group rounded-3xl p-7 bg-neutral-900/40 border border-white/10 ${w.borderGlow} transition-all duration-300 flex flex-col justify-between hover:bg-neutral-900/70 hover:scale-[1.01]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${w.accentColor}`} />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                      {w.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-200 transition-colors">
                    {w.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {w.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      Core Curriculum Modules
                    </h4>
                    <ul className="space-y-2">
                      {w.modules.map((m, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${w.accentColor}`} />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Pricing Block */}
                  <div className="my-5 p-4 rounded-2xl bg-neutral-950/80 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 block mb-0.5">
                        Tuition Fee
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          {w.discountPrice}
                        </span>
                        <span className="text-xs sm:text-sm text-neutral-500 line-through">
                          {w.originalPrice}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                        <BadgePercent className="w-3 h-3" />
                        <span>Save {w.savings}</span>
                      </span>
                      <span className="block text-[9px] text-neutral-400 mt-1">Discount Active</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-3">
                    <div className="text-[11px] font-medium text-emerald-400 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Goal: {w.outcome}</span>
                    </div>

                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all group-hover:shadow-indigo-500/40"
                    >
                      <span>Enroll at {w.discountPrice}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
