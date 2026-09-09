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

const LAYANAN_SLUGS = [
  "ppid",
  "zona-integritas",
  "layanan-fakultas",
  "fakultas",
] as const

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return LAYANAN_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const targetSlug = slug === "fakultas" ? "layanan-fakultas" : slug
  const data = landingPages.find((item) => item.slug === targetSlug)

  if (!data) {
    return createPageMetadata({
      title: "Halaman Tidak Ditemukan",
      path: `/layanan/${slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: `${data.title} - Layanan`,
    description: data.summary,
    path: `/layanan/${slug}`,
  })
}

export default async function LayananDetailPage({ params }: PageProps) {
  const { slug } = await params

  if (!LAYANAN_SLUGS.includes(slug as (typeof LAYANAN_SLUGS)[number])) {
    notFound()
  }

  const targetSlug = slug === "fakultas" ? "layanan-fakultas" : slug
  const pageData = landingPages.find((item) => item.slug === targetSlug)

  if (!pageData) {
    notFound()
  }

  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/layanan" },
        { label: pageData.title },
      ]}
      category={pageData.eyebrow}
      cta={{
        title: "Membutuhkan Informasi atau Pengaduan Layanan?",
        description: "Layanan Terpadu FEB UNJ siap menindaklanjuti permohonan informasi dan masukan Anda.",
        label: "Hubungi Layanan",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Dokumen Publik",
          href: "/dokumen/publik",
          category: "Dokumen",
          description: "Akses laporan akuntabilitas kinerja dan data publik.",
        },
        {
          title: "Pusat Kontak",
          href: "/kontak",
          category: "Kontak",
          description: "Lokasi kantor, nomor telepon, dan jam operasional.",
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
