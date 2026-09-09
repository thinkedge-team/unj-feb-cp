import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import type { ReactNode } from "react"

import "./globals.css"
import { siteConfig } from "@/config/site"
import { createPageMetadata } from "@/lib/metadata"

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
})

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${fontSans.variable} font-sans`}>{children}</body>
    </html>
  )
}

