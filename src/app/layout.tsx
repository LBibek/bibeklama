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
  title: "Bibek Lama Tamang | Business Architect • Project Leader • Tech Professional",
  description:
    "Official portfolio of Bibek Lama Tamang. Founder of Going Genius Group, dynamic Business Architect with deep expertise in IT systems, GPS/IoT telematics, digital transformation, and technical training.",
  keywords: [
    "Bibek Lama",
    "Bibek Lama Tamang",
    "Going Genius Group",
    "Business Architect",
    "Project Leader",
    "Tech Professional",
    "Finder GPS Nepal",
    "Sipradi Auto Parts",
    "Midas E-Class",
    "Coventry University",
    "Thapathali Campus",
    "Drone Pilot Nepal",
    "Kathmandu",
    "Nepal"
  ],
  authors: [{ name: "Bibek Lama Tamang" }],
  openGraph: {
    title: "Bibek Lama Tamang | Business Architect • Project Leader • Tech Professional",
    description:
      "Founder of Going Genius Group. Business Architecture, IoT Telematics, Digital Transformation, and Technical Pedagogy.",
    url: "https://bibeklama.vercel.app",
    siteName: "Bibek Lama Tamang",
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
