import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL } from "@/lib/data";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://ramilaouini.dev"; // update once a real domain is live

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${PERSONAL.fullName} — Engineering Student & Developer`,
  description: PERSONAL.bio,
  keywords: [
    "Rami Laouini",
    "software engineer",
    "engineering student",
    "Tunisia developer",
    "portfolio",
    "Nexus Knowledge OS",
  ],
  authors: [{ name: PERSONAL.fullName }],
  openGraph: {
    title: `${PERSONAL.fullName} — Engineering Student & Developer`,
    description: PERSONAL.bio,
    url: siteUrl,
    siteName: PERSONAL.fullName,
    images: ["/images/profile.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.fullName} — Engineering Student & Developer`,
    description: PERSONAL.bio,
    images: ["/images/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="bg-base font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
