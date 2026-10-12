import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { site } from "@/data/site";

import "./globals.css";

const geistSans = localFont({
  src: [
    { path: "../../public/fonts/geist-regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/geist-semibold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const title = "Sebastian Works — Web Development, Ads & AI Automation";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s — Sebastian Works",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Sebastian Works — Web Development, Performance Marketing, AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/images/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090b0a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  description: site.description,
  provider: {
    "@type": "Person",
    name: site.person,
    jobTitle: site.role,
  },
  knowsAbout: [
    "Web Development",
    "Performance Marketing",
    "AI Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
