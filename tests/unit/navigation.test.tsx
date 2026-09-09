import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import SiteLayout from "@/app/(site)/layout"
import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { MegaMenu } from "@/components/layout/mega-menu"
import { MobileNavigation } from "@/components/layout/mobile-navigation"
import { navigationGroups } from "@/config/navigation"
import { siteConfig } from "@/config/site"

afterEach(() => {
  cleanup()
})

describe("Site Configuration", () => {
  it("exports official metadata and logo sources", () => {
    expect(siteConfig.name).toContain("Fakultas Ekonomi dan Bisnis")
    expect(siteConfig.shortName).toBe("FEB UNJ")
    expect(siteConfig.logos.feb).toBe(
      "https://feb.unj.ac.id/feb/assets/filegambar/logo/febunj2.png",
    )
    expect(siteConfig.logos.unj).toBe(
      "https://feb.unj.ac.id/feb/assets/filegambar/logo/unjlogo.png",
    )
    expect(siteConfig.contact.address).toBeDefined()
    expect(siteConfig.contact.email).toBeDefined()
    expect(siteConfig.contact.phone).toBeDefined()
    expect(siteConfig.contact.mapUrl).toBeDefined()
    expect(siteConfig.socials.length).toBeGreaterThan(0)
    expect(siteConfig.accreditation.badge).toBeDefined()
  })
})

describe("Navigation Configuration", () => {
  it("covers all primary groups and every mandatory child item in IA", () => {
    const expectedIA: Record<string, readonly string[]> = {
      "Profil & SDM": [
        "Tentang FEB",
        "Sejarah",
        "Visi Misi",
        "Struktur Organisasi",
        "Pimpinan",
        "Prestasi",
        "Fasilitas",
        "Direktori Dosen",
        "Tenaga Kependidikan",
        "Dosen Praktisi",
        "Senat Fakultas",
        "Dosen Purnabakti",
      ],
      "Program & Akademik": [
        "Semua Program",
        "Program Doktor (S3)",
        "Program Magister (S2)",
        "Program Sarjana (S1)",
        "Program Sarjana Terapan (D4)",
        "Informasi Akademik",
        "Kalender Akademik",
        "Kurikulum",
        "Dokumen Akademik",
      ],
      "Riset & Kemitraan": [
        "Penelitian",
        "Publikasi",
        "Pengabdian Masyarakat",
        "Mitra Dalam Negeri",
        "Mitra Internasional",
        "Dokumen Kerjasama",
        "Mobilitas Mahasiswa",
        "Program Internasional",
        "Mitra Global",
      ],
      "Mahasiswa & Layanan": [
        "Beasiswa",
        "Organisasi Mahasiswa",
        "Prestasi Mahasiswa",
        "Karya Mahasiswa",
        "Berita",
        "Pengumuman",
        "Event",
        "Artikel",
        "Dokumen Publik",
        "Unduhan",
        "PPID",
        "Zona Integritas",
        "Layanan Fakultas",
        "Hubungi FEB UNJ",
      ],
    }

    expect(navigationGroups.map((group) => group.title)).toEqual(Object.keys(expectedIA))

    for (const [groupTitle, expectedItems] of Object.entries(expectedIA)) {
      const group = navigationGroups.find((candidate) => candidate.title === groupTitle)
      expect(group?.items.map((item) => item.title)).toEqual(expectedItems)
      for (const item of group?.items ?? []) expect(item.href.length).toBeGreaterThan(1)
    }
  })
})

describe("Breadcrumbs", () => {
  it("renders accessible breadcrumb navigation with parent hierarchy", () => {
    const items = [
      { label: "Beranda", href: "/" },
      { label: "Program Studi", href: "/program-studi" },
      { label: "S1 Manajemen" },
    ]

    render(<Breadcrumbs items={items} />)

    const nav = screen.getByRole("navigation", { name: /breadcrumb/i })
    expect(nav).toBeDefined()

    const list = nav.querySelector("ol")
    expect(list).not.toBeNull()

    const homeLink = screen.getByRole("link", { name: "Beranda" })
    expect(homeLink.getAttribute("href")).toBe("/")

    const prodiLink = screen.getByRole("link", { name: "Program Studi" })
    expect(prodiLink.getAttribute("href")).toBe("/program-studi")

    const currentItem = screen.getByText("S1 Manajemen")
    expect(currentItem.getAttribute("aria-current")).toBe("page")
    expect(currentItem.closest("a")).toBeNull()
  })
})

