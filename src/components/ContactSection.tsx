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
} from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                    Bibek Lama (Tamang)
                  </h3>
                  <p className="text-xs text-neutral-400">
                    linkedin.com/in/bibeklamatmg
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                For direct executive correspondence, board appointments, speaking engagements, or tech consulting, connect directly via LinkedIn or submit an inquiry.
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

            {/* Going Genius Company Card */}
            <div className="p-6 rounded-3xl bg-neutral-950 border border-white/10 flex items-center justify-between gap-4">
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
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Inquiry Received
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mb-6">
                  Thank you, {formState.name || "Colleague"}. Bibek Lama and the Going Genius team will get back to you promptly.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-semibold"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                  <a
                    href={goingGeniusUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs font-semibold"
                  >
                    Explore Going Genius
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      <option value="Digital Marketing & Video Production">Digital Marketing & Video Production</option>
                      <option value="Student Workshops (Next.js / .NET / Prompt Eng)">Student Workshops (Next.js, .NET, AI)</option>
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
