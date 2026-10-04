"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  User,
  Layers,
  Briefcase,
  GraduationCap,
  Award,
  Film,
  Mail,
  Sparkles,
} from "lucide-react";
import { FloatingDock, DockItem } from "@/components/ui/floating-dock";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockLinks: DockItem[] = [
    {
      title: "About",
      href: "#about",
      icon: <User className="w-full h-full" />,
    },
    {
      title: "Bento Matrix",
      href: "#bento",
      icon: <Layers className="w-full h-full" />,
    },
    {
      title: "Ventures",
      href: "#projects",
      icon: <Briefcase className="w-full h-full" />,
    },
    {
      title: "Workshops",
      href: "#workshops",
      icon: <GraduationCap className="w-full h-full" />,
    },
    {
      title: "Experience",
      href: "#milestones",
      icon: <Award className="w-full h-full" />,
    },
    {
      title: "Reels",
      href: "#media",
      icon: <Film className="w-full h-full" />,
    },
    {
      title: "Contact",
      href: "#contact",
      icon: <Mail className="w-full h-full" />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np",
      icon: <LinkedInIcon className="w-full h-full text-cyan-400" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/LBibek",
      icon: <GitHubIcon className="w-full h-full text-white" />,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-neutral-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Simple, Elegant Brand Logo on Left */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-cyan-200">
                  BL
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  Bibek Lama Tamang
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded">
                  Founder
                </span>
              </div>
              <span className="text-[11px] text-neutral-400 font-mono tracking-tight hidden sm:block">
                Going Genius Group
              </span>
            </div>
          </Link>

          {/* Aceternity Floating Dock on the Right */}
          <div className="flex items-center">
            <FloatingDock items={dockLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
