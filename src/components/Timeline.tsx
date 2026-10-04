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
  ExternalLink,
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
      role: "Founder & Chief Architect",
      category: "board",
      organization: "Going Genius (goinggenius.com.np)",
      description:
        "Founded and directing Going Genius. Leading executive strategy, software delivery, IT business consulting, digital marketing, and video production operations.",
      highlights: [
        "Architected enterprise software and client transformation roadmaps",
        "Formed dedicated digital marketing & creative video production teams",
        "Steering corporate governance and strategic client partnerships",
      ],
      badge: "Venture & Board",
    },
    {
      id: "m2",
      year: "Milestone",
      role: "Technical Educator & Mentor (90+ Trained)",
      category: "teaching",
      organization: "Industry-Ready Technical Workshops",
      description:
        "Conducted intensive hands-on training workshops in Next.js, Microsoft .NET Core, and Prompt Engineering, preparing 90+ students for real-world software careers.",
      highlights: [
        "90+ students trained in modern full-stack and AI development",
        "End-to-end project-based learning with production code standards",
        "Initiated need-based scholarships for underprivileged learners",
      ],
      badge: "Pedagogy",
    },
    {
      id: "m3",
      year: "2024",
      role: "Enterprise Systems Architect: GG Relativity & Portals",
      category: "architecture",
      organization: "Going Genius Enterprise Platforms",
      description:
        "Blueprinted and engineered GG Relativity (internal ERP/office management suite) and GG Portals (multi-tenant client & student ecosystem).",
      highlights: [
        "Deployed GG Relativity for centralized resource & office operations",
        "Launched GG Portals for client self-service and student training tracks",
        "Seamless integration with cloud security and modern API frameworks",
      ],
      badge: "Architecture",
    },
    {
      id: "m4",
      year: "Ongoing",
      role: "Systems Consultant & Telematics Solutions",
      category: "architecture",
      organization: "Finder BD (finder.com.bd)",
      description:
        "Consulted and contributed to systems architecture for Finder BD, one of Bangladesh's premier vehicle tracking, IoT, and fleet intelligence platforms.",
      highlights: [
        "Optimized IoT vehicle data pipelines and real-time mapping performance",
        "Engineered scalable backend service integrations",
      ],
      badge: "IoT Telematics",
    },
    {
      id: "m5",
      year: "Initiative",
      role: "Philanthropic Tech Education Patron",
      category: "teaching",
      organization: "Scholarship & Equal Opportunity Fund",
      description:
        "Providing technology scholarships to deserving students in need to ensure economic disadvantage is never a barrier to mastering high-demand tech.",
      highlights: [
        "Tuition-free seats in modern software engineering cohorts",
        "Dedicated 1-on-1 career coaching and placement assistance",
      ],
      badge: "Philanthropy",
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
            From founding Going Genius and architecting enterprise platforms to training 90+ students and funding scholarships.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-neutral-900 border border-white/5">
            {[
              { id: "all", label: "All Milestones" },
              { id: "board", label: "Founding & Board" },
              { id: "teaching", label: "Teaching & Philanthropy" },
              { id: "architecture", label: "Enterprise Systems" },
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

              {/* Year chip */}
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
