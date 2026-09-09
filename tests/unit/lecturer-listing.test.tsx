import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"

import { lecturers } from "@/data/lecturers"
import { staff } from "@/data/staff"
import { filterLecturers, LecturerListing } from "@/features/directory/lecturer-listing"
import { LecturerDetail } from "@/features/directory/lecturer-detail"
import { StaffListing } from "@/features/directory/staff-listing"
import { generateStaticParams as generateLecturerStaticParams } from "@/app/(site)/sdm/dosen/[slug]/page"
import { generateStaticParams as generateCategoryStaticParams } from "@/app/(site)/sdm/[category]/page"

afterEach(() => {
  cleanup()
})

describe("filterLecturers helper", () => {
  it("returns all lecturers when options are empty or default", () => {
    const result = filterLecturers(lecturers)
    expect(result).toHaveLength(lecturers.length)

    const resultAll = filterLecturers(lecturers, { query: "", programSlug: "all", expertise: "all" })
    expect(resultAll).toHaveLength(lecturers.length)
  })

  it("filters lecturers by search query matching name, NIDN, or title", () => {
    const byName = filterLecturers(lecturers, { query: "Mujiyatno" })
    expect(byName.length).toBeGreaterThanOrEqual(1)
    expect(byName[0].name).toContain("Mujiyatno")

    const byNidn = filterLecturers(lecturers, { query: "0015086704" })
    expect(byNidn).toHaveLength(1)
    expect(byNidn[0].slug).toBe("mujiyatno")

    const byTitle = filterLecturers(lecturers, { query: "Guru Besar" })
    expect(byTitle.length).toBeGreaterThanOrEqual(3)
    expect(byTitle.every((l) => l.title.includes("Guru Besar") || l.role.includes("Guru Besar"))).toBe(true)
  })

  it("filters lecturers by programSlug / homebase", () => {
    const management = filterLecturers(lecturers, { programSlug: "manajemen" })
    expect(management.length).toBeGreaterThanOrEqual(1)
    expect(management.some((l) => l.homebase.toLowerCase().includes("manajemen"))).toBe(true)

    const accounting = filterLecturers(lecturers, { programSlug: "akuntansi" })
    expect(accounting.length).toBeGreaterThanOrEqual(1)
    expect(accounting.every((l) => l.homebase.toLowerCase().includes("akuntansi"))).toBe(true)
  })

  it("filters lecturers by expertise area", () => {
    const audit = filterLecturers(lecturers, { expertise: "Audit" })
    expect(audit.length).toBeGreaterThanOrEqual(1)
    expect(audit[0].expertise.some((e) => e.toLowerCase().includes("audit"))).toBe(true)
  })

  it("combines multiple filters correctly", () => {
    const combined = filterLecturers(lecturers, {
      query: "Hendra",
      programSlug: "akuntansi",
      expertise: "Keuangan",
    })
    expect(combined).toHaveLength(1)
    expect(combined[0].slug).toBe("hendra-setiawan")
  })
})

describe("LecturerListing component", () => {
  it("renders the initial listing with all lecturers and active counter", () => {
    render(<LecturerListing lecturers={lecturers} />)

    expect(screen.getByRole("heading", { level: 1, name: /dosen & peneliti/i })).toBeDefined()
    expect(screen.getByText(/menampilkan 25 dosen & peneliti/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: "Dr. Mujiyatno, S.E., M.M." })).toBeDefined()
  })

  it("filters lecturers interactively by search query", () => {
    render(<LecturerListing lecturers={lecturers} />)

    const searchInput = screen.getByRole("searchbox", { name: /cari/i })
    fireEvent.change(searchInput, { target: { value: "Hendra Setiawan" } })

    expect(screen.getByText(/menampilkan 1 dosen & peneliti/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: "Dr. Hendra Setiawan, S.E., Ak., CA" })).toBeDefined()
    expect(screen.queryByRole("heading", { level: 3, name: "Dr. Mujiyatno, S.E., M.M." })).toBeNull()
  })

  it("shows empty state when no lecturers match and resets on action", () => {
    render(<LecturerListing lecturers={lecturers} />)

    const searchInput = screen.getByRole("searchbox", { name: /cari/i })
    fireEvent.change(searchInput, { target: { value: "NamaDosenTidakAda999" } })

    expect(screen.getByText(/menampilkan 0 dosen & peneliti/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: /dosen tidak ditemukan/i })).toBeDefined()

    const resetButtons = screen.getAllByRole("button", { name: /reset filter/i })
    expect(resetButtons.length).toBeGreaterThan(0)
    fireEvent.click(resetButtons[0])

    expect(screen.getByText(/menampilkan 25 dosen & peneliti/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: "Dr. Mujiyatno, S.E., M.M." })).toBeDefined()
  })

  it("supports pagination across multiple pages", () => {
    render(<LecturerListing lecturers={lecturers} pageSize={12} />)

    const page2Button = screen.getByRole("button", { name: "Halaman 2" })
    expect(page2Button).toBeDefined()

    fireEvent.click(page2Button)
    expect(screen.getByRole("heading", { level: 3, name: "Prof. Dr. M. Yusuf Santoso, M.M." })).toBeDefined()
    expect(screen.queryByRole("heading", { level: 3, name: "Dr. Mujiyatno, S.E., M.M." })).toBeNull()
  })
})

