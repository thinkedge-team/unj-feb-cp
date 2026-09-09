"use client"

import { useState } from "react"
import { Check, Clock3, Share2, Tag, User } from "lucide-react"

import { NewsCard } from "@/components/cards/news-card"
import type { MetadataItem } from "@/components/common/metadata-row"
import { DetailPageTemplate } from "@/components/templates/detail-page-template"
import { Button } from "@/components/ui/button"
import {
  getInformationCategoryMeta,
  type InformationCategory,
} from "@/features/information/information-data"
import type { NewsArticle } from "@/types/content"

export type ArticleDetailProps = Readonly<{
  readonly article: NewsArticle
  readonly category?: InformationCategory
  readonly relatedArticles?: readonly NewsArticle[]
}>

export function ArticleDetail({
  article,
  category = "berita",
  relatedArticles = [],
}: ArticleDetailProps) {
  const [isCopied, setIsCopied] = useState(false)
  const meta = getInformationCategoryMeta(category)

  const dateFormatted = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(article.publishedAt))

  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "Informasi", href: "/informasi/berita" },
    { label: meta.singularLabel, href: `/informasi/${category}` },
    { label: article.title },
  ] as const

  const metadataItems: readonly MetadataItem[] = [
    { label: "Kategori", value: article.category },
    { label: "Tanggal Terbit", value: dateFormatted },
    { label: "Waktu Baca", value: `${article.readingMinutes} menit baca` },
    { label: "Penerbit", value: "Humas & Redaksi FEB UNJ" },
  ]

  const tags = [
    article.category,
    "FEB UNJ",
    "Pendidikan Tinggi",
    "Transformasi Akademik",
  ]

  function handleShare() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      void navigator.clipboard.writeText(window.location.href)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3000)
    } else {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3000)
    }
  }

  const featuredMedia = (
    <figure className="m-0">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-teal-mist)]">
        <img
          alt={`Foto dokumentasi ${article.title}`}
          className="size-full object-cover"
          height="675"
          src={article.image || "/images/news/placeholder-campus.jpg"}
          width="1200"
        />
      </div>
      <figcaption className="border-t border-[var(--color-border)] bg-[var(--color-white)] px-4 py-3 text-xs italic text-[var(--color-muted-ink)]">
        Dokumentasi resmi liputan akademik Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.
      </figcaption>
    </figure>
  )

  const relatedSection =
    relatedArticles.length > 0 ? (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              {meta.singularLabel} Terkait
            </h2>
            <p className="mt-1 text-sm text-[var(--color-muted-ink)]">
              Rekomendasi bacaan seputar {article.category.toLowerCase()} dan agenda fakultas.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.slice(0, 3).map((item) => (
            <NewsCard
              article={item}
              href={`/informasi/${category}/${item.slug}`}
              key={item.slug}
            />
          ))}
        </div>
      </div>
    ) : null

  return (
    <DetailPageTemplate
      breadcrumbs={breadcrumbs}
      eyebrow={article.category}
      featuredMedia={featuredMedia}
      metadataItems={metadataItems}
      relatedContentSlot={relatedSection}
      sidebarSlot={
        <div className="space-y-6">
          <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6">
            <h3 className="text-base font-bold text-[var(--color-ink)]">
              Bagikan Artikel
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-ink)]">
              Sebarkan informasi dan wawasan akademik ini ke jejaring profesional Anda.
            </p>
            <div className="mt-4">
              <Button
                className="w-full justify-center gap-2"
                onClick={handleShare}
                variant="primary"
              >
                {isCopied ? (
                  <>
                    <Check aria-hidden="true" className="size-4" />
                    <span>Tautan Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 aria-hidden="true" className="size-4" />
                    <span>Salin Tautan</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6">
            <h3 className="text-base font-bold text-[var(--color-ink)]">
              Topik Terkait
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  className="inline-flex items-center gap-1 rounded-sm bg-[var(--color-limestone)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted-ink)]"
                  key={tag}
                >
                  <Tag aria-hidden="true" className="size-3 text-[var(--color-unj-teal)]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      }
      summary={article.excerpt}
      title={article.title}
    >
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-4 border-b border-[var(--color-border)] pb-6 text-sm text-[var(--color-muted-ink)]">
          <span className="flex items-center gap-1.5 font-medium text-[var(--color-ink)]">
            <User aria-hidden="true" className="size-4 text-[var(--color-unj-teal)]" />
            Tim Redaksi FEB UNJ
          </span>
          <span aria-hidden="true">•</span>
          <time dateTime={article.publishedAt}>{dateFormatted}</time>
          <span aria-hidden="true">•</span>
          <span className="flex items-center gap-1.5">
            <Clock3 aria-hidden="true" className="size-4 text-[var(--color-muted)]" />
            {article.readingMinutes} menit baca
          </span>
        </div>

        <div className="prose max-w-none space-y-6 text-base leading-relaxed text-[var(--color-ink)] sm:text-lg">
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <blockquote className="border-l-4 border-[var(--color-feb-copper)] bg-[var(--color-white)] p-6 text-lg italic text-[var(--color-ink)] sm:text-xl">
          "{article.excerpt}"
          <footer className="mt-3 text-xs not-italic font-semibold uppercase tracking-wider text-[var(--color-feb-copper)]">
            Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta
          </footer>
        </blockquote>

        <div className="border-t border-[var(--color-border)] pt-6">
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            Kanal Informasi Resmi:
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted-ink)]">
            Seluruh rilis dan pemberitaan resmi dipublikasikan melalui Biro Humas dan Sistem Informasi Terpadu FEB UNJ.
          </p>
        </div>
      </div>
    </DetailPageTemplate>
  )
}
