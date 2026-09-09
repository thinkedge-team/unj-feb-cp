import type { ButtonHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

const buttonVariants = {
  primary:
    "bg-[var(--color-unj-teal)] text-[var(--color-white)] hover:bg-[var(--color-teal-deep)]",
  secondary:
    "border border-[var(--color-unj-teal)] bg-[var(--color-white)] text-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)]",
  quiet: "bg-transparent text-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)]",
  copper:
    "bg-[var(--color-feb-copper)] text-[var(--color-white)] hover:bg-[var(--color-copper-deep)]",
} as const

export type ButtonVariant = keyof typeof buttonVariants

export type ButtonProps = Readonly<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly variant?: ButtonVariant
  }
>

export function Button({ className, variant = "primary", type = "button", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-sm px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        buttonVariants[variant],
        className,
      )}
      type={type}
      {...props}
    />
  )
}
