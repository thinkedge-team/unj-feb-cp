import type { HTMLAttributes, ReactNode } from "react"

import { cn } from "@/lib/utils"

export type SectionHeadingProps = Readonly<
  HTMLAttributes<HTMLDivElement> & {
    readonly title: string
    readonly eyebrow?: string
    readonly description?: string
    readonly actions?: ReactNode
  }
>

export function SectionHeading({
  className,
  title,
  eyebrow,
  description,
  actions,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-feb-copper)]">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] md:text-3xl">
            {title}
          </h2>
          <div className="flex items-center gap-1.5 pt-0.5" aria-hidden="true">
            <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#F97316] to-[#FE8C43]" />
            <span className="h-1 w-2.5 rounded-full bg-orange-300" />
            <span className="h-1 w-1.5 rounded-full bg-orange-200" />
          </div>
          {description ? (
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-muted-ink)] md:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </div>
  )
}
