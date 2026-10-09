import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Link,
  Row,
  Column,
  Button,
} from "@react-email/components";

export interface ContactInquiryEmailProps {
  name: string;
  email: string;
  subject: string;
  organization?: string;
  message: string;
  submittedAt?: string;
  isReceipt?: boolean;
}

export function ContactInquiryEmail({
  name = "Aashish Sharma",
  email = "aashish@example.com",
  subject = "Business IT Consulting & Architecture",
  organization = "Himalayan Tech Ventures",
  message = "We are seeking strategic systems architecture guidance for scaling our IoT telematics infrastructure in Kathmandu. Looking forward to discussing scope and milestones.",
  submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kathmandu",
    dateStyle: "full",
    timeStyle: "short",
  }),
  isReceipt = false,
}: ContactInquiryEmailProps) {
  const previewText = isReceipt
    ? `Inquiry Confirmation: Thank you for reaching out, ${name}`
    : `New Client Inquiry from ${name} • ${subject}`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Banner */}
          <Section style={headerSection}>
            <Text style={logoText}>BIBEK LAMA</Text>
            <Text style={subHeader}>
              Business Architect • Project Leader • Tech Professional
            </Text>
          </Section>

          {/* Main Card */}
          <Section style={card}>
            <Heading style={heading}>
              {isReceipt ? "Inquiry Confirmation" : "New Portfolio Inquiry"}
            </Heading>

            <Text style={paragraph}>
              {isReceipt ? (
                <>
                  Hello <strong>{name}</strong>, thank you for reaching out.
                  Bibek Lama and the Going Genius team have received your
                  inquiry and will review your requirements. You will receive a
                  response within 24 to 48 business hours.
                </>
              ) : (
                <>
                  You have received a new consultation request submitted via{" "}
                  <strong>bibeklama.vercel.app</strong>.
                </>
              )}
            </Text>

            <Hr style={hr} />

            {/* Inquiry Details Table */}
            <Section style={detailsSection}>
              <Row style={detailRow}>
                <Column style={labelCol}>
                  <Text style={detailLabel}>Client Name</Text>
                </Column>
                <Column style={valueCol}>
                  <Text style={detailValue}>{name}</Text>
                </Column>
              </Row>

              <Row style={detailRow}>
                <Column style={labelCol}>
                  <Text style={detailLabel}>Email Address</Text>
                </Column>
                <Column style={valueCol}>
                  <Link href={`mailto:${email}`} style={linkStyle}>
                    {email}
                  </Link>
                </Column>
              </Row>

              {organization && (
                <Row style={detailRow}>
                  <Column style={labelCol}>
                    <Text style={detailLabel}>Organization</Text>
                  </Column>
                  <Column style={valueCol}>
                    <Text style={detailValue}>{organization}</Text>
                  </Column>
                </Row>
              )}

              <Row style={detailRow}>
                <Column style={labelCol}>
                  <Text style={detailLabel}>Topic / Interest</Text>
                </Column>
                <Column style={valueCol}>
                  <Text style={badgeValue}>{subject}</Text>
                </Column>
              </Row>

              <Row style={detailRow}>
                <Column style={labelCol}>
                  <Text style={detailLabel}>Timestamp</Text>
                </Column>
                <Column style={valueCol}>
                  <Text style={detailValue}>{submittedAt} (NPT)</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={hr} />

            {/* Message Block */}
            <Section>
              <Text style={messageLabel}>Message / Agenda:</Text>
              <Section style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </Section>
            </Section>

            {/* Action Buttons */}
            <Section style={buttonContainer}>
              <Row>
                <Column style={{ textAlign: "center", paddingRight: "6px" }}>
                  <Button
                    style={primaryButton}
                    href={
                      isReceipt
                        ? "https://bibeklama.vercel.app"
                        : `mailto:${email}?subject=Re: ${encodeURIComponent(
                            subject
                          )}`
                    }
                  >
                    {isReceipt ? "Visit Portfolio" : `Reply to ${name}`}
                  </Button>
                </Column>
                <Column style={{ textAlign: "center", paddingLeft: "6px" }}>
                  <Button
                    style={secondaryButton}
                    href="https://wa.me/9779768527869"
                  >
                    WhatsApp Chat
                  </Button>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Founder, Going Genius Group • Kathmandu, Nepal
            </Text>
            <Text style={footerLinks}>
              <Link href="https://bibeklama.vercel.app" style={footerLink}>
                Portfolio
              </Link>{" "}
              •{" "}
              <Link
                href="https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np"
                style={footerLink}
              >
                LinkedIn
              </Link>{" "}
              •{" "}
              <Link href="https://goinggenius.com.np/" style={footerLink}>
                Going Genius
              </Link>
            </Text>
            <Text style={footerMuted}>
              This notification was generated automatically by React Email on{" "}
              <Link href="https://bibeklama.vercel.app" style={footerLink}>
                bibeklama.vercel.app
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactInquiryEmail;

