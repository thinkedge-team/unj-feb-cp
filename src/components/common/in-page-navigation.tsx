import { cn } from "@/lib/utils"

export type InPageNavigationItem = Readonly<{
  readonly id: string
  readonly label: string
}>

export type InPageNavigationProps = Readonly<{
  readonly activeId?: string
  readonly items: readonly InPageNavigationItem[]
  readonly title?: string
}>

export function InPageNavigation({
  activeId,
  items,
  title = "Dalam halaman",
}: InPageNavigationProps) {
  return (
    <nav aria-label={title} className="border-l-2 border-[var(--color-border)] pl-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-ink)]">
        {title}
      </p>
      <ol className="mt-3 space-y-1">
        {items.map((item) => {
          const isActive = item.id === activeId

          return (
            <li key={item.id}>
              <a
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "flex min-h-11 items-center py-2 text-sm leading-snug transition-colors duration-200 hover:text-[var(--color-unj-teal)]",
                  isActive
                    ? "font-semibold text-[var(--color-unj-teal)]"
                    : "text-[var(--color-muted-ink)]",
                )}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
