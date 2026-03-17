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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
