import React from "react";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://bibeklama.vercel.app/#person",
    name: "Bibek Lama Tamang",
    alternateName: ["Bibek Lama", "Bibek Lama Tmg"],
    jobTitle: "Business Architect & Project Leader",
    description:
      "Founder of Going Genius Group. Executive leader specializing in Enterprise Architecture, IoT Telematics, Cloud Platforms, and Applied Technical Pedagogy.",
    url: "https://bibeklama.vercel.app",
    image: "https://bibeklama.vercel.app/bibek-portrait.png",
    sameAs: [
      "https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np",
      "https://github.com/LBibek",
      "https://www.instagram.com/ggg.bibeklama/",
      "https://discord.gg/kjeN4G3cM",
      "https://goinggenius.com.np/",
    ],
    worksFor: {
      "@type": "Organization",
      "@id": "https://goinggenius.com.np/#organization",
      name: "Going Genius Group",
      url: "https://goinggenius.com.np/",
      logo: "https://bibeklama.vercel.app/logo.png",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Coventry University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Thapathali Campus, IOE",
      },
    ],
    knowsAbout: [
      "Enterprise Systems Architecture",
      "Next.js & React Server Components",
      "Microsoft .NET Core & Web APIs",
      "IoT Telematics & Real-Time Tracking",
      "PostgreSQL & Cloud Infrastructure",
      "Prompt Engineering & Generative AI",
      "FPV & Aerial Drone Cinematography",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://goinggenius.com.np/#organization",
    name: "Going Genius Group",
    alternateName: "Going Genius",
    url: "https://goinggenius.com.np/",
    logo: "https://bibeklama.vercel.app/logo.png",
    founder: {
      "@type": "Person",
      name: "Bibek Lama Tamang",
    },
    description:
      "Enterprise software engineering, systems architecture consulting, and hands-on technical pedagogy based in Kathmandu, Nepal.",
    sameAs: [
      "https://www.facebook.com/GoingGeniusNepal",
      "https://www.instagram.com/going_genius",
      "https://www.linkedin.com/company/goinggenius/",
    ],
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industry-Ready Technical Training Workshops by Bibek Lama",
    itemListElement: [
      {
        "@type": "Course",
        name: "Next.js Full-Stack Mastery",
        description:
          "Master Next.js App Router, React Server Components (RSC), Server Actions, Tailwind CSS, and cloud production deployment.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Going Genius Group",
          sameAs: "https://goinggenius.com.np/",
        },
        instructor: {
          "@type": "Person",
          name: "Bibek Lama Tamang",
        },
        offers: {
          "@type": "Offer",
          price: "25000",
          priceCurrency: "NPR",
          category: "Technical Workshop",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Course",
        name: "Enterprise .NET Core & Web APIs",
        description:
          "C# object-oriented paradigms, ASP.NET Core Web API architecture, Entity Framework Core, Linq, dependency injection, and scalable microservices.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Going Genius Group",
          sameAs: "https://goinggenius.com.np/",
        },
        instructor: {
          "@type": "Person",
          name: "Bibek Lama Tamang",
        },
        offers: {
          "@type": "Offer",
          price: "25000",
          priceCurrency: "NPR",
          category: "Technical Workshop",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Course",
        name: "Prompt Engineering & Generative AI",
        description:
          "Master LLM prompt architecture, multi-agent frameworks, few-shot conditioning, and AI-accelerated modern development.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Going Genius Group",
          sameAs: "https://goinggenius.com.np/",
        },
        instructor: {
          "@type": "Person",
          name: "Bibek Lama Tamang",
        },
        offers: {
          "@type": "Offer",
          price: "25000",
          priceCurrency: "NPR",
          category: "Technical Workshop",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bibeklama.vercel.app/#website",
    name: "Bibek Lama Tamang",
    url: "https://bibeklama.vercel.app",
    inLanguage: ["en-US", "ne-NP"],
    author: {
      "@type": "Person",
      name: "Bibek Lama Tamang",
    },
    publisher: {
      "@type": "Organization",
      name: "Going Genius Group",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
