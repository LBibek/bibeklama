"use client";

import React, { useState, useEffect } from "react";
import { Mail, Menu, X, ArrowUpRight, ExternalLink } from "lucide-react";
import { LinkedInIcon, GitHubIcon, DiscordIcon, InstagramIcon } from "@/components/Icons";

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
    { name: "Ventures", href: "#projects" },
    { name: "Workshops", href: "#workshops" },
    { name: "Media Reels", href: "#media" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-neutral-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50"
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
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-wide text-white group-hover:text-indigo-300 transition-colors">
                  Bibek Lama
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">
                  Founder
                </span>
              </div>
              <span className="text-[11px] text-neutral-400 font-mono tracking-tight">
                Going Genius • Board Director • Educator
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://goinggenius.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs hover:bg-cyan-900/40 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Going Genius</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>

            <a
              href="https://github.com/bibeklamatmg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 transition-all"
              title="GitHub Profile"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://discord.gg/kjeN4G3cM"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/30 text-[#a5b4fc] hover:text-white hover:bg-[#5865F2] transition-all"
              title="Join Discord Community"
            >
              <DiscordIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.instagram.com/ggg.bibeklama/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 hover:text-white hover:bg-pink-600 transition-all"
              title="Instagram: @ggg.bibeklama"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>

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
          <div className="lg:hidden flex items-center">
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
        <div className="lg:hidden mt-2 mx-4 p-5 rounded-2xl bg-neutral-900/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <a
              href="https://goinggenius.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Founder, Going Genius</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex flex-col gap-1">
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
