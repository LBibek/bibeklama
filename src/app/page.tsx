import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { BentoSection } from "@/components/BentoSection";
import { ThreePillars } from "@/components/ThreePillars";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { BlogSection } from "@/components/BlogSection";
import { Workshops } from "@/components/Workshops";
import { Philanthropy } from "@/components/Philanthropy";
import { DiscordCommunity } from "@/components/DiscordCommunity";
import { MediaCarousel } from "@/components/MediaCarousel";
import { Timeline } from "@/components/Timeline";
import { Frameworks } from "@/components/Frameworks";
import { TeamTestimonials } from "@/components/TeamTestimonials";
import { PaymentSection } from "@/components/PaymentSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GsapAnimations } from "@/components/GsapAnimations";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
      {/* Search Engine & AI Structured Data (JSON-LD) */}
      <StructuredData />

      {/* GSAP Scroll Trigger & Spatial VR Interaction Engine */}
      <GsapAnimations />

      {/* Sticky Glassmorphic VisionOS Dock/Navbar */}
      <Navbar />

      {/* Main Content: The Narrative Journey of Bibek Lama Tamang */}
      <main className="flex-1">
        {/* ACT I: The Hook, Identity & Visionary Ethos */}
        <Hero />
        <Philosophy />
        <BentoSection />
        <ThreePillars />

        {/* ACT II: The Craft — Flagship Systems & Thought Leadership */}
        <ProjectsShowcase />
        <BlogSection />

        {/* ACT III: The Mission — Pedagogy, Scholarships & Creative Vision */}
        <Workshops />
        <Philanthropy />
        <DiscordCommunity />
        <MediaCarousel />

        {/* ACT IV: The Validation — Track Record, Frameworks & Social Proof */}
        <Timeline />
        <Frameworks />
        <TeamTestimonials />

        {/* ACT V: Action — Enroll, Contribute & Initiate Partnership */}
        <PaymentSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
