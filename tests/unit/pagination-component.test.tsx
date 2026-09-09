import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

afterEach(() => {
  cleanup()
})

import { Pagination } from "@/components/common/pagination"

describe("Pagination Component", () => {
  it("renders accessible navigation landmark and current page marker", () => {
    // Given: pagination state at page 2 of 5.
    const onPageChange = vi.fn()
    render(<Pagination currentPage={2} onPageChange={onPageChange} totalPages={5} />)

    // Then: assistive technology locates the pagination navigation and current page indicator.
    const nav = screen.getByRole("navigation", { name: "Pagination" })
    expect(nav).toBeDefined()

    const currentPageButton = screen.getByRole("button", { name: "Halaman 2" })
    expect(currentPageButton.getAttribute("aria-current")).toBe("page")
  })

  it("disables Previous button on the first page", () => {
    // Given: on first page.
    const onPageChange = vi.fn()
    render(<Pagination currentPage={1} onPageChange={onPageChange} totalPages={3} />)

    // Then: Previous button is disabled and cannot be triggered.
    const prevButton = screen.getByRole("button", { name: "Halaman sebelumnya" })
    expect(prevButton.hasAttribute("disabled")).toBe(true)

    fireEvent.click(prevButton)
    expect(onPageChange).not.toHaveBeenCalled()
  })

  it("disables Next button on the last page", () => {
    // Given: on final page.
    const onPageChange = vi.fn()
    render(<Pagination currentPage={3} onPageChange={onPageChange} totalPages={3} />)

    // Then: Next button is disabled.
    const nextButton = screen.getByRole("button", { name: "Halaman berikutnya" })
    expect(nextButton.hasAttribute("disabled")).toBe(true)

    fireEvent.click(nextButton)
    expect(onPageChange).not.toHaveBeenCalled()
  })

  it("calls onPageChange when clicking another page or Next", () => {
    // Given: on page 2 of 4.
    const onPageChange = vi.fn()
    render(<Pagination currentPage={2} onPageChange={onPageChange} totalPages={4} />)

    // When: clicking Next button.
    const nextButton = screen.getByRole("button", { name: "Halaman berikutnya" })
    fireEvent.click(nextButton)
    expect(onPageChange).toHaveBeenCalledWith(3)

    // When: clicking page 1 directly.
    const page1Button = screen.getByRole("button", { name: "Halaman 1" })
    fireEvent.click(page1Button)
    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it("clamps invalid controlled currentPage values to valid boundary pages", () => {
    const { rerender } = render(<Pagination currentPage={0} onPageChange={vi.fn()} totalPages={3} />)
    expect(screen.getByRole("button", { name: "Halaman 1" }).getAttribute("aria-current")).toBe("page")

    rerender(<Pagination currentPage={99} onPageChange={vi.fn()} totalPages={3} />)
    expect(screen.getByRole("button", { name: "Halaman 3" }).getAttribute("aria-current")).toBe("page")
  })

  it("renders nothing when totalPages is 0 or 1", () => {
    // Given: single-page collections.
    const { container, rerender } = render(
      <Pagination currentPage={1} onPageChange={vi.fn()} totalPages={1} />,
    )
    expect(container.firstChild).toBeNull()

    rerender(<Pagination currentPage={1} onPageChange={vi.fn()} totalPages={0} />)
    expect(container.firstChild).toBeNull()
  })
})
