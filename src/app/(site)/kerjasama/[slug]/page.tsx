import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { landingPages } from "@/data/landing-pages"
import { createPageMetadata } from "@/lib/metadata"

type PageProps = Readonly<{
  params: Promise<{
    slug: string
  }>
}>

const KERJASAMA_SLUGS = ["dalam-negeri", "internasional", "dokumen", "dokumen-kerjasama"] as const

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return KERJASAMA_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const targetSlug = slug === "dokumen" ? "dokumen-kerjasama" : slug
  const data = landingPages.find((item) => item.slug === targetSlug)

  if (!data) {
    return createPageMetadata({
      title: "Halaman Tidak Ditemukan",
      path: `/kerjasama/${slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: `${data.title} - Kerjasama`,
    description: data.summary,
    path: `/kerjasama/${slug}`,
  })
}

export default async function KerjasamaDetailPage({ params }: PageProps) {
  const { slug } = await params

  if (!KERJASAMA_SLUGS.includes(slug as (typeof KERJASAMA_SLUGS)[number])) {
    notFound()
  }

  const targetSlug = slug === "dokumen" ? "dokumen-kerjasama" : slug
  const pageData = landingPages.find((item) => item.slug === targetSlug)

  if (!pageData) {
    notFound()
  }

  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Kerjasama", href: "/kerjasama" },
        { label: pageData.title },
      ]}
      category={pageData.eyebrow}
      cta={{
        title: "Ingin Mengajukan Kerjasama Institusi?",
        description: "Hubungi Subbagian Kerjasama FEB UNJ untuk panduan penyusunan naskah MoU atau MoA.",
        label: "Hubungi Unit Kerjasama",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Daftar Mitra Strategis",
          href: "/kerjasama#mitra-strategis",
          category: "Kerjasama",
          description: "Lihat portofolio mitra perbankan dan industri FEB UNJ.",
        },
        {
          title: "Program Internasional",
          href: "/internasional",
          category: "Internasional",
          description: "Peluang mobilitas dan jejaring universitas global.",
        },
      ]}
      sections={pageData.sections.map((section) => ({
        heading: section.heading,
        body: section.body,
      }))}
      summary={pageData.summary}
      title={pageData.title}
    />
  )
}
