import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/app/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OVERBOOST AGENCY - Performance Marketing",
  description: "Convertimos presupuestos de marketing en motores de ingresos con un enfoque basado en datos.",
  openGraph: {
    title: "OVERBOOST AGENCY - Performance Marketing",
    description: "Convertimos presupuestos de marketing en motores de ingresos con un enfoque basado en datos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OVERBOOST AGENCY",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OVERBOOST AGENCY - Performance Marketing",
    description: "Convertimos presupuestos de marketing en motores de ingresos con un enfoque basado en datos.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
