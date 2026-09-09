import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

const badgeVariants = {
  primary: "bg-[var(--color-unj-teal)] text-[var(--color-white)]",
  secondary:
    "border border-[var(--color-unj-teal)] bg-[var(--color-white)] text-[var(--color-unj-teal)]",
  copper: "bg-[var(--color-feb-copper)] text-[var(--color-white)]",
  quiet: "bg-[var(--color-teal-mist)] text-[var(--color-ink)]",
} as const

export type BadgeVariant = keyof typeof badgeVariants

export type BadgeProps = Readonly<
  HTMLAttributes<HTMLSpanElement> & {
    readonly variant?: BadgeVariant
  }
>

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-semibold uppercase tracking-wider",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  )
}
