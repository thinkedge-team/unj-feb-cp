import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ArticleDetail } from "@/features/information/article-detail"
import { EventDetail } from "@/features/information/event-detail"
import {
  getAllInformationSlugs,
  getInformationItem,
  getItemsForCategory,
  informationCategories,
  type InformationCategory,
} from "@/features/information/information-data"
import { createPageMetadata } from "@/lib/metadata"
import type { Event, NewsArticle } from "@/types/content"

type PageProps = Readonly<{
  params: Promise<{
    category: string
    slug: string
  }>
}>

export async function generateStaticParams(): Promise<{ category: string; slug: string }[]> {
  return getAllInformationSlugs().map((item) => ({
    category: item.category,
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params

  if (!informationCategories.includes(category as InformationCategory)) {
    return createPageMetadata({
      title: "Halaman Tidak Ditemukan",
      description: "Informasi yang Anda cari tidak ditemukan pada portal resmi FEB UNJ.",
      path: `/informasi/${category}/${slug}`,
      noIndex: true,
    })
  }

  const item = getInformationItem(category as InformationCategory, slug)

  if (!item) {
    return createPageMetadata({
      title: "Informasi Tidak Ditemukan",
      description: "Konten informasi tidak ditemukan pada repositori FEB UNJ.",
      path: `/informasi/${category}/${slug}`,
      noIndex: true,
    })
  }

  const description = "summary" in item ? item.summary : item.excerpt
  const image = "image" in item ? item.image : undefined

  return createPageMetadata({
    title: item.title,
    description,
    path: `/informasi/${category}/${slug}`,
    ogType: "article",
    image,
  })
}

export default async function InformationDetailPage({ params }: PageProps) {
  const { category, slug } = await params

  if (!informationCategories.includes(category as InformationCategory)) {
    notFound()
  }

  const item = getInformationItem(category as InformationCategory, slug)

  if (!item) {
    notFound()
  }

  if (category === "event") {
    const allEvents = getItemsForCategory("event") as readonly Event[]
    const related = allEvents.filter((e) => e.slug !== slug)
    return <EventDetail event={item as Event} relatedEvents={related} />
  }

  const allArticles = getItemsForCategory(category as InformationCategory) as readonly NewsArticle[]
  const related = allArticles.filter((a) => a.slug !== slug)

  return (
    <ArticleDetail
      article={item as NewsArticle}
      category={category as InformationCategory}
      relatedArticles={related}
    />
  )
}
