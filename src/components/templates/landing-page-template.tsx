import type { ReactNode } from "react"
import { ArrowRight, BookOpen } from "lucide-react"

import { Breadcrumbs, type BreadcrumbItem } from "@/components/common/breadcrumbs"
import { InPageNavigation, type InPageNavigationItem } from "@/components/common/in-page-navigation"

export type LandingPageSectionItem = Readonly<{
  readonly id?: string
  readonly heading: string
  readonly body: string
  readonly content?: ReactNode
}>

export type LandingPageCallout = Readonly<{
  readonly title: string
  readonly description: string
  readonly quote?: string
  readonly author?: string
}>

export type LandingPageCta = Readonly<{
  readonly title: string
  readonly description?: string
  readonly label: string
  readonly href: string
}>

export type LandingPageRelatedResource = Readonly<{
  readonly title: string
  readonly description?: string
  readonly href: string
  readonly category?: string
}>

export type LandingPageTemplateProps = Readonly<{
  readonly title: string
  readonly category?: string
  readonly summary?: string
  readonly breadcrumbs?: readonly BreadcrumbItem[]
  readonly inPageNavItems?: readonly InPageNavigationItem[]
  readonly sections?: readonly LandingPageSectionItem[]
  readonly callout?: LandingPageCallout
  readonly relatedResources?: readonly LandingPageRelatedResource[]
  readonly cta?: LandingPageCta
  readonly children?: ReactNode
}>

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

function getUniqueSectionIds(sections: readonly LandingPageSectionItem[]): readonly string[] {
  const occurrences = new Map<string, number>()

  return sections.map((section) => {
    const baseId = section.id ?? slugify(section.heading)
    const occurrence = (occurrences.get(baseId) ?? 0) + 1
    occurrences.set(baseId, occurrence)
    return occurrence === 1 ? baseId : `${baseId}-${occurrence}`
  })
}

export function LandingPageTemplate({
  breadcrumbs,
  callout,
  category,
  children,
  cta,
  inPageNavItems,
  relatedResources,
  sections,
  summary,
  title,
}: LandingPageTemplateProps) {
  const uniqueSectionIds = sections ? getUniqueSectionIds(sections) : []
  const derivedNavItems: readonly InPageNavigationItem[] =
    inPageNavItems ??
    sections?.map((section, index) => ({
      id: uniqueSectionIds[index] ?? slugify(section.heading),
      label: section.heading,
    })) ??
    []

  return (
    <div className="min-h-screen bg-[var(--color-limestone)]">
      {/* Hero Header Area */}
      <header className="border-b border-[var(--color-border)] bg-[var(--color-white)] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          ) : null}

          <div className="max-w-3xl space-y-4">
            {category ? (
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-feb-copper)]">
                {category}
              </p>
            ) : null}

            <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
              {title}
            </h1>

            {summary ? (
              <p className="text-lg leading-relaxed text-[var(--color-muted-ink)] md:text-xl">
                {summary}
              </p>
            ) : null}
          </div>
        </div>
      </header>

      {/* Main Content Area with Editorial Multi-Column Flow */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Main Editorial Flow */}
          <div className={derivedNavItems.length > 0 ? "lg:col-span-8" : "lg:col-span-12"}>
            {/* Sections */}
            {sections && sections.length > 0 ? (
              <div className="space-y-12">
                {sections.map((section, index) => {
                  const sectionId = uniqueSectionIds[index] ?? slugify(section.heading)
                  return (
                    <section
                      className="scroll-mt-24 border-b border-[var(--color-border)] pb-10 last:border-b-0"
                      id={sectionId}
                      key={sectionId}
                    >
                      <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
                        {section.heading}
                      </h2>
                      <div className="mt-4 text-base leading-relaxed text-[var(--color-muted-ink)] sm:text-lg">
                        <p>{section.body}</p>
                      </div>
                      {section.content ? (
                        <div className="mt-6">{section.content}</div>
                      ) : null}
                    </section>
                  )
                })}
              </div>
            ) : null}

            {/* Optional Callout / Editorial Pullquote */}
            {callout ? (
              <aside className="my-10 border-l-4 border-[var(--color-feb-copper)] bg-[var(--color-white)] p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-bold text-[var(--color-ink)]">
                  {callout.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-[var(--color-muted-ink)]">
                  {callout.description}
                </p>
                {callout.quote ? (
                  <blockquote className="mt-4 border-t border-[var(--color-border)] pt-4 italic text-[var(--color-ink)]">
                    &ldquo;{callout.quote}&rdquo;
                    {callout.author ? (
                      <cite className="mt-2 block not-italic text-sm font-semibold text-[var(--color-feb-copper)]">
                        {callout.author}
                      </cite>
                    ) : null}
                  </blockquote>
                ) : null}
              </aside>
            ) : null}

            {/* Custom Children Slot */}
            {children ? <div className="mt-10">{children}</div> : null}

            {/* Related Resources Block */}
            {relatedResources && relatedResources.length > 0 ? (
              <div className="mt-14 border-t border-[var(--color-border)] pt-10">
                <h2 className="text-xl font-bold text-[var(--color-ink)]">
                  Informasi &amp; Tautan Terkait
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {relatedResources.map((resource) => (
                    <a
                      className="group block border border-[var(--color-border)] bg-[var(--color-white)] p-5 transition-colors duration-200 hover:border-[var(--color-unj-teal)]"
                      href={resource.href}
                      key={resource.title}
                    >
                      {resource.category ? (
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-feb-copper)]">
                          {resource.category}
                        </span>
                      ) : null}
                      <h3 className="mt-1 text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-unj-teal)]">
                        {resource.title}
                      </h3>
                      {resource.description ? (
                        <p className="mt-1 text-sm text-[var(--color-muted-ink)]">
                          {resource.description}
                        </p>
                      ) : null}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Sticky In-Page Navigation Sidebar */}
          {derivedNavItems.length > 0 ? (
            <div className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-28 space-y-6">
                <InPageNavigation items={derivedNavItems} />
              </div>
            </div>
          ) : null}
        </div>

        {/* Institutional CTA Banner */}
        {cta ? (
          <section className="mt-16 border border-[var(--color-border)] bg-[var(--color-white)] p-8 text-center sm:p-12">
            <BookOpen aria-hidden="true" className="mx-auto size-8 text-[var(--color-unj-teal)]" strokeWidth={1.5} />
            <h2 className="mt-4 text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
              {cta.title}
            </h2>
            {cta.description ? (
              <p className="mx-auto mt-2 max-w-xl text-base text-[var(--color-muted-ink)]">
                {cta.description}
              </p>
            ) : null}
            <div className="mt-6">
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[var(--color-unj-teal)] px-6 py-2.5 text-sm font-semibold text-[var(--color-white)] transition-colors duration-200 hover:bg-[var(--color-teal-deep)]"
                href={cta.href}
              >
                <span>{cta.label}</span>
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
              </a>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}
