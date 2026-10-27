"use client";

import React, { useState } from "react";
import {
  Layers3,
  BookOpenCheck,
  Cpu,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export function Frameworks() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const frameworks = [
    {
      id: "governance",
      title: "Boardroom Governance Matrix",
      shortTitle: "Governance Matrix",
      category: "Corporate Stewardship",
      icon: Layers3,
      tag: "Fiduciary & Strategic",
      summary:
        "A rigorous oversight system ensuring executive accountability, active risk management, and long-range shareholder value creation.",
      steps: [
        {
          num: "01",
          title: "Charter & Fiduciary",
          desc: "Transparent voting, statutory adherence, and committee oversight.",
        },
        {
          num: "02",
          title: "Strategic Horizon",
          desc: "Setting 3-5 year roadmaps stress-tested against macro disruption.",
        },
        {
          num: "03",
          title: "Risk & Capital",
          desc: "Balancing prudent resource allocation with responsible innovation.",
        },
        {
          num: "04",
          title: "Succession & Talent",
          desc: "Cultivating leadership pipelines and aligning executive incentives.",
        },
      ],
    },
    {
      id: "pedagogy",
      title: "Active Pedagogical Framework",
      shortTitle: "Applied Pedagogy",
      category: "Education & Mentorship",
      icon: BookOpenCheck,
      tag: "Constructivist Labs",
      summary:
        "Transforming passive lectures into scenario-driven engineering labs where theoretical concepts translate into real-world code.",
      steps: [
        {
          num: "01",
          title: "Contextual Anchoring",
          desc: "Connecting theory directly to live production case studies.",
        },
        {
          num: "02",
          title: "Inquiry & Dialogue",
          desc: "Stimulating critical architectural debate over rote memorization.",
        },
        {
          num: "03",
          title: "Applied Problem Labs",
          desc: "Building, shipping, and reviewing full-stack systems hands-on.",
        },
        {
          num: "04",
          title: "Mentorship Loops",
          desc: "Continuous code reviews, portfolio audits, and career guidance.",
        },
      ],
    },
    {
      id: "architecture",
      title: "Enterprise Architecture Blueprint",
      shortTitle: "Business Architecture",
      category: "Systems & Scalability",
      icon: Cpu,
      tag: "Capability-Driven",
      summary:
        "A systematic discipline that blueprints how business strategy translates into modular operational infrastructure and measurable value.",
      steps: [
        {
          num: "01",
          title: "Capability Mapping",
          desc: "Cataloging organizational capabilities to eliminate silos.",
        },
        {
          num: "02",
          title: "Value Stream Design",
          desc: "Streamlining end-to-end customer and data pipelines.",
        },
        {
          num: "03",
          title: "Modular Coupling",
          desc: "Engineering decoupled digital backbones with zero lock-in.",
        },
        {
          num: "04",
          title: "Metric Feedback",
          desc: "Continuous telemetry instrumentation to preserve agility.",
        },
      ],
    },
  ];

  const current = frameworks[activeTab];

  return (
    <section id="frameworks" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-neutral-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>Chapter IX • Strategic Operating Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Strategic Frameworks
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Disciplines honed across corporate boardrooms, technical pedagogy, and enterprise digital transformations.
          </p>
        </div>

        {/* Segmented Control / Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-white/10 shadow-lg max-w-full overflow-x-auto">
            {frameworks.map((fw, index) => {
              const TabIcon = fw.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={fw.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{fw.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Framework Content Card */}
        <div className="rounded-3xl bg-neutral-950/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 mb-1.5">
                <span className="uppercase tracking-widest">{current.category}</span>
                <span>•</span>
                <span>{current.tag}</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                {current.title}
              </h3>
            </div>
            <p className="max-w-xl text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {current.summary}
            </p>
          </div>

          {/* 4 Connected Process Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {current.steps.map((step) => (
              <div
                key={step.num}
                className="relative p-5 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-cyan-500/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-mono font-bold text-indigo-400 group-hover:text-cyan-400 transition-colors">
                      {step.num}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
