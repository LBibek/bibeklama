"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  Copy,
  Check,
  Building2,
  GraduationCap,
  Network,
  Clock,
  MapPin,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Video,
  Heart,
  Phone,
  Loader2,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon, DiscordIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sentSummary, setSentSummary] = useState<{
    name: string;
    email: string;
    subject: string;
    timestamp?: string;
  } | null>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Business IT Consulting & Architecture",
    organization: "",
    message: "",
  });

  const linkedInUrl = "https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np";
  const goingGeniusUrl = "https://goinggenius.com.np/";

  const handleCopy = () => {
    navigator.clipboard.writeText(linkedInUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to deliver inquiry. Please try again.");
      }

      setSentSummary({
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        timestamp: data.timestamp,
      });

      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "Business IT Consulting & Architecture",
        organization: "",
        message: "",
      });
    } catch (err: any) {
      setErrorMessage(
        err.message || "An unexpected error occurred. You can reach out directly via WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-900/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Initiate a Dialogue
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Available for business IT consulting, digital marketing & video production, student technical workshops, scholarships, and board appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Profile Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Primary LinkedIn Card (Aceternity Glowing Accent) */}
            <div className="p-8 rounded-3xl bg-neutral-950 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/15 blur-[90px] pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[1.5px] shadow-lg shadow-indigo-500/30">
                  <div className="w-full h-full bg-neutral-950 rounded-[15px] flex items-center justify-center">
                    <LinkedInIcon className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Bibek Lama Tamang
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Business Architect | Project Leader | Tech Professional
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Available for business architecture, IT consulting, IoT/telematics systems, student workshops, and strategic partnerships.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Open LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium border border-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Contact: Email & Phone / WhatsApp (from CV) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:bibeklamatamg@gmail.com"
                className="p-4 rounded-2xl vr-glass flex items-center gap-3 group hover:border-cyan-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-mono text-neutral-400">Direct Email</div>
                  <div className="text-xs font-semibold text-white truncate group-hover:text-cyan-300 transition-colors">
                    bibeklamatamg@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/9779768527869"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl vr-glass flex items-center gap-3 group hover:border-emerald-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-mono text-neutral-400">Phone / WhatsApp</div>
                  <div className="text-xs font-semibold text-white truncate group-hover:text-emerald-300 transition-colors">
                    +977-9768527869
                  </div>
                </div>
              </a>
            </div>

            {/* GitHub, Discord & Instagram Cards (Spatial VR Glass) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://github.com/LBibek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl vr-glass flex items-center justify-between gap-2 group hover:border-white/30"
              >
                <div className="flex items-center gap-2">
                  <GitHubIcon className="w-4 h-4 text-white" />
                  <div>
                    <div className="text-[11px] font-bold text-white">GitHub</div>
                    <div className="text-[9px] text-neutral-400">@bibeklamatmg</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://discord.gg/kjeN4G3cM"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl vr-glass flex items-center justify-between gap-2 group hover:border-[#5865F2]/40"
              >
                <div className="flex items-center gap-2">
                  <DiscordIcon className="w-4 h-4 text-[#818cf8]" />
                  <div>
                    <div className="text-[11px] font-bold text-white">Discord</div>
                    <div className="text-[9px] text-neutral-400">Remote Campus</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-[#818cf8] transition-colors" />
              </a>

              <a
                href="https://www.instagram.com/ggg.bibeklama/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl vr-glass flex items-center justify-between gap-2 group hover:border-pink-500/40"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <div>
                    <div className="text-[11px] font-bold text-white">Instagram</div>
                    <div className="text-[9px] text-neutral-400">@ggg.bibeklama</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>

            {/* Going Genius Company Card */}
            <div className="p-6 rounded-3xl vr-glass flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Company Headquarters</div>
                <div className="text-base font-bold text-white">Going Genius</div>
                <div className="text-xs text-neutral-400">Software Studio, IT Consulting & Marketing</div>
              </div>
              <a
                href={goingGeniusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/40 text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Visit Studio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location & Response Highlights */}
            <div className="p-6 rounded-3xl bg-neutral-900/50 border border-white/5 space-y-4">
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Location</span>
                  <span>Kathmandu, Nepal (Open to global remote consulting)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Response Commitment</span>
                  <span>Replies typically within 24 to 48 business hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation / Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-white/10 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-8">
              Select the nature of your interest below, from IT consulting and video production to student workshops and tech scholarships.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-950/50">
                  <Check className="w-7 h-7" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-mono mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>React Email Template Compiled & Sent</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{sentSummary?.name || "Colleague"}</strong>. Your consultation details have been structured via React Email and forwarded directly to Bibek Lama (<span className="text-cyan-400">bibeklamatamg@gmail.com</span>).
                </p>

                {/* Sent Summary Pill */}
                {sentSummary && (
                  <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 text-left max-w-md mx-auto mb-6 text-xs space-y-1.5">
                    <div className="flex justify-between text-neutral-400">
                      <span>Sender:</span>
                      <span className="text-neutral-200 font-mono">{sentSummary.email}</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Subject:</span>
                      <span className="text-cyan-300 font-medium">{sentSummary.subject}</span>
                    </div>
                    {sentSummary.timestamp && (
                      <div className="flex justify-between text-neutral-400">
                        <span>Delivered at:</span>
                        <span className="text-neutral-300">{sentSummary.timestamp}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`https://wa.me/9779768527869?text=${encodeURIComponent(
                      `Hello Bibek, I just submitted an inquiry on your portfolio regarding "${sentSummary?.subject}" (${sentSummary?.email}). Following up here!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Instant WhatsApp Follow-up</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white text-xs font-semibold transition-all"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs flex items-center justify-between">
                    <span>{errorMessage}</span>
                    <button
                      type="button"
                      onClick={() => setErrorMessage(null)}
                      className="text-rose-400 hover:text-rose-200 text-xs underline ml-2"
                    >
                      Dismiss
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aashish Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="Company, College, or Studio"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Service / Area of Interest
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    >
                      <option value="Business IT Consulting & Architecture">Business IT Consulting & Systems</option>
                      <option value="Custom Software & Full-Stack Development">Custom Software & Full-Stack Development</option>
                      <option value="Mobile Application Development (iOS & Android)">Mobile Application Development (iOS & Android)</option>
                      <option value="UI/UX Development & Product Design">UI/UX Development & Product Design</option>
                      <option value="Graphics Development & Visual Collateral">Graphics Development & Brand Collateral</option>
                      <option value="Logo Making & Corporate Identity">Logo Making & Corporate Identity</option>
                      <option value="AMC for Digital Marketing & Retainer">AMC for Digital Marketing & SEO Retainer</option>
                      <option value="Aerial Drone Cinema & Creative Direction">Aerial Drone Cinema & Creative Film Direction</option>
                      <option value="Course Enrollment (NRS. 25,000 Discounted Fee)">Course Enrollment (Next.js / .NET / AI - NRS. 25,000)</option>
                      <option value="Institutional Workshop Request">Institutional / Campus Workshop Request</option>
                      <option value="Scholarship Program & Philanthropy">Scholarship Inquiries (Need-Based)</option>
                      <option value="Board Directorship & Governance">Board Directorship & Governance Advisory</option>
                      <option value="General Strategic Partnership">General Strategic Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Message / Agenda Overview *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your requirements, project scope, workshop goals, or consultation topic..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 transition-all active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending via React Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message via React Email</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
