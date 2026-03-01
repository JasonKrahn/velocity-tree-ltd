import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.velocitylts.com"),
  title: "Velocity Land & Tree Services | Expert Land Clearing & Septic Installs",
  description: "Professional forestry mulching, driveway installation, grading, and septic system design in Steinbach, MB. We Clear. You Create.",
  keywords: "forestry mulching, land clearing, driveway installation, septic system installers, Steinbach MB, grading, excavating",
  openGraph: {
    title: "Velocity Land & Tree Services",
    description: "Expert land prep, clearing, and septic solutions for farms, developers, and homeowners.",
    url: "https://www.velocitylts.com",
    siteName: "Velocity Land & Tree Services",
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Velocity Land & Tree Services Equipment",
      },
    ],
    locale: "en_CA",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
