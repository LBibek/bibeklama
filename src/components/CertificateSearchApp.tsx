"use client";

import React, { useState } from "react";
import {
  Search,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Award,
  ArrowRight,
  GraduationCap,
  Users2,
  Lock,
} from "lucide-react";
import {
  VERIFIED_CERTIFICATES,
  getCertificateById,
  searchCertificates,
  VerifiedCertificate,
} from "@/lib/certificatesData";
import { CertificateViewer } from "@/components/CertificateViewer";

interface CertificateSearchAppProps {
  initialCertificateId?: string;
}

export function CertificateSearchApp({
  initialCertificateId,
}: CertificateSearchAppProps) {
  const [searchQuery, setSearchQuery] = useState(initialCertificateId || "GG-2026-NX-1042");
  const [selectedCertificate, setSelectedCertificate] = useState<VerifiedCertificate | null>(
    initialCertificateId ? getCertificateById(initialCertificateId) || null : VERIFIED_CERTIFICATES[0]
  );
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const cert = getCertificateById(searchQuery);
    setSelectedCertificate(cert || null);
  };

  const selectSample = (id: string) => {
    setSearchQuery(id);
    setHasSearched(true);
    const cert = getCertificateById(id);
    setSelectedCertificate(cert || null);
  };

  return (
    <div className="space-y-12">
      {/* Search Bar & Sample Chips */}
      <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-md shadow-2xl space-y-6">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter Certificate ID (e.g. GG-2026-NX-1042)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-neutral-950 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 text-sm font-mono tracking-wider transition-colors"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Verify Credential</span>
          </button>
        </form>

        {/* Quick Sample Chips for Immediate Testing */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Test with active student credential samples:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {VERIFIED_CERTIFICATES.map((cert) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => selectSample(cert.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
                  selectedCertificate?.id === cert.id
                    ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-sm"
                    : "bg-white/5 border-white/10 text-neutral-300 hover:border-white/20 hover:text-white"
                }`}
              >
                <span className="font-bold text-white">{cert.id}</span>
                <span className="text-neutral-400 ml-1.5 font-sans">({cert.studentName})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Verification Result Display */}
      {selectedCertificate ? (
        <CertificateViewer certificate={selectedCertificate} />
      ) : hasSearched ? (
        <div className="p-12 rounded-3xl bg-rose-500/10 border border-rose-500/30 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white">No Verified Credential Found</h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
            The certificate ID <strong className="text-white font-mono">{searchQuery}</strong> could not be verified in the official Going Genius registry. Please verify the ID format or contact the issuing office.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => selectSample("GG-2026-NX-1042")}
              className="text-xs text-cyan-400 hover:underline font-mono"
            >
              Load verified sample: GG-2026-NX-1042 →
            </button>
          </div>
        </div>
      ) : null}

      {/* Verification Protocol Architecture & Trust Signals */}
      <div className="pt-12 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>Going Genius Trust & Verification Protocol</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How Credentials Are Audited & Verified
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400">
            Going Genius certificates validate production-grade engineering competence rather than passive attendance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Capstone Architecture Defense</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every certified graduate has designed, written, and defended a working full-stack production system with real database schemas, authentication, and deployment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Cryptographic Tamper-Proof Hash</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Each certificate is permanently signed with a unique SHA-256 hash registered in the central Going Genius database, ensuring credentials cannot be altered or falsified.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Direct Instructor Endorsement</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              All credentials are personally inspected and signed by Bibek Lama Tamang, serving as a trusted reference for tech recruiters and hiring teams worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
