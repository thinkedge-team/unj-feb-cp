import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { generateStaticParams as profilStaticParams, default as ProfilDetailPage } from "@/app/(site)/profil/[slug]/page"
import { default as ProfilIndexPage } from "@/app/(site)/profil/page"
import { generateStaticParams as akademikStaticParams, default as AkademikDetailPage } from "@/app/(site)/akademik/[slug]/page"
import { default as AkademikIndexPage } from "@/app/(site)/akademik/page"
import { generateStaticParams as kemahasiswaanStaticParams, default as KemahasiswaanDetailPage } from "@/app/(site)/kemahasiswaan/[slug]/page"
import { default as KemahasiswaanIndexPage } from "@/app/(site)/kemahasiswaan/page"
import { generateStaticParams as layananStaticParams, default as LayananDetailPage } from "@/app/(site)/layanan/[slug]/page"
import { default as LayananIndexPage } from "@/app/(site)/layanan/page"
import { generateStaticParams as risetStaticParams, default as RisetDetailPage } from "@/app/(site)/riset/[slug]/page"
import { default as RisetPage } from "@/app/(site)/riset/page"
import { generateStaticParams as kerjasamaStaticParams, default as KerjasamaDetailPage } from "@/app/(site)/kerjasama/[slug]/page"
import { default as KerjasamaPage } from "@/app/(site)/kerjasama/page"
import { generateStaticParams as internasionalStaticParams, default as InternasionalDetailPage } from "@/app/(site)/internasional/[slug]/page"
import { default as InternasionalPage } from "@/app/(site)/internasional/page"
import { default as KontakPage } from "@/app/(site)/kontak/page"
import { default as InformasiIndexPage } from "@/app/(site)/informasi/page"
import { generateStaticParams as informasiCategoryStaticParams } from "@/app/(site)/informasi/[category]/page"
import { generateStaticParams as dokumenStaticParams, default as DocumentCategoryPage } from "@/app/(site)/dokumen/[category]/page"
import { generateStaticParams as sdmStaticParams, default as SDMCategoryPage } from "@/app/(site)/sdm/[category]/page"
import { generateStaticParams as programStaticParams, default as ProgramDetailPage } from "@/app/(site)/program-studi/[slug]/page"
import { navigationGroups } from "@/config/navigation"
import { siteConfig } from "@/config/site"
import { ContactForm } from "@/features/contact/contact-form"

// Mock next/navigation
const mockNotFound = vi.fn()
vi.mock("next/navigation", () => ({
  notFound: () => {
    mockNotFound()
    throw new Error("NEXT_NOT_FOUND")
  },
}))

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

