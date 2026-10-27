"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  GraduationCap,
  Network,
  CheckCircle2,
  ChevronRight,
  Target,
  Compass,
  Layers,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

interface PillarDetail {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accentGradient: string;
  borderColor: string;
  textColor: string;
  quote: string;
  capabilities: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
}

export function ThreePillars() {
  const [activePillar, setActivePillar] = useState<string>("board");

  const pillars: PillarDetail[] = [
    {
      id: "board",
      badge: "Governance & Venture Leadership",
      title: "Board Leadership & Founder",
      subtitle: "Strategic stewardship, corporate accountability & executive venture leadership at Going Genius.",
      icon: ShieldCheck,
      accentGradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
      borderColor: "hover:border-indigo-500/50 group-hover:border-indigo-500/40",
      textColor: "text-indigo-400",
      quote:
        "“True governance bridges fiduciary oversight with entrepreneurial execution—steering organizations towards resilience and long-term stakeholder value.”",
      capabilities: [
        "Executive Leadership & Capital Stewardship",
        "Corporate Board Governance & Fiduciary Oversight",
        "Strategic Risk Audits & Regulatory Compliance",
        "Enterprise Venture Scaling & Partnerships",
      ],
      outcomes: [
        "Going Genius established as premier tech studio",
        "High-standard corporate governance framework",
        "Resilient multi-market venture expansion",
      ],
      metrics: [
        { label: "Venture", value: "Going Genius" },
        { label: "Focus", value: "Fiduciary & Strategy" },
        { label: "Governance", value: "High-Standard" },
      ],
    },
    {
      id: "teacher",
      badge: "Pedagogy & Philanthropy",
      title: "Technical Pedagogy & Mentorship",
      subtitle: "90+ students trained in Next.js, .NET & Prompt Engineering, paired with full tech scholarships.",
      icon: GraduationCap,
      accentGradient: "from-violet-500/20 via-purple-500/10 to-transparent",
      borderColor: "hover:border-violet-500/50 group-hover:border-violet-500/40",
      textColor: "text-violet-400",
      quote:
        "“Teaching is about closing the gap between academic theory and industry reality. Through scholarships and applied workshops, we empower students to build real careers.”",
      capabilities: [
        "Applied Next.js, .NET Core & AI Workshops",
        "Production Git Workflows & Clean Architecture",
        "100% Tuition Scholarships for Deserving Scholars",
        "Portfolio Audits & Mock Technical Interviews",
      ],
      outcomes: [
        "90+ engineers trained & placed in industry",
        "Underprivileged students funded with scholarships",
        "Alumni leading software projects globally",
      ],
      metrics: [
        { label: "Graduates", value: "90+ Students" },
        { label: "Curriculum", value: "Next.js • .NET • AI" },
        { label: "Impact", value: "Scholarships" },
      ],
    },
    {
      id: "architect",
      badge: "Systems Architecture & IT Consulting",
      title: "Business Architect & Consultant",
      subtitle: "Architecting systems like GG Relativity, GG Portals, Finder BD, digital marketing & video production.",
      icon: Network,
      accentGradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
      borderColor: "hover:border-cyan-500/50 group-hover:border-cyan-500/40",
      textColor: "text-cyan-400",
      quote:
        "“Business architecture connects technical backbones, digital conversion funnels, and media pipelines into a unified, high-performance engine.”",
      capabilities: [
        "Enterprise ERP Architecture (GG Relativity & Portals)",
        "IoT Telematics & GPS Fleet Systems (Finder BD)",
        "Cloud Migration, Security & Zero-Trust APIs",
        "Commercial Video & Digital Media Pipelines",
      ],
      outcomes: [
        "Flagship ERPs powering daily operations",
        "High-scale telematics architectures deployed",
        "Cross-functional engineering & media teams",
      ],
      metrics: [
        { label: "Flagship ERPs", value: "Relativity & Portals" },
        { label: "IoT Telematics", value: "Finder BD Fleet" },
        { label: "Media Crew", value: "Video Studio" },
      ],
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section id="pillars" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Three Pillars of Leadership
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            A cohesive symbiosis of venture governance, philanthropic technical pedagogy, and enterprise systems architecture.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`group relative rounded-3xl p-6 transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isSelected
                    ? "bg-neutral-900/90 border-cyan-500/40 shadow-xl shadow-cyan-950/20 scale-[1.02]"
                    : "bg-neutral-900/40 border-white/5 hover:border-white/20 hover:bg-neutral-900/70"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${pillar.accentGradient} pointer-events-none transition-opacity duration-300 ${
                    isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-30"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center p-2.5 transition-transform group-hover:scale-110 ${
                          isSelected
                            ? "bg-white/10 text-white shadow-inner"
                            : "bg-neutral-800 text-neutral-400 group-hover:text-white"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${pillar.textColor}`} />
                      </div>
                      <span
                        className={`text-[10px] font-mono tracking-wide px-2.5 py-1 rounded-full border ${
                          isSelected
                            ? "bg-white/10 border-white/20 text-white"
                            : "bg-neutral-950/50 border-white/5 text-neutral-400"
                        }`}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-medium">
                    <span
                      className={`text-[11px] font-mono ${
                        isSelected ? pillar.textColor : "text-neutral-500 group-hover:text-neutral-300"
                      }`}
                    >
                      {isSelected ? "Active Focus" : "Click to Inspect"}
                    </span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected
                          ? `rotate-90 ${pillar.textColor}`
                          : "text-neutral-600 group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Streamlined Visual Showcase for Selected Pillar */}
        <div className="rounded-3xl bg-neutral-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Quote & Core Capabilities */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/5 border border-white/10 ${currentPillar.textColor}`}>
                  Executive Lens
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {currentPillar.title}
                </h3>
              </div>

              <blockquote className="p-4 rounded-2xl bg-neutral-950/60 border-l-4 border-indigo-500 border-white/5 text-xs sm:text-sm italic text-neutral-300 font-serif leading-relaxed">
                {currentPillar.quote}
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentPillar.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-neutral-300 flex items-center gap-2 hover:border-white/15 transition-colors"
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${currentPillar.textColor}`} />
                    <span className="font-medium text-[11px] sm:text-xs">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Outcomes & Metrics */}
            <div className="lg:col-span-5 flex flex-col gap-5 bg-neutral-950/90 p-5 sm:p-6 rounded-2xl border border-white/10">
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tangible Milestones</span>
                </h4>
                <div className="space-y-2">
                  {currentPillar.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-neutral-900/60 border border-white/5 text-xs text-neutral-300 flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-[11px] sm:text-xs font-normal">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operating Metrics */}
              <div className="pt-3 border-t border-white/5 grid grid-cols-3 gap-2 text-center">
                {currentPillar.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-neutral-900 border border-white/5">
                    <div className="text-xs font-bold text-white truncate">{m.value}</div>
                    <div className="text-[9px] text-neutral-400 font-mono mt-0.5 truncate">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
