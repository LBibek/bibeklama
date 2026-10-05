"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
        theme === "dark"
          ? "bg-neutral-900/90 hover:bg-neutral-800 text-amber-300 border border-white/15 shadow-md shadow-black/40 hover:border-amber-400/40"
          : "bg-white/90 hover:bg-white text-indigo-600 border border-neutral-300 shadow-md shadow-neutral-300/40 hover:border-indigo-500"
      } ${className ?? ""}`}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
