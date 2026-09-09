import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export type MetadataItem = Readonly<{
  readonly id?: string
  readonly label: string
  readonly value: ReactNode
}>

export type MetadataRowProps = Readonly<{
  readonly className?: string
  readonly items: readonly MetadataItem[]
}>

export function MetadataRow({ className, items }: MetadataRowProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4",
        className,
      )}
    >
      {items.map((item, index) => (
        <div className="border-b border-[var(--color-border)] pb-2" key={item.id ?? `${item.label}-${index}`}>
          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-ink)]">
            {item.label}
          </dt>
          <dd className="mt-1 text-sm font-medium text-[var(--color-ink)]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
