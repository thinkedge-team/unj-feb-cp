"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"

import { DocumentCard } from "@/components/cards/document-card"
import { EmptyState } from "@/components/common/empty-state"
import { Pagination } from "@/components/common/pagination"
import { ListingPageTemplate } from "@/components/templates/listing-page-template"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { DocumentItem } from "@/types/content"

export type DocumentListingProps = Readonly<{
  readonly documents: readonly DocumentItem[]
  readonly pageSize?: number
  readonly initialCategory?: string
}>

const categoryOptions = [
  "Semua",
  "Akademik",
  "Kemahasiswaan",
  "Fakultas & Tata Kelola",
  "Kebijakan & Regulasi",
] as const

const yearOptions = [
  { label: "Semua Tahun", value: "all" },
  { label: "2026", value: "2026" },
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
] as const

export function DocumentListing({
  documents,
  initialCategory = "Semua",
  pageSize = 9,
}: DocumentListingProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  function handleReset() {
    setSearchQuery("")
    setSelectedCategory("Semua")
    setSelectedYear("all")
    setCurrentPage(1)
  }

  function handleSearchChange(query: string) {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  function handleCategoryChange(cat: string) {
    setSelectedCategory(cat)
    setCurrentPage(1)
  }

  function handleYearChange(year: string) {
    setSelectedYear(year)
    setCurrentPage(1)
  }

  const hasActiveFilters =
    searchQuery.trim().length > 0 ||
    selectedCategory !== "Semua" ||
    selectedYear !== "all"

  const filteredDocuments = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()

    return documents.filter((doc) => {
      if (selectedCategory !== "Semua" && doc.category !== selectedCategory) {
        return false
      }

      if (selectedYear !== "all" && !doc.publishedAt.startsWith(selectedYear)) {
        return false
      }

      if (q) {
        const matchTitle = doc.title.toLowerCase().includes(q)
        const matchDesc = doc.description.toLowerCase().includes(q)
        const matchCategory = doc.category.toLowerCase().includes(q)
        if (!matchTitle && !matchDesc && !matchCategory) {
          return false
        }
      }

      return true
    })
  }, [documents, selectedCategory, selectedYear, searchQuery])

  const totalPages = Math.max(1, Math.ceil(filteredDocuments.length / pageSize))
  const safeCurrentPage = Math.min(currentPage, totalPages)

  const paginatedDocuments = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize
    return filteredDocuments.slice(start, start + pageSize)
  }, [filteredDocuments, safeCurrentPage, pageSize])

  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "Dokumen", href: "/dokumen" },
    { label: "Repositori Dokumen" },
  ] as const

  const filterControls = (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block min-w-0 flex-1 max-w-lg">
          <span className="sr-only">Cari Dokumen</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[var(--color-muted)]"
            strokeWidth={1.75}
          />
          <Input
            aria-label="Cari"
            className="pr-12 pl-10"
            onChange={(event) => handleSearchChange(event.target.value)}
            placeholder="Cari pedoman, panduan skripsi, formulir, atau regulasi..."
            role="searchbox"
            value={searchQuery}
          />
          {searchQuery ? (
            <button
              aria-label="Hapus pencarian"
              className="absolute right-0 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-sm text-[var(--color-muted-ink)] transition-colors duration-200 hover:bg-[var(--color-teal-soft)] hover:text-[var(--color-unj-teal)]"
              onClick={() => handleSearchChange("")}
              type="button"
            >
              <X aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </button>
          ) : null}
        </label>

        <div className="flex items-center gap-3">
          <label
            className="text-sm font-semibold text-[var(--color-ink)]"
            htmlFor="year-filter-select"
          >
            Tahun:
          </label>
          <select
            aria-label="Tahun"
            className="min-h-11 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-2 text-sm font-medium text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-feb-copper)]"
            id="year-filter-select"
            onChange={(e) => handleYearChange(e.target.value)}
            value={selectedYear}
          >
            {yearOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {hasActiveFilters ? (
            <Button onClick={handleReset} variant="quiet">
              Reset Filter
            </Button>
          ) : null}
        </div>
      </div>

      <div aria-label="Kategori Dokumen" className="flex flex-wrap items-center gap-2 pt-2">
        <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-ink)]">
          Kategori:
        </span>
        {categoryOptions.map((cat) => {
          const isSelected = cat === selectedCategory

          return (
            <button
              aria-pressed={isSelected}
              className={cn(
                "min-h-11 rounded-sm border px-3.5 text-sm font-semibold transition-colors duration-200",
                isSelected
                  ? "border-[var(--color-unj-teal)] bg-[var(--color-unj-teal)] text-[var(--color-white)] shadow-sm"
                  : "border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-muted-ink)] hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)]",
              )}
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              type="button"
            >
              {cat}
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <ListingPageTemplate
      breadcrumbs={breadcrumbs}
      countLabel={`dari ${documents.length} Dokumen`}
      description="Pusat unduhan berkas resmi, pedoman akademik, panduan skripsi/tesis, peraturan dekan, dan formulir layanan administrasi FEB UNJ."
      filterControls={filterControls}
      paginationControls={
        totalPages > 1 ? (
          <Pagination
            currentPage={safeCurrentPage}
            onPageChange={setCurrentPage}
            totalPages={totalPages}
          />
        ) : null
      }
      title="Repositori Dokumen"
      totalItemsCount={filteredDocuments.length}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-medium text-[var(--color-muted-ink)]">
          Menampilkan {filteredDocuments.length} dari {documents.length} Dokumen
        </p>
      </div>

      {filteredDocuments.length === 0 ? (
        <EmptyState
          actionLabel="Reset Filter"
          description="Tidak ada dokumen yang sesuai dengan filter atau kata kunci pencarian Anda. Silakan coba kata kunci lain atau reset filter."
          onAction={handleReset}
          title="Dokumen Tidak Ditemukan"
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedDocuments.map((doc) => (
            <DocumentCard document={doc} key={doc.slug} />
          ))}
        </div>
      )}
    </ListingPageTemplate>
  )
}
