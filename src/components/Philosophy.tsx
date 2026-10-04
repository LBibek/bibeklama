"use client";

import React from "react";
import {
  Quote,
  Scale,
  BrainCircuit,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function Philosophy() {
  const principles = [
    {
      title: "Strategic Foresight Over Reaction",
      category: "Governance Philosophy",
      icon: Scale,
      text: "A well-orchestrated board doesn't just evaluate historical balance sheets—it anticipates tectonic macroeconomic and technological shifts 5 to 10 years ahead.",
      highlight: "Proactive Fiduciary Vision",
    },
    {
      title: "People as the Living Architecture",
      category: "Educational Creed",
      icon: GraduationCap,
      text: "Curricula and operating models are empty vessels without inspired minds. True pedagogy ignites intellectual self-reliance and ethical conviction.",
      highlight: "Human-Centric Pedagogy",
    },
    {
      title: "Systems Thinking Over Patchworks",
      category: "Architectural Discipline",
      icon: BrainCircuit,
      text: "Organizations often fail because they treat isolated symptoms. Business architecture examines systemic feedback loops to engineer sustainable long-term scale.",
      highlight: "Holistic Enterprise Engineering",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guiding Tenets</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Executive Philosophy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            The fundamental beliefs that anchor boardroom decisions, classroom mentorship, and architectural blueprints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl p-8 bg-neutral-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:bg-neutral-900/80"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 group-hover:bg-indigo-500/10 blur-2xl transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>{item.highlight}</span>
                  <span className="text-neutral-600 font-sans">#0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
