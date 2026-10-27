import { ImageResponse } from "next/og";
import { ARTICLES_DATA } from "@/lib/articlesData";

export const alt = "Architecture Library | Bibek Lama Tamang";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const articleCount = ARTICLES_DATA.length;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#07080d",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.22) 0%, transparent 50%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxSizing: "border-box",
          border: "8px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #06b6d4, #a855f7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "20px",
                color: "#ffffff",
              }}
            >
              📚
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "1.5px" }}>
                GOING GENIUS ENGINEERING LIBRARY
              </span>
              <span style={{ fontSize: "12px", color: "#94a3b8", letterSpacing: "1px" }}>
                BY BIBEK LAMA TAMANG
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(168, 85, 247, 0.15)",
              border: "1px solid rgba(168, 85, 247, 0.35)",
              color: "#c084fc",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.2px",
            }}
          >
            {articleCount} PUBLICATIONS CURATED
          </div>
        </div>

        {/* Center Main Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              color: "#ffffff",
            }}
          >
            Architecture Insights & Systems Publications
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              lineHeight: 1.45,
              maxWidth: "980px",
            }}
          >
            In-depth architectural briefings, production code blueprints, security hardening guides, and developer frameworks for Next.js, .NET Core, TypeScript, Prisma, and Generative AI.
          </div>
        </div>

        {/* Category Pills */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
          {[
            "Modern Web & React",
            "Enterprise Backend",
            "AI & Future of Work",
            "Developer Tooling",
            "IoT & Systems",
          ].map((cat, idx) => (
            <div
              key={idx}
              style={{
                padding: "8px 16px",
                borderRadius: "10px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#e2e8f0",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "14px", color: "#64748b" }}>Read Online:</span>
            <span style={{ fontSize: "14px", color: "#38bdf8", fontWeight: 700 }}>
              https://bibeklama.vercel.app/articles
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "13px", color: "#94a3b8" }}>Free Open Access</span>
            <span style={{ fontSize: "13px", color: "#64748b" }}>•</span>
            <span style={{ fontSize: "13px", color: "#22d3ee", fontWeight: 600 }}>
              Peer-Reviewed Technical Content
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
