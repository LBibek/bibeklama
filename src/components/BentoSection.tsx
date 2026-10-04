"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Building2,
  Navigation,
  Camera,
  GraduationCap,
  BookOpen,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function BentoSection() {
  const items = [
    {
      title: "Going Genius Group — Flagship Venture",
      description:
        "Founder & Director directing executive strategy, enterprise ERP systems (GG Relativity & GG Portals), digital marketing, and commercial video creation pipelines.",
      header: (
        <div className="relative w-full h-36 rounded-2xl bg-gradient-to-tr from-indigo-950/80 via-neutral-900 to-cyan-950/40 p-4 border border-white/5 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-cyan-400">goinggenius.com.np</span>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold border border-cyan-500/30">
              Active Studio
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-xl bg-white/5 border border-white/5">
              <div className="text-xs font-bold text-white">GG Relativity</div>
              <div className="text-[9px] text-neutral-400">Enterprise ERP</div>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/5">
              <div className="text-xs font-bold text-white">GG Portals</div>
              <div className="text-[9px] text-neutral-400">Student & Client Hub</div>
            </div>
            <div className="p-2 rounded-xl bg-white/5 border border-white/5">
              <div className="text-xs font-bold text-white">Media Crew</div>
              <div className="text-[9px] text-neutral-400">Video & Marketing</div>
            </div>
          </div>
        </div>
      ),
      className: "md:col-span-2",
      icon: <Building2 className="w-5 h-5 text-cyan-400" />,
      badge: "Founder & Director",
    },
    {
      title: "IoT & GPS Telematics Track Record",
      description:
        "Former Project Head at Finder GPS Nepal. Managed enterprise vehicle tracking implementations, expanded operations, and drove a documented 20% surge in sales.",
      header: (
        <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-emerald-950/50 via-neutral-900 to-teal-950/40 p-4 border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-emerald-300">+20% Sales Growth</span>
          </div>
          <div className="space-y-1 text-xs text-neutral-300">
            <div className="flex items-center gap-1.5 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Finder GPS Nepal (2018–2020)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Finder BD Telematics Architecture</span>
            </div>
          </div>
        </div>
      ),
      className: "md:col-span-1",
      icon: <Navigation className="w-5 h-5 text-emerald-400" />,
      badge: "Telematics Leader",
    },
    {
      title: "Aerial Drone Pilot & Film Director",
      description:
        "Certified Drone Pilot specializing in cinematic FPV, commercial video directing, and dramatic visual storytelling with the Going Genius video crew.",
      header: (
        <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-rose-950/50 via-neutral-900 to-pink-950/40 p-4 border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Camera className="w-5 h-5 text-rose-400" />
            <a
              href="https://www.instagram.com/ggg.bibeklama/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-pink-300 hover:text-white flex items-center gap-1 font-mono"
            >
              <span>@ggg.bibeklama</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="text-xs text-neutral-300 font-mono">
            <span>FPV Precision • 4K Direction • Commercial Ads</span>
          </div>
        </div>
      ),
      className: "md:col-span-1",
      icon: <Camera className="w-5 h-5 text-rose-400" />,
      badge: "Drone Pilot & Director",
    },
    {
      title: "Technical Pedagogy & Technology Scholarships",
      description:
        "90+ students mentored across Next.js, .NET Core, and Prompt Engineering. Standard tuition NRS. 30,000 currently discounted to NRS. 25,000, with 100% need-based scholarships.",
      header: (
        <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-violet-950/60 via-neutral-900 to-indigo-950/40 p-4 border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-violet-300">90+ Students Empowered</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
              NRS. 25,000 Special Fee
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-neutral-300">
            <div className="p-1.5 rounded-lg bg-white/5">Next.js Full-Stack</div>
            <div className="p-1.5 rounded-lg bg-white/5">.NET Core APIs</div>
            <div className="p-1.5 rounded-lg bg-white/5">Prompt Eng & AI</div>
          </div>
        </div>
      ),
      className: "md:col-span-2",
      icon: <GraduationCap className="w-5 h-5 text-violet-400" />,
      badge: "Pedagogy & Philanthropy",
    },
    {
      title: "Academic Credentials",
      description:
        "BSc Computing from Coventry University (UK) & Diploma in Electronics from IOE Thapathali Campus (Nepal).",
      header: (
        <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-blue-950/50 via-neutral-900 to-indigo-950/40 p-4 border border-white/5 flex flex-col justify-between">
          <BookOpen className="w-5 h-5 text-blue-400" />
          <div className="space-y-1 text-xs">
            <div className="font-bold text-white">Coventry University</div>
            <div className="text-[11px] text-neutral-400">IOE Thapathali Campus</div>
          </div>
        </div>
      ),
      className: "md:col-span-1",
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      badge: "UK & IOE Education",
    },
    {
      title: "Direct Executive Advisory & Contact",
      description:
        "Direct correspondence for business IT consulting, enterprise systems architecture, or speaking engagements. Based in Kathmandu, Nepal.",
      header: (
        <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-cyan-950/50 via-neutral-900 to-indigo-950/40 p-4 border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <span className="text-[10px] font-mono text-emerald-400">Available</span>
          </div>
          <div className="text-xs text-neutral-300">
            <div className="font-semibold text-white">+977-9768527869</div>
            <div className="text-[11px] text-cyan-300">bibeklamatamg@gmail.com</div>
          </div>
        </div>
      ),
      className: "md:col-span-2",
      icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
      badge: "Direct Contact",
    },
  ];

  return (
    <section id="bento" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Leadership Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Integrated Leadership Matrix
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Synthesizing entrepreneurship, telematics systems, creative film direction, and philanthropic technical pedagogy into a single vision.
          </p>
        </div>

        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              badge={item.badge}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
