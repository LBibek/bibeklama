"use client";

import React from "react";
import {
  Scale,
  BrainCircuit,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export function Philosophy() {
  const principles = [
    {
      title: "Strategic Foresight Over Reaction",
      category: "Governance",
      icon: Scale,
      text: "Anticipating macroeconomic & technological shifts 5–10 years ahead instead of merely reacting to historical balance sheets.",
      highlight: "Proactive Fiduciary Vision",
      badge: "Board Leadership",
    },
    {
      title: "People as the Living Architecture",
      category: "Pedagogy",
      icon: GraduationCap,
      text: "Operating models are empty without inspired minds. True mentorship ignites intellectual self-reliance and engineering ethics.",
      highlight: "Human-Centric Pedagogy",
      badge: "90+ Scholars",
    },
    {
      title: "Systems Thinking Over Patchworks",
      category: "Architecture",
      icon: BrainCircuit,
      text: "Treating systemic feedback loops rather than isolated symptoms to engineer sustainable long-term enterprise scale.",
      highlight: "Holistic Engineering",
      badge: "Zero-Downtime",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Executive Philosophy
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            The fundamental beliefs that anchor boardroom decisions, classroom mentorship, and architectural blueprints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, index) => {
            const Icon = item.icon;
            const accents = [
              "from-blue-500/20 via-indigo-500/10 to-transparent",
              "from-purple-500/20 via-pink-500/10 to-transparent",
              "from-cyan-500/20 via-teal-500/10 to-transparent",
            ];
            const borderColors = [
              "hover:border-blue-500/40",
              "hover:border-purple-500/40",
              "hover:border-cyan-500/40",
            ];
            return (
              <div
                key={index}
                className={`group relative rounded-3xl p-7 vr-glass border border-white/10 ${borderColors[index]} transition-all duration-300 flex flex-col justify-between overflow-hidden hover:scale-[1.01]`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${accents[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-500/20 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span className="text-[11px]">{item.highlight}</span>
                  <span className="text-neutral-500 font-mono text-xs">#0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
