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
];
