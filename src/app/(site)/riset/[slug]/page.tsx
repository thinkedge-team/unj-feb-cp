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

const RISET_SLUGS = ["penelitian", "publikasi", "pengabdian"] as const

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return RISET_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = landingPages.find((item) => item.slug === slug)

  if (!data) {
    return createPageMetadata({
      title: "Halaman Tidak Ditemukan",
      path: `/riset/${slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: `${data.title} - Riset`,
    description: data.summary,
    path: `/riset/${slug}`,
  })
}

export default async function RisetDetailPage({ params }: PageProps) {
  const { slug } = await params

  if (!RISET_SLUGS.includes(slug as (typeof RISET_SLUGS)[number])) {
    notFound()
  }

  const pageData = landingPages.find((item) => item.slug === slug)

  if (!pageData) {
    notFound()
  }

  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Riset", href: "/riset" },
        { label: pageData.title },
      ]}
      category={pageData.eyebrow}
      cta={{
        title: "Kemitraan Penelitian & Publikasi",
        description: "Hubungi Unit Pengelola Riset dan Pengabdian FEB UNJ untuk diskusi kerjasama dan pendanaan.",
        label: "Hubungi Unit Riset",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Berita Riset Terkini",
          href: "/informasi/berita",
          category: "Informasi",
          description: "Perkembangan riset dan inovasi terbaru sivitas akademika.",
        },
        {
          title: "Direktori Dosen",
          href: "/sdm/dosen",
          category: "SDM",
          description: "Jejaring kepakaran pengajar dan peneliti FEB UNJ.",
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
