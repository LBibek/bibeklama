"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  LayoutGrid,
  ArrowUpRight,
  Code2,
  Smartphone,
  Palette,
  PenTool,
  TrendingUp,
  ShieldCheck,
  Server,
  Layers,
  Video,
} from "lucide-react";
import { WhatsAppIcon } from "./Icons";

interface Project {
  title: string;
  tagline: string;
  description: string;
  category: "Enterprise Systems" | "Ventures" | "Client Solutions" | "Digital Media";
  link: string;
  linkText?: string;
  badge: string;
  image?: string;
  tech: string[];
  gradient: string;
  borderColor: string;
  highlights: string[];
  whatsappMessage: string;
}

export function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projects: Project[] = [
    {
      title: "Custom Software Development",
      tagline: "Bespoke Enterprise Systems, Microservices & High-Scale Cloud Apps",
      description:
        "Full-cycle custom software engineering engineered for business scale. Building high-throughput backends with .NET Core and Node.js, modern Next.js client architectures, optimized SQL / PostgreSQL databases, and resilient microservices.",
      category: "Client Solutions",
      link: "https://goinggenius.com.np/",
      linkText: "Software Services",
      badge: "Custom Software",
      image: "/project-relativity.jpg",
      tech: [".NET Core", "Next.js", "PostgreSQL", "Docker", "REST / GraphQL", "Cloud APIs"],
      gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
      borderColor: "hover:border-blue-500/50",
      highlights: [
        "Distributed microservice architecture with automated CI/CD pipelines",
        "Role-based security (RBAC), multi-tenant isolation & data encryption",
        "High-concurrency database queries & real-time socket communication",
      ],
      whatsappMessage:
        "Hello Bibek, I would like to inquire about Custom Software Development for our company.",
    },
    {
      title: "Mobile Application Development",
      tagline: "High-Performance Cross-Platform iOS & Android Engineering",
      description:
        "Developing fluid, responsive, production-ready mobile applications built with Flutter and React Native. Equipped with background telemetry, offline-first data caching, push notifications, and frictionless payment gateway integrations.",
      category: "Client Solutions",
      link: "https://goinggenius.com.np/",
      linkText: "Mobile Solutions",
      badge: "Mobile Apps",
      image: "/project-telematics.jpg",
      tech: ["Flutter", "React Native", "iOS & Android", "Firebase", "Offline Caching", "REST APIs"],
      gradient: "from-cyan-600/20 via-teal-600/10 to-transparent",
      borderColor: "hover:border-cyan-500/50",
      highlights: [
        "Native 60fps animations with single-codebase velocity and parity",
        "Real-time background GPS tracking & IoT sensor telemetry integration",
        "Full App Store and Google Play publication, compliance & lifecycle updates",
      ],
      whatsappMessage:
        "Hello Bibek, I am looking for Mobile Application Development (iOS & Android) for my project.",
    },
    {
      title: "UI/UX Development & Product Design",
      tagline: "Human-Centred Interaction Design, Wireframing & Design Systems",
      description:
        "Translating complex business requirements into intuitive, engaging user interfaces. From deep user persona research and Figma interactive prototypes to atomic design systems and accessible front-end UI implementation.",
      category: "Client Solutions",
      link: "https://goinggenius.com.np/",
      linkText: "Design Services",
      badge: "UI/UX Design",
      image: "/tech-education.jpg",
      tech: ["Figma", "Design Systems", "Interactive Prototyping", "Tailwind CSS", "User Journey", "WCAG"],
      gradient: "from-purple-600/20 via-pink-600/10 to-transparent",
      borderColor: "hover:border-purple-500/50",
      highlights: [
        "High-fidelity clickable Figma prototypes with complete interaction states",
        "Modular token-based design systems for unified cross-platform branding",
        "Data-driven heuristic evaluations and conversion funnel optimizations",
      ],
      whatsappMessage:
        "Hello Bibek, I would like to consult on UI/UX Development and Product Design.",
    },
    {
      title: "AMC for Digital Marketing",
      tagline: "Annual Maintenance Contract: Continuous SEO, Meta Ads & Growth",
      description:
        "End-to-end annual marketing governance and maintenance contracts. Retainer covering strategic search engine optimization (SEO), Meta and Google ad campaigns, editorial content calendars, social media moderation, and monthly ROI reports.",
      category: "Client Solutions",
      link: "https://goinggenius.com.np/",
      linkText: "Inquire AMC",
      badge: "Marketing AMC Retainer",
      image: "/project-consulting.jpg",
      tech: ["SEO / SEM Retainer", "Meta Ads", "Google Ads", "GA4 Telemetry", "Content Calendar", "ROI Audits"],
      gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
      borderColor: "hover:border-emerald-500/50",
      highlights: [
        "Guaranteed monthly multi-channel campaign deployment & budget optimization",
        "Continuous technical & on-page SEO maintenance to protect keyword rankings",
        "Transparent monthly stakeholder reports with clear CAC and ROI telemetry",
      ],
      whatsappMessage:
        "Hello Bibek, I would like to inquire about the AMC (Annual Maintenance Contract) for Digital Marketing.",
    },
    {
      title: "Enterprise IT Consulting",
      tagline: "Strategic Advisory, Infrastructure Governance & Modernization",
      description:
        "Executive technology consulting empowering enterprises to navigate digital transformation. Advising on ERP selection, cloud migrations, security hygiene, disaster recovery planning, and IT vendor management to eliminate costly tech debt.",
      category: "Client Solutions",
      link: "https://goinggenius.com.np/",
      linkText: "Consulting Practice",
      badge: "IT Consulting & Advisory",
      image: "/project-consulting.jpg",
      tech: ["Systems Architecture", "IT Governance", "Cloud Migration", "Security Audits", "Tech Debt Review"],
      gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
      borderColor: "hover:border-amber-500/50",
      highlights: [
        "In-depth enterprise infrastructure audits & technology roadmap design",
        "Vendor technical evaluations, contract vetting & RFP architecture",
        "Cloud cost optimization (AWS, Azure, Vercel) and compliance governance",
      ],
      whatsappMessage:
        "Hello Bibek, I would like to book an Enterprise IT Consulting and Systems Architecture session.",
    },
    {
      title: "Graphics Development & Visual Collateral",
      tagline: "High-Impact Commercial Visuals, Digital Art & Marketing Kits",
      description:
        "Professional commercial graphics production tailored for forward-thinking brands. Designing high-converting social media creative packs, digital advertising banners, event displays, print collateral, and 3D visual assets.",
      category: "Digital Media",
      link: "https://goinggenius.com.np/",
      linkText: "Creative Studio",
      badge: "Graphics Production",
      image: "/drone-cinematography.jpg",
      tech: ["Adobe Photoshop", "Illustrator", "Brand Collateral", "Digital Advertising", "Print Media", "Vector Art"],
      gradient: "from-pink-600/20 via-rose-600/10 to-transparent",
      borderColor: "hover:border-pink-500/50",
      highlights: [
        "Cohesive omnichannel ad graphics for Meta, Google, LinkedIn & TikTok",
        "Print-ready vectors and press collateral (brochures, packaging, banners)",
        "Fast-turnaround event creative kits and corporate presentation decks",
      ],
      whatsappMessage:
        "Hello Bibek, I would like to inquire about Graphics Development and commercial visual assets.",
    },
    {
      title: "Logo Making & Corporate Identity",
      tagline: "Distinctive Logomarks, Typography Hierarchy & Brand Manuals",
      description:
        "Crafting memorable visual identities that stand the test of time. Engineering bespoke geometric and abstract logomarks, definitive typography pairings, color systems, and comprehensive brand guideline manuals.",
      category: "Digital Media",
      link: "https://goinggenius.com.np/",
      linkText: "Identity Services",
      badge: "Brand Identity & Logo",
      tech: ["Vector Logomarks", "Typography Systems", "Color Palette Theory", "Brand Manual", "Iconography"],
      gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
      borderColor: "hover:border-violet-500/50",
      highlights: [
        "Custom geometric and symbolic logomarks delivered in all vector formats",
        "Comprehensive brand style guide detailing margins, rules, and typography",
        "Complete corporate stationery kit (business cards, letterheads, digital avatars)",
      ],
      whatsappMessage:
        "Hello Bibek, I would like to discuss Logo Making and Corporate Brand Identity.",
    },
    {
      title: "Going Genius",
      tagline: "Technology Studio, Digital Transformation & IT Solutions",
      description:
        "The flagship tech venture founded by Bibek Lama. Going Genius provides end-to-end software development, enterprise business consulting, digital marketing, video production, and industry training workshops.",
      category: "Ventures",
      link: "https://goinggenius.com.np/",
      linkText: "Visit Going Genius",
      badge: "Flagship Venture",
      image: "/project-goinggenius.jpg",
      tech: ["Next.js", ".NET", "Enterprise Cloud", "Digital Strategy"],
      gradient: "from-indigo-600/20 via-purple-600/10 to-transparent",
      borderColor: "hover:border-indigo-500/50",
      highlights: [
        "End-to-end enterprise software development and systems engineering",
        "Strategic business consulting & corporate digital transformation",
        "Full digital marketing & video production pipeline across Nepal",
      ],
      whatsappMessage:
        "Hello Bibek, I would like to connect regarding Going Genius technology solutions.",
    },
    {
      title: "GG Relativity",
      tagline: "Integrated Office ERP & Operations Management System",
      description:
        "A proprietary enterprise operations suite engineered by Going Genius to power internal office workflows, client relationship management, resource scheduling, and operational telemetry.",
      category: "Enterprise Systems",
      link: "https://www.office.goinggenius.com.np/",
      linkText: "View ERP Portal",
      badge: "Enterprise ERP",
      image: "/project-relativity.jpg",
      tech: [".NET", "Next.js", "SQL Server", "Role-Based Security", "Telemetry"],
      gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
      borderColor: "hover:border-cyan-500/50",
      highlights: [
        "Unified office resource and task orchestration dashboard",
        "Secure role-based access control (RBAC) and audit trails",
        "Real-time operational dashboards & management telemetry",
      ],
      whatsappMessage:
        "Hello Bibek, I would like to inquire about GG Relativity Enterprise ERP system.",
    },
    {
      title: "GG Portals",
      tagline: "Unified Multi-Tenant Digital Gateway Platform",
      description:
        "Comprehensive client and student portal platform delivering centralized access to educational materials, project delivery hubs, automated communications, and service subscriptions.",
      category: "Enterprise Systems",
      link: "https://portals.goinggenius.com.np/",
      linkText: "Access Portals",
      badge: "Cloud Portal",
      tech: ["Next.js", "REST APIs", "Modern Authentication", "Tailwind CSS"],
      gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
      borderColor: "hover:border-violet-500/50",
      highlights: [
        "Multi-stakeholder dashboard for students and enterprise clients",
        "Streamlined workshop resources and task tracking pipeline",
        "Integrated notifications and progress analytics tracking",
      ],
      whatsappMessage:
        "Hello Bibek, I would like to learn more about GG Portals multi-tenant platform.",
    },
    {
      title: "Finder BD",
      tagline: "Premier Vehicle Tracking & IoT Telematics Platform",
      description:
        "A major telematics and fleet management platform operating in Bangladesh (finder.com.bd). Architecture and engineering support for tracking, live map feeds, fleet analytics, and vehicle security.",
      category: "Client Solutions",
      link: "https://finder.com.bd/",
      linkText: "Visit Finder BD",
      badge: "IoT & Fleet Tech",
      image: "/project-telematics.jpg",
      tech: ["IoT Telematics", "Live Geo-tracking", "Scalable APIs", "Enterprise Web"],
      gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
      borderColor: "hover:border-emerald-500/50",
      highlights: [
        "Real-time GPS vehicle tracking and geofencing engine",
        "Fleet health analytics and fuel consumption reporting",
        "High-concurrency telematics message processing pipeline",
      ],
      whatsappMessage:
        "Hello Bibek, I am interested in IoT & GPS Telematics solutions based on Finder BD.",
    },
    {
      title: "Video Creation Team & Media Production",
      tagline: "High-End Visual Storytelling, Drone Cinematography & Corporate Media",
      description:
        "In-house production team creating commercial video content, student masterclass recordings, corporate product explainers, and high-impact visual marketing campaigns with aerial drone cinematography.",
      category: "Digital Media",
      link: "https://goinggenius.com.np/",
      linkText: "View Media Studio",
      badge: "Media Studio",
      image: "/drone-cinematography.jpg",
      tech: ["Drone Cinematography", "Motion Graphics", "Video Editing", "Content Strategy"],
      gradient: "from-rose-600/20 via-pink-600/10 to-transparent",
      borderColor: "hover:border-rose-500/50",
      highlights: [
        "Full-cycle corporate video production & commercials",
        "Educational courseware & interactive workshop media",
        "Licensed drone cinematography and aerial footage capture",
      ],
      whatsappMessage:
        "Hello Bibek, I would like to discuss video production, commercial media, and drone cinematography.",
    },
  ];

  const categories = [
    "All",
    "Client Solutions",
    "Enterprise Systems",
    "Digital Media",
    "Ventures",
  ];

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
            <span>Ventures, Client Solutions & Specialized Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key Systems & Client Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            From the enterprise ecosystem at <strong className="text-white">Going Genius</strong> to bespoke software engineering, mobile apps, UI/UX, branding, and comprehensive AMC contracts.
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

              <div className="relative z-10 flex-1">
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

                {/* Badge and Category Header */}
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

              {/* Tech Stack Chips & Action Link with WhatsApp Button */}
              <div className="relative z-10 pt-4 border-t border-white/5 flex flex-col gap-3 mt-auto">
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

                {/* Dual Action Bar: WhatsApp Button + Explore Link */}
                <div className="flex items-center justify-between gap-2 pt-2">
                  <a
                    href={`https://wa.me/9779768527869?text=${encodeURIComponent(proj.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-200 active:scale-[0.98] group/wa shadow-sm"
                    title={`Inquire about ${proj.title} on WhatsApp`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0 text-emerald-400 group-hover/wa:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-white group-hover:text-cyan-300 transition-colors"
                  >
                    <span>{proj.linkText || "Explore"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
