import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.velocitylts.com"),
  title:
    "Velocity Land & Tree Services | Forestry Mulching, Land Clearing & Septic Installs | Blumenort, MB",
  description:
    "Professional forestry mulching, lot clearing, land management, culvert & driveway installs, fence line clearing, and certified septic installation in Blumenort, Manitoba. Serving southeast Manitoba including Steinbach, Niverville, and Ste. Anne. We Clear. You Create.",
  keywords: [
    "forestry mulching Manitoba",
    "land clearing Blumenort",
    "lot clearing Manitoba",
    "septic installation Manitoba",
    "driveway installation Manitoba",
    "culvert installation Manitoba",
    "grading and excavating Manitoba",
    "brush clearing southeast Manitoba",
    "fence line clearing Manitoba",
    "property line management Manitoba",
    "right-of-way clearing Manitoba",
    "land reclamation Manitoba",
    "over growth management Manitoba",
    "certified septic installers Manitoba",
    "forestry mulcher for hire Manitoba",
    "site preparation Blumenort",
    "eco-friendly land clearing Manitoba",
    "licensed arborist Manitoba",
    "Steinbach land clearing",
    "Niverville land clearing",
    "rural Manitoba land services",
  ],
  alternates: {
    canonical: "https://www.velocitylts.com",
  },
  openGraph: {
    title: "Velocity Land & Tree Services | Blumenort, Manitoba",
    description:
      "Expert land clearing, forestry mulching, lot clearing, driveway installs, and certified septic solutions for farms, developers, and homeowners in southeast Manitoba.",
    url: "https://www.velocitylts.com",
    siteName: "Velocity Land & Tree Services",
    images: [
      {
        url: "/gallery/gallery-14.png",
        width: 1200,
        height: 630,
        alt: "Velocity Land & Tree Services – Professional Forestry Mulching in Blumenort, Manitoba",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity Land & Tree Services | Blumenort, MB",
    description:
      "Professional forestry mulching, land clearing, and septic installation in southeast Manitoba. Licensed Arborist, Red Seal Electrician, Certified Septic Expert.",
    images: ["/gallery/gallery-14.png"],
  },
  other: {
    "geo.region": "CA-MB",
    "geo.placename": "Blumenort, Manitoba",
    "geo.position": "49.5963;-96.6914",
    ICBM: "49.5963, -96.6914",
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
