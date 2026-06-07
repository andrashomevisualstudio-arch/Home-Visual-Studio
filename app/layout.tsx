import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { site, keywords } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

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
  metadataBase: new URL(site.url),
  title: {
    default:
      "Ingatlanfotózás & ingatlan média Budapesten | Home Visual Studio",
    template: "%s | Home Visual Studio",
  },
  description:
    "Professzionális ingatlanfotózás, videó, 360° virtuális bejárás és AI fotózás Budapesten és az agglomerációban. Ingatlanod a legjobb formájában — gyors, 24–48 órás átfutással.",
  keywords,
  authors: [{ name: site.founder }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  category: "Ingatlan média",
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: site.name,
    title: "Ingatlanfotózás & ingatlan média Budapesten | Home Visual Studio",
    description:
      "Professzionális ingatlanfotózás, videó, 360° virtuális bejárás és AI fotózás ingatlanosoknak — Budapesten és az agglomerációban.",
    url: site.url,
    images: [
      {
        url: site.ogImage,
        alt: "Home Visual Studio — professzionális ingatlanfotózás Budapesten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingatlanfotózás & ingatlan média Budapesten | Home Visual Studio",
    description:
      "Professzionális ingatlanfotózás, videó, 360° virtuális bejárás és AI fotózás ingatlanosoknak — Budapesten és az agglomerációban.",
    images: [site.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={cn(clashDisplay.variable, inter.variable)}>
      <body className="flex min-h-screen flex-col bg-background font-sans antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Ugrás a tartalomra
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
