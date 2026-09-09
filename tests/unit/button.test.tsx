import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Button } from "@/components/ui/button"

describe("Button", () => {
  it("renders a keyboard-focusable native button", () => {
    // Given: a labelled primary action.
    render(<Button>Jelajahi program</Button>)

    // When: the primitive is rendered.
    const button = screen.getByRole("button", { name: "Jelajahi program" })

    // Then: assistive technology finds a native button with an accessible target.
    expect(button.tagName).toBe("BUTTON")
    expect(button.className).toContain("min-h-11")
    expect(button.getAttribute("type")).toBe("button")
  })

  it("applies the requested academic variants faithfully", () => {
    // Given: rendered instances of secondary, quiet, and copper variants.
    const { rerender } = render(<Button variant="secondary">Rencana studi</Button>)
    expect(screen.getByRole("button", { name: "Rencana studi" }).className).toContain(
      "border-[var(--color-unj-teal)]",
    )

    rerender(<Button variant="quiet">Akses cepat</Button>)
    expect(screen.getByRole("button", { name: "Akses cepat" }).className).toContain(
      "bg-transparent",
    )

    rerender(<Button variant="copper">Daftar sekarang</Button>)
    expect(screen.getByRole("button", { name: "Daftar sekarang" }).className).toContain(
      "bg-[var(--color-feb-copper)]",
    )
  })
})
