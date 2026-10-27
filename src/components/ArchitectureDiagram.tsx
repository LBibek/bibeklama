"use client";

import React, { useState } from "react";
import {
  Layers,
  Server,
  Database,
  Shield,
  Cpu,
  ArrowDown,
  CheckCircle2,
  Workflow,
  Sparkles,
} from "lucide-react";
import { ArchitectureLayer } from "@/lib/caseStudiesData";

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[];
  title?: string;
}

export function ArchitectureDiagram({
  layers,
  title = "Interactive System Architecture Layers",
}: ArchitectureDiagramProps) {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const activeLayer = layers[selectedLayerIndex] || layers[0];

  const getLayerIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Shield className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Database className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="rounded-3xl bg-neutral-900/70 border border-white/10 p-6 sm:p-10 backdrop-blur-md space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>Interactive Architecture Visualizer</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {title}
          </h3>
        </div>
        <div className="text-xs text-neutral-400 font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Click any tier to inspect its internal pipeline</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Tier Stack */}
        <div className="lg:col-span-6 space-y-3">
          {layers.map((layer, idx) => {
            const isSelected = selectedLayerIndex === idx;
            return (
              <React.Fragment key={idx}>
                <div
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? "bg-neutral-900/90 border-cyan-500/60 shadow-xl shadow-cyan-950/30 scale-[1.02]"
                      : "bg-neutral-950/60 border-white/10 hover:border-white/25 hover:bg-neutral-900/60"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-indigo-500" />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? "bg-cyan-500/20 border-cyan-500/40"
                            : "bg-white/5 border-white/10 group-hover:border-white/20"
                        }`}
                      >
                        {getLayerIcon(idx)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                          <span>{layer.name}</span>
                        </div>
                        <div className="text-xs text-neutral-400 font-mono mt-0.5">
                          {layer.badge}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      Tier 0{idx + 1}
                    </div>
                  </div>
                </div>

                {/* Animated Data Flow Connector between tiers */}
                {idx < layers.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-400/60">
                      <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive Layer Inspector */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-neutral-950/80 border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Tier 0{selectedLayerIndex + 1} Specification
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
              {activeLayer.badge}
            </span>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">
              {activeLayer.name}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {activeLayer.description}
            </p>
          </div>

          {/* Core Responsibilities */}
          <div className="space-y-2.5 pt-4 border-t border-white/10">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Architectural Responsibilities
            </div>
            <div className="space-y-2">
              {activeLayer.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="space-y-2.5 pt-4 border-t border-white/10">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Technologies & Protocols
            </div>
            <div className="flex flex-wrap gap-2">
              {activeLayer.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
