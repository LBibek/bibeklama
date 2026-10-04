"use client";

import React, { useState } from "react";
import {
  Video,
  Play,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Camera,
  Film,
  Compass,
  ArrowUpRight,
  Radio,
} from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

interface VideoItem {
  id: string;
  youtubeId: string;
  url: string;
  title: string;
  role: string;
  category: "Direction" | "Aerial Cinematography" | "Production";
  description: string;
  duration?: string;
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
      description:
        "High-definition visual production capturing dynamic movement, mood, and dramatic pacing through meticulous scene composition.",
    },
    {
      id: "v2",
      youtubeId: "gxhW_A1pSP4",
      url: "https://www.youtube.com/watch?v=gxhW_A1pSP4",
      title: "Aerial Perspectives & Landscape Storytelling",
      role: "Drone Pilot & Director",
      category: "Aerial Cinematography",
      description:
        "Sweeping aerial panoramas and precision drone flight paths showcasing natural topography, architectural scale, and visual grandeur.",
    },
    {
      id: "v3",
      youtubeId: "nOOaLZHflfY",
      url: "https://www.youtube.com/watch?v=nOOaLZHflfY&t=128s",
      title: "Storytelling, Pacing & Visual Narrative",
      role: "Director & Visual Producer",
      category: "Direction",
      description:
        "Emotionally resonant directing connecting music, visual motifs, and artistic expressions into an engaging cinematic journey.",
    },
    {
      id: "v4",
      youtubeId: "KipAfaB3Is0",
      url: "https://www.youtube.com/watch?v=KipAfaB3Is0",
      title: "Dynamic Aerial Choreography & Production",
      role: "Drone Pilot & Creative Director",
      category: "Aerial Cinematography",
      description:
        "High-altitude precision piloting combined with seamless camera movement for impactful commercial and creative media.",
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
    <section id="media" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header with Director & Drone Pilot Focus */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>Creative Direction & Aerial Cinema</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Director & Drone Pilot Reel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Translating artistic vision into breathtaking motion pictures. Combining licensed drone piloting, 
            creative direction, and commercial production with the Going Genius video crew.
          </p>

          {/* Social Chip to Instagram */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
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
        <div className="vr-glass rounded-3xl p-4 sm:p-8 relative overflow-hidden shadow-2xl mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Video Player Embed */}
            <div className="lg:col-span-8 relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&rel=0`}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center cursor-pointer bg-neutral-900">
                  {/* YouTube High-Res Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${current.youtubeId}/maxresdefault.jpg`}
                    alt={current.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      // Fallback to hqdefault if maxres not generated
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${current.youtubeId}/hqdefault.jpg`;
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Big Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 w-20 h-20 rounded-full bg-rose-600/90 hover:bg-rose-500 text-white flex items-center justify-center shadow-2xl shadow-rose-600/50 hover:scale-110 active:scale-95 transition-all"
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                      {current.role}
                    </span>
                    <span className="bg-black/60 px-3 py-1 rounded-full backdrop-blur-md text-neutral-300">
                      Click to Play Reel
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Meta Details & Carousel Controls */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {current.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    Reel 0{currentIndex + 1} / 0{videos.length}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {current.title}
                </h3>

                <p className="text-xs font-semibold text-cyan-400 mb-4">
                  {current.role}
                </p>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {current.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <Compass className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Cinematic FPV & Aerial Waypoints</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <Film className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Creative Scripting, Lighting & Direction</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <Camera className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Going Genius Media & Video Production</span>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all"
                    aria-label="Previous Video"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all"
                    aria-label="Next Video"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
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
                    ? "ring-2 ring-rose-500 scale-[1.02] shadow-xl shadow-rose-950/50"
                    : "opacity-70 hover:opacity-100 hover:scale-[1.01]"
                }`}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900">
                  <img
                    src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Play className="w-5 h-5 text-white/90 drop-shadow" />
                  </div>
                </div>
                <div className="p-2">
                  <div className="text-[11px] font-bold text-white truncate">
                    {vid.title}
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono truncate">
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
