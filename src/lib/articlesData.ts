export interface ArticleContent {
  heading: string;
  body: string;
  codeSnippet?: string;
  codeLanguage?: string;
  callout?: {
    type: "warning" | "tip" | "security";
    title: string;
    text: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  category: string;
  readingTime: string;
  date: string;
  author: string;
  authorRole: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: ArticleContent[];
}

export const ARTICLES_DATA: Article[] = [
  {
    id: "nextjs-server-actions-security",
    slug: "nextjs-server-actions-security-architecture",
    title: "The Critical Importance of Next.js: Mastering Server Actions with Zero-Trust Security",
    subtitle:
      "Why Next.js has become the gold standard for enterprise web engineering, and how to safeguard Server Actions against CSRF, unauthorized mutation, and data leakage.",
    badge: "Engineering & Architecture",
    category: "Full-Stack Security",
    readingTime: "7 min read",
    date: "October 2026",
    author: "Bibek Lama Tamang",
    authorRole: "Business Architect & Project Leader, Going Genius",
    summary:
      "Next.js has transformed web development from fragmented single-page apps into unified, high-performance edge architectures. However, the introduction of React Server Actions introduces a paradigm shift: every exported server action function becomes a public POST HTTP endpoint. Understanding this mental model is essential for architecting enterprise-grade applications that are impervious to unauthorized execution.",
    keyTakeaways: [
      "Next.js App Router unifies data fetching, static rendering, and streaming into a single compiler pipeline.",
      "Server Actions ('use server') are public HTTP endpoints callable by anyone who knows the action ID, not private internal functions.",
      "Zero-trust authentication, input validation (Zod), and role authorization must execute inside every Server Action.",
      "Secure closures with React taint APIs to prevent internal connection strings and secrets from leaking to client bundles.",
      "Leverage optimistic updates and Server Action form states for seamless UX without compromising backend integrity.",
    ],
    contentSections: [
      {
        heading: "1. Why Next.js is the Foundation of Modern Enterprise Web",
        body: `Over the past five years, the industry has transitioned away from the brittle 'SPA + detached REST API' pattern toward unified full-stack meta-frameworks. Next.js, powered by React Server Components (RSC) and Turbopack, is the frontrunner in this revolution.

By executing component logic on the server before streaming HTML to the browser, Next.js slashes client-side JavaScript payloads by up to 70%, guarantees instant first-contentful paint (FCP), and elevates organic SEO. For engineering teams at Going Genius and beyond, it provides a cohesive language across serverless edge lambdas, incremental static regeneration (ISR), and real-time user interfaces.`,
      },
      {
        heading: "2. The Mental Model: Server Actions Are Public Endpoints",
        body: `One of the most transformative features of Next.js is Server Actions—functions defined with the 'use server' directive that allow React components to trigger asynchronous server code without manually creating API route handlers or managing fetch request boilerplate.

However, many engineers fall into a dangerous cognitive trap: assuming that because a function lives in the same codebase as a React component, it is 'internal' or 'protected'. 

In reality, when Next.js compiles a file with 'use server', it assigns each action a cryptographically secure ID and registers an HTTP POST handler. Any client, automated curl script, or malicious actor can forge an HTTP POST request directly to that action ID with arbitrary JSON arguments.`,
        callout: {
          type: "security",
          title: "Security Imperative",
          text: "Never assume a Server Action was invoked by your own frontend UI. Treat every Server Action with the same rigorous threat model you would apply to an unauthenticated public REST endpoint.",
        },
      },
      {
        heading: "3. The 4-Layer Defense Architecture for Server Actions",
        body: `To build bulletproof enterprise backends in Next.js, our team at Going Genius enforces a 4-layer defense in every Server Action mutation:

1. Authentication & Session Verification: Verify caller identity before any business logic executes.
2. Strict Schema Validation (Zod): Validate argument structure and sanitise against injection attacks.
3. Granular Authorization & Role Enforcement: Verify the user holds write permissions for the specific resource.
4. Rate Limiting & Audit Logging: Prevent brute-force submissions and maintain forensic transparency.`,
        codeSnippet: `// actions/update-profile.ts
"use server";

import { z } from "zod";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

const ProfileSchema = z.object({
  fullName: z.string().min(2).max(100),
  bio: z.string().max(500).optional(),
});

export async function updateProfile(formData: FormData) {
  // Layer 1: Zero-Trust Authentication
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("401 Unauthorized: Session required");
  }

  // Layer 2: Strict Zod Parsing
  const parsed = ProfileSchema.safeParse({
    fullName: formData.get("fullName"),
    bio: formData.get("bio"),
  });

  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  // Layer 3: Scoped Authorization Mutation
  await db.user.update({
    where: { id: session.user.id }, // Scoped directly to session ID, preventing IDOR
    data: parsed.data,
  });

  // Layer 4: Cache Invalidation
  revalidatePath("/profile");
  return { success: true };
}`,
        codeLanguage: "typescript",
      },
      {
        heading: "4. Preventing Data Leakage with 'server-only' and React Taint",
        body: `A common vulnerability in Next.js applications is accidental secret leakage when database entities or private utility functions are inadvertently imported into Client Components ('use client').

Next.js provides two vital tools to eliminate this attack vector:
1. The 'server-only' package: Adding 'import "server-only"' at the top of a module causes the Next.js compiler to throw a build-time error if that file is ever imported by a client component.
2. Experimental React Taint APIs ('experimental_taintObjectReference' & 'experimental_taintUniqueValue'): Instructs React to throw an error if an environment token, user password hash, or payment secret is ever passed across the client-server boundary.`,
        callout: {
          type: "tip",
          title: "Compiler-Enforced Safety",
          text: "Make 'import \"server-only\"' standard boilerplate in all database adapters, API key registries, and private cryptographic helpers.",
        },
      },
      {
        heading: "5. Real-World UX: Optimistic UI & useActionState",
        body: `Security does not have to come at the cost of responsiveness. Modern Next.js patterns combine React 19 hooks—such as 'useActionState' and 'useOptimistic'—with secure Server Actions to deliver instantaneous UI updates while preserving server authority.

If a server mutation fails or is rejected by security validation, the optimistic state is automatically rolled back, keeping the client state strictly synchronized with the database ledger without brittle manual catch blocks.`,
      },
    ],
  },
  {
    id: "enterprise-dot-net-clean-architecture",
    slug: "enterprise-dot-net-clean-architecture",
    title: "Scaling Distributed Backends: ASP.NET Core & Clean Architecture",
    subtitle:
      "Architectural patterns for decoupling domain business logic, implementing CQRS with MediatR, and engineering high-throughput corporate services.",
    badge: "Enterprise Systems",
    category: "Backend Architecture",
    readingTime: "6 min read",
    date: "October 2026",
    author: "Bibek Lama Tamang",
    authorRole: "Business Architect & Project Leader, Going Genius",
    summary:
      "When building enterprise ERPs, inventory backbones, and financial transaction processors, architectural discipline separates resilient software from unmaintainable monoliths. This article outlines the Clean Architecture paradigm in .NET 8/9, isolating core entities from external database drivers and HTTP transports.",
    keyTakeaways: [
      "The Dependency Inversion Principle mandates that high-level business rules never depend on low-level data access implementations.",
      "Command Query Responsibility Segregation (CQRS) separates read-heavy queries from validated state mutations.",
      "Entity Framework Core migrations must be governed with explicit transaction boundaries and idempotent scripts.",
      "MediatR pipeline behaviors provide centralized validation, performance metrics, and distributed tracing across all request pipelines.",
    ],
    contentSections: [
      {
        heading: "1. The Four Concentric Layers of Clean Architecture",
        body: `In traditional N-tier architectures, the database schema dictates the entire application design. Clean Architecture reverses this dependency. The core Domain entities sit at the center, surrounded by Application use cases, followed by Infrastructure (EF Core, Redis, Kafka), and outer Presentation interfaces (ASP.NET Core Web APIs).

By enforcing strict directional flow—where dependencies point solely inward—the enterprise can swap the underlying SQL database or cloud provider without rewriting a single line of core business rules.`,
      },
      {
        heading: "2. CQRS Pattern with MediatR & Pipeline Behaviors",
        body: `Separating Reads from Writes simplifies both domain logic and horizontal scalability. Queries can bypass heavyweight ORM entity tracking and read directly from read-replicas using Dapper, while Commands execute through comprehensive domain validators and audit logs.`,
        codeSnippet: `// Application/Orders/CreateOrderCommand.cs
public record CreateOrderCommand(Guid CustomerId, List<OrderItemDto> Items) : IRequest<Result<Guid>>;

public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, Result<Guid>>
{
    private readonly IOrderRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public CreateOrderHandler(IOrderRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task<Result<Guid>> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
    {
        var order = Order.Create(request.CustomerId, request.Items);
        await _repository.AddAsync(order, cancellationToken);
        await _unitOfWork.CommitAsync(cancellationToken);
        return Result<Guid>.Success(order.Id);
    }
}`,
        codeLanguage: "csharp",
      },
      {
        heading: "3. Enterprise Reliability & Resiliency Patterns",
        body: `At Going Genius, enterprise backends are fortified with Polly retry policies, circuit breakers, and rate-limiting middleware. Every API endpoint enforces standardized ProblemDetails responses conforming to RFC 7807, ensuring frontend clients receive deterministic error payloads.`,
      },
    ],
  },
  {
    id: "ai-prompt-engineering-workflows",
    slug: "ai-prompt-engineering-workflows",
    title: "From Chatbots to Autonomous Agents: The Modern AI Engineer's Blueprint",
    subtitle:
      "Engineering deterministic workflows from probabilistic LLMs: Retrieval Augmented Generation (RAG), guardrails, and autonomous tool calling.",
    badge: "AI & Innovation",
    category: "Generative AI Systems",
    readingTime: "6 min read",
    date: "October 2026",
    author: "Bibek Lama Tamang",
    authorRole: "Business Architect & Project Leader, Going Genius",
    summary:
      "Generative AI has evolved past casual prompt experimentation into serious software engineering. To deploy production-grade LLM applications, developers must master structured output extraction, context engineering, RAG vector embeddings, and agentic tool-use loops.",
    keyTakeaways: [
      "Prompt engineering is interface design for probabilistic neural systems.",
      "Structured outputs (JSON Schema / Zod schema enforcement) eliminate brittle regex parsing of LLM responses.",
      "Retrieval Augmented Generation (RAG) grounds model outputs with vector embeddings and private enterprise knowledge bases.",
      "Autonomous agents require constrained execution guardrails and human-in-the-loop fallback mechanisms.",
    ],
    contentSections: [
      {
        heading: "1. The Evolution: Zero-Shot to Context-Engineered RAG",
        body: `Early attempts at AI integration relied on naive zero-shot prompts fed into raw chat completions. Production systems require multi-stage orchestration: document chunking, semantic vector indexing, hybrid keyword search, and reranking before injecting context into the prompt window.

This prevents catastrophic hallucinations and ensures that answers cite verifiable source paragraphs from institutional documents.`,
      },
      {
        heading: "2. Deterministic Function Calling & Tool Orchestration",
        body: `The most powerful capability of modern LLMs (such as Gemini 1.5/2.0 and GPT-4o) is tool calling. Instead of simply generating prose, the model evaluates user intent, identifies the requisite schema, and yields structured function invocations that your backend executes safely.`,
        codeSnippet: `// ai/tools/query-inventory.ts
import { z } from "zod";
import { tool } from "ai";

export const queryInventoryTool = tool({
  description: "Check stock availability and warehouse location for auto parts",
  parameters: z.object({
    partNumber: z.string().describe("SKU or catalog part number"),
    region: z.string().optional().describe("Nepal administrative province or Kathmandu warehouse"),
  }),
  execute: async ({ partNumber, region }) => {
    const stock = await inventoryDb.findPart(partNumber, region);
    return { available: stock.count > 0, quantity: stock.count, warehouse: stock.location };
  },
});`,
        codeLanguage: "typescript",
      },
      {
        heading: "3. Pedagogical Impact & Training Future AI Engineers",
        body: `Through our student workshops at Going Genius, we teach aspiring developers how to shift their mindset from passive consumers of AI to active builders of agentic architectures. The future belongs to engineers who can direct AI agents to amplify human output ten-fold.`,
      },
    ],
  },
  {
    id: "iot-telematics-nepal",
    slug: "iot-telematics-nepal",
    title: "IoT Telematics & Real-Time Tracking in Mountainous Geographies",
    subtitle:
      "Engineering resilient GPS telemetry, offline data buffering, and low-latency geofencing across challenging Himalayan topography.",
    badge: "Hardware & Edge",
    category: "Edge IoT & Systems",
    readingTime: "7 min read",
    date: "October 2026",
    author: "Bibek Lama Tamang",
    authorRole: "Business Architect & Project Leader, Going Genius",
    summary:
      "Operating real-time fleet telematics across Nepal and South Asia poses unique technical hurdles: cellular blackouts along mountain highways, extreme weather conditions, and high-frequency sensor ingest. This case study explores how Finder GPS engineered a high-throughput IoT pipeline handling thousands of concurrent telemetry packets.",
    keyTakeaways: [
      "Edge devices must implement non-volatile flash buffering to store sensor packets during cellular dead zones.",
      "MQTT with QoS 1 guarantees at-least-once telemetry delivery without overwhelming edge battery reserves.",
      "Spatial geofencing requires spatial indexes (PostGIS / R-Trees) to evaluate boundary events in sub-millisecond latencies.",
      "Automated fuel and battery telemetry algorithms detect sudden anomalies and flag siphoning or power cuts immediately.",
    ],
    contentSections: [
      {
        heading: "1. The Mountain Highway Challenge: Surviving Network Blackouts",
        body: `Unlike urban tracking networks with pervasive 4G/5G coverage, vehicles traversing mountain passes frequently encounter dead zones spanning tens of kilometers. A naive telematics client will drop tracking packets or enter infinite reconnection thrashing.

Our hardware firmware implements an intelligent backoff and FIFO flash buffering strategy. When GSM carrier connectivity drops, telemetry packets—including GPS coordinates, speed, CAN bus sensor readings, and accelerometer data—are compressed into flash memory. Upon cell tower handshake re-establishment, packets are burst-streamed with original timestamps intact.`,
      },
      {
        heading: "2. The Ingestion Architecture: High-Throughput Stream Processing",
        body: `Handling tens of thousands of simultaneous telemetry pings requires an asynchronous ingestion pipeline. Raw TCP/MQTT packets are received by edge gateway clusters, decrypted, and published to message queues before downstream workers enrich the coordinates and persist them into time-series databases.`,
        codeSnippet: `// telemetry/packet-consumer.ts
interface TelemetryPacket {
  imei: string;
  latitude: number;
  longitude: number;
  altitudeMeters: number;
  speedKmh: number;
  fuelLevelPct: number;
  ignition: boolean;
  recordedAt: number; // Unix timestamp from edge device RTC
}

export async function processTelemetry(packet: TelemetryPacket) {
  // 1. Evaluate Geofence Intersection via Spatial R-Tree
  const alerts = await spatialIndex.checkGeofenceBreaches(
    packet.imei, 
    packet.latitude, 
    packet.longitude
  );

  // 2. Persist to Time-Series InfluxDB / TimescaleDB
  await timeSeriesDb.insertVehicleMetric(packet);

  // 3. Emit Real-Time WebSocket Event for Fleet Control Room
  await liveFleetGateway.broadcastVehicleUpdate(packet.imei, packet);
}`,
        codeLanguage: "typescript",
      },
      {
        heading: "3. Fleet Safety & Strategic Impact",
        body: `Real-time telematics isn't just about dots on a map—it saves lives. Automated alerts for sharp turns, overspeeding on steep descents, and continuous driver fatigue monitoring have significantly decreased logistics accident rates for commercial transport enterprises across the region.`,
      },
    ],
  },
  {
    id: "upgrading-legacy-wordpress-to-nextjs-supabase-prisma-vercel",
    slug: "upgrading-legacy-wordpress-to-nextjs-supabase-prisma-vercel",
    title: "Replacing Fragile Legacy WordPress with World-Class Architecture: Next.js, Supabase, Prisma & Vercel",
    subtitle:
      "Why forward-thinking enterprises are discarding vulnerable, bloated PHP WordPress monoliths in favor of type-safe, ultra-fast, and infinitely scalable modern web stacks.",
    badge: "Modernization Blueprint",
    category: "Cloud & Modernization",
    readingTime: "8 min read",
    date: "October 2026",
    author: "Bibek Lama Tamang",
    authorRole: "Business Architect & Project Leader, Going Genius",
    summary:
      "For decades, WordPress was the default choice for building websites. In 2026, it has become an enterprise liability: riddled with vulnerable third-party plugins, sluggish database queries, high maintenance overheads, and fragile shared hosting. This blueprint details how Going Genius migrates organizations to a modern, decoupled tech stack: Next.js App Router for edge rendering, Supabase (PostgreSQL) for managed relational data and Row-Level Security, Prisma ORM for end-to-end type safety, and Vercel for global serverless deployment.",
    keyTakeaways: [
      "Plugin bloat, SQL injection vectors, and CPU thrashing make legacy WordPress costly to secure and scale.",
      "Next.js App Router with Server Components reduces client JavaScript bundles while providing sub-second TTFB on Vercel's Edge Network.",
      "Prisma ORM provides compile-time type safety across your entire data layer, preventing runtime schema mismatches.",
      "Supabase provides an enterprise Postgres engine with built-in Row-Level Security (RLS), real-time change-data-capture, and object storage.",
      "Zero-downtime database migration scripts allow transferring existing WP posts, media, and users cleanly into structured PostgreSQL tables.",
    ],
    contentSections: [
      {
        heading: "1. The Enterprise Reality: The Hidden Cost of 'Cheap' WordPress",
        body: `WordPress is frequently chosen because the initial barrier to entry appears cheap: free software, one-click shared cPanel hosting, and thousands of off-the-shelf plugins. However, as an enterprise grows, this setup turns into a financial and security sinkhole.

Over 90% of all CMS security vulnerabilities reported in recent years trace back to unmaintained WordPress plugins and themes. Furthermore, WordPress relies on an unindexed, generic EAV (Entity-Attribute-Value) schema within 'wp_postmeta', which triggers devastating full-table scans once an organization scales to tens of thousands of records.

Between constant security patching, expensive dedicated caching layers (Varnish, Redis), and sluggish TTFB (Time to First Byte), 'cheap' WordPress becomes exponentially more expensive than modern serverless architectures.`,
        callout: {
          type: "warning",
          title: "The WordPress Vulnerability Trap",
          text: "A single outdated slider or form plugin can compromise your entire server root, leak confidential customer lists, or turn your domain into an unwitting spam relay.",
        },
      },
      {
        heading: "2. The World-Class Architecture: The Modern Stack Quartet",
        body: `At Going Genius, when we modernize legacy clients from WordPress, we engineer a 4-part cloud-native foundation:

1. Next.js 16 (App Router & Turbopack): Delivers instant static page delivery (ISR) combined with on-demand dynamic streaming.
2. Vercel Global Edge Network: Deploys code to global edge points of presence, providing instant SSL, automatic asset optimization, and zero-configuration serverless scaling.
3. Supabase (Managed PostgreSQL): An open-source, enterprise-grade relational database running real PostgreSQL, complete with pgvector, automated daily snapshots, and Row-Level Security (RLS).
4. Prisma ORM: Generates zero-cost TypeScript definitions directly from your relational schema, ensuring that frontends and backends share a unified, strongly typed contract.`,
      },
      {
        heading: "3. Prisma Schema Design: Replacing 'wp_posts' with Clean Relational Modeling",
        body: `Rather than shoving arbitrary metadata into loose key-value pairs, Prisma allows us to model posts, authors, taxonomy tags, and custom fields with strict foreign key constraints and automatic indexes.`,
        codeSnippet: `// prisma/schema.prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL") // Supabase connection pooling
}

generator client {
  provider = "prisma-client-js"
}

model Article {
  id          String       @id @default(uuid())
  slug        String       @unique
  title       String
  excerpt     String?
  contentHtml String
  published   Boolean      @default(false)
  viewsCount  Int          @default(0)
  authorId    String
  author      Author       @relation(fields: [authorId], references: [id], onDelete: Cascade)
  categories  Category[]   @relation("ArticleCategories")
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt

  @@index([slug])
  @@index([authorId])
}

model Author {
  id        String    @id @default(uuid())
  name      String
  email     String    @unique
  avatarUrl String?
  articles  Article[]
}`,
        codeLanguage: "prisma",
      },
      {
        heading: "4. Next.js Server Components + Supabase: Instant Speed & Zero-Trust RLS",
        body: `Fetching data in Next.js Server Components happens server-side, eliminating the waterfall of client-side AJAX requests typical of bloated WordPress themes. Coupled with Supabase connection pooling (PgBouncer) and Vercel edge caching, queries resolve in single-digit milliseconds.`,
        codeSnippet: `// app/articles/[slug]/page.tsx
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const revalidate = 3600; // Incremental Static Regeneration (1 hour)

export async function generateStaticParams() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    select: { slug: true },
    take: 100,
  });
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug },
    include: { author: true, categories: true },
  });

  if (!article || !article.published) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-white">{article.title}</h1>
      <div className="flex items-center gap-3 my-6">
        <span>By {article.author.name}</span>
        <span>•</span>
        <time>{article.createdAt.toLocaleDateString()}</time>
      </div>
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }} 
      />
    </article>
  );
}`,
        codeLanguage: "typescript",
      },
      {
        heading: "5. Migration Strategy: Moving from WordPress with Zero Downtime",
        body: `Migrating an active enterprise off WordPress involves a structured 3-phase roadmap:

Phase 1 (Data Extraction): An automated script queries the WordPress REST API ('wp-json/wp/v2/posts') or directly parses the XML database dump, normalizing HTML content and downloading media assets to Supabase Storage S3 buckets.
Phase 2 (SEO & 301 Redirect Mapping): Preserve organic Google rankings by generating exact redirect maps in 'next.config.ts' for historical slug structures.
Phase 3 (DNS Cutover): Point the domain to Vercel's global CDN with zero minutes of user downtime. The old WordPress server can be decommissioned or archived.`,
        callout: {
          type: "tip",
          title: "SEO Preservation Rule",
          text: "Never cut over a CMS without verifying that all previous URL patterns either match identically or are mapped with HTTP 301 Permanent Redirects.",
        },
      },
    ],
  },
  {
    id: "building-system-software-using-nextjs-and-dotnet",
    slug: "building-system-software-using-nextjs-and-dotnet",
    title: "Building Enterprise System Software Using Next.js & .NET: The High-Throughput Symbiosis",
    subtitle:
      "How coupling Microsoft .NET 8/9 high-performance microservices with Next.js App Router creates an impenetrable, low-latency foundation for ERPs, industrial telematics, and real-time operations.",
    badge: "Core Systems Architecture",
    category: "Systems Engineering",
    readingTime: "8 min read",
    date: "October 2026",
    author: "Bibek Lama Tamang",
    authorRole: "Business Architect & Project Leader, Going Genius",
    summary:
      "Building true 'system software'—such as enterprise ERPs (GG Relativity), automated telematics telemetry engines, and mission-critical inventory backbones—demands two competing qualities: raw computational throughput and instant, reactive user experiences. This blueprint examines why pairing Microsoft .NET (C#) as the robust backend engine with Next.js as the spatial edge presentation layer is the definitive enterprise architecture in 2026.",
    keyTakeaways: [
      ".NET (Kestrel & CLR) provides C++-adjacent execution speeds, thread pooling, and high-memory management for heavy computational workloads.",
      "Next.js App Router acts as a high-speed presentation BFF (Backend-For-Frontend), caching server responses and streaming UI at the edge.",
      "gRPC and Protocol Buffers enable ultra-low-latency, binary inter-service communication between Next.js server handlers and .NET worker daemons.",
      "Strongly typed contracts shared across C# DTOs and TypeScript interfaces eliminate payload mismatches and runtime regression.",
      "Real-time bi-directional events orchestrated via ASP.NET Core SignalR and WebSockets keep mission-critical control dashboards synchronized in sub-milliseconds.",
    ],
    contentSections: [
      {
        heading: "1. The System Software Dilemma: UI Agility vs. Raw Compute Engine",
        body: `When architecting large-scale system software—such as GG Relativity ERP or Finder GPS Telematics—pure Node.js backends struggle with CPU-intensive thread saturation, large in-memory dataset aggregation, and raw byte-level socket parsing. Conversely, traditional desktop .NET WPF/WinForms clients or server-rendered Razor monoliths lack the modern, spatial reactivity and edge distribution required by distributed remote workforces.

The solution is an architectural symbiosis:
- The Compute Engine (.NET): Leverages the high-performance Common Language Runtime (CLR), managed thread pools, memory-mapped files, and Entity Framework Core for rock-solid transaction processing, hardware device communication, and complex business calculations.
- The Spatial Presentation Layer (Next.js): Deployed to global edge networks to render Server Components, stream real-time UI states, and enforce zero-trust authentication before requests ever hit internal corporate subnets.`,
      },
      {
        heading: "2. The Communication Fabric: High-Speed gRPC & SignalR",
        body: `Rather than relying on bulky, uncompressed JSON REST APIs for internal service communication, Next.js Server Components and Server Actions communicate with .NET microservices via high-throughput gRPC (HTTP/2 with Protobuf binary serialization).

For real-time operational events—such as fleet vehicle emergency stops, warehouse inventory reconciliations, or live telematics alerts—ASP.NET Core SignalR establishes persistent WebSocket multiplexing straight into the client UI.`,
        codeSnippet: `// telemetry-service.proto
syntax = "proto3";

option csharp_namespace = "GoingGenius.Relativity.Telemetry";

service FleetTelemetryEngine {
  rpc IngestTelemetryBatch (TelemetryBatchRequest) returns (TelemetryBatchResponse);
  rpc StreamLiveCoordinates (VehicleTrackRequest) returns (stream CoordinatePing);
}

message CoordinatePing {
  string imei = 1;
  double latitude = 2;
  double longitude = 3;
  double speed_kmh = 4;
  int64 timestamp = 5;
  bool is_emergency = 6;
}`,
        codeLanguage: "protobuf",
      },
      {
        heading: "3. .NET 9 High-Throughput Service Implementation",
        body: `The .NET backend handles hardware socket ingestion, background cron workers, and transactional persistence with maximum hardware efficiency. C# 13 features like 'ref struct', memory spans ('Span<T>'), and Native AOT compilation ensure minimal garbage collection overhead.`,
        codeSnippet: `// Services/FleetTelemetryService.cs
using Grpc.Core;
using GoingGenius.Relativity.Telemetry;

public class FleetTelemetryService : FleetTelemetryEngine.FleetTelemetryEngineBase
{
    private readonly IChannelProvider _channel;
    private readonly ILogger<FleetTelemetryService> _logger;

    public FleetTelemetryService(IChannelProvider channel, ILogger<FleetTelemetryService> logger)
    {
        _channel = channel;
        _logger = logger;
    }

    public override async Task<TelemetryBatchResponse> IngestTelemetryBatch(
        TelemetryBatchRequest request, 
        ServerCallContext context)
    {
        // High-speed parallel processing using System.Threading.Channels
        await _channel.Writer.WriteAsync(request.Packets);

        return new TelemetryBatchResponse {
            Acknowledged = true,
            ProcessedCount = request.Packets.Count,
            ProcessedAtUnix = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()
        };
    }
}`,
        codeLanguage: "csharp",
      },
      {
        heading: "4. Next.js App Router as the Zero-Trust Presentation Gateway",
        body: `Next.js executes at the edge, authenticating incoming requests, validating session tokens, and consuming .NET gRPC clients before streaming UI components. The client browser never communicates directly with internal database ports or C# microservice IP addresses, providing defense-in-depth security.`,
        codeSnippet: `// app/operations/fleet/page.tsx
import { auth } from "@/lib/auth";
import { grpcFleetClient } from "@/lib/grpc-client";
import { LiveFleetMap } from "@/components/LiveFleetMap";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function FleetOperationsPage() {
  const session = await auth();
  if (!session?.user || session.user.role !== "OperationsDirector") {
    redirect("/auth/unauthorized");
  }

  // Fetch initial telemetry snapshot from .NET Core engine via gRPC
  const initialSnapshot = await grpcFleetClient.getFleetStatusSnapshot({
    organizationId: session.user.orgId,
  });

  return (
    <div className="p-8 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Live Fleet Telemetry Center</h1>
        <p className="text-xs text-neutral-400">Powered by .NET 9 CLR & Next.js Edge Streaming</p>
      </header>

      <LiveFleetMap 
        initialVehicles={initialSnapshot.vehicles} 
        orgId={session.user.orgId} 
      />
    </div>
  );
}`,
        codeLanguage: "typescript",
      },
      {
        heading: "5. Production Proven: The GG Relativity Architecture",
        body: `At Going Genius, this architectural synergy powers our flagship enterprise platform, GG Relativity. By assigning computational burdens, multi-tenant database transactions, and hardware I/O to .NET Core, while delegating user authentication, responsive layouts, and edge caching to Next.js, the system achieves 99.99% uptime with sub-100ms UI interactions across desktop and mobile devices worldwide.`,
        callout: {
          type: "tip",
          title: "Architecture Maxim",
          text: "Never force JavaScript to do heavy computational number-crunching, and never force .NET to render reactive web SPAs. Combine their respective superpowers for enterprise dominance.",
        },
      },
    ],
  },
  {
    id: "antigravity-mcp-agentic-ai-skills-github-vercel-cicd",
    slug: "antigravity-mcp-agentic-ai-skills-github-vercel-cicd",
    title: "Mastering Google Antigravity & Model Context Protocol (MCP): Building Custom Skills & Automated GitHub-Vercel CI/CD",
    subtitle:
      "A complete architectural guide to agentic coding: harnessing MCP tools, writing specialized SKILL.md workflows with operational rules, and automating zero-touch CI/CD pipelines.",
    badge: "Agentic AI & Automation",
    category: "Agentic AI & DevOps",
    readingTime: "9 min read",
    date: "October 2026",
    author: "Bibek Lama Tamang",
    authorRole: "Business Architect & Project Leader, Going Genius",
    summary:
      "The paradigm of AI assistance has undergone a quantum leap: from passive autocomplete chatbots to proactive, autonomous coding agents. Leading this revolution is Google Antigravity (AGY), an advanced agentic coding environment powered by the Model Context Protocol (MCP). This article explores how to architect custom skills using YAML-governed SKILL.md files, enforce project rules via AGENTS.md, orchestrate multi-agent tool execution, and build automated GitHub Actions + Vercel CI/CD pipelines for autonomous software delivery.",
    keyTakeaways: [
      "Antigravity shifts software engineering from manual coding to autonomous, plan-and-execute agentic collaboration.",
      "The Model Context Protocol (MCP) standardizes how LLM agents interact with local shells, databases (Supabase), cloud hosts (Vercel), and design systems.",
      "SKILL.md defines custom agentic capabilities using YAML frontmatter, execution workflows, and bundled scripts for deterministic outcomes.",
      "Workspace and global rules (AGENTS.md / rules files) enforce architectural constraints, prevent regressions, and eliminate human review bottlenecks.",
      "GitHub Actions paired with Vercel CLI enables zero-touch automated CI/CD: build verification, preview deployments, domain aliasing, and instant rollback.",
    ],
    contentSections: [
      {
        heading: "1. The Evolution: From Conversational Chatbots to Antigravity Agents",
        body: `Traditional AI coding assistants operate within narrow conversational boundaries: you provide a prompt, and the model outputs an isolated code block that you must manually copy, paste, debug, and test.

Google Antigravity (AGY) breaks this paradigm entirely. It operates as an agentic partner equipped with:
- Native Terminal and Workspace Manipulation: Read, write, and patch files in-place with contiguous diff replacements.
- Autonomous Background Execution: Running long builds, test suites, and schedule timers asynchronously while keeping you updated reactively without blocking threads.
- Subagent Delegation: Spawning dedicated child agents (such as research agents or visual inspectors) to parallelize complex engineering efforts.`,
      },
      {
        heading: "2. The Model Context Protocol (MCP): The Universal Agent Interface",
        body: `Prior to MCP, connecting an AI model to an external service required writing custom, fragile API wrappers for every platform. Anthropic's Model Context Protocol (MCP), deeply integrated into Antigravity, standardizes this architecture via client-server JSON-RPC.

In a modern Generative AI engineering environment:
- The MCP Client (Antigravity): Discovers available tools, inspects schemas lazily, and authorizes execution.
- The MCP Servers: Dedicated micro-daemons exposing specialized tools—such as the Vercel MCP server (deployments, environment variables, domains), the Supabase MCP server (SQL migrations, table policies), Chrome DevTools MCP (browser automation), and Context7 (official library docs).

This modularity allows an agent to deploy production code, inspect serverless logs, and patch live database tables in a single coherent trajectory.`,
        callout: {
          type: "tip",
          title: "The Power of MCP",
          text: "MCP decouples the AI model from the tools it uses. If you change models or upgrade servers, your tool contracts, schemas, and credentials remain completely intact.",
        },
      },
      {
        heading: "3. Authoring Deterministic Skills with SKILL.md and Rules",
        body: `While general LLMs possess broad knowledge, enterprise development requires hyper-specific organizational procedures. This is where Antigravity Skills come in.

A Skill is a modular directory containing a 'SKILL.md' document with YAML frontmatter, instructions, and optionally bundled helper scripts.

When combined with workspace rules ('AGENTS.md'), you establish unbreakable guardrails: for example, restricting edits to specific directories, requiring pre-commit test runs, or mandating specific framework versioning rules.`,
        codeSnippet: `---
name: vercel-deployment-pipeline
description: Automates production deployment, alias assignment, and live endpoint verification on Vercel
triggers:
  - deploy to production
  - publish live release
---

# Vercel Deployment Workflow

## Phase 1: Pre-Deployment Validation
1. Execute \`npm run build\` via background task to verify zero TypeScript errors.
2. Verify all modified components have been committed to git on \`origin/master\`.

## Phase 2: Dispatch Deployment
1. Invoke Vercel MCP \`list_deployments\` with limit 1 to ensure a fresh OAuth token.
2. Build the file deployment payload using the project packing script.
3. Post deployment to \`/v13/deployments\` and poll status until \`readyState === "READY"\`.

## Phase 3: Alias Assignment & Live Verification
1. Call Vercel MCP \`assign_alias\` to bind \`bibeklama.vercel.app\`.
2. Execute an automated HTTP probe against \`/api/contact\` to confirm live operational health.`,
        codeLanguage: "markdown",
      },
      {
        heading: "4. Enforcing Architectural Guardrails with AGENTS.md",
        body: `Agents can easily wander into antipatterns if not bounded by clear operating rules. Placing an 'AGENTS.md' file at the root of your repository allows you to inject non-negotiable architectural mandates into the agent's system prompt before any task starts.`,
        codeSnippet: `<!-- AGENTS.md: Repository-Level Instructions -->

# Architectural Standards & Inviolable Rules

1. **Framework Strictness**: We are running Next.js 16 with Turbopack. Do NOT use legacy Pages router patterns (\`getStaticProps\`, \`pages/_app.tsx\`). Always use App Router Server Components and Server Actions.
2. **Zero-Trust Data Boundary**: All database queries must run through Prisma inside Server Components or protected Server Actions. Never leak sensitive connection strings to \`"use client"\` modules.
3. **Automated Verification**: Never report a task as complete without verifying compilation via \`npm run build\` and confirming production deployment logs.`,
        codeLanguage: "markdown",
      },
      {
        heading: "5. Automating the End-to-End CI/CD Pipeline (GitHub Actions + Vercel)",
        body: `The final piece of the modern agentic workflow is zero-touch CI/CD automation. When an Antigravity agent or human engineer pushes commits to GitHub, an automated workflow executes linting, type-checks, runs integration tests, and dispatches production deployments.`,
        codeSnippet: `# .github/workflows/production-deploy.yml
name: Production CI/CD Pipeline

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  validate-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js 22
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: TypeScript & Lint Verification
        run: npm run build

      - name: Deploy to Vercel (Production)
        if: github.ref == 'refs/heads/master' && github.event_name == 'push'
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          alias-domains: 'bibeklama.vercel.app'`,
        codeLanguage: "yaml",
      },
    ],
  },
  {
    id: "github-ultimate-cheatsheet-mistakes-and-best-practices",
    slug: "github-ultimate-cheatsheet-mistakes-and-best-practices",
    title: "The Ultimate Git & GitHub Cheatsheet: Essential Commands, Critical Anti-Patterns & Battle-Tested Rules",
    subtitle:
      "A pragmatic survival guide for modern developers: from foundational commands and interactive rebasing to avoiding disastrous merge commits, detached HEAD states, and leaked credentials.",
    badge: "Developer Field Guide",
    category: "Developer Cheatsheets",
    readingTime: "10 min read",
    date: "October 2026",
    author: "Bibek Lama Tamang",
    authorRole: "Business Architect & Project Leader, Going Genius",
    summary:
      "Git is the distributed nervous system of modern software engineering, yet it remains one of the most misunderstood tools in a developer's stack. A single misplaced force-push or committed .env secret can halt company operations or expose client databases. This field guide compiles essential everyday commands, advanced rescue techniques, the top 10 catastrophic mistakes developers make, and inviolable best practices practiced across Going Genius engineering teams.",
    keyTakeaways: [
      "Master the fundamental 4 states of Git: Working Directory, Staging Area (Index), Local Repository, and Remote.",
      "Never use 'git push --force' on shared branches; always use the safer 'git push --force-with-lease'.",
      "Keep commits atomic: one logical change per commit with descriptive imperative commit messages (Conventional Commits).",
      "Prevent secret contamination by maintaining strict .gitignore files and installing pre-commit secret scanners (gitleaks).",
      "Learn to rescue lost code using 'git reflog'—Git almost never deletes committed data unless explicitly garbage collected.",
    ],
    contentSections: [
      {
        heading: "1. The Mental Model: The Four Trees of Git",
        body: `Most Git confusion comes from treating it as a magic cloud backup tool rather than a distributed content-addressable database. Git tracks snapshots of your files across four discrete stages:

1. Working Directory: The actual sandbox files on your local operating system drive.
2. Staging Area (Index): The staging canvas where you curate the exact hunks of code ready to form the next snapshot ('git add').
3. Local Repository (HEAD): The committed cryptographic history stored inside your local '.git' folder.
4. Remote Repository (Origin): The centralized or peer-hosted upstream repository (GitHub, GitLab) where commits are pushed and shared.`,
      },
      {
        heading: "2. The Daily Developer Arsenal: Essential Git Commands",
        body: `Here are the foundational commands every software engineer must execute with muscle memory:`,
        codeSnippet: `# --- Setup & Configuration ---
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main

# --- Daily Workflow ---
git status                          # Inspect modified and untracked files
git diff                            # View unstaged changes line-by-line
git add <file>                      # Stage a specific file
git add -p                          # Stage specific hunks interactively (crucial for clean commits!)
git commit -m "feat: descriptive summary"  # Record staged snapshot
git push origin <branch-name>       # Transmit local commits to remote

# --- Branching & Switching ---
git checkout -b feature/login       # Create and switch to new branch (legacy)
git switch -c feature/login         # Modern syntax: create and switch
git branch -a                       # List all local and remote branches
git branch -d feature/login         # Safely delete merged branch

# --- Inspecting History ---
git log --oneline --graph --decorate -n 10  # Clean ASCII commit tree
git show <commit-hash>              # Inspect exact metadata and diff of a commit`,
        codeLanguage: "bash",
      },
      {
        heading: "3. Advanced Power Tools: Rebasing, Stashing & History Surgery",
        body: `Senior engineers keep their commit histories linear, clean, and bisect-ready using advanced workflows:

- Interactive Rebase ('git rebase -i HEAD~N'): Reorder, squash, edit, or drop messy experimental commits before opening a Pull Request.
- Git Stash: Temporarily shelve uncommitted working directory changes when urgent bug fixes interrupt feature development.
- Git Cherry-Pick: Selectively transplant an individual commit from one branch to another without merging full branches.`,
        codeSnippet: `# --- Interactive Rebase (Clean your messy local commits) ---
git rebase -i HEAD~3                # Pick, squash, reword the last 3 commits

# --- Stashing Work in Progress ---
git stash push -m "WIP: cart checkout logic"
git stash list                      # View saved stashes
git stash pop                       # Restore most recent stash and remove from stack

# --- Emergency Code Rescue with Reflog ---
git reflog                          # Shows history of all HEAD movements (even after resets!)
git reset --hard HEAD@{2}           # Restore lost state back to 2 actions ago

# --- Cherry-Picking a Hotfix ---
git cherry-pick a1b2c3d4            # Apply single hotfix commit to current branch`,
        codeLanguage: "bash",
      },
      {
        heading: "4. The 10 Most Common & Dangerous Git Mistakes (And How to Fix Them)",
        body: `1. Committing API Keys or '.env' Secrets:
Mistake: Committing sensitive tokens, then making another commit deleting them. (They remain visible forever in your Git history!)
Fix: Add to '.gitignore' immediately, use 'git rm --cached <file>' to unstage without deleting local files, and run BFG Repo-Cleaner or 'git-filter-repo' to scrub history. Rotate the exposed key immediately!

2. Destructive Force-Pushing ('git push -f'):
Mistake: Overwriting teammates' upstream commits on shared branches.
Fix: Always enforce branch protection rules on GitHub and use '--force-with-lease', which aborts the push if the remote branch was updated by another developer.

3. The Dreaded 'Merge Conflict Panic':
Mistake: Aborting improperly or manually deleting lines blindly.
Fix: Run 'git merge --abort' or 'git rebase --abort' to return safely to the pre-conflict state before inspecting conflicts calmly.

4. Committing to the Wrong Branch:
Mistake: Working for 3 hours on 'master' instead of a feature branch.
Fix: Do NOT reset blindly. Run 'git branch feature/my-work', then 'git reset --hard origin/master' on master. Your work is safely preserved on the new branch!

5. Accidental 'git reset --hard' Loss:
Mistake: Wiping away hours of unpushed commits with a hard reset.
Fix: Run 'git reflog', identify the commit SHA prior to the reset, and run 'git reset --hard <SHA>'.`,
        callout: {
          type: "warning",
          title: "Golden Rule of Force Push",
          text: "Never use 'git push -f' on 'master', 'main', or any shared team branch. Use GitHub branch protection rules to enforce status checks and Pull Request approvals.",
        },
      },
      {
        heading: "5. Inviolable Best Practices & GitHub Workflow Protocol",
        body: `At Going Genius, all engineering contributors adhere to these battle-tested standards:

1. Conventional Commits: Use semantic prefixes ('feat:', 'fix:', 'refactor:', 'chore:', 'docs:', 'perf:'). This enables automated changelogs and semantic release tagging.
2. Keep Pull Requests Small: A PR should change fewer than 300 lines of code. Large PRs receive superficial reviews, while small PRs catch subtle bugs.
3. Keep '.gitignore' Comprehensive: Standardize global ignore files for OS artifacts ('.DS_Store', 'Thumbs.db'), IDE configs ('.idea', '.vscode'), and package builds ('node_modules', '.next', 'bin', 'obj').
4. Require Status Checks in GitHub: Configure GitHub branch protection so branches cannot merge unless automated CI tests and builds pass cleanly.
5. Linear History Preference: Prefer 'Squash and Merge' or 'Rebase and Merge' on GitHub to prevent useless 'Merge branch feature into main' clutter in your release history.`,
        callout: {
          type: "tip",
          title: "Pro Tip: Atomic Commits",
          text: "If your commit message needs the word 'and', it should probably be two separate commits. Small, atomic commits make 'git revert' trivial if an unexpected production bug emerges.",
        },
      },
    ],
  },
  {
    id: "starting-nextjs-project-best-practices-architecture-naming-conventions",
    slug: "starting-nextjs-project-best-practices-architecture-naming-conventions",
    title: "Starting a Production Next.js Project: Architecture Blueprints, Naming Conventions & Anti-Patterns to Avoid",
    subtitle:
      "The definitive guide to initializing, structuring, and maintaining enterprise Next.js App Router codebases for maximum scalability, performance, and maintainability.",
    badge: "Enterprise Playbook",
    category: "Frontend Architecture",
    readingTime: "10 min read",
    date: "October 2026",
    author: "Bibek Lama Tamang",
    authorRole: "Business Architect & Project Leader, Going Genius",
    summary:
      "Starting a Next.js project is easy with 'create-next-app', but keeping it scalable, clean, and maintainable requires rigorous architectural foresight. Without structured guidelines, codebases devolve into tangled client-boundary messes, bloated component trees, unmanaged environment secrets, and confusing folder labyrinths. This guide outlines the exact directory layout, strict naming conventions, Server-versus-Client boundary rules, and the top 10 mistakes engineers must avoid when bootstrapping Next.js in production.",
    keyTakeaways: [
      "Adopt a feature-driven or layered 'src/' directory architecture with explicit route group segmentation '(marketing)', '(dashboard)'.",
      "Follow strict naming conventions: kebab-case for route directories and URLs, PascalCase for React components, and camelCase for hooks and utilities.",
      "Push 'use client' directives as far down the component tree as possible (leaves-only strategy) to maximize Server Component streaming.",
      "Use TypeScript path aliases ('@/components/*', '@/lib/*') to eliminate brittle relative import traversal ('../../../').",
      "Avoid common pitfalls: never query databases in client components, never use 'useEffect' for static data fetching, and enforce 'server-only' on private modules.",
    ],
    contentSections: [
      {
        heading: "1. The Project Initialization Foundation: Clean Tooling & Baseline",
        body: `When initializing a production Next.js application, always start with an opinionated, strict foundation using TypeScript, Tailwind CSS, and ESLint:

npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm

Key Baseline Choices:
- Always opt into the 'src/' directory: Isolates application source logic from root configuration files ('next.config.ts', 'tsconfig.json', 'package.json', Dockerfiles).
- Always use the App Router: The legacy Pages Router ('pages/') lacks Server Components, parallel routes, intercepting routes, and streaming layouts.
- Configure Turbopack ('next dev --turbopack'): Accelerates development feedback loops by compiling modules incrementally in memory with Rust.`,
      },
      {
        heading: "2. Battle-Tested Directory Structure: Scalable Folder Architecture",
        body: `A clean directory structure prevents the 'junk drawer' syndrome where components, utilities, and API routes become intertangled. Below is the battle-tested enterprise layout used across Going Genius projects:`,
        codeSnippet: `my-enterprise-app/
├── public/                     # Static assets (favicons, SVGs, brand photography)
├── src/
│   ├── app/                    # Next.js App Router (Routing and Layouts ONLY)
│   │   ├── (auth)/             # Route group: unauthenticated flows (login, register)
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/        # Route group: protected operational portals
│   │   │   ├── analytics/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── api/                # Specialized HTTP webhooks and integrations
│   │   │   └── contact/route.ts
│   │   ├── globals.css         # Global design tokens and Tailwind imports
│   │   ├── layout.tsx          # Root HTML/Body shell and global providers
│   │   └── page.tsx            # Root landing page
│   ├── components/             # Reusable UI Components
│   │   ├── ui/                 # Atomic, headless design system primitives (button, modal, input)
│   │   ├── shared/             # Cross-cutting composite blocks (navbar, footer, dock)
│   │   └── modules/            # Feature-specific compound widgets (billing-card, telemetry-chart)
│   ├── lib/                    # Core libraries, client singletons, and shared utilities
│   │   ├── db.ts               # Prisma or Supabase client singleton
│   │   └── utils.ts            # Helper functions (cn(), formatDate())
│   ├── actions/                # Server Actions ('use server') for mutations
│   │   ├── auth.ts
│   │   └── billing.ts
│   ├── hooks/                  # Custom client-side React hooks (useMediaQuery, useDebounce)
│   ├── types/                  # Global TypeScript definitions and database schemas
│   └── emails/                 # React Email transactional templates
├── .env.example                # Sanitized environment variable template
├── next.config.ts              # Next.js compiler, redirect, and image domain configuration
└── tsconfig.json               # Path alias and strict compiler flags`,
        codeLanguage: "bash",
      },
      {
        heading: "3. Strict Naming Conventions: Enforcing Global Consistency",
        body: `Inconsistent casing creates cross-platform bugs (especially between Windows case-insensitive and Linux case-sensitive file systems). Enforce these four golden naming rules:

1. Route Folders & URLs (kebab-case):
   - Correct: 'src/app/client-portal/page.tsx' -> URL: '/client-portal'
   - Incorrect: 'src/app/ClientPortal/page.tsx' or 'src/app/client_portal/page.tsx'

2. React Components (PascalCase):
   - Correct: 'HeroSection.tsx', 'UserProfileCard.tsx', 'ThemeToggle.tsx'
   - Rule: Name the file after the primary exported component.

3. Utilities, Hooks & Server Actions (camelCase):
   - Correct: 'useWindowSize.ts', 'formatCurrency.ts', 'updateProfile.ts'

4. Route Groups & Private Folders:
   - Route Groups: Wrap in parentheses '(marketing)', '(dashboard)'—creates logical grouping without affecting the URL path.
   - Private Folders: Prefix with an underscore '_components/'—opt out of App Router routing completely.`,
      },
      {
        heading: "4. Architectural Golden Rules: Server vs. Client Boundary",
        body: `The most significant paradigm shift in Next.js is that components are Server Components by default. 

Rule 1: Push 'use client' Down to the Leaves
Never mark an entire page or large container as 'use client'. Keep the layout and page as Server Components to fetch data in parallel. Only extract small interactive widgets (like a modal trigger, theme toggle, or search input) into dedicated client components.

Rule 2: Never Query Databases in Client Components
Client components run in the user's browser. Attempting to import database clients or run SQL queries in a client component leaks internal credentials and crashes the build.

Rule 3: Enforce 'server-only' on Sensitive Modules
Install the official 'server-only' package and import it at the top of database adapters, token registries, and private cryptographic utilities. If any developer mistakenly imports that file into a client component, Next.js halts the build with an error.`,
        codeSnippet: `// lib/db.ts
import "server-only"; // Enforces compiler barrier: cannot be bundled for client!
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;`,
        codeLanguage: "typescript",
      },
      {
        heading: "5. Top 10 Common Next.js Mistakes to Avoid",
        body: `1. Waterfall Data Fetching: Awaiting sequential queries in child components instead of fetching in parallel with 'Promise.all()' or React suspense streaming.
2. Using 'useEffect' for Initial Data Fetching: Replaces instant server-rendered HTML with a blank loading spinner, degrading SEO and core web vitals.
3. Leaking Secret Environment Variables: Prefixing private tokens with 'NEXT_PUBLIC_'. Variables prefixed with 'NEXT_PUBLIC_' are baked into client JS bundles!
4. Unoptimized Remote Images: Using raw HTML '<img>' tags instead of 'next/image', forfeiting automatic WebP/AVIF compression and responsive srcsets.
5. Inefficient Link Traversal: Using standard anchor '<a href>' tags for internal routes instead of Next.js '<Link>', causing full-page browser reloads rather than client-side soft transitions.
6. Forgetting Cache Invalidation: Mutating database records via Server Actions without calling 'revalidatePath()' or 'revalidateTag()', leaving users with stale data.
7. Over-Relying on Global State: Installing heavy state managers (Redux, Zustand) for server data instead of using URL search parameters and Server Component props.
8. Missing 'metadata' and OpenGraph definitions: Launching production pages without dynamic titles, descriptions, and Twitter/Facebook preview cards.
9. Modifying 'next.config.ts' with Unchecked Ignores: Turning on 'ignoreBuildErrors: true' to force failing TypeScript builds into production.
10. Neglecting Loading & Error Boundaries: Omitting 'loading.tsx' and 'error.tsx' files, resulting in jarring layout shifts or white-screen fatal crashes on network drops.`,
        callout: {
          type: "warning",
          title: "The NEXT_PUBLIC Security Trap",
          text: "Never add NEXT_PUBLIC_ to private keys, payment secrets, or database URLs. That prefix tells the Next.js compiler to inline the secret string directly into public browser scripts.",
        },
      },
    ],
  },
  {
    id: "antigravity-mention-and-action-features-guide",
    slug: "antigravity-mention-and-action-features-guide",
    title: "Mastering Google Antigravity: The Definitive Guide to @Mention Context & Slash Actions",
    subtitle:
      "How to unlock 10x developer productivity using targeted @mention resource injection, specialized agent summoning, and automated slash action commands across real-world workflows.",
    badge: "AI Engineering Mastery",
    category: "Agentic AI & DevOps",
    readingTime: "9 min read",
    date: "October 2026",
    author: "Bibek Lama Tamang",
    authorRole: "Business Architect & Project Leader, Going Genius",
    summary:
      "While traditional AI chats force developers to copy-paste scattered files or explain workspace context from scratch, Google Antigravity introduces two pivotal interaction paradigms: @Mentions and Slash Actions. This guide explains the technical mechanics and enterprise use cases of precision context pinning (@file, @folder, @git, @symbol, @subagent) alongside autonomous execution actions (/plan, /boost, /goal, /schedule, /grill-me, /compact).",
    keyTakeaways: [
      "@Mentions enable surgical context injection (@file, @folder, @diff, @docs), eliminating prompt token bloat and hallucination.",
      "Specialized agent mentions (@research, @image-generator, @self) delegate sub-tasks to isolated agentic conversations.",
      "Slash Actions automate complex agentic meta-workflows: /plan for architectural decomposition, /boost for multi-perspective review, and /goal for unyielding autonomous completion.",
      "/schedule and /automation enable background cron schedules and heartbeat monitoring without blocking primary developer sessions.",
      "/grill-me turns the AI into a tough architectural interviewer to uncover hidden edge cases before committing to implementation.",
    ],
    contentSections: [
      {
        heading: "1. The Context Problem: Why Copy-Pasting Code Kills AI Velocity",
        body: `In standard LLM web interfaces, a developer spends 60% of their time manually curating context: copying TypeScript types, tracking down CSS classes, pasting terminal error traces, and explaining the folder hierarchy. This approach suffers from two critical flaws:

1. Token Pollution: Pasting entire 2,000-line files wastes the LLM's attention budget on irrelevant boilerplate, increasing latency and hallucination rates.
2. Context Staleness: As soon as a file changes on disk, your pasted chat snippet becomes obsolete.

Google Antigravity solves this with @Mentions—a dynamic symbol and resource resolution engine integrated directly into the language model's runtime context.`,
      },
      {
        heading: "2. The Antigravity @Mention Ecosystem: Precision Context Pinning",
        body: `Typing '@' inside the Antigravity prompt interface opens an autocomplete drawer linking your prompt directly to live workspace artifacts:

- @file (e.g. '@src/app/page.tsx'): Injects the exact file content into the agent's context window. The agent receives a live pointer to disk, enabling contiguous line-level edits.
- @folder (e.g. '@src/components/'): Provides the structural tree of a directory, allowing the agent to comprehend module boundaries without ingesting every single byte.
- @git / @diff: Passes the current unstaged git diff or commit history, allowing the agent to write release notes, detect breaking regressions, or author commit messages instantly.
- @symbol (e.g. '@ContactInquiryEmailProps'): Pins an individual TypeScript interface, class, or function directly, providing micro-targeted context.
- @docs / @url: Pulls verified official documentation (Next.js, Supabase, Tailwind, Prisma) directly into the agent's memory via MCP context resolvers.
- @subagent (e.g. '@research'): Summons a specialized background subagent equipped with read-only exploration tools to investigate sprawling codebases without cluttering your primary chat transcript.`,
        callout: {
          type: "tip",
          title: "Token Optimization Tip",
          text: "Prefer '@symbol' or '@file' over '@folder' when fixing localized bugs. Pinning only the necessary interfaces keeps model inference lightning-fast and razor-sharp.",
        },
      },
      {
        heading: "3. Slash Actions: Automating Meta-Workflows & High-Order Reasoning",
        body: `While @Mentions curate WHAT the agent sees, Slash Actions dictate HOW the agent thinks and acts. Typing '/' activates specialized execution behaviors:

- /plan: Instructs the agent to enter a read-only architectural phase. The agent explores the codebase, designs file diffs, assesses breaking changes, and generates an interactive implementation plan for user sign-off before writing any code.
- /boost: Activates deep-reasoning mode. The agent formulates hypotheses, engages in sequential thinking, solicits counter-perspectives, and runs rigorous self-verification before finalizing solutions.
- /goal: Designed for long-running, multi-hour autonomous tasks (e.g., refactoring an entire database layer or migrating 40 legacy components). The agent will not stop until every test passes and the objective is 100% verified.
- /grill-me: An adversarial interview mode where the agent interrogates the developer with sharp design questions to flesh out underspecified requirements, security policies, and edge cases.
- /schedule: Configures recurring cron jobs or background one-shot timers (e.g. polling a slow deployment or running hourly smoke tests).
- /compact: Summarizes and compresses lengthy conversation histories, freeing up valuable tokens in the context window while preserving core project requirements.`,
        codeSnippet: `// Example: Enterprise Feature Planning Session
User:
/plan @src/components/PaymentSection.tsx @src/app/api/contact/route.ts
We need to add Fonepay merchant dynamic QR generation alongside our current static MoBank image.

Antigravity Execution:
1. Agent enters planning mode (No files modified).
2. Inspects @PaymentSection.tsx state variables and @route.ts email delivery payload.
3. Produces a structured architectural artifact with:
   - Schema updates (phone, merchantPayload)
   - Component state transitions
   - Backward compatibility verification
4. Renders interactive "Proceed" button for developer approval.`,
        codeLanguage: "markdown",
      },
      {
        heading: "4. Real-World Enterprise Use Cases: Combining Mentions & Actions",
        body: `The true power of Antigravity emerges when combining @Mentions and Slash Actions into unified workflows:

Case 1: Architectural Alignment with /grill-me
Prompt: '/grill-me @src/emails/ContactInquiryEmail.tsx We want to convert our portfolio inquiry form into a multi-step consultation booking funnel.'
Result: The agent asks 4 targeted questions regarding database persistence, calendar booking sync, SMS fallbacks, and payment deposits, resolving design ambiguities before a single line of code is written.

Case 2: Deep Refactoring with /boost and @subagent
Prompt: '/boost @research Analyze all components importing @Icons.tsx and propose an optimized tree-shakable SVG bundle.'
Result: The agent spawns a background research subagent, benchmarks bundle sizes, and presents a complete refactoring diff without interrupting the developer's main task.

Case 3: Overnight Migration with /goal
Prompt: '/goal Migrate all remaining mock images to Cloudflare R2 bucket URLs and ensure \`npm run build\` compiles with zero lint errors.'
Result: The agent systematically iterates through components, replaces assets, runs local builds, resolves TypeScript warnings, and notifies the user upon verified completion.`,
        callout: {
          type: "tip",
          title: "Proactive Pair Programming",
          text: "Treat Antigravity not as an obedient script, but as a senior pair programmer. Use /grill-me and /plan to ensure you are solving the right problem with the right architecture.",
        },
      },
      {
        heading: "5. Summary: The Modern Agentic Coding Stack",
        body: `Software engineering has advanced beyond manual syntax typing. By mastering:
- @Mentions for surgical, real-time context injection,
- Slash Actions for structured reasoning and automated execution modes,
- Model Context Protocol (MCP) for tool decoupling and zero-touch cloud operations,

developers at Going Genius and worldwide operate at 5x to 10x traditional engineering velocity while maintaining higher architectural standards and zero regressions.`,
      },
    ],
  },
];






