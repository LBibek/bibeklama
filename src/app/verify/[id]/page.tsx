import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GsapAnimations } from "@/components/GsapAnimations";
import { CertificateViewer } from "@/components/CertificateViewer";
import {
  VERIFIED_CERTIFICATES,
  getCertificateById,
} from "@/lib/certificatesData";
import { ShieldCheck, ArrowLeft, ArrowRight, Lock } from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return VERIFIED_CERTIFICATES.map((cert) => ({
    id: cert.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const cert = getCertificateById(id);

  if (!cert) {
    return {
      title: "Credential Not Found | Going Genius Registry",
      description: "The requested certificate ID could not be found in the registry.",
    };
  }

  const pageUrl = `https://bibeklama.vercel.app/verify/${cert.id}`;

  return {
    title: `Verified Credential: ${cert.studentName} — ${cert.courseTitle} | Going Genius`,
    description: `Official Going Genius verification for ${cert.studentName}. Conferred for completing ${cert.courseTitle} with ${cert.completionStatus} under Bibek Lama Tamang.`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `Verified Credential: ${cert.studentName} — ${cert.courseTitle}`,
      description: `Official Going Genius credential verified with distinction. Evaluated capstone: ${cert.capstoneProject}`,
      url: pageUrl,
      siteName: "Going Genius Registry",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Verified Credential: ${cert.studentName}`,
      description: `${cert.courseTitle} • ${cert.completionStatus} (Grade: ${cert.grade})`,
    },
  };
}

export default async function CertificateDetailPage({ params }: PageProps) {
  const { id } = await params;
  const cert = getCertificateById(id);

  if (!cert) {
    notFound();
  }

  // JSON-LD EducationalOccupationalCredential schema
  const credentialSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "@id": `https://bibeklama.vercel.app/verify/${cert.id}#credential`,
    name: cert.courseTitle,
    credentialCategory: "Certificate of Completion & Technical Competency",
    educationalLevel: "Professional Industry Workshop",
    recognizedBy: {
      "@type": "EducationalOrganization",
      name: "Going Genius Group",
      url: "https://goinggenius.com.np/",
    },
    about: {
      "@type": "Course",
      name: cert.courseTitle,
      instructor: {
        "@type": "Person",
        name: cert.instructor,
        jobTitle: cert.instructorRole,
      },
    },
    recipient: {
      "@type": "Person",
      name: cert.studentName,
    },
    validIn: {
      "@type": "AdministrativeArea",
      name: "Global",
    },
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
      {/* Search Engine Credential Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialSchema) }}
      />

      <GsapAnimations />
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Top Breadcrumb */}
          <div className="print:hidden flex items-center justify-between">
            <Link
              href="/verify"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Registry Search</span>
            </Link>

            <span className="text-xs font-mono text-neutral-500">
              AUDIT RECORD #{cert.id}
            </span>
          </div>

          {/* Certificate View Container */}
          <CertificateViewer certificate={cert} showBackLink={true} />

          {/* Link to search more credentials */}
          <div className="print:hidden text-center pt-8 border-t border-white/10">
            <Link
              href="/verify"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Search another student certificate or view registry protocol</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
