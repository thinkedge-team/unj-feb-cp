"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import type { SyntheticEvent } from "react"

import { ListingPageTemplate } from "@/components/templates/listing-page-template"
import {
  scopeLabels,
  searchContent,
  type SearchScope,
} from "@/lib/search"
import {
  SearchResultsForm,
  SearchResultsList,
} from "./search-results-views"

const PAGE_SIZE = 10

const availableScopes: readonly SearchScope[] = [
  "all",
  "programs",
  "lecturers",
  "news",
  "events",
  "documents",
  "pages",
]

export function SearchResults() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const urlQuery = searchParams.get("q") ?? ""
  const urlScope = (searchParams.get("scope") as SearchScope) ?? "all"

  const [inputQuery, setInputQuery] = useState(urlQuery)
  const [activeScope, setActiveScope] = useState<SearchScope>(
    availableScopes.includes(urlScope) ? urlScope : "all",
  )
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setInputQuery(urlQuery)
    if (availableScopes.includes(urlScope)) {
      setActiveScope(urlScope)
    }
  }, [urlQuery, urlScope])

  const handleSearchSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (inputQuery.trim()) {
      params.set("q", inputQuery.trim())
    }
    if (activeScope !== "all") {
      params.set("scope", activeScope)
    }
    setCurrentPage(1)
    router.push(`/search?${params.toString()}`)
  }

  const handleScopeChange = (scope: SearchScope) => {
    setActiveScope(scope)
    setCurrentPage(1)
    const params = new URLSearchParams()
    if (inputQuery.trim()) {
      params.set("q", inputQuery.trim())
    }
    if (scope !== "all") {
      params.set("scope", scope)
    }
    router.push(`/search?${params.toString()}`)
  }

  const allResults = useMemo(() => {
    return searchContent(inputQuery.trim(), "all")
  }, [inputQuery])

  const filteredResults = useMemo(() => {
    if (activeScope === "all") return allResults
    return searchContent(inputQuery.trim(), activeScope)
  }, [inputQuery, activeScope])

  const scopeCounts = useMemo(() => {
    const counts: Record<SearchScope, number> = {
      all: allResults.length,
      programs: 0,
      lecturers: 0,
      news: 0,
      events: 0,
      documents: 0,
      pages: 0,
    }

    for (const item of allResults) {
      if (item.type === "program") counts.programs++
      else if (item.type === "lecturer") counts.lecturers++
      else if (item.type === "news") counts.news++
      else if (item.type === "event") counts.events++
      else if (item.type === "document") counts.documents++
      else if (item.type === "page") counts.pages++
    }

    return counts
  }, [allResults])

  const totalPages = Math.ceil(filteredResults.length / PAGE_SIZE)
  const paginatedResults = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE
    return filteredResults.slice(start, start + PAGE_SIZE)
  }, [filteredResults, currentPage])

  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "Pencarian Global", href: "/search" },
  ]

  return (
    <ListingPageTemplate
      breadcrumbs={breadcrumbs}
      countLabel="hasil"
      description="Temukan informasi program studi, direktori dosen, berita akademik, agenda kegiatan, panduan dokumen, dan halaman fakultas."
      title="Pusat Pencarian Terpadu FEB UNJ"
      totalItemsCount={filteredResults.length}
    >
      <div className="space-y-8">
        <SearchResultsForm
          inputQuery={inputQuery}
          onClear={() => {
            setInputQuery("")
            router.push("/search")
          }}
          onQueryChange={setInputQuery}
          onSelectTopic={(topic) => {
            setInputQuery(topic)
            const params = new URLSearchParams()
            params.set("q", topic)
            if (activeScope !== "all") params.set("scope", activeScope)
            setCurrentPage(1)
            router.push(`/search?${params.toString()}`)
          }}
          onSubmit={handleSearchSubmit}
        />

        <div className="flex flex-wrap items-center gap-2 border-b border-[var(--color-border)] pb-4">
          {availableScopes.map((scope) => {
            const isSelected = activeScope === scope
            const count = scopeCounts[scope]
            return (
              <button
                aria-pressed={isSelected}
                className={`inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold transition-colors duration-150 sm:text-sm ${
                  isSelected
                    ? "bg-[var(--color-unj-teal)] text-[var(--color-white)] shadow-sm"
                    : "border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-ink)] hover:border-[var(--color-unj-teal)] hover:text-[var(--color-unj-teal)]"
                }`}
                key={scope}
                onClick={() => handleScopeChange(scope)}
                type="button"
              >
                <span>{scopeLabels[scope]}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    isSelected
                      ? "bg-[var(--color-white)]/20 text-[var(--color-white)]"
                      : "bg-[var(--color-limestone)] text-[var(--color-muted-ink)]"
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        <SearchResultsList
          activeScope={activeScope}
          currentPage={currentPage}
          filteredResults={filteredResults}
          inputQuery={inputQuery}
          onPageChange={(page) => {
            setCurrentPage(page)
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          onScopeChange={handleScopeChange}
          paginatedResults={paginatedResults}
          totalPages={totalPages}
        />
      </div>
    </ListingPageTemplate>
  )
}
