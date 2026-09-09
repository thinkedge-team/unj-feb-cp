import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { landingPages } from "@/data/landing-pages"
import {
  FasilitasSection,
  PimpinanSection,
  SejarahSection,
} from "@/features/profile/profile-custom-sections"
import { createPageMetadata } from "@/lib/metadata"

type PageProps = Readonly<{
  params: Promise<{
    slug: string
  }>
}>

const PROFIL_SLUGS = [
  "tentang-feb",
  "sejarah",
  "visi-misi-tujuan",
  "visi-misi",
  "struktur-organisasi",
  "pimpinan",
  "prestasi",
  "fasilitas",
] as const

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return PROFIL_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const targetSlug = slug === "visi-misi" ? "visi-misi-tujuan" : slug
  const data = landingPages.find((item) => item.slug === targetSlug)

  if (!data) {
    return createPageMetadata({
      title: "Halaman Tidak Ditemukan",
      path: `/profil/${slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: `${data.title} - Profil`,
    description: data.summary,
    path: `/profil/${slug}`,
  })
}

export default async function ProfilDetailPage({ params }: PageProps) {
  const { slug } = await params

  if (!PROFIL_SLUGS.includes(slug as (typeof PROFIL_SLUGS)[number])) {
    notFound()
  }

  // Canonicalize slug alias if needed
  const targetSlug = slug === "visi-misi" ? "visi-misi-tujuan" : slug
  const pageData = landingPages.find((item) => item.slug === targetSlug)

  if (!pageData) {
    notFound()
  }

  const isPimpinan = slug === "pimpinan"
  const isFasilitas = slug === "fasilitas"
  const isSejarah = slug === "sejarah"

  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Profil", href: "/profil" },
        { label: pageData.title },
      ]}
      category={pageData.eyebrow}
      cta={{
        title: "Punya Pertanyaan Mengenai FEB UNJ?",
        description:
          "Hubungi tim humas dan layanan terpadu fakultas untuk konsultasi dan informasi lebih lanjut.",
        label: "Hubungi Kami",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Program Studi",
          href: "/program-studi",
          category: "Akademik",
          description: "Jelajahi program sarjana, magister, dan doktor FEB UNJ.",
        },
        {
          title: "Direktori Dosen",
          href: "/sdm/dosen",
          category: "SDM",
          description: "Daftar pengajar berkualifikasi dan kepakaran riset di FEB UNJ.",
        },
      ]}
      sections={pageData.sections.map((section) => ({
        heading: section.heading,
        body: section.body,
      }))}
      summary={pageData.summary}
      title={pageData.title}
    >
      {isPimpinan ? <PimpinanSection /> : null}
      {isFasilitas ? <FasilitasSection /> : null}
      {isSejarah ? <SejarahSection /> : null}
    </LandingPageTemplate>
  )
}
