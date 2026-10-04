import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { ThreePillars } from "@/components/ThreePillars";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { Workshops } from "@/components/Workshops";
import { Philanthropy } from "@/components/Philanthropy";
import { Frameworks } from "@/components/Frameworks";
import { Timeline } from "@/components/Timeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <ThreePillars />
        <ProjectsShowcase />
        <Workshops />
        <Philanthropy />
        <Frameworks />
        <Timeline />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
