"use client"

import { useMemo, useState } from "react"

import { ProfileCard } from "@/components/cards/profile-card"
import { EmptyState } from "@/components/common/empty-state"
import { Pagination } from "@/components/common/pagination"
import { ListingPageTemplate } from "@/components/templates/listing-page-template"
import {
  filterLecturers,
  type LecturerFilterOptions,
} from "@/features/directory/lecturer-filter"
import { LecturerFilterControls } from "@/features/directory/lecturer-filter-controls"
import type { Lecturer } from "@/types/content"

export { filterLecturers, type LecturerFilterOptions }

export type LecturerListingProps = Readonly<{
  readonly lecturers: readonly Lecturer[]
  readonly pageSize?: number
}>

export function LecturerListing({
  lecturers,
  pageSize = 12,
}: LecturerListingProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("all")
  const [selectedExpertise, setSelectedExpertise] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  const distinctPrograms = useMemo(() => {
    const set = new Set<string>()
    for (const l of lecturers) {
      if (l.homebase) set.add(l.homebase)
    }
    return Array.from(set).sort()
  }, [lecturers])

  const distinctExpertise = useMemo(() => {
    const set = new Set<string>()
    for (const l of lecturers) {
      for (const exp of l.expertise) {
        if (exp) set.add(exp)
      }
    }
    return Array.from(set).sort()
  }, [lecturers])

  const activeFilterCount =
    Number(searchQuery.trim().length > 0) +
    Number(selectedProgram !== "all") +
    Number(selectedExpertise !== "all")

  function handleReset() {
    setSearchQuery("")
    setSelectedProgram("all")
    setSelectedExpertise("all")
    setCurrentPage(1)
  }

  function handleSearchChange(query: string) {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  function handleProgramChange(program: string) {
    setSelectedProgram(program)
    setCurrentPage(1)
  }

  function handleExpertiseChange(expertise: string) {
    setSelectedExpertise(expertise)
    setCurrentPage(1)
  }

  const filteredLecturers = useMemo(() => {
    return filterLecturers(lecturers, {
      expertise: selectedExpertise,
      programSlug: selectedProgram,
      query: searchQuery,
    })
  }, [lecturers, searchQuery, selectedProgram, selectedExpertise])

  const totalPages = Math.max(1, Math.ceil(filteredLecturers.length / pageSize))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const paginatedLecturers = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize
    return filteredLecturers.slice(start, start + pageSize)
  }, [filteredLecturers, safeCurrentPage, pageSize])

  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "SDM", href: "/sdm/dosen" },
    { label: "Dosen & Peneliti" },
  ] as const

  return (
    <ListingPageTemplate
      breadcrumbs={breadcrumbs}
      countLabel={`dari ${lecturers.length} Dosen & Peneliti`}
      description="Direktori dosen, guru besar, dan peneliti Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta yang berdedikasi dalam pengajaran unggul, riset berdampak, dan pengabdian masyarakat."
      filterControls={
        <LecturerFilterControls
          activeFilterCount={activeFilterCount}
          distinctExpertise={distinctExpertise}
          distinctPrograms={distinctPrograms}
          onExpertiseChange={handleExpertiseChange}
          onProgramChange={handleProgramChange}
          onReset={handleReset}
          onSearchChange={handleSearchChange}
          searchQuery={searchQuery}
          selectedExpertise={selectedExpertise}
          selectedProgram={selectedProgram}
        />
      }
      paginationControls={
        totalPages > 1 ? (
          <Pagination
            currentPage={safeCurrentPage}
            onPageChange={setCurrentPage}
            totalPages={totalPages}
          />
        ) : null
      }
      title="Dosen & Peneliti"
      totalItemsCount={filteredLecturers.length}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-medium text-[var(--color-muted-ink)]">
          Menampilkan {filteredLecturers.length} Dosen & Peneliti
        </p>
      </div>

      {filteredLecturers.length === 0 ? (
        <EmptyState
          actionLabel="Reset Filter"
          description="Tidak ada dosen atau peneliti yang sesuai dengan kriteria pencarian dan filter Anda. Silakan ubah kata kunci atau reset filter."
          onAction={handleReset}
          title="Dosen Tidak Ditemukan"
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedLecturers.map((lecturer) => (
            <ProfileCard
              href={`/sdm/dosen/${lecturer.slug}`}
              key={lecturer.slug}
              profile={lecturer}
            />
          ))}
        </div>
      )}
    </ListingPageTemplate>
  )
}
