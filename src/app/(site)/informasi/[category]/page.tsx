import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getInformationCategoryMeta,
  getItemsForCategory,
  informationCategories,
  type InformationCategory,
} from "@/features/information/information-data"
import { InformationListing } from "@/features/information/information-listing"
import { createPageMetadata } from "@/lib/metadata"

type PageProps = Readonly<{
  params: Promise<{
    category: string
  }>
}>

export async function generateStaticParams(): Promise<{ category: string }[]> {
  return informationCategories.map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params

  if (!informationCategories.includes(category as InformationCategory)) {
    return createPageMetadata({
      title: "Kategori Informasi Tidak Ditemukan",
      description: "Kategori informasi yang Anda tuju tidak ditemukan pada portal FEB UNJ.",
      path: `/informasi/${category}`,
      noIndex: true,
    })
  }

  const meta = getInformationCategoryMeta(category as InformationCategory)

  return createPageMetadata({
    title: meta.title,
    description: meta.subtitle,
    path: `/informasi/${category}`,
  })
}

export default async function InformationCategoryPage({ params }: PageProps) {
  const { category } = await params

  if (!informationCategories.includes(category as InformationCategory)) {
    notFound()
  }

  const items = getItemsForCategory(category as InformationCategory)

  return (
    <InformationListing
      category={category as InformationCategory}
      items={items}
    />
  )
}
