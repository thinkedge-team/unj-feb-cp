"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"

import { StudyProgramCard } from "@/components/cards/study-program-card"
import { EmptyState } from "@/components/common/empty-state"
import { Pagination } from "@/components/common/pagination"
import { ListingPageTemplate } from "@/components/templates/listing-page-template"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { DegreeLevel, StudyProgram } from "@/types/content"

export type ProgramListingProps = Readonly<{
  readonly programs: readonly StudyProgram[]
  readonly pageSize?: number
  readonly initialDegree?: DegreeLevel | "all"
}>

const degreeOptions: readonly { readonly label: string; readonly value: DegreeLevel | "all" }[] = [
  { label: "Semua", value: "all" },
  { label: "Doktor (S3)", value: "Doktor" },
  { label: "Magister (S2)", value: "Magister" },
  { label: "Sarjana (S1)", value: "Sarjana" },
  { label: "Sarjana Terapan (D4)", value: "Sarjana Terapan" },
  { label: "Diploma (D3)", value: "Diploma" },
]

const accreditationOptions: readonly { readonly label: string; readonly value: string }[] = [
  { label: "Semua Akreditasi", value: "all" },
  { label: "Unggul", value: "Unggul" },
  { label: "A", value: "A" },
  { label: "Baik Sekali", value: "Baik Sekali" },
]

export function ProgramListing({ initialDegree = "all", pageSize = 9, programs }: ProgramListingProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDegree, setSelectedDegree] = useState<DegreeLevel | "all">(initialDegree)
  const [selectedAccreditation, setSelectedAccreditation] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  const activeFilterCount =
    Number(searchQuery.trim().length > 0) +
    Number(selectedDegree !== "all") +
    Number(selectedAccreditation !== "all")

  function handleReset() {
    setSearchQuery("")
    setSelectedDegree("all")
    setSelectedAccreditation("all")
    setCurrentPage(1)
  }

  function handleDegreeChange(degree: DegreeLevel | "all") {
    setSelectedDegree(degree)
    setCurrentPage(1)
  }

  function handleAccreditationChange(accreditation: string) {
    setSelectedAccreditation(accreditation)
    setCurrentPage(1)
  }

  function handleSearchChange(query: string) {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      if (selectedDegree !== "all" && program.degree !== selectedDegree) {
        return false
      }
      if (selectedAccreditation !== "all" && program.accreditation !== selectedAccreditation) {
        return false
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const matchesName = program.name.toLowerCase().includes(q)
        const matchesSlug = program.slug.toLowerCase().includes(q)
        const matchesHead = program.head.toLowerCase().includes(q)
        const matchesVision = program.vision.toLowerCase().includes(q)
        const matchesCareer = program.careerProspects.some((cp) => cp.toLowerCase().includes(q))
        if (!matchesName && !matchesSlug && !matchesHead && !matchesVision && !matchesCareer) {
          return false
        }
      }
      return true
    })
  }, [programs, selectedDegree, selectedAccreditation, searchQuery])

  const totalPages = Math.max(1, Math.ceil(filteredPrograms.length / pageSize))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const paginatedPrograms = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize
    return filteredPrograms.slice(start, start + pageSize)
  }, [filteredPrograms, safeCurrentPage, pageSize])

  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "Program Studi" },
  ] as const

  const filterControls = (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block min-w-0 flex-1 max-w-lg">
          <span className="sr-only">Cari Program Studi</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[var(--color-muted)]"
            strokeWidth={1.75}
          />
          <Input
            aria-label="Cari"
            className="pr-12 pl-10"
            onChange={(event) => handleSearchChange(event.target.value)}
            placeholder="Cari program studi, kepala prodi, atau bidang..."
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
          <label className="text-sm font-semibold text-[var(--color-ink)]" htmlFor="accreditation-select">
            Akreditasi:
          </label>
          <select
            className="min-h-11 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-2 text-sm font-medium text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-feb-copper)]"
            id="accreditation-select"
            onChange={(event) => handleAccreditationChange(event.target.value)}
            value={selectedAccreditation}
          >
            {accreditationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {activeFilterCount > 0 ? (
            <Button onClick={handleReset} variant="quiet">
              Reset Filter
            </Button>
          ) : null}
        </div>
      </div>

      <div aria-label="Jenjang Pendidikan" className="flex flex-wrap items-center gap-2 pt-2">
        <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-ink)]">
          Jenjang:
        </span>
        {degreeOptions.map((option) => {
          const isSelected = option.value === selectedDegree

          return (
            <button
              aria-pressed={isSelected}
              className={cn(
                "min-h-11 rounded-sm border px-3.5 text-sm font-semibold transition-colors duration-200",
                isSelected
                  ? "border-[var(--color-unj-teal)] bg-[var(--color-unj-teal)] text-[var(--color-white)] shadow-sm"
                  : "border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-muted-ink)] hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)]",
              )}
              key={option.value}
              onClick={() => handleDegreeChange(option.value)}
              type="button"
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <ListingPageTemplate
      breadcrumbs={breadcrumbs}
      countLabel={`dari ${programs.length} Program Studi`}
      description="Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta menyelenggarakan program studi unggul berakreditasi nasional dan internasional dari jenjang Diploma, Sarjana, Sarjana Terapan, Magister, hingga Doktor."
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
      title="Program Studi"
      totalItemsCount={filteredPrograms.length}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-medium text-[var(--color-muted-ink)]">
          Menampilkan {filteredPrograms.length} dari {programs.length} Program Studi
        </p>
      </div>

      {filteredPrograms.length === 0 ? (
        <EmptyState
          actionLabel="Reset Filter"
          description="Tidak ada program studi yang sesuai dengan filter atau kata kunci pencarian Anda. Silakan coba kata kunci lain atau reset filter."
          onAction={handleReset}
          title="Program Studi Tidak Ditemukan"
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedPrograms.map((program) => (
            <StudyProgramCard key={program.slug} program={program} />
          ))}
        </div>
      )}
    </ListingPageTemplate>
  )
}
