import { ImageResponse } from "next/og";
import { getArticleBySlug, ARTICLES_DATA } from "@/lib/articlesData";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug) || ARTICLES_DATA[0];

  // Dynamic theme accents based on category
  const isAI = article.category.toLowerCase().includes("ai");
  const isBackend = article.category.toLowerCase().includes("backend");
  const isTooling = article.category.toLowerCase().includes("tooling");

  const primaryAccent = isAI
    ? "#38bdf8"
    : isBackend
    ? "#a855f7"
    : isTooling
    ? "#f59e0b"
    : "#06b6d4";

  const secondaryAccent = isAI
    ? "#818cf8"
    : isBackend
    ? "#ec4899"
    : isTooling
    ? "#ef4444"
    : "#3b82f6";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px 64px",
          backgroundColor: "#07080d",
          backgroundImage: `radial-gradient(circle at 88% 12%, ${primaryAccent}33 0%, transparent 50%), radial-gradient(circle at 12% 88%, ${secondaryAccent}30 0%, transparent 50%)`,
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxSizing: "border-box",
          border: "8px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Top Meta Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: primaryAccent,
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {article.category}
            </div>

            <div
              style={{
                padding: "6px 12px",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                color: "#94a3b8",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {article.badge}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#e2e8f0",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            <span>⏱️</span>
            <span>{article.readingTime}</span>
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              fontSize: article.title.length > 50 ? "42px" : "48px",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-1px",
              color: "#ffffff",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.title}
          </div>

          <div
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              lineHeight: 1.45,
              maxWidth: "1020px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.subtitle || article.summary}
          </div>
        </div>

        {/* Bottom Author & Publisher Branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "14px",
                background: `linear-gradient(135deg, ${primaryAccent}, ${secondaryAccent})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "18px",
                color: "#ffffff",
                boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
              }}
            >
              BL
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "16px", fontWeight: 800, color: "#ffffff" }}>
                {article.author}
              </span>
              <span style={{ fontSize: "12px", color: "#64748b" }}>
                Founder & Business Architect • Going Genius Group
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "8px",
                backgroundColor: "rgba(6, 182, 212, 0.1)",
                border: "1px solid rgba(6, 182, 212, 0.3)",
                color: "#22d3ee",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              bibeklama.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
