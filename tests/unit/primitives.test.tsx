import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { SectionHeading } from "@/components/common/section-heading"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

describe("Base Primitives", () => {
  it("renders Badge variants correctly", () => {
    // Given: rendered Badge components.
    const { rerender } = render(<Badge variant="primary">Akreditasi Unggul</Badge>)
    expect(screen.getByText("Akreditasi Unggul").className).toContain(
      "bg-[var(--color-unj-teal)]",
    )

    rerender(<Badge variant="copper">FEB Terdepan</Badge>)
    expect(screen.getByText("FEB Terdepan").className).toContain(
      "bg-[var(--color-feb-copper)]",
    )
  })

  it("renders Input with accessible touch height and native props", () => {
    // Given: an accessible text input.
    render(<Input placeholder="Cari program studi..." />)
    const input = screen.getByPlaceholderText("Cari program studi...")
    expect(input.tagName).toBe("INPUT")
    expect(input.className).toContain("min-h-11")
  })

  it("renders Skeleton with aria-hidden true", () => {
    // Given: a rendered skeleton container.
    const { container } = render(<Skeleton className="h-6 w-24" />)
    const skeleton = container.firstElementChild
    expect(skeleton?.getAttribute("aria-hidden")).toBe("true")
    expect(skeleton?.className).toContain("animate-pulse")
  })

  it("renders SectionHeading with title, eyebrow, and description", () => {
    // Given: a section heading with full metadata.
    render(
      <SectionHeading
        description="Pilihan jenjang studi sarjana dan magister di FEB UNJ."
        eyebrow="Program Studi"
        title="Jelajahi Program Unggulan"
      />,
    )
    expect(screen.getByRole("heading", { level: 2, name: "Jelajahi Program Unggulan" })).toBeDefined()
    expect(screen.getByText("Program Studi")).toBeDefined()
    expect(
      screen.getByText("Pilihan jenjang studi sarjana dan magister di FEB UNJ."),
    ).toBeDefined()
  })
})
