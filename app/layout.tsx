import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BM GULF Travel and Tour - Your Trusted Partner for Travel & Visa Services",
  description:
    "Professional travel agency specializing in Umrah Visa, Hajj Visa, Freelance Visa, and Air Ticket Booking services. Based in Rawalpindi, Pakistan.",
  keywords:
    "Umrah visa Pakistan, Hajj packages, Freelance visa UAE, Air tickets Rawalpindi, Travel agency Pakistan, BM GULF Travel",
  authors: [{ name: "BM GULF Travel and Tour" }],
  creator: "BM GULF Travel and Tour",
  publisher: "BM GULF Travel and Tour",
  robots: "index, follow",
  
  // ✅ Yahan favicon add karein
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/icon.png",
    },
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bmgulftravel.com",
    title: "BM GULF Travel and Tour - Professional Travel & Visa Services",
    description: "Your trusted partner for Umrah, Hajj, Freelance visas and air ticket booking services.",
    siteName: "BM GULF Travel and Tour",
  },
  twitter: {
    card: "summary_large_image",
    title: "BM GULF Travel and Tour",
    description: "Professional travel & visa services",
  },
  generator: 'Musab.khadim'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}