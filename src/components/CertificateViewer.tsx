"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Award,
  BookOpen,
  Copy,
  Check,
  Printer,
  Share2,
  ExternalLink,
  Code2,
  Layers,
  Sparkles,
  QrCode,
} from "lucide-react";
import { VerifiedCertificate } from "@/lib/certificatesData";
import { LinkedInIcon } from "@/components/Icons";

interface CertificateViewerProps {
  certificate: VerifiedCertificate;
  showBackLink?: boolean;
}

export function CertificateViewer({
  certificate,
  showBackLink = false,
}: CertificateViewerProps) {
  const [copied, setCopied] = useState(false);

  const verificationUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/verify/${certificate.id}`
      : `https://bibeklama.vercel.app/verify/${certificate.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(verificationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const shareToLinkedIn = () => {
    const text = `I am proud to share that my completion of "${certificate.courseTitle}" with Distinction under Bibek Lama Tamang at Going Genius has been verified! Check verification: ${verificationUrl}`;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      verificationUrl
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-6">
      {/* Action Toolbar (Hidden when printing) */}
      <div className="print:hidden flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold text-emerald-400">
            OFFICIAL CRYPTOGRAPHIC VERIFICATION STATUS: ACTIVE
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={shareToLinkedIn}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-medium transition-colors"
          >
            <LinkedInIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Share on LinkedIn</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-lg shadow-emerald-600/20 transition-all"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Holographic Printable Certificate Document */}
      <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-neutral-900/90 border-2 border-emerald-500/30 shadow-2xl overflow-hidden print:border-black print:bg-white print:text-black print:p-8 print:shadow-none">
        {/* Subtle Watermark & Background Ambient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none print:hidden" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[120px] pointer-events-none print:hidden" />

        {/* Certificate Frame Border */}
        <div className="border border-white/10 rounded-2xl p-6 sm:p-10 relative print:border-neutral-400">
          {/* Header Row: Institution & Seal */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 print:border-neutral-300">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[2px] shrink-0 shadow-lg print:border print:border-black">
                <div className="w-full h-full bg-neutral-950 rounded-[14px] flex items-center justify-center font-black text-xl text-white print:bg-white print:text-black">
                  GG
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white tracking-wider uppercase print:text-black font-mono">
                  {certificate.institution}
                </h3>
                <p className="text-xs text-neutral-400 print:text-neutral-600 font-mono">
                  Center for Applied Engineering Pedagogy & Enterprise Systems • Kathmandu, Nepal
                </p>
              </div>
            </div>

            {/* Official Security Stamp */}
            <div className="flex flex-col items-center sm:items-end">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 print:text-emerald-800 text-[11px] font-bold tracking-wider uppercase font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-800" />
                <span>Verified Authentic Credential</span>
              </div>
              <div className="text-[10px] text-neutral-500 print:text-neutral-600 font-mono mt-1">
                ID: {certificate.id}
              </div>
            </div>
          </div>

          {/* Certificate Main Body */}
          <div className="text-center py-10 space-y-6">
            <p className="text-xs uppercase tracking-[3px] text-cyan-400 font-mono font-semibold print:text-neutral-700">
              Certificate of Industry Achievement & Technical Competency
            </p>

            <div className="space-y-2">
              <p className="text-xs text-neutral-400 print:text-neutral-600">This is proudly conferred upon</p>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight print:text-black font-serif">
                {certificate.studentName}
              </h1>
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              <p className="text-xs sm:text-sm text-neutral-300 print:text-neutral-700 leading-relaxed">
                for successfully completing the rigorous industry curriculum, practical code laboratories, and enterprise capstone architecture review for
              </p>
              <div className="text-xl sm:text-2xl font-extrabold text-cyan-300 print:text-cyan-900 tracking-tight font-mono">
                {certificate.courseTitle}
              </div>
              <p className="text-xs text-neutral-400 print:text-neutral-600 font-mono">
                Classroom Cohort: <strong className="text-white print:text-black">{certificate.cohort}</strong> • Logged Hours: <strong className="text-white print:text-black">{certificate.hoursLogged} Hours of Hands-on Labs</strong>
              </p>
            </div>

            {/* Grade & Distinction Badge */}
            <div className="inline-flex items-center gap-3 p-2.5 px-5 rounded-2xl bg-white/5 border border-white/10 print:border-neutral-300 backdrop-blur-md">
              <Award className="w-5 h-5 text-amber-400" />
              <div className="text-left">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 print:text-neutral-600">
                  Performance Assessment
                </div>
                <div className="text-sm font-bold text-white print:text-black">
                  {certificate.completionStatus} • Grade: {certificate.grade}
                </div>
              </div>
            </div>
          </div>

          {/* Verified Capabilities & Capstone Project Box */}
          <div className="my-6 p-6 rounded-2xl bg-black/40 border border-white/10 print:border-neutral-300 print:bg-neutral-50 space-y-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 print:text-neutral-600 mb-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400 print:text-cyan-800" />
                <span>Verified Production Skills & Architectures</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {certificate.skillsVerified.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300 print:text-black print:border-neutral-300 text-xs font-mono"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 print:border-neutral-200">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 print:text-neutral-600 mb-1">
                Evaluated Capstone Project
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white print:text-black">
                {certificate.capstoneProject}
              </p>
            </div>
          </div>

          {/* Signatures & Verification Hash Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10 print:border-neutral-300 items-end">
            {/* Left: Cryptographic Security Hash */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-neutral-400 print:text-neutral-600 uppercase tracking-wider">
                Cryptographic Signature Hash (SHA-256)
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/5 print:border-neutral-300 print:bg-neutral-100 text-[10px] font-mono text-neutral-400 print:text-neutral-700 break-all select-all">
                {certificate.credentialHash}
              </div>
              <div className="flex items-center gap-3 text-[11px] text-neutral-400 print:text-neutral-600 font-mono">
                <span>Issue Date: <strong className="text-white print:text-black">{certificate.issueDate}</strong></span>
                <span>•</span>
                <span>Audit Authority: Going Genius Registry</span>
              </div>
            </div>

            {/* Right: Instructor Signature */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
              <div className="font-serif italic text-2xl text-cyan-300 print:text-cyan-900 font-bold tracking-wider pb-1 border-b-2 border-cyan-500/40 w-56">
                {certificate.instructor}
              </div>
              <div className="text-xs font-bold text-white print:text-black mt-1">
                {certificate.instructor}
              </div>
              <div className="text-[11px] text-neutral-400 print:text-neutral-600 font-mono">
                {certificate.instructorRole}
              </div>
              <div className="text-[10px] text-emerald-400 print:text-emerald-800 font-mono font-semibold">
                Digitally Signed & Validated
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
