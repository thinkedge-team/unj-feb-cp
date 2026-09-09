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

const KEMAHASISWAAN_SLUGS = [
  "beasiswa",
  "organisasi",
  "prestasi",
  "prestasi-mahasiswa",
  "karya-mahasiswa",
  "karya",
] as const

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return KEMAHASISWAAN_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const targetSlug =
    slug === "karya"
      ? "karya-mahasiswa"
      : slug === "prestasi"
      ? "prestasi-mahasiswa"
      : slug
  const data = landingPages.find((item) => item.slug === targetSlug)

  if (!data) {
    return createPageMetadata({
      title: "Halaman Tidak Ditemukan",
      path: `/kemahasiswaan/${slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: `${data.title} - Kemahasiswaan`,
    description: data.summary,
    path: `/kemahasiswaan/${slug}`,
  })
}

export default async function KemahasiswaanDetailPage({ params }: PageProps) {
  const { slug } = await params

  if (!KEMAHASISWAAN_SLUGS.includes(slug as (typeof KEMAHASISWAAN_SLUGS)[number])) {
    notFound()
  }

  const targetSlug =
    slug === "karya"
      ? "karya-mahasiswa"
      : slug === "prestasi"
      ? "prestasi-mahasiswa"
      : slug
  const pageData = landingPages.find((item) => item.slug === targetSlug)

  if (!pageData) {
    notFound()
  }

  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Kemahasiswaan", href: "/kemahasiswaan" },
        { label: pageData.title },
      ]}
      category={pageData.eyebrow}
      cta={{
        title: "Punya Ide Inovasi atau Butuh Pembinaan Ormawa?",
        description: "Konsultasikan kegiatan organisasi dan program kreativitas Anda dengan Tim Kemahasiswaan FEB UNJ.",
        label: "Hubungi Kemahasiswaan",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Informasi Beasiswa",
          href: "/kemahasiswaan/beasiswa",
          category: "Kemahasiswaan",
          description: "Peluang bantuan pendidikan dan beasiswa prestasi.",
        },
        {
          title: "Prestasi Mahasiswa",
          href: "/kemahasiswaan/prestasi",
          category: "Kemahasiswaan",
          description: "Capaian mahasiswa FEB UNJ di kancah nasional dan dunia.",
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
