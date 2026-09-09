import { describe, expect, it } from "vitest"

import { getPaginationRange, paginate } from "@/lib/pagination"

describe("paginate", () => {
  it("returns an empty first page when there are no items", () => {
    // Given: no directory entries.
    const entries: readonly string[] = []

    // When: the first page is requested.
    const result = paginate(entries, 1, 6)

    // Then: the result preserves a safe, empty page contract.
    expect(result).toEqual({ items: [], page: 1, pageSize: 6, totalPages: 0, totalItems: 0 })
  })

  it("returns all items when one page contains the collection", () => {
    // Given: a collection shorter than its page size.
    const entries = ["Akuntansi", "Manajemen", "Bisnis Digital"]

    // When: its only page is requested.
    const result = paginate(entries, 1, 6)

    // Then: every entry is retained with one available page.
    expect(result).toEqual({ items: entries, page: 1, pageSize: 6, totalPages: 1, totalItems: 3 })
  })

  it("returns the requested slice from a multi-page collection", () => {
    // Given: seven entries split into pages of three.
    const entries = [1, 2, 3, 4, 5, 6, 7]

    // When: the second page is requested.
    const result = paginate(entries, 2, 3)

    // Then: it yields only the hand-derived second slice.
    expect(result).toEqual({ items: [4, 5, 6], page: 2, pageSize: 3, totalPages: 3, totalItems: 7 })
  })

  it("clamps an out-of-bounds page to the final available page", () => {
    // Given: seven entries with three pages.
    const entries = [1, 2, 3, 4, 5, 6, 7]

    // When: a page beyond the collection is requested.
    const result = paginate(entries, 99, 3)

    // Then: it returns the final page rather than an invalid empty result.
    expect(result).toEqual({ items: [7], page: 3, pageSize: 3, totalPages: 3, totalItems: 7 })
  })

  it("clamps a negative or zero page to page 1", () => {
    // Given: seven entries with three pages.
    const entries = [1, 2, 3, 4, 5, 6, 7]

    // When: a page <= 0 is requested.
    const result = paginate(entries, -1, 3)

    // Then: it clamps to page 1.
    expect(result).toEqual({ items: [1, 2, 3], page: 1, pageSize: 3, totalPages: 3, totalItems: 7 })
  })
})

describe("getPaginationRange", () => {
  it("returns empty array for 0 pages and [1] for 1 page", () => {
    expect(getPaginationRange(1, 0)).toEqual([])
    expect(getPaginationRange(1, 1)).toEqual([1])
  })

  it("returns consecutive page list when totalPages is small", () => {
    expect(getPaginationRange(2, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it("shows right ellipsis when on early page of large collection", () => {
    expect(getPaginationRange(1, 10)).toEqual([1, 2, 3, 4, 5, "ellipsis", 10])
  })

  it("shows left ellipsis when on late page of large collection", () => {
    expect(getPaginationRange(10, 10)).toEqual([1, "ellipsis", 6, 7, 8, 9, 10])
  })

  it("shows both ellipses when in middle of large collection", () => {
    expect(getPaginationRange(5, 10)).toEqual([1, "ellipsis", 4, 5, 6, "ellipsis", 10])
  })
})