describe("Landing Route Static Params", () => {
  it("exports all mandatory Profil route slugs in generateStaticParams", async () => {
    const params = await profilStaticParams()
    const slugs = params.map((p) => p.slug)

    const expectedProfil = [
      "tentang-feb",
      "sejarah",
      "visi-misi-tujuan",
      "struktur-organisasi",
      "pimpinan",
      "prestasi",
      "fasilitas",
    ]

    for (const expected of expectedProfil) {
      expect(slugs).toContain(expected)
    }
  })

  it("exports all mandatory Akademik route slugs in generateStaticParams", async () => {
    const params = await akademikStaticParams()
    const slugs = params.map((p) => p.slug)

    const expectedAkademik = [
      "informasi-akademik",
      "kalender-akademik",
      "kurikulum",
      "dokumen-akademik",
    ]

    for (const expected of expectedAkademik) {
      expect(slugs).toContain(expected)
    }
  })

  it("exports all mandatory Kemahasiswaan route slugs in generateStaticParams", async () => {
    const params = await kemahasiswaanStaticParams()
    const slugs = params.map((p) => p.slug)

    const expectedKemahasiswaan = [
      "beasiswa",
      "organisasi",
      "prestasi",
      "karya-mahasiswa",
    ]

    for (const expected of expectedKemahasiswaan) {
      expect(slugs).toContain(expected)
    }
  })

  it("exports all mandatory Layanan route slugs in generateStaticParams", async () => {
    const params = await layananStaticParams()
    const slugs = params.map((p) => p.slug)

    const expectedLayanan = ["ppid", "zona-integritas", "layanan-fakultas"]

    for (const expected of expectedLayanan) {
      expect(slugs).toContain(expected)
    }
  })

  it("exports tendik alias in SDM generateStaticParams", async () => {
    const params = await sdmStaticParams()
    const categories = params.map((p) => p.category)
    expect(categories).toContain("tendik")
    expect(categories).toContain("tenaga-kependidikan")
  })

  it("exports degree levels in Program Studi generateStaticParams", async () => {
    const params = await programStaticParams()
    const slugs = params.map((p) => p.slug)
    expect(slugs).toContain("doktor")
    expect(slugs).toContain("magister")
    expect(slugs).toContain("sarjana")
    expect(slugs).toContain("sarjana-terapan")
  })

  it("exports publik and unduhan in Dokumen generateStaticParams", async () => {
    const params = await dokumenStaticParams()
    const categories = params.map((p) => p.category)
    expect(categories).toContain("publik")
    expect(categories).toContain("unduhan")
  })
})

