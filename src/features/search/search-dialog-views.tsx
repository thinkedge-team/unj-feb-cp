import Link from "next/link"
import { ArrowRight, ChevronRight, Search } from "lucide-react"
import type { SearchResult } from "@/lib/search"
import { getEntityBadge, getEntityIcon, quickSuggestions } from "./search-shared"

export type SearchDialogResultsProps = Readonly<{
  query: string
  results: readonly SearchResult[]
  selectedIndex: number
  onClose: () => void
  onSelectIndex: (index: number) => void
  onSelectSuggestion: (suggestion: string) => void
}>

export function SearchDialogResults({
  query,
  results,
  selectedIndex,
  onClose,
  onSelectIndex,
  onSelectSuggestion,
}: SearchDialogResultsProps) {
  if (query.trim() === "") {
    return (
      <div className="py-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-feb-copper)]">
          Pencarian Cepat
        </p>
        <h3 className="mt-2 font-sans text-lg font-bold text-slate-900">
          Eksplorasi Informasi Kampus
        </h3>
        <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
          Temukan kurikulum, profil dosen, pedoman akademik, berita riset, dan agenda fakultas.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {quickSuggestions.map((suggestion) => (
            <button
              className="inline-flex items-center rounded-sm border border-[var(--color-border)] bg-[var(--color-limestone)] px-3 py-1.5 text-xs text-[var(--color-ink)] transition-colors hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)]"
              key={suggestion}
              onClick={() => onSelectSuggestion(suggestion)}
              type="button"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
          <Search aria-hidden="true" className="size-6" />
        </div>
        <h3 className="mt-4 font-sans text-base font-bold text-slate-900">
          Tidak ditemukan hasil untuk &ldquo;{query}&rdquo;
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-ink)]">
          Pastikan ejaan kata kunci benar, gunakan kata kunci yang lebih luas, atau pilih kategori &ldquo;Semua&rdquo;.
        </p>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-[var(--color-border)]" role="list">
      {results.map((result, idx) => {
        const isSelected = idx === selectedIndex
        return (
          <li key={result.id}>
            <Link
              className={`group flex items-start justify-between gap-4 p-3.5 transition-colors duration-150 rounded-sm ${
                isSelected
                  ? "bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]"
                  : "hover:bg-[var(--color-limestone)]"
              }`}
              href={result.url}
              onClick={onClose}
              onMouseEnter={() => onSelectIndex(idx)}
            >
              <div className="flex flex-1 items-start gap-3">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded bg-[var(--color-limestone)] group-hover:bg-[var(--color-white)]">
                  {getEntityIcon(result.type)}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    {getEntityBadge(result.type)}
                    <span className="text-[11px] font-medium text-[var(--color-muted-ink)]">
                      {result.category}
                    </span>
                  </div>
                  <h4 className="mt-1 text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-unj-teal)]">
                    {result.title}
                  </h4>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[var(--color-muted-ink)]">
                    {result.description}
                  </p>
                </div>
              </div>
              <ChevronRight
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-[var(--color-muted)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[var(--color-unj-teal)]"
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export function SearchDialogFooter({
  query,
  onClose,
}: Readonly<{ query: string; onClose: () => void }>) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] bg-[var(--color-limestone)] px-4 py-2.5 sm:px-6">
      <div className="hidden items-center gap-4 text-[11px] text-[var(--color-muted-ink)] sm:flex">
        <span className="inline-flex items-center gap-1">
          <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-white)] px-1.5 py-0.5 font-mono text-[10px]">
            ↑
          </kbd>
          <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-white)] px-1.5 py-0.5 font-mono text-[10px]">
            ↓
          </kbd>
          Navigasi
        </span>
        <span className="inline-flex items-center gap-1">
          <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-white)] px-1.5 py-0.5 font-mono text-[10px]">
            ↵
          </kbd>
          Pilih
        </span>
        <span className="inline-flex items-center gap-1">
          <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-white)] px-1.5 py-0.5 font-mono text-[10px]">
            ESC
          </kbd>
          Tutup
        </span>
      </div>

      {query.trim() ? (
        <Link
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-unj-teal)] hover:text-[var(--color-copper-deep)] ml-auto"
          href={`/search?q=${encodeURIComponent(query.trim())}`}
          onClick={onClose}
        >
          Lihat di Halaman Hasil Lengkap
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </Link>
      ) : null}
    </div>
  )
}
