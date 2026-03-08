import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name + " | Blumenort, Manitoba",
    description: siteConfig.seo.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/gallery/gallery-14.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name + " – Professional Forestry Mulching in Blumenort, Manitoba",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name + " | Blumenort, MB",
    description: siteConfig.seo.description,
    images: ["/gallery/gallery-14.png"],
  },
  other: {
    "geo.region": "CA-MB",
    "geo.placename": siteConfig.address.locality + ", " + siteConfig.address.region,
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-dark text-brand-light antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
