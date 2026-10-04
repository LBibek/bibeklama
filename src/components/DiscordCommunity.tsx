"use client";

import React from "react";
import {
  Sparkles,
  Users,
  Mic,
  Code,
  Radio,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { DiscordIcon } from "@/components/Icons";

export function DiscordCommunity() {
  const discordUrl = "https://discord.gg/kjeN4G3cM";

  const benefits = [
    {
      title: "Live Virtual Classrooms & Stages",
      desc: "Weekly audio & video stage sessions breaking down complex Next.js, .NET, and Prompt Engineering topics in real time.",
      icon: Radio,
    },
    {
      title: "Interactive Pair Coding & Debugging",
      desc: "Share your screen, debug production errors with mentors, and receive direct architecture feedback on your code.",
      icon: Code,
    },
    {
      title: "Exclusive Scholarship & Workshop Drops",
      desc: "First access to upcoming bootcamp cohorts, free tuition scholarships, and guest lectures from industry veterans.",
      icon: Sparkles,
    },
    {
      title: "Thriving 24/7 Peer Developer Network",
      desc: "Collaborate with 90+ students and senior engineers building real-world open source packages and enterprise products.",
      icon: Users,
    },
  ];

  return (
    <section id="discord" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="vr-glass rounded-3xl p-8 sm:p-14 relative overflow-hidden hologram-border">
          {/* Ambient Purple/Indigo Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5865F2]/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/40 text-[#a5b4fc] text-xs font-semibold w-fit">
                <DiscordIcon className="w-4 h-4 text-[#5865F2]" />
                <span>Remote Learning Campus on Discord</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Learn Modern Technology Remotely in Real Time.
              </h2>

              <p className="text-base text-neutral-300 leading-relaxed">
                Education shouldn't be confined to physical walls. Bibek Lama runs his remote training, 
                code sprints, and mentorship entirely on Discord—fostering an open, interactive environment 
                where aspiring developers across Nepal collaborate with zero geographical boundaries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {benefits.map((b, i) => {
                  const BIcon = b.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-2 hover:border-[#5865F2]/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm">
                        <BIcon className="w-4 h-4 text-[#818cf8]" />
                        <span>{b.title}</span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-semibold text-sm shadow-xl shadow-[#5865F2]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <DiscordIcon className="w-5 h-5" />
                  <span>Join Discord Community (discord.gg/kjeN4G3cM)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Card: Interactive Mock Discord Stage Widget */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-2xl backdrop-blur-2xl">
                {/* Discord Channel Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#a5b4fc] font-bold text-lg">#</span>
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">
                        nextjs-dotnet-prompting-stage
                      </div>
                      <div className="text-[10px] text-neutral-400">
                        Going Genius Remote Campus
                      </div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Stage</span>
                  </div>
                </div>

                {/* Speaker card */}
                <div className="p-4 rounded-xl bg-neutral-950/80 border border-white/5 flex items-center gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 p-[2px] relative">
                    <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center font-bold text-xs text-white">
                      BL
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-neutral-950 flex items-center justify-center">
                      <Mic className="w-2.5 h-2.5 text-neutral-950" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Bibek Lama</span>
                      <span className="px-1.5 py-0.2 bg-[#5865F2]/20 text-[#a5b4fc] text-[9px] rounded font-mono">
                        Host / Founder
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      Speaking: "Architecting Next.js 16 with AI Agent Prompting"
                    </div>
                  </div>
                </div>

                {/* Interactive Members strip */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-300">
                  <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-white/5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="truncate">Chris Thapa (FE Lead)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-white/5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="truncate">Aman Lama (Product)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-white/5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="truncate">Going Genius Fellow #1</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-white/5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="truncate">+87 Students Listening</span>
                  </div>
                </div>

                {/* Call To Action Inside Widget */}
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium text-center border border-white/10 block transition-colors"
                >
                  Join the Live Voice & Code Channels →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
