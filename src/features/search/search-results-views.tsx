import { ArrowRight, Search, X } from "lucide-react"
import type { SyntheticEvent } from "react"

import { EmptyState } from "@/components/common/empty-state"
import { Pagination } from "@/components/common/pagination"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { scopeLabels, type SearchResult, type SearchScope } from "@/lib/search"
import { getEntityBadge, getEntityIcon } from "./search-shared"

export const popularSearchTopics: readonly string[] = [
  "S1 Akuntansi",
  "S1 Manajemen",
  "S2 Magister Manajemen",
  "D4 Pemasaran Digital",
  "Beasiswa Prestasi",
  "Pedoman Skripsi",
  "Kalender Akademik",
  "Pimpinan Fakultas",
  "Riset & Pengabdian",
]

export type SearchResultsFormProps = Readonly<{
  inputQuery: string
  onQueryChange: (query: string) => void
  onSubmit: (e: SyntheticEvent) => void
  onClear: () => void
  onSelectTopic: (topic: string) => void
}>

export function SearchResultsForm({
  inputQuery,
  onQueryChange,
  onSubmit,
  onClear,
  onSelectTopic,
}: SearchResultsFormProps) {
  return (
    <section
      aria-label="Formulir pencarian"
      className="border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-sm sm:p-8"
    >
      <form className="flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
        <div className="relative flex-1">
          <Search
            aria-hidden="true"
            className="absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-[var(--color-muted)]"
          />
          <Input
            aria-label="Kata kunci pencarian"
            className="pl-11 pr-10 text-base"
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Ketik kata kunci pencarian (misal: S1 Manajemen, Akreditasi, Pedoman)..."
            type="text"
            value={inputQuery}
          />
          {inputQuery ? (
            <button
              aria-label="Hapus kata kunci"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-ink)] hover:text-[var(--color-ink)]"
              onClick={onClear}
              type="button"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          ) : null}
        </div>
        <Button className="min-h-11 sm:w-auto" type="submit" variant="primary">
          <Search aria-hidden="true" className="mr-2 size-4" />
          Cari Informasi
        </Button>
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-2 pt-2 text-xs text-[var(--color-muted-ink)]">
        <span className="font-semibold text-[var(--color-ink)]">Pencarian Populer:</span>
        {popularSearchTopics.map((topic) => (
          <button
            className="inline-flex items-center rounded-sm border border-[var(--color-border)] bg-[var(--color-limestone)] px-2.5 py-1 text-xs text-[var(--color-ink)] transition-colors hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)]"
            key={topic}
            onClick={() => onSelectTopic(topic)}
            type="button"
          >
            {topic}
          </button>
        ))}
      </div>
    </section>
  )
}

export type SearchResultsListProps = Readonly<{
  inputQuery: string
  activeScope: SearchScope
  filteredResults: readonly SearchResult[]
  paginatedResults: readonly SearchResult[]
  currentPage: number
  totalPages: number
  onScopeChange: (scope: SearchScope) => void
  onPageChange: (page: number) => void
}>

export function SearchResultsList({
  inputQuery,
  activeScope,
  filteredResults,
  paginatedResults,
  currentPage,
  totalPages,
  onScopeChange,
  onPageChange,
}: SearchResultsListProps) {
  if (inputQuery.trim() === "") {
    return (
      <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-12 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
          <Search aria-hidden="true" className="size-7" />
        </div>
        <h3 className="mt-4 font-sans text-lg font-bold text-slate-900">
          Mulai Pencarian Informasi
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-[var(--color-muted-ink)]">
          Ketik istilah atau pilih dari daftar topik populer di atas untuk menjelajahi portal resmi Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.
        </p>
      </div>
    )
  }

  if (filteredResults.length === 0) {
    return (
      <EmptyState
        actionLabel="Tampilkan Semua Kategori"
        description={`Tidak ditemukan konten yang cocok dengan kata kunci "${inputQuery}" pada kategori ${scopeLabels[activeScope]}. Silakan coba kata kunci lain atau pilih kategori "Semua".`}
        onAction={() => onScopeChange("all")}
        title="Tidak Ada Hasil Pencarian"
      />
    )
  }

  return (
    <div className="space-y-4">
      <ul
        className="divide-y divide-[var(--color-border)] border border-[var(--color-border)] bg-[var(--color-white)] shadow-sm"
        role="list"
      >
        {paginatedResults.map((item) => (
          <li key={item.id}>
            <article className="group p-5 transition-colors duration-150 hover:bg-[var(--color-limestone)] sm:p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div className="flex flex-1 items-start gap-3.5">
                  <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded bg-[var(--color-teal-soft)]">
                    {getEntityIcon(item.type)}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      {getEntityBadge(item.type)}
                      <span className="text-xs font-medium text-[var(--color-muted-ink)]">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-unj-teal)]">
                      <a className="focus:outline-none" href={item.url}>
                        {item.title}
                      </a>
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-muted-ink)]">
                      {item.description}
                    </p>
                    <div className="pt-1 text-xs font-mono text-[var(--color-unj-teal)]">
                      {item.url}
                    </div>
                  </div>
                </div>
                <a
                  aria-label={`Buka ${item.title}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 py-2 text-xs font-semibold text-[var(--color-unj-teal)] transition-colors hover:border-[var(--color-unj-teal)] hover:bg-[var(--color-unj-teal)] hover:text-[var(--color-white)] sm:self-center"
                  href={item.url}
                >
                  Buka Halaman
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {totalPages > 1 ? (
        <div className="pt-4">
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPages={totalPages}
          />
        </div>
      ) : null}
    </div>
  )
}