describe("Profil Pages", () => {
  it("renders Profil index landing page with links to profile sections", () => {
    const page = ProfilIndexPage()
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
    expect(screen.getByText(/Tentang FEB/i)).toBeDefined()
  })

  it("renders /profil/pimpinan with Dean and Vice Deans credentials", async () => {
    const page = await ProfilDetailPage({
      params: Promise.resolve({ slug: "pimpinan" }),
    })
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
    expect(screen.getByText(/Prof. Dr. M. Yusuf Santoso/i)).toBeDefined()
    expect(screen.getAllByText(/Dekan/i).length).toBeGreaterThan(0)
  })

  it("renders /profil/fasilitas with campus facilities", async () => {
    const page = await ProfilDetailPage({
      params: Promise.resolve({ slug: "fasilitas" }),
    })
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
    expect(screen.getAllByText(/Laboratorium/i).length).toBeGreaterThan(0)
  })

  it("triggers notFound for unknown profil slug", async () => {
    await expect(
      ProfilDetailPage({
        params: Promise.resolve({ slug: "unknown-profil-slug" }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND")
    expect(mockNotFound).toHaveBeenCalled()
  })
})

describe("Akademik Pages", () => {
  it("renders Akademik index page", () => {
    const page = AkademikIndexPage()
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
  })

  it("renders /akademik/kalender-akademik with academic semester timeline", async () => {
    const page = await AkademikDetailPage({
      params: Promise.resolve({ slug: "kalender-akademik" }),
    })
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
    expect(screen.getAllByText(/Semester/i).length).toBeGreaterThan(0)
  })

  it("triggers notFound for unknown akademik slug", async () => {
    await expect(
      AkademikDetailPage({
        params: Promise.resolve({ slug: "unknown-akademik-slug" }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND")
    expect(mockNotFound).toHaveBeenCalled()
  })
})

describe("Kemahasiswaan Pages", () => {
  it("renders Kemahasiswaan index page", () => {
    const page = KemahasiswaanIndexPage()
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
  })

  it("renders /kemahasiswaan/beasiswa page", async () => {
    const page = await KemahasiswaanDetailPage({
      params: Promise.resolve({ slug: "beasiswa" }),
    })
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
  })

  it("triggers notFound for unknown kemahasiswaan slug", async () => {
    await expect(
      KemahasiswaanDetailPage({
        params: Promise.resolve({ slug: "unknown-kemahasiswaan-slug" }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND")
    expect(mockNotFound).toHaveBeenCalled()
  })
})

describe("Layanan Pages", () => {
  it("renders Layanan index page", () => {
    const page = LayananIndexPage()
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
  })

  it("renders /layanan/ppid page", async () => {
    const page = await LayananDetailPage({
      params: Promise.resolve({ slug: "ppid" }),
    })
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
  })

  it("triggers notFound for unknown layanan slug", async () => {
    await expect(
      LayananDetailPage({
        params: Promise.resolve({ slug: "unknown-layanan-slug" }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND")
    expect(mockNotFound).toHaveBeenCalled()
  })
})

describe("Standalone Landing Pages", () => {
  it("renders /riset with research agenda", () => {
    const page = RisetPage()
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
    expect(screen.getAllByText(/Riset|Penelitian/i).length).toBeGreaterThan(0)
  })

  it("renders /riset/penelitian subpage", async () => {
    const page = await RisetDetailPage({
      params: Promise.resolve({ slug: "penelitian" }),
    })
    render(page)
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
  })

  it("renders /kerjasama with strategic partners", () => {
    const page = KerjasamaPage()
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
    expect(screen.getAllByText(/Bank Indonesia|Mitra/i).length).toBeGreaterThan(0)
  })

  it("renders /kerjasama/dalam-negeri subpage", async () => {
    const page = await KerjasamaDetailPage({
      params: Promise.resolve({ slug: "dalam-negeri" }),
    })
    render(page)
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
  })

  it("renders /internasional with international programs", () => {
    const page = InternasionalPage()
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
    expect(screen.getAllByText(/Internasional|Global/i).length).toBeGreaterThan(0)
  })

  it("renders /internasional/mobilitas subpage", async () => {
    const page = await InternasionalDetailPage({
      params: Promise.resolve({ slug: "mobilitas" }),
    })
    render(page)
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
  })

  it("renders /kontak with campus location, contact info, and contact form", () => {
    const page = KontakPage()
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
    expect(screen.getAllByText(/Rawamangun/i).length).toBeGreaterThan(0)
    expect(screen.getByRole("button", { name: /kirim pesan/i })).toBeDefined()
  })

  it("renders /informasi index page with overview channels", () => {
    const page = InformasiIndexPage()
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
    expect(screen.getByText(/Pusat Informasi FEB UNJ/i)).toBeDefined()
    expect(screen.getByText(/Berita Fakultas/i)).toBeDefined()
  })
})

describe("Remediated Navigation Routes", () => {
  it("renders /sdm/tendik mapping to staff listing without 404", async () => {
    const page = await SDMCategoryPage({
      params: Promise.resolve({ category: "tendik" }),
    })
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
    expect(screen.getAllByText(/Tenaga Kependidikan/i).length).toBeGreaterThan(0)
  })

  it("renders degree level listing for /program-studi/doktor", async () => {
    const page = await ProgramDetailPage({
      params: Promise.resolve({ slug: "doktor" }),
    })
    render(page)

    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
  })

  it("renders /dokumen/publik and /dokumen/unduhan", async () => {
    const publikPage = await DocumentCategoryPage({
      params: Promise.resolve({ category: "publik" }),
    })
    render(publikPage)
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()

    cleanup()

    const unduhanPage = await DocumentCategoryPage({
      params: Promise.resolve({ category: "unduhan" }),
    })
    render(unduhanPage)
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined()
  })
})

describe("Automated Comprehensive Navigation Link Integrity", () => {
  it("verifies that EVERY internal href in navigationGroups and siteConfig resolves to a statically generated route", async () => {
    // 1. Static base routes
    const staticBaseRoutes = [
      "/",
      "/profil",
      "/sdm",
      "/sdm/dosen",
      "/program-studi",
      "/akademik",
      "/kemahasiswaan",
      "/riset",
      "/kerjasama",
      "/internasional",
      "/informasi",
      "/dokumen",
      "/layanan",
      "/kontak",
    ]

    // 2. Resolve all dynamic static params
    const profilSlugs = (await profilStaticParams()).map((p) => `/profil/${p.slug}`)
    const sdmSlugs = (await sdmStaticParams()).map((p) => `/sdm/${p.category}`)
    const programSlugs = (await programStaticParams()).map((p) => `/program-studi/${p.slug}`)
    const akademikSlugs = (await akademikStaticParams()).map((p) => `/akademik/${p.slug}`)
    const kemahasiswaanSlugs = (await kemahasiswaanStaticParams()).map((p) => `/kemahasiswaan/${p.slug}`)
    const risetSlugs = (await risetStaticParams()).map((p) => `/riset/${p.slug}`)
    const kerjasamaSlugs = (await kerjasamaStaticParams()).map((p) => `/kerjasama/${p.slug}`)
    const internasionalSlugs = (await internasionalStaticParams()).map((p) => `/internasional/${p.slug}`)
    const informasiSlugs = (await informasiCategoryStaticParams()).map((p) => `/informasi/${p.category}`)
    const dokumenSlugs = (await dokumenStaticParams()).map((p) => `/dokumen/${p.category}`)
    const layananSlugs = (await layananStaticParams()).map((p) => `/layanan/${p.slug}`)

    const allResolvableRoutes = new Set([
      ...staticBaseRoutes,
      ...profilSlugs,
      ...sdmSlugs,
      ...programSlugs,
      ...akademikSlugs,
      ...kemahasiswaanSlugs,
      ...risetSlugs,
      ...kerjasamaSlugs,
      ...internasionalSlugs,
      ...informasiSlugs,
      ...dokumenSlugs,
      ...layananSlugs,
    ])

    // Collect all unique internal hrefs from navigationGroups
    const navHrefs: string[] = []
    for (const group of navigationGroups) {
      navHrefs.push(group.href)
      for (const item of group.items) {
        navHrefs.push(item.href)
      }
    }

    // Collect all internal quickLinks from siteConfig
    for (const link of siteConfig.quickLinks) {
      navHrefs.push(link.href)
    }

    const uniqueInternalHrefs = Array.from(new Set(navHrefs.filter((h) => h.startsWith("/"))))
    expect(uniqueInternalHrefs.length).toBeGreaterThan(40)

    const brokenHrefs: string[] = []
    for (const href of uniqueInternalHrefs) {
      const cleanPath = href.split("?")[0].split("#")[0]
      if (!allResolvableRoutes.has(cleanPath)) {
        brokenHrefs.push(href)
      }
    }

    expect(brokenHrefs).toEqual([])
  })
})

describe("ContactForm Component", () => {
  it("renders accessible inputs, disclaimer, and handles submission validation", () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/nama lengkap/i)).toBeDefined()
    expect(screen.getByLabelText(/email/i)).toBeDefined()
    expect(screen.getByLabelText(/kategori/i)).toBeDefined()
    expect(screen.getByLabelText(/pesan/i)).toBeDefined()
    expect(screen.getByText(/prototipe visual/i)).toBeDefined()

    // When submitted empty
    fireEvent.click(screen.getByRole("button", { name: /kirim pesan/i }))

    // Then validation messages appear
    expect(screen.getByText(/nama wajib diisi/i)).toBeDefined()

    // Fill the form
    fireEvent.change(screen.getByLabelText(/nama lengkap/i), { target: { value: "Ahmad Dahlan" } })
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "ahmad@example.com" } })
    fireEvent.change(screen.getByLabelText(/kategori/i), { target: { value: "akademik" } })
    fireEvent.change(screen.getByLabelText(/pesan/i), { target: { value: "Pertanyaan mengenai kalender akademik." } })

    // Submit filled form
    fireEvent.click(screen.getByRole("button", { name: /kirim pesan/i }))

    // Then success state is shown
    expect(screen.getByText(/pesan berhasil terkirim/i)).toBeDefined()
  })
})
