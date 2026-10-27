import { ImageResponse } from "next/og";

export const alt = "Bibek Lama Tamang | Business Architect • Project Leader • Tech Professional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            "radial-gradient(circle at 85% 15%, rgba(6, 182, 212, 0.22) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(99, 102, 241, 0.25) 0%, transparent 50%)",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "20px",
                color: "#ffffff",
              }}
            >
              BL
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "1.5px" }}>
                BIBEK LAMA TAMANG
              </span>
              <span style={{ fontSize: "12px", color: "#94a3b8", letterSpacing: "1px" }}>
                GOING GENIUS GROUP
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(6, 182, 212, 0.12)",
              border: "1px solid rgba(6, 182, 212, 0.35)",
              color: "#22d3ee",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.2px",
            }}
          >
            OFFICIAL PORTFOLIO & BLUEPRINTS
          </div>
        </div>

        {/* Center Main Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              background: "linear-gradient(to right, #ffffff, #e2e8f0, #94a3b8)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Business Architect & Systems Leader
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              lineHeight: 1.4,
              maxWidth: "960px",
            }}
          >
            Directing enterprise digital transformations, architecting high-concurrency .NET & Next.js systems, and empowering the next generation of engineers through hands-on technical pedagogy.
          </div>
        </div>

        {/* Feature Badges Row */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            "Enterprise Architecture",
            "IoT Telematics",
            "Next.js & .NET Core",
            "90+ Students Trained",
            "FPV Cinematography",
          ].map((tag, idx) => (
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
              {tag}
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
            <span style={{ fontSize: "14px", color: "#64748b" }}>Verified Platform:</span>
            <span style={{ fontSize: "14px", color: "#38bdf8", fontWeight: 700 }}>
              https://bibeklama.vercel.app
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "13px", color: "#94a3b8" }}>Kathmandu, Nepal</span>
            <span style={{ fontSize: "13px", color: "#64748b" }}>•</span>
            <span style={{ fontSize: "13px", color: "#a855f7", fontWeight: 600 }}>
              Going Genius Ecosystem
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
