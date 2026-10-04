"use client";

import React, { useState } from "react";
import {
  Layers3,
  BookOpenCheck,
  Cpu,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Workflow,
  BarChart4,
  Boxes,
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
        "A rigorous oversight system ensuring executive accountability, active risk management, and long-range shareholder value creation without hindering operational execution.",
      steps: [
        {
          num: "01",
          title: "Charter & Fiduciary Alignment",
          desc: "Establishing absolute transparency in voting, committee roles (Audit, Risk, Nomination), and statutory adherence.",
        },
        {
          num: "02",
          title: "Strategic Horizon Planning",
          desc: "Setting 3-to-5 year strategic horizons while stress-testing scenarios against macroeconomic shifts.",
        },
        {
          num: "03",
          title: "Risk & Capital Stewardship",
          desc: "Balancing prudent resource allocation with responsible innovation and enterprise threat assessment.",
        },
        {
          num: "04",
          title: "Succession & Talent Oversight",
          desc: "Cultivating leadership pipelines and ensuring executive incentives mirror sustainable stakeholder growth.",
        },
      ],
    },
    {
      id: "pedagogy",
      title: "Active Pedagogical Framework",
      shortTitle: "Applied Pedagogy",
      category: "Education & Mentorship",
      icon: BookOpenCheck,
      tag: "Constructivist Learning",
      summary:
        "Transforming passive lectures into interactive, scenario-driven learning labs where theoretical concepts translate immediately into actionable real-world capability.",
      steps: [
        {
          num: "01",
          title: "Contextual Anchoring",
          desc: "Connecting fundamental theories to real organizational case studies and contemporary industrial dynamics.",
        },
        {
          num: "02",
          title: "Socratic & Inquiry-Led Dialogue",
          desc: "Stimulating critical thinking, intellectual curiosity, and rigorous debate rather than rote memorization.",
        },
        {
          num: "03",
          title: "Applied Problem Labs",
          desc: "Students build, present, and critique real-world business models and technological architectures.",
        },
        {
          num: "04",
          title: "Continuous Reflection & Growth",
          desc: "Mentorship-focused feedback loops fostering emotional intelligence, leadership poise, and technical mastery.",
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
        "A systematic discipline that blueprints how business strategy is translated into operational capabilities, technology infrastructure, and measurable value streams.",
      steps: [
        {
          num: "01",
          title: "Business Capability Mapping",
          desc: "Cataloging core organizational capabilities independently of org charts to identify core strengths and gaps.",
        },
        {
          num: "02",
          title: "Value Stream Orchestration",
          desc: "Streamlining end-to-end customer and operational journeys to remove friction and latency.",
        },
        {
          num: "03",
          title: "Technology & Process Coupling",
          desc: "Architecting modular, composable digital backbones that evolve seamlessly alongside business ambitions.",
        },
        {
          num: "04",
          title: "Governance & Metric Feedback",
          desc: "Continuous instrumentation through OKRs and architectural review boards to maintain systemic agility.",
        },
      ],
    },
  ];

  const current = frameworks[activeTab];
  const Icon = current.icon;

  return (
    <section id="frameworks" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>Methodologies & Systems Thinking</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Strategic Frameworks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Proven methodologies honed across boardrooms, academic lecture halls, and enterprise transformations.
          </p>
        </div>

        {/* Hero UI-style Segmented Control / Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-900 border border-white/10 shadow-lg max-w-full overflow-x-auto">
            {frameworks.map((fw, index) => {
              const TabIcon = fw.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={fw.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
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
        <div className="rounded-3xl bg-neutral-950/70 border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-8 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span className="uppercase tracking-widest">{current.category}</span>
                <span>•</span>
                <span>{current.tag}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {current.title}
              </h3>
            </div>
            <p className="max-w-xl text-sm sm:text-base text-neutral-300 leading-relaxed">
              {current.summary}
            </p>
          </div>

          {/* 4 Execution Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {current.steps.map((step) => (
              <div
                key={step.num}
                className="relative p-6 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="text-2xl font-mono font-bold text-indigo-400/80 mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.num}
                </div>
                <h4 className="text-base font-semibold text-white mb-2 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
