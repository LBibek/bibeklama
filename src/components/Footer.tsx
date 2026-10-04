"use client";

import { Mail, ArrowUp } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[1px]">
            <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center font-bold text-xs text-white">
              BL
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Bibek Lama (Tamang)</div>
            <div className="text-xs text-neutral-500">Board of Director • Educator • Business Architect</div>
          </div>
        </div>

        {/* Center Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#pillars" className="hover:text-white transition-colors">Three Pillars</a>
          <a href="#frameworks" className="hover:text-white transition-colors">Frameworks</a>
          <a href="#milestones" className="hover:text-white transition-colors">Milestones</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Connect & Scroll To Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-cyan-400 border border-white/5 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-indigo-400 border border-white/5 transition-colors"
            title="Send Email / Message"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600">
        <div>
          © {new Date().getFullYear()} Bibek Lama. All rights reserved.
        </div>
        <div className="mt-2 sm:mt-0 font-mono">
          Kathmandu, Nepal • Built with Next.js, Tailwind CSS & Modern UI
        </div>
      </div>
    </footer>
  );
}
