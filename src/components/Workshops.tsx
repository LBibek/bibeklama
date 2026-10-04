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
        </div>

        {/* Highlight Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-cyan-950/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
              <Users2 className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                90+ Students Empowered & Counting
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Direct hands-on workshops in cutting-edge tech stacks that match real market demand.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all"
            >
              Request Workshop for Institution
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

                <div className="pt-4 border-t border-white/5">
                  <div className="text-[11px] font-medium text-emerald-400 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Goal: {w.outcome}</span>
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
