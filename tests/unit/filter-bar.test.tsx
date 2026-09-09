import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { FilterBar } from "@/features/directory/filter-bar"

afterEach(() => {
  cleanup()
})

describe("FilterBar", () => {
  it("reports a query change through the controlled callback and provides 44px clear button", () => {
    // Given: a controlled directory query with existing text.
    const onQueryChange = vi.fn()
    render(
      <FilterBar
        ariaLabel="Filter program studi"
        onQueryChange={onQueryChange}
        onReset={vi.fn()}
        onSelectionChange={vi.fn()}
        options={[{ label: "Semua", value: "all" }]}
        query="akuntansi"
        selectedValue="all"
      />,
    )

    // Then: clear button has accessible name and at least 44px touch target.
    const clearBtn = screen.getByRole("button", { name: "Hapus pencarian" })
    expect(clearBtn.className).toContain("min-h-11")
    expect(clearBtn.className).toContain("min-w-11")

    // When: clicking clear button.
    fireEvent.click(clearBtn)
    expect(onQueryChange).toHaveBeenCalledWith("")
  })

  it("reports category selection using accessible buttons with aria-pressed", () => {
    // Given: category choices for the directory.
    const onSelectionChange = vi.fn()
    render(
      <FilterBar
        ariaLabel="Filter program studi"
        onQueryChange={vi.fn()}
        onReset={vi.fn()}
        onSelectionChange={onSelectionChange}
        options={[
          { label: "Semua", value: "all" },
          { label: "Sarjana", value: "sarjana" },
        ]}
        query=""
        selectedValue="all"
      />,
    )

    // Then: buttons reflect active state via aria-pressed.
    const allBtn = screen.getByRole("button", { name: "Semua" })
    const sarjanaBtn = screen.getByRole("button", { name: "Sarjana" })
    expect(allBtn.getAttribute("aria-pressed")).toBe("true")
    expect(sarjanaBtn.getAttribute("aria-pressed")).toBe("false")

    // When: a visitor selects Sarjana.
    fireEvent.click(sarjanaBtn)
    expect(onSelectionChange).toHaveBeenCalledWith("sarjana")
  })

  it("shows active filter count and invokes reset", () => {
    // Given: a narrowed directory query and category.
    const onReset = vi.fn()
    render(
      <FilterBar
        ariaLabel="Filter program studi"
        onQueryChange={vi.fn()}
        onReset={onReset}
        onSelectionChange={vi.fn()}
        options={[
          { label: "Semua", value: "all" },
          { label: "Sarjana", value: "sarjana" },
        ]}
        query="akuntansi"
        selectedValue="sarjana"
      />,
    )

    // When: the reset action is activated.
    fireEvent.click(screen.getByRole("button", { name: "Reset Filter" }))

    // Then: the parent reset handler runs and active filters stay discoverable.
    expect(screen.getByText("2 filter aktif")).toBeDefined()
    expect(onReset).toHaveBeenCalledOnce()
  })
})

