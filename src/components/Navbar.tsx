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
  ArrowUpRight,
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
      title: "Leadership Matrix",
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
      title: "Media Reels",
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
          ? "py-3 bg-neutral-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-12">
          {/* Left: Just clean text 'Bibek Lama' (No logo box, No Going Genius text) */}
          <Link
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-cyan-300 transition-colors z-10"
          >
            Bibek Lama
          </Link>

          {/* Center: Aceternity Floating Dock with Tooltips */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
            <FloatingDock items={dockLinks} />
          </div>

          {/* Right: Connect Action Button & Mobile Dock */}
          <div className="flex items-center gap-3 z-10">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Dock Menu */}
            <div className="block lg:hidden">
              <FloatingDock items={dockLinks} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
