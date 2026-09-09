import type { InputHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export type InputProps = Readonly<InputHTMLAttributes<HTMLInputElement>>

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex min-h-11 w-full rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 py-2 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      type={type}
      {...props}
    />
  )
}
