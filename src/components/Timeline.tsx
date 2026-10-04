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
  BookOpen,
  Cpu,
  TrendingUp,
  Wrench,
  Gamepad2,
  CheckCircle2,
} from "lucide-react";

interface MilestoneItem {
  id: string;
  year: string;
  role: string;
  category: "experience" | "leadership" | "pedagogy";
  organization: string;
  description: string;
  highlights: string[];
  badge: string;
}

export function Timeline() {
  const [filter, setFilter] = useState<"all" | "experience" | "leadership" | "pedagogy">("all");

  const milestones: MilestoneItem[] = [
    {
      id: "m1",
      year: "2021 – Present",
      role: "Founder & Director",
      category: "leadership",
      organization: "Going Genius Group (goinggenius.com.np)",
      description:
        "Directing the entire business and technical strategy for Going Genius Group. Leading multi-disciplinary engineering projects, designing internal enterprise ERP platforms (GG Relativity & GG Portals), and building high-performance technical and creative teams.",
      highlights: [
        "Architected enterprise ERP systems, client portals, and automation workflows",
        "Formed and directed video creation, digital marketing, and software teams",
        "Guided corporate governance, client IT consulting, and strategic expansions",
      ],
      badge: "Executive Leadership",
    },
    {
      id: "m2",
      year: "2018 – 2020",
      role: "Project Head",
      category: "experience",
      organization: "Finder GPS Nepal / Finder Telematics",
      description:
        "Spearheaded enterprise IoT and GPS telematics projects across Nepal. Successfully orchestrated cross-functional engineering and client deployments, resulting in a documented 20% surge in business sales.",
      highlights: [
        "Managed high-scale GPS tracking and fleet telematics implementations",
        "Drove commercial revenue growth, boosting product and service sales by 20%",
        "Bridged client enterprise requirements with real-time hardware & software integrations",
      ],
      badge: "IoT & Project Leadership",
    },
    {
      id: "m3",
      year: "2017 – 2018",
      role: "Service Engineer",
      category: "experience",
      organization: "Sipradi Auto Parts (Sipradi Trading / Tata Motors)",
      description:
        "Served as Service Engineer at Sipradi Auto Parts, one of Nepal's largest automotive and engineering conglomerates. Designed technical workshop structures, optimized service procedures, and led training programs for technicians and engineering teams.",
      highlights: [
        "Designed comprehensive technical training workshops and curriculum",
        "Conducted hands-on training for service engineers and technical staff",
        "Standardized technical workflows and diagnostic troubleshooting practices",
      ],
      badge: "Engineering & Training",
    },
    {
      id: "m4",
      year: "2017 – 2018",
      role: "Game Developer",
      category: "experience",
      organization: "Midas E-Class",
      description:
        "Engineered interactive educational game concepts at Midas E-Class, the pioneer in digital education and multimedia e-learning in Nepal. Blended gamification mechanics with cognitive learning outcomes for school-age students.",
      highlights: [
        "Developed interactive game loops and mechanics for digital education",
        "Created gamified educational software supporting self-paced student learning",
        "Collaborated with curriculum designers to translate textbook lessons into software",
      ],
      badge: "Interactive Media & EdTech",
    },
    {
      id: "m5",
      year: "Continuous",
      role: "Technical Educator & Philanthropist",
      category: "pedagogy",
      organization: "90+ Students Mentored & Scholarship Program",
      description:
        "Bridging academic education and industry standards through intensive hands-on workshops in Next.js, Microsoft .NET Core, and Prompt Engineering, paired with full need-based scholarship funding for students in need.",
      highlights: [
        "90+ students trained in modern production stacks and prompt engineering",
        "Established remote learning campus on Discord with live code reviews",
        "Providing 100% need-based scholarships for economically disadvantaged students",
      ],
      badge: "Pedagogy & Philanthropy",
    },
  ];

  const education = [
    {
      degree: "BSc Computing",
      institution: "Coventry University",
      origin: "United Kingdom",
      details: "Comprehensive study in software engineering, computing architectures, database systems, and modern digital platforms.",
      badge: "Bachelor of Science",
    },
    {
      degree: "Diploma in Electronics",
      institution: "Thapathali Campus (IOE, Tribhuvan University)",
      origin: "Kathmandu, Nepal",
      details: "Rigorous technical foundation in circuit design, embedded microcontrollers, electronics hardware, and telematics systems.",
      badge: "Engineering Diploma",
    },
  ];

  const skills = [
    { category: "Executive & Process", items: ["Leadership", "Project Management", "Agile & Scrum", "Digital Transformation", "Problem Solving"] },
    { category: "Technical & Systems", items: ["Business Architecture", "ERP Systems", "GPS & IoT Telematics", "Product Development", "Next.js & .NET Core"] },
    { category: "Design & Pedagogy", items: ["UI/UX Design", "Digital Marketing", "Technical Training & Workshops", "Educational Game Concepts", "Aerial Drone Cinema"] },
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
            <span>Professional Trajectory & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Career Milestones & Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A track record spanning corporate leadership, IoT telematics, technical training, 
            interactive game development, and high-impact digital ventures.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-neutral-900 border border-white/5">
            {[
              { id: "all", label: "All Career Milestones" },
              { id: "leadership", label: "Leadership & Ventures" },
              { id: "experience", label: "Industry Experience" },
              { id: "pedagogy", label: "Education & Mentorship" },
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
        <div className="relative border-l border-neutral-800 ml-4 md:ml-32 max-w-4xl space-y-12 mb-20">
          {filtered.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all" />

              {/* Year chip */}
              <div className="md:absolute md:-left-36 md:top-1.5 text-xs font-mono font-bold text-indigo-400 mb-1 md:mb-0 md:text-right md:w-32">
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

        {/* Education & Academic Qualifications Section */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Education & Academic Background
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400">
              Anchored in formal computing sciences and hands-on electronics engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl vr-glass border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-neutral-300">
                      {edu.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-semibold text-cyan-300 mb-1">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500 mb-3">
                    {edu.origin}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies from CV */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-neutral-900/40 border border-white/10 backdrop-blur-md">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-6 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Core Skills & Leadership Competencies</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {skills.map((s, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="text-xs font-semibold text-indigo-300 border-b border-white/10 pb-2">
                    {s.category}
                  </div>
                  <ul className="space-y-2">
                    {s.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
