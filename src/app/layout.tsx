import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sora = localFont({
  src: "../../public/fonts/sora-latin-wght-normal.woff2",
  variable: "--font-sora",
  display: "swap",
  weight: "100 800",
});

const manrope = localFont({
  src: "../../public/fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  title: "2Dollar — World-Class Outsourcing from $2/hr",
  description:
    "India-based outsourcing agency offering social media management, project management, marketing campaigns, accounting, legal documentation, and brand management services worldwide — starting at just $2/hour.",
  keywords: [
    "outsourcing",
    "freelancing",
    "India",
    "social media management",
    "project management",
    "marketing",
    "accounting",
    "legal documentation",
    "brand management",
    "affordable",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${manrope.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
