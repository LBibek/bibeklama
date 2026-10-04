"use client";

import React from "react";
import { Mail, ArrowUp, ExternalLink } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-14 px-4 sm:px-6 lg:px-8 text-neutral-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        {/* Brand & Summary */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center font-bold text-xs text-white">
                BL
              </div>
            </div>
            <div>
              <div className="text-base font-bold text-white">Bibek Lama (Tamang)</div>
              <div className="text-xs text-neutral-400">Founder, Going Genius • Board Director • Educator</div>
            </div>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
            Bridging corporate governance with enterprise business architecture, digital marketing, and transformative tech workshops. Dedicated to mentoring 90+ students and funding educational scholarships in Nepal.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-cyan-400 border border-white/5 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href="https://goinggenius.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/40 text-cyan-300 border border-cyan-500/30 text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
              title="Going Genius Website"
            >
              <span>Going Genius</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="#contact"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-indigo-400 border border-white/5 transition-colors"
              title="Direct Inquiry"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 flex flex-col gap-2.5 text-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-white mb-2 font-mono">Navigation</div>
          <a href="#about" className="hover:text-white transition-colors">Executive Philosophy</a>
          <a href="#pillars" className="hover:text-white transition-colors">Three Leadership Pillars</a>
          <a href="#projects" className="hover:text-white transition-colors">Ventures & Projects</a>
          <a href="#workshops" className="hover:text-white transition-colors">Student Workshops</a>
          <a href="#philanthropy" className="hover:text-white transition-colors">Scholarship Philanthropy</a>
          <a href="#milestones" className="hover:text-white transition-colors">Milestones</a>
          <a href="#contact" className="hover:text-white transition-colors">Inquire & Contact</a>
        </div>

        {/* Flagship Platforms */}
        <div className="md:col-span-4 flex flex-col gap-2.5 text-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-white mb-2 font-mono">Flagship Platforms</div>
          <a
            href="https://goinggenius.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between hover:text-cyan-300 transition-colors p-2 rounded-lg bg-neutral-900/50 border border-white/5"
          >
            <span>Going Genius Studio</span>
            <ExternalLink className="w-3 h-3 text-neutral-500" />
          </a>
          <a
            href="https://www.office.goinggenius.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between hover:text-cyan-300 transition-colors p-2 rounded-lg bg-neutral-900/50 border border-white/5"
          >
            <span>GG Relativity (Office ERP)</span>
            <ExternalLink className="w-3 h-3 text-neutral-500" />
          </a>
          <a
            href="https://portals.goinggenius.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between hover:text-cyan-300 transition-colors p-2 rounded-lg bg-neutral-900/50 border border-white/5"
          >
            <span>GG Portals Platform</span>
            <ExternalLink className="w-3 h-3 text-neutral-500" />
          </a>
          <a
            href="https://finder.com.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between hover:text-cyan-300 transition-colors p-2 rounded-lg bg-neutral-900/50 border border-white/5"
          >
            <span>Finder BD (Telematics & Fleet)</span>
            <ExternalLink className="w-3 h-3 text-neutral-500" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600">
        <div>
          © {new Date().getFullYear()} Bibek Lama. Founder of Going Genius. All rights reserved.
        </div>
        <div className="mt-2 sm:mt-0 flex items-center gap-4">
          <span className="font-mono">Kathmandu, Nepal</span>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
