import type { ReactNode } from "react"

import { Breadcrumbs, type BreadcrumbItem } from "@/components/common/breadcrumbs"

export type ListingPageTemplateProps = Readonly<{
  readonly title: string
  readonly description?: string
  readonly breadcrumbs?: readonly BreadcrumbItem[]
  readonly totalItemsCount: number
  readonly filterControls?: ReactNode
  readonly paginationControls?: ReactNode
  readonly pagination?: ReactNode
  readonly children: ReactNode
  readonly countLabel?: string
}>

export function ListingPageTemplate({
  breadcrumbs,
  children,
  countLabel = "dokumen",
  description,
  filterControls,
  pagination,
  paginationControls,
  title,
  totalItemsCount,
}: ListingPageTemplateProps) {
  const countText = `${totalItemsCount} ${countLabel}`
  const activePagination = paginationControls ?? pagination

  return (
    <div className="min-h-screen bg-[var(--color-limestone)]">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-white)] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          ) : null}
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
                {title}
              </h1>
              {description ? (
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--color-muted-ink)]">
                  {description}
                </p>
              ) : null}
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p
                aria-live="polite"
                className="inline-flex rounded-sm bg-[var(--color-teal-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-unj-teal)]"
              >
                {countText}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        {filterControls ? (
          <section aria-label="Filter daftar" className="border-b border-[var(--color-border)] pb-6">
            {filterControls}
          </section>
        ) : null}
        <section aria-label={`Daftar ${title}`} className="pt-8">
          {children}
        </section>
        {activePagination ? <div className="mt-10">{activePagination}</div> : null}
      </div>
    </div>
  )
}
