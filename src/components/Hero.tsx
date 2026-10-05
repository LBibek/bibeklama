"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Network,
  Video,
  Camera,
  ArrowRight,
  Globe,
  Mail,
  Phone,
  Layers,
  Code2,
  Users2,
  HeartHandshake,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, DiscordIcon, InstagramIcon } from "@/components/Icons";
import { LampContainer } from "@/components/ui/lamp";
import { FloatingDock, DockItem } from "@/components/ui/floating-dock";

export function Hero() {
  const heroDockLinks: DockItem[] = [
    {
      title: "Going Genius Group",
      href: "https://goinggenius.com.np/",
      icon: <Globe className="w-full h-full text-cyan-400" />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np",
      icon: <LinkedInIcon className="w-full h-full text-cyan-400" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/LBibek",
      icon: <GitHubIcon className="w-full h-full text-white" />,
    },
    {
      title: "Discord Campus",
      href: "https://discord.gg/kjeN4G3cM",
      icon: <DiscordIcon className="w-full h-full text-[#818cf8]" />,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/ggg.bibeklama/",
      icon: <InstagramIcon className="w-full h-full text-pink-400" />,
    },
    {
      title: "WhatsApp: +977-9768527869",
      href: "https://wa.me/9779768527869",
      icon: <Phone className="w-full h-full text-emerald-400" />,
    },
    {
      title: "Email: bibeklamatamg@gmail.com",
      href: "mailto:bibeklamatamg@gmail.com",
      icon: <Mail className="w-full h-full text-amber-400" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-16 sm:pt-24">
      <LampContainer className="pt-32 sm:pt-44 pb-16">
        <motion.div
          initial={{ opacity: 0.5, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto px-4"
        >
          {/* Executive Portrait & Active Status */}
          <div className="relative mb-7">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-3xl sm:rounded-[36px] p-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/30 group">
              <div className="w-full h-full rounded-[22px] sm:rounded-[30px] bg-neutral-900 border border-white/20 relative overflow-hidden backdrop-blur-xl">
                <img
                  src="/bibek-portrait.png"
                  alt="Bibek Lama Tamang - Business Architect, Project Leader & Founder"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-neutral-950/60 to-transparent pointer-events-none" />
              </div>
            </div>
            {/* Live Indicator Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-950/95 border border-emerald-500/50 text-emerald-300 text-[11px] font-mono shadow-xl backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Advisory</span>
            </div>
          </div>

          {/* Main Headline bathed in Lamp beam */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl">
            Engineering Ventures.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-300 to-purple-300">
              Empowering Minds.
            </span>{" "}
            Transforming Industry.
          </h1>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Dynamic Business Architect, Project Leader, and Tech Professional. Founder of <strong className="text-white font-medium">Going Genius Group</strong>, 
            driving digital transformation, enterprise ERP systems, and IoT telematics across Nepal.
          </p>

          {/* Core Roles Streamlined Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950/50 border border-indigo-500/30 text-indigo-200 text-xs font-medium backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              Board of Director & Founder
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-200 text-xs font-medium backdrop-blur-md">
              <Network className="w-3.5 h-3.5 text-cyan-400" />
              Business Architect & IT Consultant
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-950/50 border border-violet-500/30 text-violet-200 text-xs font-medium backdrop-blur-md">
              <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
              Educator & Mentor
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-200 text-xs font-medium backdrop-blur-md">
              <Camera className="w-3.5 h-3.5 text-rose-400" />
              Drone Pilot & Film Director
            </span>
          </div>

          {/* Floating Dock for Hero Links (Inline on mobile, Magnified Dock on Desktop) */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 w-full">
            <FloatingDock items={heroDockLinks} mode="inline" />
            <span className="text-[11px] font-mono text-neutral-400 tracking-wider">
              Ventures • Socials • Direct Channels
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto px-4">
            <a
              href="#bento"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-medium text-sm shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Leadership Matrix</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 backdrop-blur-md transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </motion.div>
      </LampContainer>

      {/* Bento Stats / Real metrics bar (VisionOS Spatial VR Glass) */}
      <div className="pb-20 px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 -mt-10 sm:-mt-14 relative z-30">
        <div className="vr-glass p-4 sm:p-5 rounded-2xl flex flex-col hover:border-indigo-500/30 transition-colors">
          <div className="flex items-center justify-between text-indigo-400 mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
              Venture & Board
            </span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Founder
          </span>
          <span className="text-xs text-neutral-300 mt-1">
            Going Genius & corporate board stewardship
          </span>
        </div>

        <div className="vr-glass p-4 sm:p-5 rounded-2xl flex flex-col hover:border-violet-500/30 transition-colors">
          <div className="flex items-center justify-between text-violet-400 mb-2">
            <Users2 className="w-5 h-5" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
              Training
            </span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            90+ Students
          </span>
          <span className="text-xs text-neutral-300 mt-1">
            Trained hands-on in Next.js, .NET & AI prompts
          </span>
        </div>

        <div className="vr-glass p-4 sm:p-5 rounded-2xl flex flex-col hover:border-cyan-500/30 transition-colors">
          <div className="flex items-center justify-between text-cyan-400 mb-2">
            <Code2 className="w-5 h-5" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
              Enterprise
            </span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Flagship Platforms
          </span>
          <span className="text-xs text-neutral-300 mt-1">
            GG Relativity, GG Portals, Finder BD & more
          </span>
        </div>

        <div className="vr-glass p-4 sm:p-5 rounded-2xl flex flex-col hover:border-emerald-500/30 transition-colors">
          <div className="flex items-center justify-between text-emerald-400 mb-2">
            <HeartHandshake className="w-5 h-5" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
              Philanthropy
            </span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Scholarships
          </span>
          <span className="text-xs text-neutral-300 mt-1">
            Empowering students in need with modern tech grants
          </span>
        </div>
      </div>
    </section>
  );
}