describe("LecturerDetail component", () => {
  it("renders profile header, education history, and publications", () => {
    const sample = lecturers.find((l) => l.slug === "hendra-setiawan")!
    render(<LecturerDetail lecturer={sample} />)

    expect(screen.getByRole("heading", { level: 1, name: sample.name })).toBeDefined()
    expect(screen.getAllByText(new RegExp(`NIDN ${sample.nidn}`)).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(new RegExp(sample.homebase, "i")).length).toBeGreaterThanOrEqual(1)

    expect(screen.getByRole("heading", { level: 2, name: /riwayat pendidikan/i })).toBeDefined()
    expect(screen.getAllByText(/sarjana|magister|doktor/i).length).toBeGreaterThan(0)

    expect(screen.getByRole("heading", { level: 2, name: /publikasi & penelitian/i })).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: /bidang keahlian & riset/i })).toBeDefined()
  })

  it("renders SINTA, Scopus, and Scholar links with safe attributes", () => {
    const sample = lecturers.find((l) => l.slug === "hendra-setiawan")!
    render(<LecturerDetail lecturer={sample} />)

    const sintaLinks = screen.getAllByRole("link", { name: /sinta/i })
    expect(sintaLinks.length).toBeGreaterThanOrEqual(1)
    for (const link of sintaLinks) {
      expect(link.getAttribute("href")).toBe(sample.links.sinta)
      expect(link.getAttribute("target")).toBe("_blank")
      expect(link.getAttribute("rel")).toContain("noopener")
      expect(link.getAttribute("rel")).toContain("noreferrer")
    }

    const scopusLinks = screen.getAllByRole("link", { name: /scopus/i })
    expect(scopusLinks.length).toBeGreaterThanOrEqual(1)
    for (const link of scopusLinks) {
      expect(link.getAttribute("href")).toBe(sample.links.scopus)
      expect(link.getAttribute("target")).toBe("_blank")
      expect(link.getAttribute("rel")).toContain("noopener")
      expect(link.getAttribute("rel")).toContain("noreferrer")
    }

    const scholarLinks = screen.getAllByRole("link", { name: /google scholar/i })
    expect(scholarLinks.length).toBeGreaterThanOrEqual(1)
    for (const link of scholarLinks) {
      expect(link.getAttribute("href")).toBe(sample.links.googleScholar)
      expect(link.getAttribute("target")).toBe("_blank")
      expect(link.getAttribute("rel")).toContain("noopener")
      expect(link.getAttribute("rel")).toContain("noreferrer")
    }
  })

  it("renders downloadable CV action button", () => {
    const sample = lecturers.find((l) => l.slug === "hendra-setiawan")!
    render(<LecturerDetail lecturer={sample} />)

    expect(screen.getByRole("button", { name: /unduh cv/i })).toBeDefined()
  })
})

describe("StaffListing component", () => {
  it("renders staff directory and filters by search query and unit", () => {
    render(<StaffListing staffMembers={staff} />)

    expect(screen.getByRole("heading", { level: 1, name: /tenaga kependidikan/i })).toBeDefined()
    expect(screen.getByText(/menampilkan 10 staf & tenaga kependidikan/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: "Ari Prabowo" })).toBeDefined()

    const searchInput = screen.getByRole("searchbox", { name: /cari/i })
    fireEvent.change(searchInput, { target: { value: "Keuangan" } })

    expect(screen.getByRole("heading", { level: 3, name: "Dewi Anggraini" })).toBeDefined()
    expect(screen.queryByRole("heading", { level: 3, name: "Ari Prabowo" })).toBeNull()
  })
})

describe("Static route generation for SDM", () => {
  it("generateStaticParams for lecturers returns all 25+ lecturer slugs", async () => {
    const params = await generateLecturerStaticParams()
    expect(params.length).toBeGreaterThanOrEqual(25)
    expect(params).toEqual(
      lecturers.map((lecturer) => ({
        slug: lecturer.slug,
      })),
    )
  })

  it("generateStaticParams for SDM categories returns categories including tendik", async () => {
    const params = await generateCategoryStaticParams()
    expect(params).toContainEqual({ category: "tenaga-kependidikan" })
    expect(params).toContainEqual({ category: "tendik" })
    expect(params).toContainEqual({ category: "dosen-praktisi" })
    expect(params).toContainEqual({ category: "senat" })
    expect(params).toContainEqual({ category: "dosen-purnabakti" })
  })
})