/* Styles */
const main: React.CSSProperties = {
  backgroundColor: "#06070a",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: "40px 0",
};

const container: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: "600px",
  backgroundColor: "#0d0f17",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  overflow: "hidden",
};

const headerSection: React.CSSProperties = {
  padding: "32px 32px 24px",
  textAlign: "center",
  background:
    "linear-gradient(180deg, rgba(99, 102, 241, 0.15) 0%, rgba(13, 15, 23, 0) 100%)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
};

const logoText: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "800",
  letterSpacing: "2px",
  color: "#ffffff",
  margin: "0 0 4px",
};

const subHeader: React.CSSProperties = {
  fontSize: "12px",
  color: "#38bdf8",
  margin: "0",
  letterSpacing: "0.5px",
};

const card: React.CSSProperties = {
  padding: "32px",
};

const heading: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 16px",
};

const paragraph: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#cbd5e1",
  margin: "0 0 20px",
};

const hr: React.CSSProperties = {
  borderColor: "rgba(255, 255, 255, 0.1)",
  margin: "24px 0",
};

const detailsSection: React.CSSProperties = {
  margin: "16px 0",
};

const detailRow: React.CSSProperties = {
  padding: "6px 0",
};

const labelCol: React.CSSProperties = {
  width: "35%",
  verticalAlign: "top",
};

const valueCol: React.CSSProperties = {
  width: "65%",
  verticalAlign: "top",
};

const detailLabel: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#94a3b8",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  margin: "0",
};

const detailValue: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "500",
  color: "#f1f5f9",
  margin: "0",
};

const badgeValue: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#38bdf8",
  backgroundColor: "rgba(56, 189, 248, 0.12)",
  padding: "4px 10px",
  borderRadius: "6px",
  display: "inline-block",
  margin: "0",
};

const linkStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "500",
  color: "#818cf8",
  textDecoration: "underline",
};

const messageLabel: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#94a3b8",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  margin: "0 0 8px",
};

const messageBox: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "12px",
  padding: "16px",
};

const messageText: React.CSSProperties = {
  fontSize: "13px",
  lineHeight: "22px",
  color: "#f8fafc",
  margin: "0",
  whiteSpace: "pre-wrap",
};

const buttonContainer: React.CSSProperties = {
  margin: "28px 0 0",
};

const primaryButton: React.CSSProperties = {
  backgroundColor: "#4f46e5",
  borderRadius: "10px",
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "12px 24px",
  width: "100%",
  boxSizing: "border-box",
};

const secondaryButton: React.CSSProperties = {
  backgroundColor: "rgba(16, 185, 129, 0.15)",
  border: "1px solid rgba(16, 185, 129, 0.4)",
  borderRadius: "10px",
  color: "#34d399",
  fontSize: "13px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "12px 24px",
  width: "100%",
  boxSizing: "border-box",
};

const footer: React.CSSProperties = {
  padding: "24px 32px 32px",
  textAlign: "center",
  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
};

const footerText: React.CSSProperties = {
  fontSize: "12px",
  color: "#64748b",
  margin: "0 0 8px",
};

const footerLinks: React.CSSProperties = {
  fontSize: "12px",
  color: "#64748b",
  margin: "0 0 12px",
};

const footerLink: React.CSSProperties = {
  color: "#818cf8",
  textDecoration: "none",
};

const footerMuted: React.CSSProperties = {
  fontSize: "10px",
  color: "#475569",
  margin: "0",
};
