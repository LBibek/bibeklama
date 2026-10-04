import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bibek Lama | Board of Director • Educator • Business Architect",
  description:
    "Executive portfolio of Bibek Lama (Tamang). Bridging strategic corporate governance, transformative education, and enterprise business architecture.",
  keywords: [
    "Bibek Lama",
    "Bibek Lama Tamang",
    "Board of Director",
    "Business Architect",
    "Teacher",
    "Educator",
    "Executive Advisory",
    "Nepal",
    "Corporate Governance",
    "Enterprise Architecture"
  ],
  authors: [{ name: "Bibek Lama" }],
  openGraph: {
    title: "Bibek Lama | Board of Director • Educator • Business Architect",
    description:
      "Strategic Governance, Academic Leadership, and Enterprise Business Architecture.",
    url: "https://www.linkedin.com/in/bibeklamatmg?originalSubdomain=np",
    siteName: "Bibek Lama Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
