"use client"

import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export type FilterOption = {
  readonly label: string
  readonly value: string
}

export type FilterBarProps = Readonly<{
  readonly ariaLabel: string
  readonly options: readonly FilterOption[]
  readonly query: string
  readonly selectedValue: string
  readonly onQueryChange: (query: string) => void
  readonly onSelectionChange: (value: string) => void
  readonly onReset: () => void
  readonly placeholder?: string
}>

export function FilterBar({
  ariaLabel,
  onQueryChange,
  onReset,
  onSelectionChange,
  options,
  placeholder = "Cari",
  query,
  selectedValue,
}: FilterBarProps) {
  const activeFilterCount = Number(query.trim().length > 0) + Number(selectedValue !== "all")

  return (
    <section
      aria-label={ariaLabel}
      className="border-y border-[var(--color-border)] bg-[var(--color-white)] px-4 py-4 sm:px-6"
    >
      <div className="flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <label className="relative block min-w-0 flex-1">
            <span className="sr-only">Cari</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[var(--color-muted)]"
              strokeWidth={1.75}
            />
            <Input
              aria-label="Cari"
              className="pr-12 pl-10"
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder={placeholder}
              role="searchbox"
              value={query}
            />
            {query ? (
              <button
                aria-label="Hapus pencarian"
                className="absolute right-0 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-sm text-[var(--color-muted-ink)] transition-colors duration-200 hover:bg-[var(--color-teal-soft)] hover:text-[var(--color-unj-teal)]"
                onClick={() => onQueryChange("")}
                type="button"
              >
                <X aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </button>
            ) : null}
          </label>
          <div aria-label="Kategori" className="flex flex-wrap gap-2">
            {options.map((option) => {
              const isSelected = option.value === selectedValue

              return (
                <button
                  aria-pressed={isSelected}
                  className={cn(
                    "min-h-11 rounded-sm border px-3 text-sm font-semibold transition-colors duration-200",
                    isSelected
                      ? "border-[var(--color-unj-teal)] bg-[var(--color-unj-teal)] text-[var(--color-white)]"
                      : "border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-muted-ink)] hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)]",
                  )}
                  key={option.value}
                  onClick={() => onSelectionChange(option.value)}
                  type="button"
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </div>
        {activeFilterCount > 0 ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--color-muted-ink)]">
              {activeFilterCount} filter aktif
            </span>
            <Button onClick={onReset} variant="quiet">
              Reset Filter
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
