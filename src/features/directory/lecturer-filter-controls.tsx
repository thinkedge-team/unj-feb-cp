import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { programChips } from "@/features/directory/lecturer-filter"
import { cn } from "@/lib/utils"

export type LecturerFilterControlsProps = Readonly<{
  searchQuery: string
  selectedProgram: string
  selectedExpertise: string
  distinctPrograms: readonly string[]
  distinctExpertise: readonly string[]
  activeFilterCount: number
  onSearchChange: (query: string) => void
  onProgramChange: (program: string) => void
  onExpertiseChange: (expertise: string) => void
  onReset: () => void
}>

export function LecturerFilterControls({
  searchQuery,
  selectedProgram,
  selectedExpertise,
  distinctPrograms,
  distinctExpertise,
  activeFilterCount,
  onSearchChange,
  onProgramChange,
  onExpertiseChange,
  onReset,
}: LecturerFilterControlsProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block min-w-0 flex-1 max-w-lg">
          <span className="sr-only">Cari Dosen atau Peneliti</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[var(--color-muted)]"
            strokeWidth={1.75}
          />
          <Input
            aria-label="Cari"
            className="pr-12 pl-10"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Cari nama dosen, gelar, NIDN, atau bidang kepakaran..."
            role="searchbox"
            value={searchQuery}
          />
          {searchQuery ? (
            <button
              aria-label="Hapus pencarian"
              className="absolute right-0 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-sm text-[var(--color-muted-ink)] transition-colors duration-200 hover:bg-[var(--color-teal-soft)] hover:text-[var(--color-unj-teal)]"
              onClick={() => onSearchChange("")}
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
              htmlFor="program-select"
            >
              Program Studi:
            </label>
            <select
              className="min-h-11 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-2 text-sm font-medium text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-feb-copper)]"
              id="program-select"
              onChange={(event) => onProgramChange(event.target.value)}
              value={selectedProgram}
            >
              <option value="all">Semua Program Studi</option>
              {distinctPrograms.map((prog) => (
                <option key={prog} value={prog}>
                  {prog}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label
              className="text-sm font-semibold text-[var(--color-ink)]"
              htmlFor="expertise-select"
            >
              Bidang Riset:
            </label>
            <select
              className="min-h-11 max-w-xs rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-2 text-sm font-medium text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-feb-copper)]"
              id="expertise-select"
              onChange={(event) => onExpertiseChange(event.target.value)}
              value={selectedExpertise}
            >
              <option value="all">Semua Bidang Riset</option>
              {distinctExpertise.map((exp) => (
                <option key={exp} value={exp}>
                  {exp}
                </option>
              ))}
            </select>
          </div>

          {activeFilterCount > 0 ? (
            <Button onClick={onReset} variant="quiet">
              Reset Filter
            </Button>
          ) : null}
        </div>
      </div>

      <div
        aria-label="Kategori Program Studi Cepat"
        className="flex flex-wrap items-center gap-2 pt-2"
      >
        <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-ink)]">
          Homebase:
        </span>
        {programChips.map((chip) => {
          const isSelected = chip.value === selectedProgram

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
              onClick={() => onProgramChange(chip.value)}
              type="button"
            >
              {chip.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
