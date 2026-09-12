import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"

import HomePage from "@/app/(site)/page"
import { Hero } from "@/features/home/hero"
import { QuickAccess } from "@/features/home/quick-access"
import { DeanWelcome } from "@/features/home/dean-welcome"
import { FacultyStatistics } from "@/features/home/faculty-statistics"
import { ProgramExplorer } from "@/features/home/program-explorer"
import { AcademicHighlights } from "@/features/home/academic-highlights"
import { NewsSection } from "@/features/home/news-section"
import { EventsSection } from "@/features/home/events-section"
import { AchievementSection } from "@/features/home/achievement-section"
import { FacultySpotlight } from "@/features/home/faculty-spotlight"
import { PartnerSection } from "@/features/home/partner-section"
import { SocialLifeSection } from "@/features/home/social-life-section"
import { AspirationCTA } from "@/features/home/aspiration-cta"

afterEach(() => {
  cleanup()
})

const validStaticRoutes = new Set([
  "/",
  "/profil",
  "/profil/tentang-feb",
  "/profil/sejarah",
  "/profil/visi-misi-tujuan",
  "/profil/struktur-organisasi",
  "/profil/pimpinan",
  "/profil/prestasi",
  "/profil/fasilitas",
  "/sdm",
  "/sdm/dosen",
  "/sdm/tendik",
  "/sdm/tenaga-kependidikan",
  "/program-studi",
  "/program-studi/doktor",
  "/program-studi/magister",
  "/program-studi/sarjana",
  "/program-studi/sarjana-terapan",
  "/akademik",
  "/akademik/informasi-akademik",
  "/akademik/kalender-akademik",
  "/akademik/kurikulum",
  "/akademik/dokumen-akademik",
  "/kemahasiswaan",
  "/kemahasiswaan/beasiswa",
  "/kemahasiswaan/organisasi",
  "/kemahasiswaan/prestasi",
  "/kemahasiswaan/karya-mahasiswa",
  "/riset",
  "/riset/penelitian",
  "/kerjasama",
  "/kerjasama/dalam-negeri",
  "/internasional",
  "/internasional/mobilitas",
  "/informasi",
  "/informasi/berita",
  "/informasi/pengumuman",
  "/informasi/event",
  "/informasi/artikel",
  "/dokumen",
  "/dokumen/publik",
  "/dokumen/unduhan",
  "/layanan",
  "/layanan/ppid",
  "/layanan/zona-integritas",
  "/layanan/layanan-fakultas",
  "/kontak",
])

describe("FEB UNJ Editorial Homepage", () => {
  it("renders with a single h1 element matching the institutional motto", () => {
    render(<HomePage />)
    const h1Elements = screen.getAllByRole("heading", { level: 1 })
    expect(h1Elements).toHaveLength(1)
    expect(h1Elements[0].textContent).toContain("Mencerdaskan, Memartabatkan, Menggerakkan Ekonomi Berkelanjutan")
  })

  it("renders all 13 editorial feature sections with semantic landmarks", () => {
    const { container } = render(<HomePage />)
    const sections = container.querySelectorAll("section")
    expect(sections.length).toBeGreaterThanOrEqual(13)

    // Every section should have an accessible label via aria-labelledby or aria-label
    for (const section of sections) {
      const hasAriaLabel = section.hasAttribute("aria-label")
      const hasAriaLabelledBy = section.hasAttribute("aria-labelledby")
      expect(hasAriaLabel || hasAriaLabelledBy).toBe(true)
    }
  })

  it("contains 0 broken internal links and valid external links across the entire homepage", () => {
    const { container } = render(<HomePage />)
    const links = Array.from(container.querySelectorAll("a"))

    expect(links.length).toBeGreaterThan(20)

    const brokenLinks: string[] = []
    for (const link of links) {
      const href = link.getAttribute("href")
      expect(href).toBeTruthy()
      if (!href) continue

      if (href.startsWith("#")) {
        // In-page hash link
        continue
      } else if (href.startsWith("/")) {
        const cleanPath = href.split("?")[0].split("#")[0]
        // Allow dynamic program-studi, sdm/dosen, and informasi routes
        const isDynamicMatch =
          cleanPath.startsWith("/program-studi/") ||
          cleanPath.startsWith("/sdm/dosen/") ||
          cleanPath.startsWith("/informasi/berita/") ||
          cleanPath.startsWith("/informasi/event/") ||
          cleanPath.startsWith("/informasi/pengumuman/") ||
          cleanPath.startsWith("/informasi/artikel/") ||
          cleanPath.startsWith("/dokumen/") ||
          cleanPath.startsWith("/sdm/") ||
          cleanPath.startsWith("/profil/") ||
          cleanPath.startsWith("/akademik/") ||
          cleanPath.startsWith("/kemahasiswaan/") ||
          cleanPath.startsWith("/layanan/") ||
          cleanPath.startsWith("/riset/") ||
          cleanPath.startsWith("/kerjasama/") ||
          cleanPath.startsWith("/internasional/")

        if (!validStaticRoutes.has(cleanPath) && !isDynamicMatch) {
          brokenLinks.push(href)
        }
      } else {
        // External link
        const isExternal =
          href.startsWith("http://") ||
          href.startsWith("https://") ||
          href.startsWith("mailto:") ||
          href.startsWith("tel:")
        expect(isExternal).toBe(true)
      }
    }

    expect(brokenLinks).toEqual([])
  })
})

