"use client"

import { Search, X } from "lucide-react"
import { useEffect, useId, useMemo, useRef, useState } from "react"
import type { KeyboardEvent } from "react"

import {
  searchContent,
  type SearchScope,
} from "@/lib/search"
import {
  SearchDialogFooter,
  SearchDialogResults,
} from "./search-dialog-views"
import { filterScopes } from "./search-shared"

export type SearchDialogProps = Readonly<{
  isOpen: boolean
  onClose: () => void
}>

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [scope, setScope] = useState<SearchScope>("all")
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsContainerRef = useRef<HTMLDivElement>(null)
  const dialogId = useId()

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(-1)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 50)
    } else {
      setQuery("")
      setScope("all")
      setSelectedIndex(-1)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        if (isOpen) {
          onClose()
        }
      } else if (event.key === "Escape" && isOpen) {
        event.preventDefault()
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const results = useMemo(() => {
    if (query.trim() === "") return []
    return searchContent(query, scope).slice(0, 8)
  }, [query, scope])

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => {
        const next = prev < results.length - 1 ? prev + 1 : 0
        scrollItemIntoView(next)
        return next
      })
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => {
        const next = prev > 0 ? prev - 1 : results.length - 1
        scrollItemIntoView(next)
        return next
      })
    } else if (e.key === "Enter" && selectedIndex >= 0 && selectedIndex < results.length) {
      e.preventDefault()
      const target = results[selectedIndex]
      if (target) {
        onClose()
        if (typeof window !== "undefined") {
          window.location.assign(target.url)
        }
      }
    }
  }

  const scrollItemIntoView = (index: number) => {
    if (!resultsContainerRef.current) return
    const items = resultsContainerRef.current.querySelectorAll("li")
    const targetItem = items[index]
    if (targetItem) {
      targetItem.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }
  }

  if (!isOpen) return null

  return (
    <div
      aria-labelledby={`search-dialog-title-${dialogId}`}
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 pt-[10vh] backdrop-blur-sm sm:p-6 sm:pt-[12vh]"
      role="dialog"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-white)] shadow-2xl transition-all">
        <h2 className="sr-only" id={`search-dialog-title-${dialogId}`}>
          Pencarian Informasi Portal FEB UNJ
        </h2>

        <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4 py-3 sm:px-6">
          <Search
            aria-hidden="true"
            className="size-5 shrink-0 text-[var(--color-muted)]"
          />
          <input
            aria-autocomplete="list"
            aria-controls={`search-results-${dialogId}`}
            className="flex-1 bg-transparent text-base font-medium text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none"
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(-1)
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Cari program studi, dosen, agenda, berita, atau dokumen..."
            ref={inputRef}
            type="search"
            value={query}
          />
          {query.length > 0 ? (
            <button
              aria-label="Hapus pencarian"
              className="inline-flex size-6 items-center justify-center rounded-full text-[var(--color-muted-ink)] hover:bg-[var(--color-limestone)] hover:text-[var(--color-ink)]"
              onClick={() => {
                setQuery("")
                setSelectedIndex(-1)
                inputRef.current?.focus()
              }}
              type="button"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          ) : (
            <kbd className="hidden rounded border border-[var(--color-border)] bg-[var(--color-limestone)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-muted-ink)] sm:inline-block">
              ESC
            </kbd>
          )}
          <button
            aria-label="Tutup pencarian"
            className="inline-flex size-8 items-center justify-center rounded-sm text-[var(--color-muted-ink)] hover:bg-[var(--color-limestone)] hover:text-[var(--color-ink)]"
            onClick={onClose}
            type="button"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto border-b border-[var(--color-border)] bg-[var(--color-limestone)] px-4 py-2 sm:px-6">
          {filterScopes.map((filter) => {
            const isSelected = scope === filter.scope
            return (
              <button
                aria-pressed={isSelected}
                className={`inline-flex items-center whitespace-nowrap rounded-sm px-3 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                  isSelected
                    ? "bg-[var(--color-unj-teal)] text-[var(--color-white)] shadow-sm"
                    : "text-[var(--color-ink)] hover:bg-[var(--color-teal-soft)] hover:text-[var(--color-unj-teal)]"
                }`}
                key={filter.scope}
                onClick={() => {
                  setScope(filter.scope)
                  setSelectedIndex(-1)
                }}
                type="button"
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div
          className="max-h-[60vh] overflow-y-auto p-4 sm:p-6"
          id={`search-results-${dialogId}`}
          ref={resultsContainerRef}
        >
          <SearchDialogResults
            onClose={onClose}
            onSelectIndex={setSelectedIndex}
            onSelectSuggestion={(suggestion) => {
              setQuery(suggestion)
              inputRef.current?.focus()
            }}
            query={query}
            results={results}
            selectedIndex={selectedIndex}
          />
        </div>

        <SearchDialogFooter onClose={onClose} query={query} />
      </div>
    </div>
  )
}
