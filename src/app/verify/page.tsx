import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GsapAnimations } from "@/components/GsapAnimations";
import { CertificateSearchApp } from "@/components/CertificateSearchApp";
import { ShieldCheck, ArrowLeft, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Official Certificate & Credential Verification Registry | Going Genius & Bibek Lama",
  description:
    "Verify official student certificates and technical credentials issued by Going Genius Group and Bibek Lama Tamang for Next.js, .NET Core, and Prompt Engineering workshops.",
  openGraph: {
    title: "Certificate Verification Registry | Going Genius & Bibek Lama",
    description:
      "Verify authentic credentials, capstone projects, and evaluated grades for graduates of Next.js, .NET Core, and AI workshops.",
    url: "https://bibeklama.vercel.app/verify",
    siteName: "Going Genius Registry",
    type: "website",
  },
};

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
      <GsapAnimations />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb / Return */}
          <div className="mb-8 print:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio Home</span>
            </Link>
          </div>

          {/* Page Banner (Hidden when printing) */}
          <div className="print:hidden text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Institutional Registry</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Certificate & Credential Verification Gateway
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Verify genuine certifications, evaluate capstone project defenses, and confirm verified skills conferred to students of <strong className="text-white">Going Genius</strong> and mentored by <strong className="text-white">Bibek Lama Tamang</strong>.
            </p>
          </div>

          {/* Interactive Search & Holographic Credential App */}
          <CertificateSearchApp />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
