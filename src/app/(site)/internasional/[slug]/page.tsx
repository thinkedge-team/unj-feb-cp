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

const INTERNASIONAL_SLUGS = ["mobilitas", "program", "mitra"] as const

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return INTERNASIONAL_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = landingPages.find((item) => item.slug === slug)

  if (!data) {
    return createPageMetadata({
      title: "Halaman Tidak Ditemukan",
      path: `/internasional/${slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: `${data.title} - Program Internasional`,
    description: data.summary,
    path: `/internasional/${slug}`,
  })
}

export default async function InternasionalDetailPage({ params }: PageProps) {
  const { slug } = await params

  if (!INTERNASIONAL_SLUGS.includes(slug as (typeof INTERNASIONAL_SLUGS)[number])) {
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
        { label: "Internasional", href: "/internasional" },
        { label: pageData.title },
      ]}
      category={pageData.eyebrow}
      cta={{
        title: "Ingin Mendaftar Program Mobilitas Luar Negeri?",
        description: "Dapatkan bimbingan kurikulum dan persiapan administrasi pertukaran pelajar di International Office FEB UNJ.",
        label: "Hubungi International Office",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Kerjasama Kemitraan",
          href: "/kerjasama",
          category: "Kemitraan",
          description: "Jejaring kemitraan global dan dalam negeri.",
        },
        {
          title: "Program Beasiswa",
          href: "/kemahasiswaan/beasiswa",
          category: "Kemahasiswaan",
          description: "Bantuan pendanaan untuk awardee pertukaran internasional.",
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