describe("Section 1: Hero Editorial Stage", () => {
  it("renders accreditation badge, primary CTAs, and search trigger", () => {
    render(<Hero />)
    expect(screen.getByText(/Akreditasi Unggul/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()

    const programCta = screen.getByRole("link", { name: /Jelajahi Program Studi/i })
    expect(programCta.getAttribute("href")).toBe("/program-studi")

    const pedomanCta = screen.getByRole("link", { name: /Unduh Pedoman Akademik/i })
    expect(pedomanCta.getAttribute("href")).toBe("/dokumen")

    expect(screen.getByRole("search", { hidden: true }) || screen.getByPlaceholderText(/cari program/i) || screen.getByText(/pencarian cepat/i)).toBeDefined()
  })
})

describe("Section 2: Quick Access", () => {
  it("renders four institutional target audience shortcuts", () => {
    render(<QuickAccess />)
    expect(screen.getByText(/Calon Mahasiswa/i)).toBeDefined()
    expect(screen.getByText(/Mahasiswa Aktif/i)).toBeDefined()
    expect(screen.getByText(/Dosen & Peneliti/i)).toBeDefined()
    expect(screen.getByText(/Mitra & Alumni/i)).toBeDefined()
  })
})

describe("Section 3: Dean's Welcome", () => {
  it("renders non-card asymmetric editorial layout with Dean identity and institutional welcome", () => {
    render(<DeanWelcome />)
    expect(screen.getAllByText(/Dekan/i).length).toBeGreaterThan(0)
    // Should render dean identity
    expect(screen.getAllByText(/Yusuf Santoso/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Selamat Datang di Fakultas Ekonomi dan Bisnis/i)).toBeDefined()
  })
})

describe("Section 4: Faculty Statistics", () => {
  it("renders the 5 high-credibility institutional numbers", () => {
    render(<FacultyStatistics />)
    expect(screen.getByText("21")).toBeDefined()
    expect(screen.getByText("120+")).toBeDefined()
    expect(screen.getByText(/95%/)).toBeDefined()
    expect(screen.getByText("5.000+")).toBeDefined()
    expect(screen.getByText("40+")).toBeDefined()
    expect(screen.getAllByText(/Program Studi/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Dosen & Peneliti/i).length).toBeGreaterThan(0)
  })
})

describe("Section 5: Program Explorer", () => {
  it("renders degree level tabs and allows filtering programs", () => {
    render(<ProgramExplorer />)
    expect(screen.getByRole("tab", { name: /^semua$/i })).toBeDefined()
    expect(screen.getByRole("tab", { name: /^doktor$/i })).toBeDefined()
    expect(screen.getByRole("tab", { name: /^magister$/i })).toBeDefined()
    expect(screen.getByRole("tab", { name: /^sarjana$/i })).toBeDefined()
    expect(screen.getByRole("tab", { name: /^sarjana terapan$/i })).toBeDefined()

    const viewAllLinks = screen.getAllByRole("link", { name: /Lihat Semua 21 Program Studi/i })
    expect(viewAllLinks.length).toBeGreaterThan(0)
    expect(viewAllLinks[0].getAttribute("href")).toBe("/program-studi")

    // Switch tab to Doktor
    fireEvent.click(screen.getByRole("tab", { name: /^doktor$/i }))
    expect(screen.getAllByText(/S3 Ilmu Manajemen/i).length).toBeGreaterThan(0)
  })
})

describe("Section 6: Academic & Research Highlights", () => {
  it("renders accreditation milestones and research centers", () => {
    render(<AcademicHighlights />)
    expect(screen.getByText(/Akreditasi & Rekognisi Internasional/i)).toBeDefined()
    expect(screen.getAllByText(/FIBAA/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/AACSB/i).length).toBeGreaterThan(0)
  })
})

describe("Section 7: Latest News", () => {
  it("renders hero featured article and news grid", () => {
    render(<NewsSection />)
    expect(screen.getByText(/Kabar & Warta Kampus/i)).toBeDefined()
    const allNewsLink = screen.getByRole("link", { name: /Semua Berita/i })
    expect(allNewsLink.getAttribute("href")).toBe("/informasi/berita")
  })
})

describe("Section 8: Upcoming Events", () => {
  it("renders upcoming academic events with dates and venues", () => {
    render(<EventsSection />)
    expect(screen.getByText(/Agenda & Kalender Kegiatan/i)).toBeDefined()
    const allEventsLink = screen.getByRole("link", { name: /Semua Agenda/i })
    expect(allEventsLink.getAttribute("href")).toBe("/informasi/event")
  })
})

describe("Section 9: Achievements Showcase", () => {
  it("renders national and international student & faculty awards", () => {
    render(<AchievementSection />)
    expect(screen.getByText(/Prestasi & Capaian Unggul/i)).toBeDefined()
  })
})

describe("Section 10: Faculty Spotlight", () => {
  it("renders distinguished professors and practitioners", () => {
    render(<FacultySpotlight />)
    expect(screen.getByText(/Pakar & Dosen Pengampu/i)).toBeDefined()
    const allLecturersLink = screen.getByRole("link", { name: /Direktori Dosen/i })
    expect(allLecturersLink.getAttribute("href")).toBe("/sdm/dosen")
  })
})

describe("Section 11: Strategic Partners", () => {
  it("renders partners and institutional collaboration metrics", () => {
    render(<PartnerSection />)
    expect(screen.getByText(/Jejaring Kemitraan Strategis/i)).toBeDefined()
    expect(screen.getByText(/Bank Indonesia/i)).toBeDefined()
    const partnerLink = screen.getByRole("link", { name: /Kemitraan/i })
    expect(partnerLink.getAttribute("href")).toBe("/kerjasama")
  })
})

describe("Section 12: Campus Life & Social Media", () => {
  it("renders student life atmosphere and official channels", () => {
    render(<SocialLifeSection />)
    expect(screen.getByText(/Dinamika Kampus & Kehidupan Mahasiswa/i)).toBeDefined()
    expect(screen.getByText(/BEM FEB UNJ/i)).toBeDefined()
  })
})

describe("Section 13: Aspirational CTA Banner", () => {
  it("renders high-contrast institutional invitation banner", () => {
    render(<AspirationCTA />)
    expect(screen.getByText(/Mulai Perjalanan Akademik Anda di FEB UNJ/i)).toBeDefined()
    const enrollLink = screen.getByRole("link", { name: /Daftar Sekarang|Penerimaan Mahasiswa/i })
    expect(enrollLink.getAttribute("href")).toBe("/program-studi")
  })
})
