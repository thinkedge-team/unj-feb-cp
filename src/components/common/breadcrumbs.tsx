export type BreadcrumbItem = {
  readonly label: string
  readonly href?: string
}

export type BreadcrumbsProps = Readonly<{
  readonly items: readonly BreadcrumbItem[]
}>

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted-ink)]">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1

          return (
            <li className="flex items-center gap-2" key={`${item.label}-${item.href ?? "current"}`}>
              {index > 0 ? <span aria-hidden="true" className="text-[var(--color-muted)]">/</span> : null}
              {isCurrent ? (
                <span aria-current="page" className="inline-flex min-h-11 items-center font-semibold text-[var(--color-ink)]">
                  {item.label}
                </span>
              ) : (
                <a className="inline-flex min-h-11 items-center hover:text-[var(--color-unj-teal)]" href={item.href}>
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
