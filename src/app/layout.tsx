import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Guru Driving School | Master the Road with Precision",
  description:
    "Premium driving education in the heart of the city. Safety-focused, RTO-certified, and trusted by 5000+ graduates. Book your first lesson today.",
  keywords: "driving school, learn to drive, RTO, driving lessons, beginner driving, Sri Guru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sri Guru Driving School",
    "description": "Premium, friendly driving education in the city. Dual-control vehicles and certified instructors.",
    "url": "https://srigurudriving.com",
    "telephone": "+919000000000",
    "openingHours": "Mo-Su 06:00-20:00"
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full"
        style={{ fontFamily: "'Montserrat', system-ui, sans-serif", background: "#fafafa" }}
      >
        {children}
      </body>
    </html>
  );
}
