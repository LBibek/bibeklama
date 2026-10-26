import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GsapAnimations } from "@/components/GsapAnimations";
import { ArticlesExplorer } from "@/components/ArticlesExplorer";
import { ContactSection } from "@/components/ContactSection";
import { BookOpen, Sparkles, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Articles & Architecture Insights | Bibek Lama Tamang",
  description:
    "Technical publications, architectural blueprints, and deep dives on Next.js security, ASP.NET Core Clean Architecture, Generative AI agent workflows, and IoT telematics by Bibek Lama.",
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
      <GsapAnimations />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Breadcrumb & Return to Home */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio Home</span>
            </Link>
          </div>

          {/* Page Banner */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Going Genius Engineering Library</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Architecture & Systems Publications
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
              Explore in-depth technical writings authored by Bibek Lama Tamang on modern Next.js zero-trust security, distributed .NET Core Clean Architecture, AI agent orchestration, and edge IoT telematics.
            </p>
          </div>

          {/* Interactive Articles Explorer with Filter and Full Reader */}
          <ArticlesExplorer />
        </div>
      </main>

      {/* Direct Contact & Consulting Area */}
      <ContactSection />

      <Footer />
    </div>
  );
}
