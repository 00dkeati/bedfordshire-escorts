import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bedfordshireescorts.agency'),
  title: "Bedfordshire Escorts Agency | Premium Escort Services",
  description: "Bedfordshire's premier escort agency offering elite companionship services across Bedford, Luton, Dunstable, Leighton Buzzard and surrounding areas.",
  keywords: "escorts Bedfordshire, escort agency Bedford, Luton escorts, Dunstable escort services, elite companions Bedfordshire",
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bedfordshire Escorts Agency",
  "description": "Premium outcall escort services across Bedfordshire including Bedford, Luton, Dunstable, and Leighton Buzzard.",
  "url": "https://bedfordshireescorts.agency",
  "telephone": "+447424783087",
  "areaServed": [
    { "@type": "City", "name": "Bedford" },
    { "@type": "City", "name": "Luton" },
    { "@type": "City", "name": "Dunstable" },
    { "@type": "City", "name": "Leighton Buzzard" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Bedfordshire",
    "addressCountry": "GB"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "£££"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
