"use client";

import React, { useState, useEffect } from "react";
import { Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Three Pillars", href: "#pillars" },
    { name: "Frameworks", href: "#frameworks" },
    { name: "Milestones", href: "#milestones" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-neutral-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center">
                <span className="font-bold text-base tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-cyan-200">
                  BL
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wide text-white group-hover:text-indigo-300 transition-colors">
                Bibek Lama
              </span>
              <span className="text-[11px] text-neutral-400 font-mono tracking-tight">
                Director • Educator • Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Board Advisory</span>
            </div>

            <a
              href="https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-medium rounded-full group bg-gradient-to-br from-indigo-500 to-cyan-500 group-hover:from-indigo-600 group-hover:to-cyan-600 hover:text-white text-white shadow-md shadow-indigo-500/20 hover:scale-[1.02] transition-all"
            >
              <span className="relative px-3.5 py-1.5 transition-all ease-in duration-75 bg-neutral-950 rounded-full group-hover:bg-opacity-0 flex items-center gap-1.5">
                <LinkedInIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-white" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-5 rounded-2xl bg-neutral-900/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Board Advisory</span>
          </div>

          <div className="flex flex-col gap-1 border-t border-white/5 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/5 flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30"
            >
              <LinkedInIcon className="w-4 h-4" />
              Connect on LinkedIn
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium border border-white/10"
            >
              <Mail className="w-4 h-4" />
              Direct Message
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
