"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { getPaginationRange } from "@/lib/pagination"
import { cn } from "@/lib/utils"

export type PaginationProps = Readonly<{
  readonly currentPage: number
  readonly totalPages: number
  readonly onPageChange: (page: number) => void
  readonly className?: string
}>

export function Pagination({
  className,
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const page = Math.min(Math.max(1, currentPage), totalPages)
  const pageRange = getPaginationRange(page, totalPages)
  const isFirstPage = page === 1
  const isLastPage = page === totalPages

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex flex-wrap items-center justify-center gap-1.5 py-6 sm:gap-2", className)}
    >
      <button
        aria-label="Halaman sebelumnya"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3 text-sm font-semibold text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[var(--color-border)] disabled:hover:text-[var(--color-ink)]"
        disabled={isFirstPage}
        onClick={() => onPageChange(page - 1)}
        type="button"
      >
        <ChevronLeft aria-hidden="true" className="size-4" strokeWidth={2} />
        <span className="sr-only sm:not-sr-only sm:ml-1">Sebelumnya</span>
      </button>

      <ul className="flex items-center gap-1 sm:gap-1.5">
        {pageRange.map((item, index) => {
          if (item === "ellipsis") {
            return (
              <li
                aria-hidden="true"
                className="flex min-h-11 min-w-8 select-none items-center justify-center text-sm font-bold tracking-widest text-[var(--color-muted)]"
                key={`ellipsis-${index}`}
              >
                &hellip;
              </li>
            )
          }

          const isCurrent = item === page

          return (
            <li key={item}>
              <button
                aria-current={isCurrent ? "page" : undefined}
                aria-label={`Halaman ${item}`}
                className={cn(
                  "inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm px-3 text-sm font-semibold transition-colors duration-200",
                  isCurrent
                    ? "bg-[var(--color-unj-teal)] text-[var(--color-white)] shadow-sm"
                    : "border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-ink)] hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)]",
                )}
                onClick={() => onPageChange(item)}
                type="button"
              >
                {item}
              </button>
            </li>
          )
        })}
      </ul>

      <button
        aria-label="Halaman berikutnya"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3 text-sm font-semibold text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[var(--color-border)] disabled:hover:text-[var(--color-ink)]"
        disabled={isLastPage}
        onClick={() => onPageChange(page + 1)}
        type="button"
      >
        <span className="sr-only sm:not-sr-only sm:mr-1">Berikutnya</span>
        <ChevronRight aria-hidden="true" className="size-4" strokeWidth={2} />
      </button>
    </nav>
  )
}
