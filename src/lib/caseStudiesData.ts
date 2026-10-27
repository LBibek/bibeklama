export interface ArchitectureLayer {
  name: string;
  badge: string;
  description: string;
  tech: string[];
  responsibilities: string[];
}

export interface MetricCard {
  label: string;
  value: string;
  change?: string;
  detail: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  period: string;
  industry: string;
  liveUrl?: string;
  heroImage: string;
  summary: string;
  metrics: MetricCard[];
  challenges: {
    title: string;
    description: string;
    impact: string;
  }[];
  architectureLayers: ArchitectureLayer[];
  decisions: {
    title: string;
    choice: string;
    rationale: string;
    alternative: string;
  }[];
  keyHighlights: string[];
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
    explanation: string;
  };
  outcomes: string[];
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    slug: "gg-relativity",
    title: "GG Relativity: Integrated Enterprise ERP & Operations Management System",
    subtitle:
      "Architecting a distributed .NET Core and Next.js operations suite powering multi-tenant resource orchestration, client relationship workflows, and real-time operational telemetry for Going Genius.",
    client: "Going Genius Group",
    role: "Lead Systems Architect & Founder",
    period: "2023 – Present",
    industry: "Enterprise Software & IT Operations",
    liveUrl: "https://www.office.goinggenius.com.np/",
    heroImage: "/project-relativity.jpg",
    summary:
      "GG Relativity is a bespoke enterprise resource planning (ERP) platform designed from the ground up to unify Going Genius's disparate operational workflows. By decoupling presentation logic through Next.js and powering backend orchestration with an ASP.NET Core Clean Architecture microservice core, the system achieves sub-50ms query latency, strict Role-Based Access Control (RBAC), and automated financial telemetry.",
    metrics: [
      {
        label: "Query Response Latency",
        value: "< 42ms",
        change: "-68%",
        detail: "Achieved via compiled Linq queries & Redis caching",
      },
      {
        label: "Workflow Automation",
        value: "94%",
        change: "+3.2x",
        detail: "Eliminated manual paper audits and duplicate invoicing",
      },
      {
        label: "Platform Availability",
        value: "99.98%",
        detail: "Engineered with resilient failover & health probes",
      },
      {
        label: "Concurrent Roles",
        value: "12+ RBAC",
        detail: "Granular claim-based policies for directors & staff",
      },
    ],
    challenges: [
      {
        title: "Operational Siloing & Data Fragmentation",
        description:
          "Internal operations previously relied on fragmented spreadsheets, disconnected communication channels, and ad-hoc task trackers, causing reconciliation delays and reporting discrepancies.",
        impact: "Over 15 hours weekly spent manually cross-referencing timesheets and client deliverables.",
      },
      {
        title: "Strict Role-Based Security Governance",
        description:
          "The system required absolute separation between student financial records, client contract terms, executive board financials, and operational timesheets without duplicating database instances.",
        impact: "Demanded zero-trust claims verification on every REST endpoint and server mutation.",
      },
      {
        title: "Scalability Under High Concurrency",
        description:
          "During month-end billing and workshop intake cycles, internal concurrent requests spiked exponentially, risking connection pool exhaustion on traditional monolithic backends.",
        impact: "Required connection resilience, distributed caching, and non-blocking asynchronous I/O.",
      },
    ],
    architectureLayers: [
      {
        name: "Client Presentation Tier",
        badge: "Edge Next.js 16 Client",
        description:
          "Server-rendered dashboards using React Server Components for instantaneous initial page loads with client islands for interactive telemetry widgets.",
        tech: ["Next.js App Router", "Tailwind CSS", "Lucide React", "GSAP Telemetry"],
        responsibilities: [
          "Streaming SSR for instantaneous data views",
          "Optimistic UI updates for task mutations",
          "Client-side RBAC route guards & permission filters",
        ],
      },
      {
        name: "Security & API Gateway Tier",
        badge: "Zero-Trust Authorization",
        description:
          "Stateless token-based reverse proxy managing request throttling, rate limiting, and cryptographic claims inspection.",
        tech: ["ASP.NET Core Middleware", "JWT Bearer Authentication", "CORS Hardening"],
        responsibilities: [
          "Sub-millisecond claims validation",
          "Audit trail logging for all mutative requests",
          "Adaptive rate limiting against credential abuse",
        ],
      },
      {
        name: "Business Logic & Core Services",
        badge: "Clean Architecture Core",
        description:
          "Separated domain entities, use-case interactors, and external interfaces adhering to strict Onion Architecture principles.",
        tech: [".NET 8 / C#", "MediatR CQRS", "FluentValidation", "AutoMapper"],
        responsibilities: [
          "Decoupled command and query handlers (CQRS)",
          "In-process event bus for asynchronous notification triggers",
          "Strict domain rule validation before persistence",
        ],
      },
      {
        name: "Data Persistence & Caching Tier",
        badge: "Hybrid SQL & In-Memory Cache",
        description:
          "Primary relational store with ACID guarantees alongside an in-memory Redis cluster for session states and frequently evaluated dashboard summaries.",
        tech: ["PostgreSQL", "Entity Framework Core", "Redis Cache", "Database Migrations"],
        responsibilities: [
          "Optimized relational indexing & multi-tenant isolation",
          "Sub-millisecond session and telemetry cache lookups",
          "Automated point-in-time recovery backup snapshots",
        ],
      },
    ],
    decisions: [
      {
        title: "ASP.NET Core Clean Architecture vs. Monolithic Node.js",
        choice: "ASP.NET Core 8 Web API with Onion Architecture",
        rationale:
          "C#'s strong static typing, native dependency injection, and compiled runtime throughput provided vastly superior predictability for complex enterprise financial transactions and strict domain modeling.",
        alternative: "Express.js / Node.js monorepo",
      },
      {
        title: "React Server Components vs. Client-Only SPA",
        choice: "Next.js App Router RSC Architecture",
        rationale:
          "Eliminated massive JavaScript client bundles on executive mobile devices and secured sensitive enterprise data by querying microservices directly from the server boundary.",
        alternative: "Vite + React Single Page App (SPA)",
      },
      {
        title: "Hybrid PostgreSQL + Redis vs. Single Database Engine",
        choice: "PostgreSQL for ACID ledgers + Redis for Telemetry Cache",
        rationale:
          "Reduced database query contention by 70% during peak billing cycles while retaining strict relational consistency for accounting ledgers.",
        alternative: "PostgreSQL for all reads and writes",
      },
    ],
    keyHighlights: [
      "Zero-Trust Claims RBAC with automatic token rotation and active session invalidation",
      "Real-time operational dashboard with dynamic financial telemetry and resource allocation tracking",
      "Seamless integration with client portals and automated notification webhooks",
      "Automated CI/CD pipeline with strict unit, integration, and security regression testing",
    ],
    codeSnippet: {
      title: "Clean Architecture Command Handler with Transactional Boundary",
      language: "csharp",
      code: `public class ApproveContractCommandHandler : IRequestHandler<ApproveContractCommand, Result<Guid>>
{
    private readonly IContractRepository _contractRepo;
    private readonly IAuditLogger _auditLogger;
    private readonly IUnitOfWork _unitOfWork;

    public ApproveContractCommandHandler(
        IContractRepository contractRepo,
        IAuditLogger auditLogger,
        IUnitOfWork unitOfWork)
    {
        _contractRepo = contractRepo;
        _auditLogger = auditLogger;
        _unitOfWork = unitOfWork;
    }

    public async Task<Result<Guid>> Handle(ApproveContractCommand command, CancellationToken ct)
    {
        var contract = await _contractRepo.GetByIdAsync(command.ContractId, ct);
        if (contract is null)
            return Result.Failure<Guid>("Contract record not found.");

        contract.Approve(command.ApproverUserId, command.ApprovalTimestamp);

        await _auditLogger.LogSecurityActionAsync(
            "CONTRACT_APPROVED", 
            command.ApproverUserId, 
            contract.Id, 
            ct);

        await _unitOfWork.CommitAsync(ct);
        return Result.Success(contract.Id);
    }
}`,
      explanation:
        "Encapsulates domain logic strictly within the entity, guaranteeing that audit logs and state changes execute atomically within a single transactional unit of work.",
    },
    outcomes: [
      "Eliminated manual paperwork and reconciliation across Going Genius office departments",
      "Provided leadership with real-time insight into project velocity, billable hours, and margin projections",
      "Established the architectural template for Going Genius's client enterprise software offerings",
    ],
  },
  {
    slug: "finder-bd",
    title: "Finder BD: Premier Real-Time IoT Telematics & Fleet Tracking Platform",
    subtitle:
      "Engineering architecture and real-time ingestion pipelines for a high-concurrency commercial fleet management and vehicle telematics platform operating across Bangladesh.",
    client: "Finder BD (finder.com.bd)",
    role: "Architecture Consultant & Systems Engineer",
    period: "2022 – Present",
    industry: "IoT Telematics, Fleet Logistics & Edge Systems",
    liveUrl: "https://finder.com.bd/",
    heroImage: "/project-telematics.jpg",
    summary:
      "Finder BD is a major commercial vehicle telematics and fleet management infrastructure platform operating across Bangladesh. The system processes continuous high-velocity GPS location beacons, engine telemetry, speed sensor logs, and emergency SOS alarms from thousands of commercial vehicles simultaneously. The architecture leverages high-throughput socket listeners, geospatial indexing in Redis, partitioned timeseries data stores, and real-time live map feeds with sub-second alert triggers.",
    metrics: [
      {
        label: "GPS Ingestion Rate",
        value: "5,000+ /sec",
        detail: "Real-time telemetry messages decoded and validated",
      },
      {
        label: "Live Geofence Latency",
        value: "< 350ms",
        change: "-80%",
        detail: "From edge beacon transmission to push alert dispatch",
      },
      {
        label: "Fleet Availability",
        value: "99.95%",
        detail: "Zero downtime during national telecommunications failovers",
      },
      {
        label: "Active Vehicles Monitored",
        value: "Thousands",
        detail: "Spanning trucks, logistics fleets, and passenger vehicles",
      },
    ],
    challenges: [
      {
        title: "Extreme Ingestion Velocity & Burst Load",
        description:
          "Thousands of edge GPS devices ping coordinates every few seconds over volatile 3G/4G cellular networks, generating continuous high-write database pressure that rapidly overwhelms traditional transactional tables.",
        impact: "Severe database lock contention and delayed vehicle location markers on client monitoring screens.",
      },
      {
        title: "Sub-Second Geofencing & Emergency SOS Alarms",
        description:
          "When a vehicle exits a designated route perimeter or triggers an emergency fuel cutoff switch, alert dispatches must occur within hundreds of milliseconds rather than waiting for background batch jobs.",
        impact: "Critical security requirement for asset recovery and passenger protection.",
      },
      {
        title: "Volatile Cellular Connectivity & Packet Buffering",
        description:
          "In remote transit corridors with intermittent network reception, devices buffer hours of telemetry and burst hundreds of queued packets at once when reconnection occurs.",
        impact: "Ingestion service required idempotent deduplication and out-of-order sequence reconstruction.",
      },
    ],
    architectureLayers: [
      {
        name: "Edge Device Telemetry Layer",
        badge: "Hardware & Protocols",
        description:
          "Firmware-level TCP/UDP socket communication parsing binary protocol frames from vehicle tracking hardware units.",
        tech: ["TCP / UDP Sockets", "Hexadecimal Protocol Parsers", "Hardware IMEI Auth"],
        responsibilities: [
          "Low-level protocol parsing (GT06, Concox, Teltonika)",
          "Hardware authentication and IMEI binding",
          "Acknowledgement frame responses to prevent device retry storms",
        ],
      },
      {
        name: "High-Concurrency Ingestion Broker",
        badge: "Distributed Message Streaming",
        description:
          "Decoupled socket workers feeding decoded telemetry events into partitioned message streams for non-blocking asynchronous processing.",
        tech: ["Node.js Cluster / Go Workers", "Redis Streams", "Backpressure Throttling"],
        responsibilities: [
          "Zero-latency socket connection pooling",
          "Event queueing with backpressure buffers",
          "Telemetry deduplication and chronological timestamp normalization",
        ],
      },
      {
        name: "Real-Time Spatial Computation & Cache",
        badge: "Redis Geospatial Engine",
        description:
          "Instant spatial indexing of latest vehicle positions for live map queries and sub-millisecond geofence intersection checking.",
        tech: ["Redis GEO Commands", "Geofence Polygon Intersect", "WebSocket Feeds"],
        responsibilities: [
          "Sub-millisecond vehicle proximity lookups (GEOSEARCH)",
          "Real-time perimeter breach calculation",
          "Instant broadcast to dispatch client WebSocket channels",
        ],
      },
      {
        name: "Historical Partitioned Timeseries Store",
        badge: "Cold & Hot Storage Tiering",
        description:
          "Optimized relational timeseries storage partitioned by calendar month and vehicle fleet ID for fast route replay and compliance reporting.",
        tech: ["PostgreSQL Timeseries Partitions", "S3 Archive Snapshots", "Optimized B-Trees"],
        responsibilities: [
          "High-throughput bulk database inserts without locking",
          "Rapid historical route trajectory retrieval",
          "Automated lifecycle data archiving to cold cloud storage",
        ],
      },
    ],
    decisions: [
      {
        title: "Redis Geospatial In-Memory Engine vs. Relational Spatial Queries",
        choice: "Redis GEO for Live Positions + PostgreSQL for History",
        rationale:
          "Querying live positions of thousands of moving vehicles via SQL PostGIS caused catastrophic CPU spikes. Offloading latest coordinates to Redis in-memory spatial indexes reduced query response times from 1.2s to 4ms.",
        alternative: "PostgreSQL PostGIS queries on every socket ping",
      },
      {
        title: "Decoupled Message Streaming vs. Direct Database Writes",
        choice: "Message Queue Ingestion Worker Pipeline",
        rationale:
          "Prevents hardware device timeouts when the database experiences temporary write latency during automated index maintenance or backups.",
        alternative: "Direct synchronous database persistence inside TCP socket server",
      },
      {
        title: "Monthly Timeseries Table Partitioning vs. Single Giant Table",
        choice: "Declarative Monthly Table Partitioning",
        rationale:
          "Ensured that table scans for 30-day fleet audit reports inspect only 5% of the total dataset, maintaining predictable query execution plans indefinitely.",
        alternative: "Single unpartitioned 500-million-row SQL table",
      },
    ],
    keyHighlights: [
      "Ultra-low latency live vehicle tracking with smooth vector interpolation on dispatch maps",
      "Automated SMS and push notifications for speeding, geofence breaches, and ignition tamper alarms",
      "Historic trip playback with speed graphs, idle time analysis, and fuel consumption telemetry",
      "Resilient edge telemetry protocol supporting offline packet buffering and burst reassembly",
    ],
    codeSnippet: {
      title: "Geospatial Indexing & Geofence Proximity Evaluation in Node.js",
      language: "typescript",
      code: `import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);

interface TelemetryPoint {
  imei: string;
  lat: number;
  lng: number;
  speed: number;
  timestamp: number;
}

export async function processTelemetryBeacon(point: TelemetryPoint) {
  const { imei, lat, lng, speed, timestamp } = point;

  // 1. Update live vehicle position in Redis Geospatial Index (sub-millisecond)
  await redis.geoadd("fleet:live:positions", lng, lat, imei);

  // 2. Cache vehicle state hash
  await redis.hset(\`vehicle:\${imei}:state\`, {
    lat,
    lng,
    speed,
    updatedAt: timestamp
  });

  // 3. Evaluate active geofence proximity within 500m radius
  const nearbyFences = await redis.geosearch(
    "fleet:geofence:anchors",
    "FROMLONLAT", lng, lat,
    "BYRADIUS", 500, "m"
  );

  return { imei, nearbyFences, status: "PROCESSED" };
}`,
      explanation:
        "Utilizes native Redis geospatial commands to index coordinates and execute spatial radius checks in sub-millisecond memory time without touching the relational database.",
    },
    outcomes: [
      "Powers real-time fleet operations for enterprise transport logistics and vehicle owners in Bangladesh",
      "Significantly improved vehicle recovery rate and reduced unauthorized route deviations",
      "Demonstrates high-scale systems architecture handling real-world hardware telemetry at scale",
    ],
  },
  {
    slug: "gg-portals",
    title: "GG Portals: Multi-Tenant Digital Gateway & Learning Hub",
    subtitle:
      "A modern centralized educational portal and client workspace engineered for Going Genius student cohorts, enterprise clients, and scholarship fellows.",
    client: "Going Genius Institute",
    role: "Lead Systems Architect & Educator",
    period: "2024 – Present",
    industry: "EdTech & Client Workspaces",
    liveUrl: "https://portals.goinggenius.com.np/",
    heroImage: "/tech-education.jpg",
    summary:
      "GG Portals is the unified digital campus and client collaboration gateway engineered for Going Genius. It streamlines classroom materials distribution, interactive coding assignments, scholarship progress tracking, and client delivery hubs into a unified, authenticated Next.js environment with role isolation.",
    metrics: [
      {
        label: "Students & Alumni Served",
        value: "90+ Engineers",
        detail: "Enrolled across Next.js, .NET Core & AI cohorts",
      },
      {
        label: "Resource Access Speed",
        value: "< 80ms",
        detail: "Edge cached curriculum and laboratory instructions",
      },
      {
        label: "Assignment Delivery",
        value: "100% Digital",
        detail: "Direct GitHub repo submission & code feedback pipeline",
      },
      {
        label: "Cohort Completion",
        value: "96%",
        change: "+24%",
        detail: "Compared to traditional passive remote video courses",
      },
    ],
    challenges: [
      {
        title: "Disorganized Learning Resources Across Channels",
        description:
          "Students previously navigated fragmented Google Drive folders, Discord messages, and chat threads to locate lecture slides, code repositories, and homework assignments.",
        impact: "Frustration among beginners and lost productivity during code sprint weeks.",
      },
      {
        title: "Multi-Role Workspace Isolation",
        description:
          "Enterprise consulting clients, paying bootcamp students, and scholarship fellows needed secure, segregated access within a single portal without viewing each other's proprietary deliverables.",
        impact: "Required strict tenant scoping and authenticated session authorization.",
      },
    ],
    architectureLayers: [
      {
        name: "Application UI & Edge Delivery",
        badge: "Next.js App Router",
        description:
          "High-performance client dashboard leveraging Next.js streaming architecture and responsive Tailwind components.",
        tech: ["Next.js App Router", "Tailwind CSS", "Server Actions"],
        responsibilities: [
          "Edge SSR for authenticated dashboard landing views",
          "Dynamic assignment submission forms with instant client feedback",
          "Responsive mobile optimization for students studying on phones/tablets",
        ],
      },
      {
        name: "Multi-Tenant Data Management",
        badge: "PostgreSQL & Row-Level Security",
        description:
          "Database architecture enforcing strict row-level security so users access only their assigned workshop cohorts and project assets.",
        tech: ["PostgreSQL", "Prisma ORM / Supabase", "Row-Level Security (RLS)"],
        responsibilities: [
          "Multi-tenant data isolation at the database layer",
          "Encrypted credential and session storage",
          "Automated audit logging of grade and certificate submissions",
        ],
      },
    ],
    decisions: [
      {
        title: "PostgreSQL Row-Level Security (RLS) vs Application-Level Filters",
        choice: "Database Row-Level Security Policies",
        rationale:
          "Guarantees that even if an application endpoint lacks an explicit where-clause filter, unauthorized cross-tenant data leaks are physically impossible at the database engine level.",
        alternative: "Manual application-layer WHERE userId = x queries",
      },
    ],
    keyHighlights: [
      "Centralized curriculum index with searchable lecture notes and downloadable project boilerplates",
      "Direct code feedback loop linking students' GitHub pull requests with instructor architecture reviews",
      "Integrated credential verification linking directly to official Going Genius certificates",
    ],
    outcomes: [
      "Streamlined the learning journey for 90+ students across Nepal",
      "Accelerated transition from classroom theory to production-ready software engineering jobs",
      "Served as a showcase for Going Genius's client web application development services",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES_DATA.find((c) => c.slug === slug);
}
