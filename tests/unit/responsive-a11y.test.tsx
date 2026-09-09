import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"

import SiteLayout from "@/app/(site)/layout"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { MobileNavigation } from "@/components/layout/mobile-navigation"
import { DetailPageTemplate } from "@/components/templates/detail-page-template"
import { LandingPageTemplate } from "@/components/templates/landing-page-template"

afterEach(() => {
  cleanup()
})

describe("Landmark Semantics & SiteLayout", () => {
  it("renders skip-to-content link pointing to main-content id", () => {
    render(
      <SiteLayout>
        <div>Test Page Content</div>
      </SiteLayout>,
    )

    const skipLink = screen.getByRole("link", { name: /menuju konten utama/i })
    expect(skipLink).toBeDefined()
    expect(skipLink.getAttribute("href")).toBe("#main-content")
  })

  it("renders standard semantic landmarks (header, main, footer)", () => {
    const { container } = render(
      <SiteLayout>
        <div>Main Landmark Content</div>
      </SiteLayout>,
    )

    const header = container.querySelector("header")
    const main = container.querySelector("main#main-content")
    const footer = container.querySelector("footer")

    expect(header).not.toBeNull()
    expect(main).not.toBeNull()
    expect(main?.getAttribute("tabindex")).toBe("-1")
    expect(footer).not.toBeNull()
  })

  it("provides accessible aria-label on primary navigation landmark", () => {
    render(<Header />)

    const nav = screen.getByRole("navigation", { name: /navigasi utama/i })
    expect(nav).toBeDefined()
  })
})

describe("Mobile Navigation Drawer Accessibility", () => {
  it("has accessible attributes and >= 44px touch targets on trigger button", () => {
    render(<MobileNavigation isOpen={false} onClose={() => {}} onOpen={() => {}} />)

    const trigger = screen.getByRole("button", { name: /buka menu/i })
    expect(trigger).toBeDefined()
    expect(trigger.getAttribute("aria-expanded")).toBe("false")
    expect(trigger.getAttribute("aria-haspopup")).toBe("dialog")
    expect(trigger.className).toMatch(/min-h-11/)
    expect(trigger.className).toMatch(/min-w-11/)
  })

  it("renders modal dialog with role, aria-modal, and focus management when open", () => {
    let closed = false
    const handleClose = () => {
      closed = true
    }

    render(<MobileNavigation isOpen={true} onClose={handleClose} onOpen={() => {}} />)

    const dialog = screen.getByRole("dialog", { name: /menu navigasi mobile/i })
    expect(dialog).toBeDefined()
    expect(dialog.getAttribute("aria-modal")).toBe("true")

    const closeButton = screen.getByRole("button", { name: /tutup menu/i })
    expect(closeButton).toBeDefined()
    expect(closeButton.className).toMatch(/min-h-11/)
    expect(closeButton.className).toMatch(/min-w-11/)

    const mobileNav = screen.getByRole("navigation", { name: /navigasi mobile/i })
    expect(mobileNav).toBeDefined()

    // Test Escape key closes drawer
    fireEvent.keyDown(document, { key: "Escape" })
    expect(closed).toBe(true)
  })
})

describe("Header Navigation Touch Targets", () => {
  it("provides registration CTA and mobile trigger with >= 44px touch target", () => {
    render(<Header />)

    const ctaLink = screen.getByRole("link", { name: /pendaftaran/i })
    expect(ctaLink).toBeDefined()
    expect(ctaLink.className).toMatch(/min-h-11/)

    const mobileTrigger = screen.getByRole("button", { name: /buka menu/i })
    expect(mobileTrigger).toBeDefined()
    expect(mobileTrigger.className).toMatch(/min-h-11/)
    expect(mobileTrigger.className).toMatch(/min-w-11/)
  })

  it("desktop menu triggers have min-h-11 touch target and aria attributes", () => {
    render(<Header />)

    const triggers = screen.getAllByRole("button", { expanded: false })
    const profilTrigger = triggers.find((btn) => btn.textContent?.includes("Profil"))

    expect(profilTrigger).toBeDefined()
    expect(profilTrigger?.className).toMatch(/min-h-11/)
    expect(profilTrigger?.getAttribute("aria-haspopup")).toBe("true")
  })
})

describe("Semantic Heading Hierarchy in Templates", () => {
  it("LandingPageTemplate renders single h1 and h2 section headings", () => {
    render(
      <LandingPageTemplate
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Profil" }]}
        category="Profil Fakultas"
        sections={[
          { heading: "Visi Institusi", body: "Menjadi fakultas ekonomi unggulan bertaraf internasional." },
          { heading: "Misi Fakultas", body: "Menyelenggarakan tridarma bermutu tinggi." },
        ]}
        summary="Ringkasan profil FEB UNJ."
        title="Tentang FEB UNJ"
      />,
    )

    const h1Elements = screen.getAllByRole("heading", { level: 1 })
    expect(h1Elements.length).toBe(1)
    expect(h1Elements[0].textContent).toContain("Tentang FEB UNJ")

    const h2Elements = screen.getAllByRole("heading", { level: 2 })
    expect(h2Elements.length).toBe(2)
    expect(h2Elements[0].textContent).toContain("Visi Institusi")
    expect(h2Elements[1].textContent).toContain("Misi Fakultas")
  })

  it("DetailPageTemplate renders h1 for article/program and h2 for content blocks", () => {
    render(
      <DetailPageTemplate
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Program Studi", href: "/program-studi" }, { label: "S1 Akuntansi" }]}
        eyebrow="Sarjana"
        metadataItems={[{ label: "Akreditasi", value: "Unggul" }]}
        title="S1 Akuntansi"
      >
        <section>
          <h2>Kurikulum & Pembelajaran</h2>
          <p>Rincian kurikulum OBE berbasis standar internasional.</p>
        </section>
      </DetailPageTemplate>,
    )

    const h1 = screen.getByRole("heading", { level: 1, name: "S1 Akuntansi" })
    expect(h1).toBeDefined()

    const h2 = screen.getByRole("heading", { level: 2, name: "Kurikulum & Pembelajaran" })
    expect(h2).toBeDefined()
  })
})

describe("Footer Landmark & Navigation", () => {
  it("renders structured sections with headings and contact info", () => {
    render(<Footer />)

    const identityHeading = screen.getByRole("heading", { level: 2, name: /FEB UNJ/i })
    expect(identityHeading).toBeDefined()

    const quickLinksHeading = screen.getByRole("heading", { level: 2, name: /Akses Cepat/i })
    expect(quickLinksHeading).toBeDefined()
  })
})
