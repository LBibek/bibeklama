"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  GraduationCap,
  Network,
  CheckCircle2,
  ChevronRight,
  Target,
  Users,
  Compass,
  Layers,
  Sparkles,
  BookOpen,
  Briefcase,
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
      badge: "Governance & Fiduciary Duty",
      title: "Board of Director",
      subtitle: "Strategic stewardship, corporate accountability & risk oversight.",
      icon: ShieldCheck,
      accentGradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
      borderColor: "hover:border-indigo-500/50 group-hover:border-indigo-500/40",
      textColor: "text-indigo-400",
      quote:
        "“Effective board governance isn't about micromanaging execution—it's about steering organizational purpose, protecting stakeholder value, and demanding structural clarity.”",
      description:
        "Providing high-stakes advisory, fiduciary governance, and strategic steering to executive committees. Ensures organizational compliance, sustainable financial health, and visionary long-term trajectory.",
      responsibilities: [
        "Executive Strategy Alignment & Long-Term Vision",
        "Risk Assessment, Mitigation & Audit Committee Oversight",
        "Stakeholder Representation & Shareholder Value Creation",
        "Corporate Culture, Ethics & Compliance Monitoring",
        "Mergers, Partnerships & Capital Allocation Guidance",
      ],
      outcomes: [
        "Robust corporate resilience against market volatilities",
        "Clear demarcation of board oversight vs. operational management",
        "Transparent governance frameworks benchmarked against global standards",
      ],
      metrics: [
        { label: "Core Focus", value: "Strategic Direction" },
        { label: "Risk Management", value: "Proactive Audit" },
        { label: "Stakeholder Alignment", value: "Complete Transparency" },
      ],
    },
    {
      id: "teacher",
      badge: "Pedagogy & Knowledge Transfer",
      title: "Teacher & Educator",
      subtitle: "Mentoring emerging leaders, demystifying complexities & nurturing curiosity.",
      icon: GraduationCap,
      accentGradient: "from-violet-500/20 via-purple-500/10 to-transparent",
      borderColor: "hover:border-violet-500/50 group-hover:border-violet-500/40",
      textColor: "text-violet-400",
      quote:
        "“Teaching is the architecture of human potential. When we connect abstract principles to practical real-world relevance, we create leaders, not just test-takers.”",
      description:
        "Bridging academic rigor with real-world industry practice. Passionate about transforming curriculum, cultivating critical thinking, and empowering students to master complex business and technological systems.",
      responsibilities: [
        "Curriculum Modernization & Interactive Pedagogy",
        "Executive Coaching & Professional Development Seminars",
        "Individual Mentorship & Career Guidance for Future Technologists",
        "Interactive Case Studies & Real-World Simulation Workshops",
        "Fostering Lifelong Learning Mindsets & Ethical Leadership",
      ],
      outcomes: [
        "Hundreds of students successfully placed in top tier organizations",
        "Significant boost in student engagement and applied problem-solving",
        "Creation of collaborative, psychologically safe learning environments",
      ],
      metrics: [
        { label: "Learners Impacted", value: "1,000+" },
        { label: "Methodology", value: "Case-Driven" },
        { label: "Pedagogy", value: "Interactive & Applied" },
      ],
    },
    {
      id: "architect",
      badge: "Enterprise Systems & Strategy",
      title: "Business Architect",
      subtitle: "Translating boardroom strategy into operational realities and scalable architectures.",
      icon: Network,
      accentGradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
      borderColor: "hover:border-cyan-500/50 group-hover:border-cyan-500/40",
      textColor: "text-cyan-400",
      quote:
        "“A strategy without business architecture is merely wishful thinking. Architecture translates abstract visions into coordinated processes, capabilities, and technological engines.”",
      description:
        "Designing the structural blueprints of modern enterprise operations. Bridges the critical gap between executive business goals, operational processes, and technology infrastructure.",
      responsibilities: [
        "Enterprise Capability Mapping & Value Stream Design",
        "Digital Transformation & Legacy Systems Modernization",
        "Operating Model Optimization & Cross-Functional Alignment",
        "Technology Stack Selection Aligned with Business Strategy",
        "Change Management Blueprints & Process Re-engineering",
      ],
      outcomes: [
        "Elimination of cross-departmental silos and operational redundancies",
        "Rapid accelerated time-to-market for new initiatives",
        "Resilient, decoupled business processes that scale effortlessly",
      ],
      metrics: [
        { label: "System Focus", value: "Capabilities & Flows" },
        { label: "Efficiency Gain", value: "Optimized Redundancies" },
        { label: "Alignment", value: "Strategy ➔ Execution" },
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
            <span>Core Leadership Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Three Pillars of Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A cohesive symbiosis of governance, human empowerment, and structural systems design.
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

                  {/* Bottom selection button */}
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
                  Key Strategic Contributions
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
