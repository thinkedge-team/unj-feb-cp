import type { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"

import { Breadcrumbs, type BreadcrumbItem } from "@/components/common/breadcrumbs"
import { MetadataRow, type MetadataItem } from "@/components/common/metadata-row"

export type DetailPageTemplateProps = Readonly<{
  readonly breadcrumbs: readonly BreadcrumbItem[]
  readonly title: string
  readonly eyebrow?: string
  readonly summary?: string
  readonly featuredMedia?: ReactNode
  readonly metadataItems: readonly MetadataItem[]
  readonly sidebarSlot?: ReactNode
  readonly children: ReactNode
  readonly relatedContentSlot?: ReactNode
}>

function getBackLink(items: readonly BreadcrumbItem[]): BreadcrumbItem | undefined {
  return items.length > 1 ? items[items.length - 2] : undefined
}

export function DetailPageTemplate({
  breadcrumbs,
  children,
  eyebrow,
  featuredMedia,
  metadataItems,
  relatedContentSlot,
  sidebarSlot,
  summary,
  title,
}: DetailPageTemplateProps) {
  const backLink = getBackLink(breadcrumbs)
  const hasSidebar = metadataItems.length > 0 || sidebarSlot != null

  return (
    <div className="min-h-screen bg-[var(--color-limestone)]">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-white)] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              {eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-feb-copper)]">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
                {title}
              </h1>
              {summary ? (
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--color-muted-ink)]">
                  {summary}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        {backLink?.href ? (
          <a
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-unj-teal)] transition-colors duration-200 hover:text-[var(--color-teal-deep)]"
            href={backLink.href}
          >
            <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={2} />
            <span>Kembali ke {backLink.label}</span>
          </a>
        ) : null}

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <article className={hasSidebar ? "lg:col-span-8" : "lg:col-span-12"}>
            {featuredMedia ? (
              <div className="mb-10 overflow-hidden border border-[var(--color-border)] bg-[var(--color-white)]">
                {featuredMedia}
              </div>
            ) : null}
            <div className="space-y-6 text-base leading-relaxed text-[var(--color-muted-ink)] sm:text-lg">
              {children}
            </div>
          </article>

          {hasSidebar ? (
            <aside aria-label="Informasi detail" className="space-y-8 lg:col-span-4">
              {metadataItems.length > 0 ? (
                <section className="border-t-4 border-[var(--color-unj-teal)] bg-[var(--color-white)] p-6">
                  <h2 className="text-xl font-bold text-[var(--color-ink)]">Informasi</h2>
                  <MetadataRow className="mt-5" items={metadataItems} />
                </section>
              ) : null}
              {sidebarSlot ? <div>{sidebarSlot}</div> : null}
            </aside>
          ) : null}
        </div>

        {relatedContentSlot ? (
          <aside aria-label="Konten terkait" className="mt-14 border-t border-[var(--color-border)] pt-10">
            {relatedContentSlot}
          </aside>
        ) : null}
      </div>
    </div>
  )
}
