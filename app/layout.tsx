import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravenalabeach.com"),
  title: {
    default: `${site.name} — Moalboal, Cebu`,
    template: `%s · ${site.name}`,
  },
  description:
    "A family-run beach hideaway on White Beach, Moalboal since 1997. Bungalows overlooking Tañon Strait — house-reef diving, snorkeling, and unhurried island living.",
  keywords: [
    "Ravenala Beach Bungalows",
    "Moalboal resort",
    "Cebu beach resort",
    "White Beach Moalboal",
    "house reef diving",
    "sardine run",
  ],
  openGraph: {
    title: `${site.name} — Moalboal, Cebu`,
    description:
      "A family-run beach hideaway on White Beach, Moalboal since 1997.",
    type: "website",
    locale: "en_PH",
    siteName: site.name,
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
