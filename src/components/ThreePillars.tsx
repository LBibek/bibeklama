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
  ExternalLink,
  Video,
  Code2,
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
  description: string;
  responsibilities: string[];
  outcomes: string[];
  metrics: { label: string; value: string }[];
}

export function ThreePillars() {
  const [activePillar, setActivePillar] = useState<string>("board");

  const pillars: PillarDetail[] = [
    {
      id: "board",
      badge: "Governance & Venture Leadership",
      title: "Board of Director & Founder",
      subtitle: "Strategic stewardship, corporate accountability & executive venture leadership at Going Genius.",
      icon: ShieldCheck,
      accentGradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
      borderColor: "hover:border-indigo-500/50 group-hover:border-indigo-500/40",
      textColor: "text-indigo-400",
      quote:
        "“True governance bridges fiduciary oversight with entrepreneurial execution—steering organizations towards sustainable resilience and stakeholder value.”",
      description:
        "Founder of Going Genius (goinggenius.com.np) and serving on corporate advisory boards. Leads executive strategy, capital allocation, risk audits, and strategic partnerships across technology and education.",
      responsibilities: [
        "Executive Leadership & Strategic Direction at Going Genius",
        "Corporate Board Governance & Fiduciary Oversight",
        "Enterprise Risk Assessment, Audit & Regulatory Compliance",
        "Strategic Partnerships, Client Acquisitions & Venture Scaling",
        "Demarcation of Board Oversight vs. High-Performance Execution",
      ],
      outcomes: [
        "Established Going Genius as a premier tech studio and consulting hub",
        "Scaled enterprise client engagements regionally and internationally",
        "Built a resilient governance framework prioritizing long-term value",
      ],
      metrics: [
        { label: "Venture", value: "Going Genius" },
        { label: "Focus", value: "Fiduciary & Strategy" },
        { label: "Accountability", value: "High-Standard" },
      ],
    },
    {
      id: "teacher",
      badge: "Pedagogy & Philanthropy",
      title: "Teacher, Educator & Philanthropist",
      subtitle: "90+ students trained, hands-on workshops in Next.js, .NET, Prompt Engineering & scholarships.",
      icon: GraduationCap,
      accentGradient: "from-violet-500/20 via-purple-500/10 to-transparent",
      borderColor: "hover:border-violet-500/50 group-hover:border-violet-500/40",
      textColor: "text-violet-400",
      quote:
        "“Teaching is about closing the gap between academic theory and industry reality. Through scholarships and applied workshops, we empower students to build real careers.”",
      description:
        "Passionate technical educator and philanthropist. Has trained over 90+ students through intensive workshops in Next.js, .NET, and Prompt Engineering, while actively funding scholarships for students in need.",
      responsibilities: [
        "Hands-on Workshops in Next.js, .NET Core & Prompt Engineering",
        "Industry-Readiness Coaching: Git workflows, clean code & production apps",
        "Philanthropic Scholarships: Covering tuition for underprivileged learners",
        "Capstones, Real-World Portfolio Reviews & Mock Technical Interviews",
        "Mentoring the Next Generation of Engineers into Top Tier Jobs",
      ],
      outcomes: [
        "Over 90+ students successfully trained and made industry-ready",
        "Multiple underprivileged students funded with tech scholarships",
        "Graduates thriving as professional developers and tech contributors",
      ],
      metrics: [
        { label: "Students Trained", value: "90+" },
        { label: "Core Stacks", value: "Next.js • .NET • AI" },
        { label: "Impact", value: "Scholarships" },
      ],
    },
    {
      id: "architect",
      badge: "Systems Architecture & IT Consulting",
      title: "Business Architect & IT Consultant",
      subtitle: "Architecting systems like GG Relativity, GG Portals, Finder BD, digital marketing & video production.",
      icon: Network,
      accentGradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
      borderColor: "hover:border-cyan-500/50 group-hover:border-cyan-500/40",
      textColor: "text-cyan-400",
      quote:
        "“Business architecture turns ambitious visions into high-performance engines—connecting technology backbones, digital marketing funnels, and media pipelines into a unified system.”",
      description:
        "Guiding businesses through IT modernization and growth. Architected major platforms including GG Relativity (office ERP), GG Portals, and Finder BD (telematics), alongside full-service digital marketing and in-house video production teams.",
      responsibilities: [
        "Enterprise System Architecture (GG Relativity, GG Portals, Finder BD)",
        "Business IT Consulting, Infrastructure Hardening & Cloud Strategies",
        "Digital Marketing Campaigns & Performance Conversion Funnels",
        "Video Creation Team Leadership: Corporate media & educational production",
        "Process Re-engineering, Capability Mapping & Operational Scaling",
      ],
      outcomes: [
        "Delivered unified ERP and portal systems powering daily operations",
        "Engineered scalable vehicle tracking architectures for international clients",
        "Produced high-converting video and marketing campaigns for brand growth",
      ],
      metrics: [
        { label: "Key Systems", value: "Relativity & Portals" },
        { label: "Consulting", value: "IT & Architecture" },
        { label: "Creative Media", value: "Video Team" },
      ],
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section id="pillars" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Three Pillars of Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A cohesive symbiosis of venture governance, human empowerment & philanthropy, and enterprise systems architecture.
          </p>
        </div>

        {/* Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`group relative rounded-3xl p-7 transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isSelected
                    ? "bg-neutral-900/90 border-white/20 shadow-2xl shadow-indigo-950/40 scale-[1.02]"
                    : "bg-neutral-900/40 border-white/5 hover:border-white/20 hover:bg-neutral-900/70"
                }`}
              >
                {/* Glow ambient background on active */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${pillar.accentGradient} opacity-60 pointer-events-none transition-opacity duration-300 ${
                    isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-30"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 transition-transform group-hover:scale-110 ${
                          isSelected
                            ? "bg-white/10 text-white shadow-inner"
                            : "bg-neutral-800 text-neutral-400 group-hover:text-white"
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${pillar.textColor}`} />
                      </div>
                      <span
                        className={`text-[11px] font-mono tracking-wide px-2.5 py-1 rounded-full border ${
                          isSelected
                            ? "bg-white/10 border-white/20 text-white"
                            : "bg-neutral-950/50 border-white/5 text-neutral-400"
                        }`}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Bottom selection indicator */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium">
                    <span
                      className={`${
                        isSelected ? pillar.textColor : "text-neutral-500 group-hover:text-neutral-300"
                      }`}
                    >
                      {isSelected ? "Currently Viewing" : "Click to view framework"}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
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

        {/* Detailed Expanded View for Selected Pillar */}
        <div className="rounded-3xl bg-neutral-900/80 border border-white/10 p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Description & Quote */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 ${currentPillar.textColor}`}>
                  Detailed Focus
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentPillar.title}
                </h3>
              </div>

              <blockquote className="p-4 sm:p-5 rounded-2xl bg-neutral-950/60 border-l-4 border-indigo-500 border-white/5 text-sm sm:text-base italic text-neutral-300 font-serif leading-relaxed">
                {currentPillar.quote}
              </blockquote>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                {currentPillar.description}
              </p>

              {/* Responsibilities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-indigo-400" />
                  Key Contributions & Execution
                </h4>
                <ul className="space-y-2.5">
                  {currentPillar.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${currentPillar.textColor}`} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Outcomes & Metrics */}
            <div className="lg:col-span-5 flex flex-col gap-6 bg-neutral-950/80 p-6 rounded-2xl border border-white/5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  Tangible Outcomes
                </h4>
                <div className="space-y-3">
                  {currentPillar.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300 flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="pt-4 border-t border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-violet-400" />
                  Operating Benchmarks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {currentPillar.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-neutral-900 border border-white/5 text-center">
                      <div className="text-xs font-semibold text-white truncate">{m.value}</div>
                      <div className="text-[10px] text-neutral-400 font-mono mt-0.5 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
