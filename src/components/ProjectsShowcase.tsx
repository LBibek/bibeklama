"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Layers,
  Sparkles,
  Server,
  LayoutGrid,
  Shield,
  Video,
  TrendingUp,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  description: string;
  category: "Enterprise Systems" | "Ventures" | "Client Solutions" | "Digital Media";
  link: string;
  badge: string;
  image?: string;
  tech: string[];
  gradient: string;
  borderColor: string;
  highlights: string[];
}

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projects: Project[] = [
    {
      title: "Going Genius",
      tagline: "Technology Studio, Digital Transformation & IT Solutions",
      description:
        "The flagship tech venture founded by Bibek Lama. Going Genius provides end-to-end software development, enterprise business consulting, digital marketing, video production, and industry training workshops.",
      category: "Ventures",
      link: "https://goinggenius.com.np/",
      badge: "Flagship Venture",
      image: "/project-goinggenius.jpg",
      tech: ["Next.js", ".NET", "Enterprise Cloud", "Digital Strategy"],
      gradient: "from-indigo-600/20 via-purple-600/10 to-transparent",
      borderColor: "hover:border-indigo-500/50",
      highlights: [
        "End-to-end enterprise software development",
        "Strategic business consulting & systems architecture",
        "Full digital marketing & video production pipeline",
      ],
    },
    {
      title: "GG Relativity",
      tagline: "Integrated Office ERP & Operations Management System",
      description:
        "A proprietary enterprise operations suite engineered by Going Genius to power internal office workflows, client relationship management, resource scheduling, and operational telemetry.",
      category: "Enterprise Systems",
      link: "https://www.office.goinggenius.com.np/",
      badge: "Enterprise ERP",
      image: "/project-relativity.jpg",
      tech: [".NET", "Next.js", "SQL Server", "Role-Based Security"],
      gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
      borderColor: "hover:border-cyan-500/50",
      highlights: [
        "Unified office resource and task orchestration",
        "Secure role-based access control (RBAC)",
        "Real-time operational dashboards & telemetry",
      ],
    },
    {
      title: "GG Portals",
      tagline: "Unified Multi-Tenant Digital Gateway Platform",
      description:
        "Comprehensive client and student portal platform delivering centralized access to educational materials, project delivery hubs, automated communications, and service subscriptions.",
      category: "Enterprise Systems",
      link: "https://portals.goinggenius.com.np/",
      badge: "Cloud Portal",
      tech: ["Next.js", "REST APIs", "Modern Authentication", "Tailwind CSS"],
      gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
      borderColor: "hover:border-violet-500/50",
      highlights: [
        "Multi-stakeholder dashboard for students and enterprise clients",
        "Streamlined workshop resources and task tracking",
        "Integrated notifications and progress analytics",
      ],
    },
    {
      title: "Finder BD",
      tagline: "Premier Vehicle Tracking & IoT Telematics Platform",
      description:
        "A major telematics and fleet management platform operating in Bangladesh (finder.com.bd). Architecture and engineering support for tracking, live map feeds, fleet analytics, and vehicle security.",
      category: "Client Solutions",
      link: "https://finder.com.bd/",
      badge: "IoT & Fleet Tech",
      image: "/project-telematics.jpg",
      tech: ["IoT Telematics", "Live Geo-tracking", "Scalable APIs", "Enterprise Web"],
      gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
      borderColor: "hover:border-emerald-500/50",
      highlights: [
        "Real-time GPS vehicle tracking and geofencing engine",
        "Fleet health analytics and fuel consumption reporting",
        "High-concurrency telematics message processing",
      ],
    },
    {
      title: "Business IT Consulting & Digital Marketing",
      tagline: "Strategic Consulting, IT Support & Digital Growth",
      description:
        "Empowering businesses to navigate digital transformation with tailored IT architecture, cloud operations, workflow modernization, and revenue-focused digital marketing campaigns.",
      category: "Client Solutions",
      link: "https://goinggenius.com.np/",
      badge: "Consulting Practice",
      image: "/workshop-students.jpg",
      tech: ["Systems Architecture", "IT Governance", "Digital Marketing", "SEO / PPC"],
      gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
      borderColor: "hover:border-amber-500/50",
      highlights: [
        "Tailored enterprise IT roadmaps & tech stack audits",
        "Omnichannel digital marketing strategies",
        "Continuous IT support and infrastructure hardening",
      ],
    },
    {
      title: "Video Creation Team & Media Production",
      tagline: "High-End Visual Storytelling & Corporate Media",
      description:
        "In-house production team creating commercial video content, student masterclass recordings, corporate product explainers, and high-impact visual marketing campaigns.",
      category: "Digital Media",
      link: "https://goinggenius.com.np/",
      badge: "Media Studio",
      image: "/drone-cinematography.jpg",
      tech: ["Cinematography", "Motion Graphics", "Video Editing", "Content Strategy"],
      gradient: "from-rose-600/20 via-pink-600/10 to-transparent",
      borderColor: "hover:border-rose-500/50",
      highlights: [
        "Full-cycle corporate video production & commercials",
        "Educational courseware & interactive workshop media",
        "High-conversion creative video advertising for clients",
      ],
    },
  ];

  const categories = ["All", "Ventures", "Enterprise Systems", "Client Solutions", "Digital Media"];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Ventures & Flagship Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key Systems & Client Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            From the enterprise ecosystem at <strong className="text-white">Going Genius</strong> to large-scale telematics and creative media production pipelines.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-neutral-900 border border-white/10 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl p-7 bg-neutral-950 border border-white/10 ${proj.borderColor} transition-all duration-300 flex flex-col justify-between overflow-hidden hover:scale-[1.01] hover:shadow-2xl hover:shadow-black/60`}
            >
              {/* Aceternity ambient card glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Image Banner */}
                {proj.image && (
                  <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-5 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.6] group-hover:scale-105 group-hover:brightness-[0.75] transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-mono tracking-wide px-2.5 py-0.5 rounded-full bg-neutral-950/80 border border-white/10 text-cyan-300 backdrop-blur-md">
                        {proj.badge}
                      </span>
                    </div>
                  </div>
                )}

                {/* Badge and Link */}
                <div className="flex items-center justify-between mb-3">
                  {!proj.image && (
                    <span className="text-[11px] font-mono tracking-wide px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      {proj.badge}
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-cyan-400">
                    {proj.category}
                  </span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white border border-white/5 transition-colors"
                    title={`Visit ${proj.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-200 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mb-3">
                  {proj.tagline}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {proj.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips & Action Link */}
              <div className="relative z-10 pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-900 border border-white/5 text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors pt-1"
                >
                  <span>Explore Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
