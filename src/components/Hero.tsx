"use client";

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Network,
  Sparkles,
  FileText,
  Building2,
  TrendingUp,
} from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Aceternity Ambient Glow Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse duration-1000" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-violet-600/15 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Top Badge: Executive Status */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 text-xs text-neutral-300 shadow-xl backdrop-blur-md mb-8 hover:border-indigo-500/40 transition-colors">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span className="font-medium text-white">Bibek Lama</span>
        <span className="text-neutral-500">•</span>
        <span className="text-neutral-400">Board of Director & Business Architect</span>
        <span className="text-neutral-500">•</span>
        <span className="text-emerald-400 font-mono text-[11px]">Kathmandu, Nepal</span>
      </div>

      {/* Main Headline */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.12]">
          Steering Governance.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
            Inspiring Minds.
          </span>{" "}
          Architecting Scale.
        </h1>

        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Uniting high-level corporate governance with pedagogical excellence
          and enterprise business architecture to engineer sustainable growth
          and develop the next generation of industry leaders.
        </p>

        {/* Triple Pillar Chips (Hero UI style) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-xs sm:text-sm font-medium backdrop-blur-md hover:bg-indigo-900/40 transition-colors">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Board of Director</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-violet-950/40 border border-violet-500/30 text-violet-200 text-xs sm:text-sm font-medium backdrop-blur-md hover:bg-violet-900/40 transition-colors">
            <GraduationCap className="w-4 h-4 text-violet-400" />
            <span>Academic & Professional Educator</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 text-xs sm:text-sm font-medium backdrop-blur-md hover:bg-cyan-900/40 transition-colors">
            <Network className="w-4 h-4 text-cyan-400" />
            <span>Enterprise Business Architect</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white font-medium text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#pillars"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-md transition-all"
          >
            <Building2 className="w-4 h-4 text-indigo-400" />
            <span>Explore Three Pillars</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-medium text-sm border border-white/5 hover:border-white/15 transition-all"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Inquire for Advisory</span>
          </a>
        </div>
      </div>

      {/* Bento Stats / Metrics Bar */}
      <div className="mt-16 w-full max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/5 backdrop-blur-md flex flex-col hover:border-indigo-500/30 transition-colors">
          <div className="flex items-center justify-between text-indigo-400 mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">
              Governance
            </span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Board Level
          </span>
          <span className="text-xs text-neutral-400 mt-1">
            Fiduciary oversight, risk audit & strategic steering
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/5 backdrop-blur-md flex flex-col hover:border-violet-500/30 transition-colors">
          <div className="flex items-center justify-between text-violet-400 mb-2">
            <GraduationCap className="w-5 h-5" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">
              Pedagogy
            </span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            1,000+
          </span>
          <span className="text-xs text-neutral-400 mt-1">
            Students & aspiring professionals mentored
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/5 backdrop-blur-md flex flex-col hover:border-cyan-500/30 transition-colors">
          <div className="flex items-center justify-between text-cyan-400 mb-2">
            <Network className="w-5 h-5" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">
              Architecture
            </span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Enterprise
          </span>
          <span className="text-xs text-neutral-400 mt-1">
            Systems blueprinting, agility & process alignment
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/5 backdrop-blur-md flex flex-col hover:border-emerald-500/30 transition-colors">
          <div className="flex items-center justify-between text-emerald-400 mb-2">
            <TrendingUp className="w-5 h-5" />
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">
              Impact
            </span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            360° Value
          </span>
          <span className="text-xs text-neutral-400 mt-1">
            Bridging boardroom decisions with classroom & field execution
          </span>
        </div>
      </div>
    </section>
  );
}