describe("Header and MegaMenu", () => {
  it("renders the official FEB UNJ brand logo with explicit alt text", () => {
    render(<Header />)

    const febLogo = screen.getByAltText(/Logo Fakultas Ekonomi dan Bisnis UNJ/i)
    expect(febLogo).toBeDefined()
  })

  it("renders all desktop IA groups with deterministic disclosure relationships", () => {
    render(<Header />)

    expect(screen.getByRole("navigation", { name: /navigasi utama/i })).toBeDefined()

    for (const group of navigationGroups) {
      const trigger = screen.getByRole("button", { name: new RegExp(`^${group.title.replace("&", "\\&")}`, "i") })
      expect(trigger.getAttribute("aria-haspopup")).toBe("true")
      expect(trigger.getAttribute("aria-controls")).toBe(
        `mega-menu-${group.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "dan")}`,
      )
      expect(trigger.getAttribute("aria-expanded")).toBe("false")
    }

    expect(screen.queryByRole("button", { name: /cari/i })).toBeNull()
    expect(screen.getByRole("link", { name: /pendaftaran/i })).toBeDefined()
  })

  it("does not open a mega menu on ordinary Tab focus", () => {
    render(<Header />)

    const profilTrigger = screen.getByRole("button", { name: /^profil/i })
    fireEvent.focus(profilTrigger)

    expect(profilTrigger.getAttribute("aria-expanded")).toBe("false")
    expect(document.getElementById("mega-menu-profil")).toBeNull()
  })

  it("opens on explicit activation and closes on Escape restoring trigger focus", () => {
    render(<Header />)

    const profilTrigger = screen.getByRole("button", { name: /^Profil/i })
    profilTrigger.focus()
    fireEvent.click(profilTrigger)

    expect(profilTrigger.getAttribute("aria-expanded")).toBe("true")
    expect(document.getElementById("mega-menu-profil-dan-sdm")).not.toBeNull()
    expect(screen.getByRole("link", { name: "Tentang FEB" })).toBeDefined()

    fireEvent.keyDown(document, { key: "Escape" })
    expect(profilTrigger.getAttribute("aria-expanded")).toBe("false")
    expect(document.activeElement).toBe(profilTrigger)
  })

  it("closes mega menu when focus leaves the header container", () => {
    render(
      <div>
        <Header />
        <button type="button">Tombol Luar</button>
      </div>,
    )

    const profilTrigger = screen.getByRole("button", { name: /^Profil/i })
    const outsideButton = screen.getByRole("button", { name: "Tombol Luar" })
    const header = screen.getByRole("banner")

    fireEvent.click(profilTrigger)
    expect(profilTrigger.getAttribute("aria-expanded")).toBe("true")

    fireEvent.blur(header, { relatedTarget: outsideButton })
    expect(profilTrigger.getAttribute("aria-expanded")).toBe("false")
    expect(document.getElementById("mega-menu-profil-dan-sdm")).toBeNull()
  })

  it("renders MegaMenu directly with container id matching group", () => {
    const group = navigationGroups[0]
    render(
      <MegaMenu
        activeGroup={group}
        isOpen={true}
        onClose={() => {}}
      />,
    )

    const menu = document.getElementById("mega-menu-profil-dan-sdm")
    expect(menu).not.toBeNull()
    expect(screen.getByText(group.title)).toBeDefined()
    expect(screen.getByRole("link", { name: group.items[0].title })).toBeDefined()
  })
})

describe("Mobile Navigation", () => {
  it("renders accessible drawer with collapsible groups, 44px touch targets, and handles focus trap/escape", () => {
    const onClose = vi.fn()
    const { rerender } = render(
      <MobileNavigation
        isOpen={true}
        onClose={onClose}
        onOpen={() => {}}
      />,
    )

    const dialog = screen.getByRole("dialog", { name: /Menu navigasi mobile/i })
    expect(dialog).toBeDefined()
    expect(dialog.getAttribute("aria-modal")).toBe("true")

    const closeBtn = screen.getByRole("button", { name: /Tutup menu/i })
    expect(closeBtn.className).toMatch(/min-h-11/)
    expect(closeBtn.className).toMatch(/min-w-11/)
    expect(document.activeElement).toBe(closeBtn)

    const profilGroup = screen.getByText("Profil & SDM")
    expect(profilGroup).toBeDefined()

    const links = screen.getAllByRole("link")
    expect(links.length).toBeGreaterThan(0)
    for (const link of links) {
      expect(link.className).toContain("min-h-11")
    }

    fireEvent.keyDown(closeBtn, { key: "Tab", shiftKey: true })
    expect(document.activeElement).toBe(links[links.length - 1])

    // Test Escape key closes drawer
    fireEvent.keyDown(dialog, { key: "Escape" })
    expect(onClose).toHaveBeenCalled()
  })

  it("restores focus to the mobile trigger after controlled close", () => {
    render(<Header />)

    const openTrigger = screen.getByRole("button", { name: "Buka menu" })
    openTrigger.focus()
    fireEvent.click(openTrigger)

    const closeButton = screen.getByRole("button", { name: "Tutup menu" })
    expect(document.activeElement).toBe(closeButton)

    fireEvent.click(closeButton)
    expect(screen.queryByRole("dialog")).toBeNull()
    expect(document.activeElement).toBe(openTrigger)
  })
})

describe("Footer", () => {
  it("renders official FEB logo, institutional address, accreditation, and quick links", () => {
    render(<Footer />)

    const footer = screen.getByRole("contentinfo")
    expect(footer).toBeDefined()

    const febLogo = screen.getByAltText(/Logo FEB UNJ/i)
    expect(febLogo).toBeDefined()

    expect(screen.getByText(/Rawamangun/i)).toBeDefined()

    const mapLink = screen.getByRole("link", { name: /peta kampus/i })
    expect(mapLink.getAttribute("href")).toBe(siteConfig.contact.mapUrl)

    expect(screen.getByText(/Akreditasi Unggul/i)).toBeDefined()

    const quickLink = screen.getByRole("link", { name: "Program Studi" })
    expect(quickLink).toBeDefined()
  })
})

describe("SiteLayout", () => {
  it("wraps children with skip link, header, main landmark with tabIndex=-1, and footer", () => {
    render(
      <SiteLayout>
        <div data-testid="test-child">Halaman Konten</div>
      </SiteLayout>,
    )

    const skipLink = screen.getByRole("link", { name: /menuju konten/i })
    expect(skipLink.getAttribute("href")).toBe("#main-content")

    expect(screen.getByRole("banner")).toBeDefined()

    const main = screen.getByRole("main")
    expect(main.getAttribute("id")).toBe("main-content")
    expect(main.getAttribute("tabindex")).toBe("-1")
    expect(screen.getByTestId("test-child")).toBeDefined()

    expect(screen.getByRole("contentinfo")).toBeDefined()
  })
})
