import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const clashDisplay = localFont({
  src: [
    { path: "./fonts/ClashDisplay-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ClashDisplay-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ClashDisplay-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ClashDisplay-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homevisualstudio.com"),
  title: {
    default: "Home Visual Studio — Ingatlan média & digitális megoldások",
    template: "%s | Home Visual Studio",
  },
  description:
    "Profi ingatlanfotózás, videó, 360° virtuális bejárás, AI fotózás és digitális megoldások ingatlanosoknak. Ingatlanod a legjobb formájában.",
  keywords: [
    "ingatlanfotózás",
    "ingatlan videó",
    "360 fokos virtuális bejárás",
    "AI fotózás",
    "ingatlan marketing",
    "Home Visual Studio",
  ],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Home Visual Studio",
    title: "Home Visual Studio — Ingatlan média & digitális megoldások",
    description:
      "Profi fotózás, videó és digitális megoldások ingatlanosoknak.",
    url: "https://homevisualstudio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={cn(clashDisplay.variable, inter.variable)}>
      <body className="flex min-h-screen flex-col bg-background font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
