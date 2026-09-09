import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"

import { documents } from "@/data/documents"
import { DocumentListing } from "@/features/information/document-listing"

afterEach(() => {
  cleanup()
})

describe("DocumentListing", () => {
  it("renders the document repository with all documents and count announcement", () => {
    render(<DocumentListing documents={documents} />)

    expect(screen.getByRole("heading", { level: 1, name: /repositori dokumen/i })).toBeDefined()
    expect(screen.getByText(new RegExp(`menampilkan \\d+ dari ${documents.length} Dokumen`, "i"))).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: documents[0].title })).toBeDefined()
  })

  it("filters documents by category tabs/chips", () => {
    render(<DocumentListing documents={documents} />)

    const akademikButton = screen.getByRole("button", { name: "Akademik" })
    fireEvent.click(akademikButton)

    const akademikDocs = documents.filter((d) => d.category === "Akademik")
    expect(screen.getByText(new RegExp(`menampilkan ${akademikDocs.length} dari ${documents.length} Dokumen`, "i"))).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: akademikDocs[0].title })).toBeDefined()
  })

  it("filters documents by year dropdown select", () => {
    render(<DocumentListing documents={documents} />)

    const yearSelect = screen.getByLabelText(/tahun/i)
    fireEvent.change(yearSelect, { target: { value: "2026" } })

    const docs2026 = documents.filter((d) => d.publishedAt.startsWith("2026"))
    expect(screen.getByText(new RegExp(`menampilkan ${docs2026.length} dari ${documents.length} Dokumen`, "i"))).toBeDefined()
  })

  it("filters documents by live search query matching title or description", () => {
    render(<DocumentListing documents={documents} />)

    const searchInput = screen.getByRole("searchbox", { name: /cari/i })
    fireEvent.change(searchInput, { target: { value: "Skripsi" } })

    expect(screen.getByRole("heading", { level: 3, name: /panduan skripsi/i })).toBeDefined()
    expect(screen.queryByRole("heading", { level: 3, name: /kode etik mahasiswa/i })).toBeNull()
  })

  it("combines category, year, and search query filters simultaneously", () => {
    render(<DocumentListing documents={documents} />)

    const akademikButton = screen.getByRole("button", { name: "Akademik" })
    fireEvent.click(akademikButton)

    const yearSelect = screen.getByLabelText(/tahun/i)
    fireEvent.change(yearSelect, { target: { value: "2026" } })

    const searchInput = screen.getByRole("searchbox", { name: /cari/i })
    fireEvent.change(searchInput, { target: { value: "Kalender" } })

    expect(screen.getByRole("heading", { level: 3, name: /kalender akademik/i })).toBeDefined()
    expect(screen.queryByRole("heading", { level: 3, name: /panduan skripsi/i })).toBeNull()
  })

  it("shows empty state when no documents match and allows resetting filters", () => {
    render(<DocumentListing documents={documents} />)

    const searchInput = screen.getByRole("searchbox", { name: /cari/i })
    fireEvent.change(searchInput, { target: { value: "DokumenMisteriusTidakAda999" } })

    expect(screen.getByRole("heading", { level: 2, name: /dokumen tidak ditemukan/i })).toBeDefined()

    const resetButtons = screen.getAllByRole("button", { name: /reset filter/i })
    expect(resetButtons.length).toBeGreaterThan(0)
    fireEvent.click(resetButtons[0])

    expect(screen.getByRole("heading", { level: 3, name: documents[0].title })).toBeDefined()
  })

  it("paginates document cards when document count exceeds page size", () => {
    render(<DocumentListing documents={documents} pageSize={6} />)

    const page2Button = screen.getByRole("button", { name: "Halaman 2" })
    expect(page2Button).toBeDefined()
    fireEvent.click(page2Button)

    expect(screen.queryByRole("heading", { level: 3, name: documents[0].title })).toBeNull()
    expect(screen.getByRole("heading", { level: 3, name: documents[6].title })).toBeDefined()
  })
})
