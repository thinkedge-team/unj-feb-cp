"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"

import { ProfileCard } from "@/components/cards/profile-card"
import { EmptyState } from "@/components/common/empty-state"
import { Pagination } from "@/components/common/pagination"
import { ListingPageTemplate } from "@/components/templates/listing-page-template"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { StaffMember } from "@/types/content"
import {
  filterStaff,
  type StaffFilterOptions,
  staffUnitChips,
} from "./staff-filter"

export { filterStaff, type StaffFilterOptions }

export type StaffListingProps = Readonly<{
  readonly staffMembers: readonly StaffMember[]
  readonly pageSize?: number
}>

export function StaffListing({
  staffMembers,
  pageSize = 12,
}: StaffListingProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUnit, setSelectedUnit] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  const distinctUnits = useMemo(() => {
    const set = new Set<string>()
    for (const s of staffMembers) {
      if (s.unit) set.add(s.unit)
    }
    return Array.from(set).sort()
  }, [staffMembers])

  const activeFilterCount =
    Number(searchQuery.trim().length > 0) + Number(selectedUnit !== "all")

  function handleReset() {
    setSearchQuery("")
    setSelectedUnit("all")
    setCurrentPage(1)
  }

  function handleSearchChange(query: string) {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  function handleUnitChange(unit: string) {
    setSelectedUnit(unit)
    setCurrentPage(1)
  }

  const filteredStaff = useMemo(() => {
    return filterStaff(staffMembers, {
      query: searchQuery,
      unit: selectedUnit,
    })
  }, [staffMembers, searchQuery, selectedUnit])

  const totalPages = Math.max(1, Math.ceil(filteredStaff.length / pageSize))
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const paginatedStaff = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize
    return filteredStaff.slice(start, start + pageSize)
  }, [filteredStaff, safeCurrentPage, pageSize])

  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "SDM", href: "/sdm/dosen" },
    { label: "Tenaga Kependidikan" },
  ] as const

  const filterControls = (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block min-w-0 flex-1 max-w-lg">
          <span className="sr-only">Cari Tenaga Kependidikan</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[var(--color-muted)]"
            strokeWidth={1.75}
          />
          <Input
            aria-label="Cari"
            className="pr-12 pl-10"
            onChange={(event) => handleSearchChange(event.target.value)}
            placeholder="Cari nama staf, jabatan, atau unit layanan..."
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

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <label
              className="text-sm font-semibold text-[var(--color-ink)]"
              htmlFor="unit-select"
            >
              Unit Kerja:
            </label>
            <select
              className="min-h-11 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-2 text-sm font-medium text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-feb-copper)]"
              id="unit-select"
              onChange={(event) => handleUnitChange(event.target.value)}
              value={selectedUnit}
            >
              <option value="all">Semua Unit Layanan</option>
              {distinctUnits.map((unitName) => (
                <option
                  key={unitName}
                  value={unitName.toLowerCase().replace(/\s+/g, "-")}
                >
                  {unitName}
                </option>
              ))}
            </select>
          </div>

          {activeFilterCount > 0 ? (
            <Button onClick={handleReset} variant="quiet">
              Reset Filter
            </Button>
          ) : null}
        </div>
      </div>

      <div
        aria-label="Filter Unit Kerja Cepat"
        className="flex flex-wrap items-center gap-2 pt-2"
      >
        <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-ink)]">
          Kategori Unit:
        </span>
        {staffUnitChips.map((chip) => {
          const isSelected = chip.value === selectedUnit

          return (
            <button
              aria-pressed={isSelected}
              className={cn(
                "min-h-11 rounded-sm border px-3.5 text-sm font-semibold transition-colors duration-200",
                isSelected
                  ? "border-[var(--color-unj-teal)] bg-[var(--color-unj-teal)] text-[var(--color-white)] shadow-sm"
                  : "border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-muted-ink)] hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)]",
              )}
              key={chip.value}
              onClick={() => handleUnitChange(chip.value)}
              type="button"
            >
              {chip.label}
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <ListingPageTemplate
      breadcrumbs={breadcrumbs}
      countLabel={`dari ${staffMembers.length} Tenaga Kependidikan`}
      description="Direktori tenaga kependidikan dan staf administrasi Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta yang siap melayani kebutuhan akademik, kemahasiswaan, dan operasional."
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
      title="Tenaga Kependidikan"
      totalItemsCount={filteredStaff.length}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-medium text-[var(--color-muted-ink)]">
          Menampilkan {filteredStaff.length} Staf &amp; Tenaga Kependidikan
        </p>
      </div>

      {filteredStaff.length === 0 ? (
        <EmptyState
          actionLabel="Reset Filter"
          description="Tidak ada staf atau tenaga kependidikan yang sesuai dengan kriteria pencarian dan filter Anda. Silakan ubah kata kunci atau reset filter."
          onAction={handleReset}
          title="Staf Tidak Ditemukan"
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedStaff.map((member) => (
            <ProfileCard key={member.slug} profile={member} />
          ))}
        </div>
      )}
    </ListingPageTemplate>
  )
}
