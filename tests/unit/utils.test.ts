import { describe, expect, it } from "vitest"

import { cn } from "@/lib/utils"

describe("cn", () => {
  it("merges Tailwind conflicts while retaining conditional class names", () => {
    // Given: a base class, a conflicting utility, and a conditional class name.
    const baseClass = "px-2 text-sm"
    const overrideClass = "px-4"
    const conditionalClass = "font-semibold"

    // When: classes are combined.
    const result = cn(baseClass, overrideClass, conditionalClass)

    // Then: the later Tailwind utility wins and valid classes remain.
    expect(result).toBe("text-sm px-4 font-semibold")
  })
})
