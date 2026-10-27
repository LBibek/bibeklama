import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GsapAnimations } from "@/components/GsapAnimations";
import { CASE_STUDIES_DATA } from "@/lib/caseStudiesData";
import {
  Workflow,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Architecture Case Studies | Bibek Lama Tamang",
  description:
    "In-depth architectural breakdowns of production systems engineered by Bibek Lama: GG Relativity Enterprise ERP, Finder BD Real-Time IoT Telematics, and GG Portals.",
  openGraph: {
    title: "Enterprise Architecture Case Studies | Bibek Lama Tamang",
    description:
      "Deep-dive technical case studies covering .NET Core Clean Architecture, Next.js Server Components, Redis geospatial telemetry, and high-concurrency cloud systems.",
    url: "https://bibeklama.vercel.app/case-studies",
    siteName: "Bibek Lama Tamang - Architecture Practice",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
      <GsapAnimations />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Top Breadcrumb */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio Home</span>
            </Link>
          </div>

          {/* Page Banner */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <Workflow className="w-3.5 h-3.5" />
              <span>Systems Architecture Blueprints</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Enterprise Case Studies & System Blueprints
            </h1>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Explore exhaustive technical post-mortems and architecture breakdowns for high-concurrency systems engineered by <strong className="text-white">Bibek Lama Tamang</strong> across ERP software, IoT telematics, and multi-tenant cloud platforms.
            </p>
          </div>

          {/* Case Studies Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES_DATA.map((study) => (
              <div
                key={study.slug}
                className="rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-cyan-500/40 p-8 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20 group relative overflow-hidden"
              >
                <div className="space-y-6">
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
                      {study.industry}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {study.period}
                    </span>
                  </div>

                  {/* Title & Client */}
                  <div className="space-y-2">
                    <div className="text-xs text-neutral-400 font-mono">
                      Client: <strong className="text-white">{study.client}</strong>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    {study.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-0.5">
                        <div className="text-[10px] font-mono text-neutral-400 uppercase">
                          {m.label}
                        </div>
                        <div className="text-base font-bold text-white">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 pt-2">
                    {study.keyHighlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Read Architecture Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
                      title="Visit Live Application"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
