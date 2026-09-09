import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"

import { studyPrograms } from "@/data/study-programs"
import { ProgramListing } from "@/features/programs/program-listing"
import { ProgramDetail } from "@/features/programs/program-detail"
import { generateStaticParams } from "@/app/(site)/program-studi/[slug]/page"

afterEach(() => {
  cleanup()
})

describe("ProgramListing", () => {
  it("renders the initial listing with all study programs and counter", () => {
    render(<ProgramListing programs={studyPrograms} />)

    expect(screen.getByRole("heading", { level: 1, name: /program studi/i })).toBeDefined()
    expect(screen.getByText(/menampilkan 21 dari 21 program studi/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: "S3 Ilmu Manajemen" })).toBeDefined()
  })

  it("filters programs by degree level when selected", () => {
    render(<ProgramListing programs={studyPrograms} />)

    const magisterFilter = screen.getByRole("button", { name: /magister/i })
    fireEvent.click(magisterFilter)

    expect(screen.getByText(/menampilkan 4 dari 21 program studi/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: "S2 Manajemen" })).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: "S2 Akuntansi" })).toBeDefined()
    expect(screen.queryByRole("heading", { level: 3, name: "S3 Ilmu Manajemen" })).toBeNull()
    expect(screen.queryByRole("heading", { level: 3, name: "S1 Manajemen" })).toBeNull()
  })

  it("filters programs by search query matching program name", () => {
    render(<ProgramListing programs={studyPrograms} />)

    const searchInput = screen.getByRole("searchbox", { name: /cari/i })
    fireEvent.change(searchInput, { target: { value: "Akuntansi" } })

    expect(screen.getByText(/menampilkan 5 dari 21 program studi/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: "S1 Akuntansi" })).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: "S2 Akuntansi" })).toBeDefined()
    expect(screen.queryByRole("heading", { level: 3, name: "S1 Bisnis Digital" })).toBeNull()
  })

  it("shows empty state when no programs match and resets on action", () => {
    render(<ProgramListing programs={studyPrograms} />)

    const searchInput = screen.getByRole("searchbox", { name: /cari/i })
    fireEvent.change(searchInput, { target: { value: "ProgramTidakAda123" } })

    expect(screen.getByText(/menampilkan 0 dari 21 program studi/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: /program studi tidak ditemukan/i })).toBeDefined()

    const resetButtons = screen.getAllByRole("button", { name: /reset filter/i })
    expect(resetButtons.length).toBeGreaterThan(0)
    fireEvent.click(resetButtons[0])

    expect(screen.getByText(/menampilkan 21 dari 21 program studi/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: "S3 Ilmu Manajemen" })).toBeDefined()
  })

  it("supports pagination across multiple pages", () => {
    render(<ProgramListing pageSize={9} programs={studyPrograms} />)

    const page2Button = screen.getByRole("button", { name: "Halaman 2" })
    expect(page2Button).toBeDefined()

    fireEvent.click(page2Button)

    expect(screen.getByRole("heading", { level: 3, name: "S1 Pendidikan Ekonomi" })).toBeDefined()
    expect(screen.queryByRole("heading", { level: 3, name: "S3 Ilmu Manajemen" })).toBeNull()
  })
})

describe("generateStaticParams", () => {
  it("generates static route parameters for all 21 study programs and degree levels", async () => {
    const params = await generateStaticParams()

    expect(params.length).toBeGreaterThanOrEqual(21)
    for (const program of studyPrograms) {
      expect(params).toContainEqual({ slug: program.slug })
    }
    expect(params).toContainEqual({ slug: "doktor" })
    expect(params).toContainEqual({ slug: "magister" })
    expect(params).toContainEqual({ slug: "sarjana" })
    expect(params).toContainEqual({ slug: "sarjana-terapan" })
  })
})

describe("ProgramDetail", () => {
  it("renders program detail with curriculum, career prospects, and metadata", () => {
    const sampleProgram = studyPrograms.find((p) => p.slug === "s1-akuntansi")!
    render(<ProgramDetail program={sampleProgram} relatedLecturers={[]} />)

    expect(screen.getByRole("heading", { level: 1, name: sampleProgram.name })).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: /visi & misi/i })).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: /struktur kurikulum/i })).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: /prospek karir/i })).toBeDefined()
    expect(screen.getByText(sampleProgram.vision)).toBeDefined()
  })
})
