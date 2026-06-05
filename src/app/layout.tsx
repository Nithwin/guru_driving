import type { Metadata } from "next";
import "./globals.css";
import { Syne, Inter } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guru Driving School | Master the Road — Mettur, TN",
  description:
    "Premium driving education in Mettur, Tamil Nadu. Safety-first, RTO-certified, with doorstep pickup across Kolathur, RS, Mecheri & surrounding areas. Trusted by 5000+ graduates.",
  keywords: "driving school mettur, learn to drive kolathur, RTO driving lessons, guru driving school TN",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: { url: "/logo-icon.png", sizes: "180x180" },
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Guru Driving School",
    "description": "Premium driving education in Mettur, TN. Doorstep pickup available.",
    "url": "https://gurudrivingschool.in",
    "telephone": "+917092063335",
    "address": { "@type": "PostalAddress", "addressLocality": "Mettur", "addressRegion": "Tamil Nadu", "addressCountry": "IN" },
    "openingHours": "Mo-Su 06:00-20:00",
  };

  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
