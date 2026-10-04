"use client";

import React, { useState } from "react";
import {
  Calendar,
  Building,
  GraduationCap,
  Shield,
  Layers,
  ChevronRight,
  Sparkles,
  Award,
} from "lucide-react";

interface MilestoneItem {
  id: string;
  year: string;
  role: string;
  category: "board" | "teaching" | "architecture";
  organization: string;
  description: string;
  highlights: string[];
  badge: string;
}

export function Timeline() {
  const [filter, setFilter] = useState<"all" | "board" | "teaching" | "architecture">("all");

  const milestones: MilestoneItem[] = [
    {
      id: "m1",
      year: "Present",
      role: "Board Member & Strategic Advisor",
      category: "board",
      organization: "Executive & Corporate Advisory",
      description:
        "Serving on board committees focusing on corporate governance, long-term strategic positioning, financial prudence, and compliance frameworks.",
      highlights: [
        "Steering multi-year enterprise transformation strategies",
        "Formulating fiduciary risk evaluation criteria",
        "Aligning board-level vision with executive team KPIs",
      ],
      badge: "Governance",
    },
    {
      id: "m2",
      year: "Ongoing",
      role: "Academic Instructor & Faculty Mentor",
      category: "teaching",
      organization: "Higher Education & Executive Academies",
      description:
        "Delivering comprehensive curricula in business systems, critical problem-solving, and technology management. Facilitating interactive seminars and mentoring students.",
      highlights: [
        "Instructing over 1,000+ emerging leaders and technologists",
        "Designed hands-on, case-study driven syllabus",
        "Mentored student incubators and technical capstones",
      ],
      badge: "Pedagogy",
    },
    {
      id: "m3",
      year: "2023 - Present",
      role: "Principal Business Architect",
      category: "architecture",
      organization: "Enterprise Systems Strategy",
      description:
        "Formulating enterprise architecture blueprints, capability mapping, and operational restructuring to ensure seamless alignment between digital tech stacks and business goals.",
      highlights: [
        "Reduced redundant processes across cross-functional departments",
        "Architected scalable operational models for rapid growth",
        "Bridged senior executives, engineering leads, and stakeholders",
      ],
      badge: "Architecture",
    },
    {
      id: "m4",
      year: "2021 - 2023",
      role: "Director of Educational Initiatives & Pedagogy",
      category: "teaching",
      organization: "Academic Programs & Workshops",
      description:
        "Spearheaded pedagogical reform initiatives, teacher-student interactive workshops, and experiential learning modules.",
      highlights: [
        "Introduced real-world problem-solving sprint labs",
        "Coached junior educators on active learning techniques",
      ],
      badge: "Education",
    },
    {
      id: "m5",
      year: "2019 - 2022",
      role: "Strategic Systems & Organization Architect",
      category: "architecture",
      organization: "Digital & Operations Advisory",
      description:
        "Engineered business capability frameworks and operating workflows for scaling ventures and institutional modernization projects.",
      highlights: [
        "Developed end-to-end value stream tracking frameworks",
        "Spearheaded core workflow digitizations",
      ],
      badge: "Strategy",
    },
  ];

  const filtered =
    filter === "all"
      ? milestones
      : milestones.filter((m) => m.category === filter);

  return (
    <section id="milestones" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Trajectory & Leadership Path</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Milestones & Executive Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A track record of high-impact boardroom steering, academic mentorship, and enterprise systems modernization.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-neutral-900 border border-white/5">
            {[
              { id: "all", label: "All Milestones" },
              { id: "board", label: "Board & Governance" },
              { id: "teaching", label: "Teaching & Faculty" },
              { id: "architecture", label: "Business Architecture" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filter === tab.id
                    ? "bg-white/10 text-white shadow-sm border border-white/10"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-neutral-800 ml-4 md:ml-32 max-w-4xl space-y-12">
          {filtered.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all" />

              {/* Year chip (on desktop floats to the left) */}
              <div className="md:absolute md:-left-28 md:top-1.5 text-xs font-mono font-bold text-indigo-400 mb-1 md:mb-0 md:text-right md:w-20">
                {item.year}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/5 hover:border-white/20 transition-all shadow-xl backdrop-blur-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-xs text-neutral-400 font-medium">
                      {item.organization}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-neutral-300">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
