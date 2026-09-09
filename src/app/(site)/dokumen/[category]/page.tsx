import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { documents } from "@/data/documents"
import { DocumentListing } from "@/features/information/document-listing"
import { createPageMetadata } from "@/lib/metadata"

type PageProps = Readonly<{
  params: Promise<{
    category: string
  }>
}>

const VALID_DOC_CATEGORIES = [
  "publik",
  "unduhan",
  "akademik",
  "kemahasiswaan",
] as const

type DocCategory = (typeof VALID_DOC_CATEGORIES)[number]

const CATEGORY_META: Record<
  DocCategory,
  { title: string; description: string; filterCategory: string }
> = {
  publik: {
    title: "Dokumen Publik & Keterbukaan Informasi",
    description:
      "Akses dokumen publik, laporan kinerja, regulasi, dan transparansi kelembagaan Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.",
    filterCategory: "Semua",
  },
  unduhan: {
    title: "Pusat Unduhan Berkas & Panduan",
    description:
      "Unduh formulir permohonan akademik, buku panduan perkuliahan, pedoman skripsi, dan berkas kemahasiswaan FEB UNJ.",
    filterCategory: "Semua",
  },
  akademik: {
    title: "Dokumen & Panduan Akademik",
    description:
      "Kumpulan buku pedoman kurikulum, formulir surat aktif kuliah, dan SOP perkuliahan FEB UNJ.",
    filterCategory: "Akademik",
  },
  kemahasiswaan: {
    title: "Dokumen & Panduan Kemahasiswaan",
    description:
      "Pedoman organisasi kemahasiswaan, panduan MBKM, dan panduan beasiswa mahasiswa FEB UNJ.",
    filterCategory: "Kemahasiswaan",
  },
}

export async function generateStaticParams(): Promise<{ category: string }[]> {
  return VALID_DOC_CATEGORIES.map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params

  if (!VALID_DOC_CATEGORIES.includes(category as DocCategory)) {
    return createPageMetadata({
      title: "Kategori Dokumen Tidak Ditemukan",
      path: `/dokumen/${category}`,
      noIndex: true,
    })
  }

  const meta = CATEGORY_META[category as DocCategory]
  return createPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/dokumen/${category}`,
  })
}

export default async function DocumentCategoryPage({ params }: PageProps) {
  const { category } = await params

  if (!VALID_DOC_CATEGORIES.includes(category as DocCategory)) {
    notFound()
  }

  const config = CATEGORY_META[category as DocCategory]

  return (
    <DocumentListing
      documents={documents}
      initialCategory={config.filterCategory}
    />
  )
}
