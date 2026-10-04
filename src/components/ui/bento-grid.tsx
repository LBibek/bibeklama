"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl group/bento hover:shadow-2xl transition-all duration-300 p-6 sm:p-7 vr-glass border border-white/10 hover:border-cyan-500/40 justify-between flex flex-col space-y-4 relative overflow-hidden backdrop-blur-xl",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-200">
        <div className="flex items-center justify-between mb-2">
          {icon}
          {badge && (
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">
              {badge}
            </span>
          )}
        </div>
        <div className="font-bold text-lg text-white mb-2 tracking-tight group-hover/bento:text-cyan-200 transition-colors">
          {title}
        </div>
        <div className="font-normal text-neutral-300 text-xs sm:text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
