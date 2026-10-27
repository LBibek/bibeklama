"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  CheckCircle2,
  Code2,
  Copy,
  Check,
  Calendar,
  Building2,
  UserCheck,
  Sparkles,
  Workflow,
  MessageSquare,
} from "lucide-react";
import { CaseStudy } from "@/lib/caseStudiesData";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { WhatsAppIcon } from "@/components/Icons";

interface CaseStudyDetailViewProps {
  caseStudy: CaseStudy;
}

export function CaseStudyDetailView({ caseStudy }: CaseStudyDetailViewProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    if (caseStudy.codeSnippet?.code) {
      navigator.clipboard.writeText(caseStudy.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  return (
    <div className="space-y-16">
      {/* Top Hero Overview Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/70 border border-white/10 backdrop-blur-md relative overflow-hidden space-y-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none" />

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
            {caseStudy.industry}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono">
            {caseStudy.period}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono">
            Client: <strong className="text-white">{caseStudy.client}</strong>
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {caseStudy.title}
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {caseStudy.subtitle}
          </p>
        </div>

        {/* Role & Live Action Buttons */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>Role: <strong className="text-white">{caseStudy.role}</strong></span>
          </div>

          <div className="flex items-center gap-3">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all group"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}

            <a
              href="https://wa.me/9779768527869?text=Hello%20Bibek,%20I%20reviewed%20your%20case%20study%20on%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inquire Architecture Consulting</span>
            </a>
          </div>
        </div>
      </div>

      {/* High-Impact Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {caseStudy.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md space-y-2 relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
          >
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              {metric.label}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {metric.value}
              </span>
              {metric.change && (
                <span className="text-xs font-bold font-mono text-emerald-400">
                  {metric.change}
                </span>
              )}
            </div>
            <div className="text-xs text-neutral-400 leading-snug">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Section 1: Executive Overview & The Problem */}
      <div className="space-y-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            01 • Problem Statement & Technical Constraints
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            The Architectural Challenge
          </h2>
        </div>

        <p className="text-base text-neutral-300 leading-relaxed max-w-4xl">
          {caseStudy.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {caseStudy.challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold text-xs font-mono">
                !
              </div>
              <h4 className="text-sm font-bold text-white tracking-tight">
                {challenge.title}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {challenge.description}
              </p>
              <div className="pt-2 border-t border-rose-500/10 text-[11px] font-mono text-rose-300">
                Impact: {challenge.impact}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Interactive System Architecture Blueprint */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            02 • System Architecture Blueprint
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Multi-Tier Architecture & Data Pipeline
          </h2>
        </div>

        <ArchitectureDiagram layers={caseStudy.architectureLayers} />
      </div>

      {/* Section 3: Key Technical Decisions & Trade-Offs */}
      <div className="space-y-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            03 • Engineering Trade-Offs & Rationale
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why We Chose This Architecture
          </h2>
        </div>

        <div className="space-y-4">
          {caseStudy.decisions.map((decision, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white">
                  {decision.title}
                </h4>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-neutral-500 line-through">
                    Alt: {decision.alternative}
                  </span>
                  <span className="text-cyan-400 font-semibold">
                    → Selected: {decision.choice}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {decision.rationale}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Production Code Blueprint Snippet */}
      {caseStudy.codeSnippet && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                04 • Production Code Pattern
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {caseStudy.codeSnippet.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono transition-colors self-start sm:self-auto"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Code Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy Snippet</span>
                </>
              )}
            </button>
          </div>

          <div className="rounded-2xl bg-[#090b10] border border-white/10 overflow-hidden shadow-2xl">
            <div className="px-4 py-2.5 bg-neutral-900 border-b border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>{caseStudy.codeSnippet.language.toUpperCase()} Core Implementation</span>
              <span>Production Pattern</span>
            </div>
            <pre className="p-6 text-xs sm:text-sm font-mono text-cyan-300 overflow-x-auto leading-relaxed">
              <code>{caseStudy.codeSnippet.code}</code>
            </pre>
          </div>

          <p className="text-xs text-neutral-400 font-mono">
            💡 {caseStudy.codeSnippet.explanation}
          </p>
        </div>
      )}

      {/* Section 5: Measured Business Outcomes */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
            05 • Enterprise Outcomes
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Measured Business & Operational Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudy.outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2"
            >
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Outcome 0{idx + 1}</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box for Enterprise Consulting */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-neutral-900 to-cyan-950/60 border border-cyan-500/30 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
          <Workflow className="w-3.5 h-3.5" />
          <span>Enterprise Systems & Architecture Practice</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Planning a High-Scale Enterprise System or IoT Telematics Pipeline?
        </h3>

        <p className="text-xs sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Book an architecture advisory session with Bibek Lama to review database scaling, Next.js server components, .NET Core microservices, or custom software requirements.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href="https://wa.me/9779768527869?text=Hello%20Bibek,%20I%20would%20like%20to%20consult%20on%20an%20enterprise%20systems%20architecture%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/20 transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Schedule WhatsApp Technical Consultation</span>
          </a>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/10 transition-all"
          >
            <span>Submit Project RFP</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
