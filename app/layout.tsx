import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StructuredData } from "@/components/seo/structured-data"
import { generateOrganizationSchema } from "@/lib/seo"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "InvisiRelief™ - Discreet Relief. Reimagined.",
  description:
    "Premium discreet medicated chewing gum for intraoral pain relief. Clinical-grade, fast-acting relief that fits your lifestyle.",
  generator: "Next.js",
  keywords: ["pain relief", "medicated chewing gum", "discreet relief", "intraoral", "clinical"],
  authors: [{ name: "InvisiRelief" }],
  creator: "InvisiRelief",
  publisher: "InvisiRelief",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://invisirelief.com",
    siteName: "InvisiRelief™",
    title: "InvisiRelief™ - Discreet Relief. Reimagined.",
    description: "Premium discreet medicated chewing gum for intraoral pain relief.",
    images: [
      {
        url: "/images/invisirelief-logo-clean.png",
        width: 1200,
        height: 630,
        alt: "InvisiRelief™ Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InvisiRelief™ - Discreet Relief. Reimagined.",
    description: "Premium discreet medicated chewing gum for intraoral pain relief.",
    images: ["/images/invisirelief-logo-clean.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#27C0C9",
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <StructuredData data={generateOrganizationSchema()} />
      </head>
      <body className="font-sans antialiased">
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
