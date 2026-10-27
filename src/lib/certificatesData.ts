export interface VerifiedCertificate {
  id: string; // e.g., GG-2026-NX-1042
  studentName: string;
  courseId: "nextjs" | "dotnet" | "genai";
  courseTitle: string;
  category: string;
  issueDate: string;
  completionStatus: "Verified with Distinction" | "Verified Completion" | "Honors Graduate";
  grade: string;
  credentialHash: string;
  instructor: string;
  instructorRole: string;
  institution: string;
  capstoneProject: string;
  skillsVerified: string[];
  hoursLogged: number;
  cohort: string;
}

export const VERIFIED_CERTIFICATES: VerifiedCertificate[] = [
  {
    id: "GG-2026-NX-1042",
    studentName: "Rohan Shrestha",
    courseId: "nextjs",
    courseTitle: "Next.js Full-Stack Mastery & Cloud Architecture",
    category: "Modern Web & React",
    issueDate: "February 20, 2026",
    completionStatus: "Verified with Distinction",
    grade: "A+ (96%)",
    credentialHash: "e8f9a2b71c4d603e91f5a8c2d1b04e6f9a7c3b2d1e0f8a9b7c6d5e4f3a2b1c0",
    instructor: "Bibek Lama Tamang",
    instructorRole: "Founder & Director, Going Genius Group",
    institution: "Going Genius Institute of Technology",
    capstoneProject: "Multi-Tenant Enterprise Logistics Telematics Dashboard with Server Actions",
    skillsVerified: [
      "React Server Components (RSC) & Streaming SSR",
      "Next.js App Router Architecture & Dynamic Segments",
      "Server Actions Zero-Trust CSRF Security",
      "PostgreSQL Database Indexing & Prisma ORM",
      "Tailwind CSS & Responsive Component Engineering",
      "Vercel Edge Network & Production Optimization",
    ],
    hoursLogged: 60,
    cohort: "Winter 2026 Cohort #4",
  },
  {
    id: "GG-2026-NET-2088",
    studentName: "Aayush Adhikari",
    courseId: "dotnet",
    courseTitle: "Enterprise .NET Core & Distributed Web APIs",
    category: "Enterprise Backend",
    issueDate: "January 15, 2026",
    completionStatus: "Honors Graduate",
    grade: "A+ (94%)",
    credentialHash: "f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2",
    instructor: "Bibek Lama Tamang",
    instructorRole: "Founder & Director, Going Genius Group",
    institution: "Going Genius Institute of Technology",
    capstoneProject: "High-Throughput Banking Ledger & RBAC Microservices Architecture",
    skillsVerified: [
      "Clean Architecture & Onion Domain Layering",
      "ASP.NET Core Web APIs & Middleware Pipeline",
      "Entity Framework Core & SQL Server Migrations",
      "JWT Authentication, Claims & RBAC Security",
      "Dependency Injection & Repository Patterns",
      "Docker Containerization & Microservice Resiliency",
    ],
    hoursLogged: 65,
    cohort: "Winter 2026 Cohort #3",
  },
  {
    id: "GG-2026-AI-3015",
    studentName: "Prativa Gurung",
    courseId: "genai",
    courseTitle: "Prompt Engineering & Generative AI Multi-Agent Systems",
    category: "AI & Future of Work",
    issueDate: "March 10, 2026",
    completionStatus: "Verified with Distinction",
    grade: "A+ (97%)",
    credentialHash: "9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8",
    instructor: "Bibek Lama Tamang",
    instructorRole: "Founder & Director, Going Genius Group",
    institution: "Going Genius Institute of Technology",
    capstoneProject: "Autonomous Customer Support Agent with Vector Embeddings & Tool Calling",
    skillsVerified: [
      "Structured Prompt Conditioning & System Directives",
      "Few-Shot In-Context Learning & Schema Adherence",
      "Chain-of-Thought (CoT) & ReAct Autonomous Agents",
      "Retrieval-Augmented Generation (RAG) Architecture",
      "LLM Guardrails, Safety Checks & Token Optimization",
      "AI-Accelerated Full-Stack Code Generation",
    ],
    hoursLogged: 55,
    cohort: "Spring 2026 Cohort #2",
  },
  {
    id: "GG-2025-NX-0981",
    studentName: "Kiran Thapa",
    courseId: "nextjs",
    courseTitle: "Next.js Full-Stack Mastery & Cloud Architecture",
    category: "Modern Web & React",
    issueDate: "October 18, 2025",
    completionStatus: "Verified Completion",
    grade: "A (91%)",
    credentialHash: "3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2",
    instructor: "Bibek Lama Tamang",
    instructorRole: "Founder & Director, Going Genius Group",
    institution: "Going Genius Institute of Technology",
    capstoneProject: "E-Commerce Catalog with Real-Time Stock Webhooks & Stripe Integration",
    skillsVerified: [
      "App Router Server Components & Static Site Generation (SSG)",
      "Next.js Route Handlers & REST API Architecture",
      "Zod Schema Validation & Form Handling",
      "PostgreSQL Integration via Supabase",
      "Tailwind CSS Responsive Design Systems",
    ],
    hoursLogged: 60,
    cohort: "Autumn 2025 Cohort #2",
  },
  {
    id: "GG-2025-NET-0872",
    studentName: "Pooja Sharma",
    courseId: "dotnet",
    courseTitle: "Enterprise .NET Core & Distributed Web APIs",
    category: "Enterprise Backend",
    issueDate: "August 24, 2025",
    completionStatus: "Verified with Distinction",
    grade: "A+ (95%)",
    credentialHash: "4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5",
    instructor: "Bibek Lama Tamang",
    instructorRole: "Founder & Director, Going Genius Group",
    institution: "Going Genius Institute of Technology",
    capstoneProject: "Hospital Patient Electronic Medical Records (EMR) Management Core",
    skillsVerified: [
      "ASP.NET Core RESTful APIs & Swagger Documentation",
      "Entity Framework Core Complex Queries & Lazy Loading Control",
      "Enterprise Unit Testing with xUnit & Moq",
      "Role-Based Access Control (RBAC) & Audit Logging",
      "Clean Architecture Separation of Concerns",
    ],
    hoursLogged: 65,
    cohort: "Summer 2025 Cohort #1",
  },
];

export function getCertificateById(id: string): VerifiedCertificate | undefined {
  const cleanId = id.trim().toUpperCase();
  return VERIFIED_CERTIFICATES.find((cert) => cert.id.toUpperCase() === cleanId);
}

export function searchCertificates(query: string): VerifiedCertificate[] {
  const q = query.trim().toLowerCase();
  if (!q) return VERIFIED_CERTIFICATES;
  return VERIFIED_CERTIFICATES.filter(
    (c) =>
      c.id.toLowerCase().includes(q) ||
      c.studentName.toLowerCase().includes(q) ||
      c.courseTitle.toLowerCase().includes(q) ||
      c.capstoneProject.toLowerCase().includes(q)
  );
}
