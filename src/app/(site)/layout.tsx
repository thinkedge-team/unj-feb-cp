import type { ReactNode } from "react"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"

export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <a
        className="sr-only absolute left-4 top-4 z-50 min-h-11 bg-[var(--color-feb-copper)] px-4 py-2 font-semibold text-[var(--color-white)] focus:not-sr-only"
        href="#main-content"
      >
        Menuju konten utama
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  )
}
