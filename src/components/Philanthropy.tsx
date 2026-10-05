"use client";

import React from "react";
import {
  Heart,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function Philanthropy() {
  const pillars = [
    {
      title: "Need-Based Technology Scholarships",
      description:
        "Providing full and partial tuition scholarships to passionate students facing financial barriers, unlocking access to advanced computer science and software development training.",
      metric: "100% Tuition Covered for Selected Scholars",
    },
    {
      title: "Modern Tech Tooling & Mentorship Access",
      description:
        "Equipping scholars not just with coursework, but with developer environments, cloud credits, industry-grade project reviews, and direct 1-on-1 mentorship.",
      metric: "Direct 1-on-1 Portfolio Reviews",
    },
    {
      title: "Industry Readiness & Job Placement Support",
      description:
        "Connecting underprivileged students directly with hiring companies, tech startups, and internships through the Going Genius network.",
      metric: "Bridging the Gap to First Employment",
    },
  ];

  return (
    <section id="philanthropy" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-900/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium w-fit">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/20" />
              <span>Philanthropy in Education</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Empowering Deserving Students Through Technology Scholarships.
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              Talent is equally distributed, but opportunity is not. As an educator and entrepreneur, 
              Bibek Lama is committed to ensuring that financial limitations never stop ambitious students 
              from mastering modern technologies like Next.js, .NET, and Artificial Intelligence.
            </p>

            {/* Mentorship & Scholarship Classroom visual */}
            <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/10 my-1">
              <img
                src="/tech-education.jpg"
                alt="Developer Workstations and Scholarship Labs"
                className="w-full h-full object-cover object-center filter brightness-[0.55]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-white">Full-Stack Cohort & Lab Sprints</span>
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-mono border border-rose-500/30">
                  Kathmandu & Remote
                </span>
              </div>
            </div>

            <blockquote className="p-5 rounded-2xl bg-neutral-950/80 border-l-4 border-rose-500 text-neutral-200 text-sm sm:text-base italic leading-relaxed">
              “Education is the ultimate equalizer. When we provide a scholarship to a student in need, 
              we aren't just teaching code—we are transforming an entire family's economic future.”
              <span className="block mt-2 not-italic font-semibold text-xs text-rose-300">
                — Bibek Lama
              </span>
            </blockquote>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Cost for Eligible Students</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Modern Web & AI Focus</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Career Placement Guidance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-neutral-950 border border-white/10 hover:border-rose-500/30 transition-all shadow-xl group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                    Scholarship Initiative
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="text-xs font-mono text-cyan-400 flex items-center gap-2 pt-2 border-t border-white/5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.metric}</span>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-950/30 to-purple-950/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-sm font-bold text-white">Know a Student in Need?</div>
                <div className="text-xs text-neutral-400">Nominate or apply for upcoming scholarship cohorts.</div>
              </div>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-bold transition-colors shrink-0"
              >
                Inquire for Scholarships
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
