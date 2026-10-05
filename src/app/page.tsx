import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoSection } from "@/components/BentoSection";
import { Philosophy } from "@/components/Philosophy";
import { ThreePillars } from "@/components/ThreePillars";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { Workshops } from "@/components/Workshops";
import { MediaCarousel } from "@/components/MediaCarousel";
import { DiscordCommunity } from "@/components/DiscordCommunity";
import { Philanthropy } from "@/components/Philanthropy";
import { TeamTestimonials } from "@/components/TeamTestimonials";
import { Frameworks } from "@/components/Frameworks";
import { Timeline } from "@/components/Timeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GsapAnimations } from "@/components/GsapAnimations";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
      {/* GSAP Scroll Trigger & Spatial VR Interaction Engine */}
      <GsapAnimations />

      {/* Sticky Glassmorphic VisionOS Dock/Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <BentoSection />
        <Philosophy />
        <ThreePillars />
        <ProjectsShowcase />
        <Workshops />
        <MediaCarousel />
        <DiscordCommunity />
        <Philanthropy />
        <TeamTestimonials />
        <Frameworks />
        <Timeline />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
