"use client";

import React, { useState } from "react";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Camera,
  Film,
  ArrowUpRight,
} from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

interface VideoItem {
  id: string;
  youtubeId: string;
  url: string;
  title: string;
  role: string;
  category: "Direction" | "Aerial Cinematography" | "Production";
}

export function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const instagramUrl = "https://www.instagram.com/ggg.bibeklama/";

  const videos: VideoItem[] = [
    {
      id: "v1",
      youtubeId: "6Etz6XPav7Q",
      url: "https://www.youtube.com/watch?v=6Etz6XPav7Q&t=1s",
      title: "Cinematic Visuals & Creative Direction",
      role: "Director & Aerial Drone Cinematographer",
      category: "Direction",
    },
    {
      id: "v2",
      youtubeId: "gxhW_A1pSP4",
      url: "https://www.youtube.com/watch?v=gxhW_A1pSP4",
      title: "Aerial Perspectives & Landscape Storytelling",
      role: "Drone Pilot & Director",
      category: "Aerial Cinematography",
    },
    {
      id: "v3",
      youtubeId: "nOOaLZHflfY",
      url: "https://www.youtube.com/watch?v=nOOaLZHflfY&t=128s",
      title: "Storytelling, Pacing & Visual Narrative",
      role: "Director & Visual Producer",
      category: "Direction",
    },
    {
      id: "v4",
      youtubeId: "KipAfaB3Is0",
      url: "https://www.youtube.com/watch?v=KipAfaB3Is0",
      title: "Dynamic Aerial Choreography & Production",
      role: "Drone Pilot & Creative Director",
      category: "Aerial Cinematography",
    },
  ];

  const current = videos[currentIndex];

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const selectVideo = (index: number) => {
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="media" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-neutral-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header without unnecessary description */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>Creative Direction & Aerial Cinema</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Director & Drone Pilot Reel
          </h2>

          {/* Social Chip to Instagram */}
          <div className="mt-5 flex flex-wrap justify-center items-center gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 border border-pink-500/30 text-pink-300 hover:text-white hover:border-pink-500/60 transition-all text-xs font-semibold shadow-lg shadow-pink-500/10"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>Follow @ggg.bibeklama on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-900 border border-white/10 text-xs text-neutral-300 font-mono">
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
              <span>Aerial Drone Cinema • FPV • 4K Direction</span>
            </div>
          </div>
        </div>

        {/* Featured Video Player (VR Glass Container) */}
        <div className="vr-glass rounded-3xl p-3 sm:p-6 relative overflow-hidden shadow-2xl mb-8">
          {/* Top Video Header Bar: Title, Category & Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 px-2">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  {current.category}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  Reel 0{currentIndex + 1} / 0{videos.length}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs font-medium text-cyan-400 mt-0.5">
                {current.role}
              </p>
            </div>

            {/* Navigation & YouTube link */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all"
                  aria-label="Previous Video"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all"
                  aria-label="Next Video"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-rose-400 hover:text-rose-300 border border-white/10 transition-colors"
              >
                <span>YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Main 16:9 Video Player Viewport */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&rel=0`}
                title={current.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full flex items-center justify-center cursor-pointer bg-neutral-950 overflow-hidden"
              >
                {/* Thumbnail Layer - Absolute Inset */}
                <img
                  src={`https://img.youtube.com/vi/${current.youtubeId}/maxresdefault.jpg`}
                  alt={current.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${current.youtubeId}/hqdefault.jpg`;
                  }}
                />

                {/* Ambient Dim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

                {/* Centered, Highly Visible Pulsing Play Button */}
                <div className="relative z-20 flex flex-col items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing glow ring */}
                    <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-red-600/40 animate-ping pointer-events-none" />
                    
                    {/* Solid Red Play Button */}
                    <button
                      type="button"
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.85)] group-hover:scale-110 active:scale-95 transition-all border-2 border-white/60"
                      aria-label="Play video"
                    >
                      <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-white text-white ml-1.5 drop-shadow-lg" />
                    </button>
                  </div>

                  <span className="px-4 py-1.5 rounded-full bg-black/85 border border-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md shadow-2xl tracking-wide">
                    Click to Play Video
                  </span>
                </div>

                {/* Bottom Role Tag */}
                <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                  <span className="font-semibold text-xs text-white bg-black/75 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                    {current.role}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {videos.map((vid, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={vid.id}
                onClick={() => selectVideo(idx)}
                className={`relative rounded-2xl overflow-hidden p-1 text-left transition-all group ${
                  isSelected
                    ? "ring-2 ring-red-500 scale-[1.02] shadow-xl shadow-red-950/50 bg-neutral-900"
                    : "opacity-75 hover:opacity-100 hover:scale-[1.01] bg-neutral-900/40 hover:bg-neutral-900"
                }`}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-950">
                  <img
                    src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="text-[11px] font-bold text-white truncate">
                    {vid.title}
                  </div>
                  <div className="text-[10px] text-cyan-400 font-medium truncate">
                    {vid.role}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
