"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"

import { EventCard } from "@/components/cards/event-card"
import { NewsCard } from "@/components/cards/news-card"
import { EmptyState } from "@/components/common/empty-state"
import { Pagination } from "@/components/common/pagination"
import { ListingPageTemplate } from "@/components/templates/listing-page-template"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  getInformationCategoryMeta,
  type InformationCategory,
} from "@/features/information/information-data"
import { cn } from "@/lib/utils"
import type { Event, NewsArticle } from "@/types/content"

export type InformationListingProps = Readonly<{
  readonly category: InformationCategory
  readonly items: readonly NewsArticle[] | readonly Event[]
  readonly title?: string
  readonly subtitle?: string
  readonly pageSize?: number
}>

function isEventItem(item: NewsArticle | Event): item is Event {
  return "venue" in item && "startsAt" in item
}

export function InformationListing({
  category,
  items,
  pageSize = 9,
  subtitle,
  title,
}: InformationListingProps) {
  const meta = getInformationCategoryMeta(category)
  const displayTitle = title ?? meta.title
  const displayDescription = subtitle ?? meta.subtitle

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  const availableSubCategories = useMemo(() => {
    const categories = new Set<string>()
    for (const item of items) {
      if (item.category) {
        categories.add(item.category)
      }
    }
    return ["Semua", ...Array.from(categories)]
  }, [items])

  function handleReset() {
    setSearchQuery("")
    setSelectedSubCategory("all")
    setCurrentPage(1)
  }

  function handleSearchChange(query: string) {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  function handleSubCategoryChange(subCategory: string) {
    setSelectedSubCategory(subCategory)
    setCurrentPage(1)
  }

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()

    return items.filter((item) => {
      if (selectedSubCategory !== "all" && item.category !== selectedSubCategory) {
        return false
      }

      if (q) {
        if (isEventItem(item)) {
          const matchTitle = item.title.toLowerCase().includes(q)
          const matchVenue = item.venue.toLowerCase().includes(q)
          const matchSummary = item.summary.toLowerCase().includes(q)
          if (!matchTitle && !matchVenue && !matchSummary) {
            return false
          }
        } else {
          const matchTitle = item.title.toLowerCase().includes(q)
          const matchExcerpt = item.excerpt.toLowerCase().includes(q)
          const matchBody = item.body.some((p) => p.toLowerCase().includes(q))
          if (!matchTitle && !matchExcerpt && !matchBody) {
            return false
          }
        }
      }

      return true
    })
  }, [items, selectedSubCategory, searchQuery])

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize))
  const safeCurrentPage = Math.min(currentPage, totalPages)

  const paginatedItems = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize
    return filteredItems.slice(start, start + pageSize)
  }, [filteredItems, safeCurrentPage, pageSize])

  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "Informasi", href: "/informasi/berita" },
    { label: meta.singularLabel },
  ] as const

  const hasActiveFilters = searchQuery.trim().length > 0 || selectedSubCategory !== "all"

  const filterControls = (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="relative block min-w-0 flex-1 max-w-lg">
          <span className="sr-only">Cari {meta.singularLabel}</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[var(--color-muted)]"
            strokeWidth={1.75}
          />
          <Input
            aria-label="Cari"
            className="pr-12 pl-10"
            onChange={(event) => handleSearchChange(event.target.value)}
            placeholder={`Cari ${meta.singularLabel.toLowerCase()}, topik, atau kata kunci...`}
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

        {hasActiveFilters ? (
          <Button onClick={handleReset} variant="quiet">
            Reset Filter
          </Button>
        ) : null}
      </div>

      {availableSubCategories.length > 2 ? (
        <div aria-label="Filter kategori topik" className="flex flex-wrap items-center gap-2 pt-2">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-ink)]">
            Topik:
          </span>
          {availableSubCategories.map((subCat) => {
            const isSelected =
              (subCat === "Semua" && selectedSubCategory === "all") ||
              subCat === selectedSubCategory

            return (
              <button
                aria-pressed={isSelected}
                className={cn(
                  "min-h-11 rounded-sm border px-3.5 text-sm font-semibold transition-colors duration-200",
                  isSelected
                    ? "border-[var(--color-unj-teal)] bg-[var(--color-unj-teal)] text-[var(--color-white)] shadow-sm"
                    : "border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-muted-ink)] hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)]",
                )}
                key={subCat}
                onClick={() => handleSubCategoryChange(subCat === "Semua" ? "all" : subCat)}
                type="button"
              >
                {subCat}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )

  return (
    <ListingPageTemplate
      breadcrumbs={breadcrumbs}
      countLabel={`dari ${items.length} ${meta.countLabel}`}
      description={displayDescription}
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
      title={displayTitle}
      totalItemsCount={filteredItems.length}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-medium text-[var(--color-muted-ink)]">
          Menampilkan {filteredItems.length} dari {items.length} {meta.countLabel}
        </p>
      </div>

      {filteredItems.length === 0 ? (
        <EmptyState
          actionLabel="Reset Filter"
          description={`Tidak ada ${meta.singularLabel.toLowerCase()} yang sesuai dengan filter atau kata kunci pencarian Anda. Silakan coba kata kunci lain.`}
          onAction={handleReset}
          title={`${meta.singularLabel} Tidak Ditemukan`}
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedItems.map((item) => {
            if (isEventItem(item)) {
              return (
                <EventCard
                  event={item}
                  href={`/informasi/event/${item.slug}`}
                  key={item.slug}
                />
              )
            }
            return (
              <NewsCard
                article={item}
                href={`/informasi/${category}/${item.slug}`}
                key={item.slug}
              />
            )
          })}
        </div>
      )}
    </ListingPageTemplate>
  )
}
