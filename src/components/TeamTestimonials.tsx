"use client";

import React from "react";
import {
  ExternalLink,
  Quote,
  Sparkles,
  ArrowUpRight,
  Code2,
  Palette,
  Users2,
  Heart,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

interface TeamMember {
  name: string;
  role: string;
  website: string;
  specialty: string;
  avatarText: string;
  avatarGradient: string;
  quote: string;
  keyWork: string;
  tags: string[];
}

export function TeamTestimonials() {
  const teamMembers: TeamMember[] = [
    {
      name: "Chris Thapa",
      role: "Senior Frontend Engineer & Open Source Builder",
      website: "https://christhapa.com.np/",
      specialty: "Next.js • React • Flutter • Open Source Packages",
      avatarText: "CT",
      avatarGradient: "from-blue-500 to-indigo-600",
      quote:
        "“Bibek dai's architectural mindset completely redefined how I approach frontend engineering and systems scalability. His guidance on Next.js, code craftsmanship, and business realities transformed my career from building interfaces to architecting mission-critical platforms.”",
      keyWork: "Engineered scalable frontend architectures & community npm packages.",
      tags: ["Next.js", "React", "Flutter", "LeanQ Digital"],
    },
    {
      name: "Aman Lama",
      role: "Engineer, Product Designer & Strategist",
      website: "https://www.amanlama.com.np/",
      specialty: "Product Design • UX/UI • Strategic Systems",
      avatarText: "AL",
      avatarGradient: "from-purple-500 to-pink-600",
      quote:
        "“'It begins with an idea'—and Bibek dai showed me how to take that idea from an abstract whiteboard blueprint into a functional, scalable reality. His ability to fuse design empathy with enterprise business architecture is truly one of a kind.”",
      keyWork: "Designed innovative product UX and engineered creative web solutions.",
      tags: ["Product Design", "UX/UI Strategy", "Web Engineering"],
    },
    {
      name: "Going Genius Alumni & Scholars",
      role: "90+ Students Trained Across Nepal",
      website: "https://discord.gg/kjeN4G3cM",
      specialty: "Next.js • .NET Core • Prompt Engineering",
      avatarText: "GG",
      avatarGradient: "from-cyan-500 to-emerald-500",
      quote:
        "“The remote Discord masterclasses and scholarship programs made modern technology accessible to those of us who couldn't afford expensive bootcamps. Learning real production workflows gave us the confidence to step into top-tier tech jobs.”",
      keyWork: "Remote cohort graduates building full-stack applications in active tech roles.",
      tags: ["Discord Community", "90+ Trained", "Scholarship Scholars"],
    },
  ];

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-4">
            <Users2 className="w-3.5 h-3.5" />
            <span>Collaborators & Mentorship Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Endorsements From Close Collaborators
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Hear from industry engineers, product strategists, and fellows who collaborate with Bibek Lama and thrive in the Going Genius ecosystem.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="vr-glass rounded-3xl p-8 flex flex-col justify-between relative group"
            >
              {/* Top Row: Avatar & Profile Link */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${member.avatarGradient} flex items-center justify-center text-white font-bold text-base shadow-lg shadow-black/40 p-[1.5px]`}
                    >
                      <div className="w-full h-full bg-neutral-950/60 rounded-[14px] flex items-center justify-center font-mono tracking-wider">
                        {member.avatarText}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                        {member.name}
                      </h3>
                      <p className="text-[11px] text-cyan-400 font-mono">
                        {member.specialty}
                      </p>
                    </div>
                  </div>

                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white border border-white/5 transition-colors"
                    title={`Visit ${member.name}'s portfolio`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Sub-role label */}
                <div className="text-xs font-semibold text-neutral-400 mb-4">
                  {member.role}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic mb-6">
                  {member.quote}
                </p>
              </div>

              {/* Bottom: Tags & Link */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-cyan-300 transition-colors"
                >
                  <span>Explore Portfolio & Work</span>
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
