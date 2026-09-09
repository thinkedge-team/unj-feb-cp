import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { lecturers } from "@/data/lecturers"
import {
  type SDMCategory,
  validCategories,
} from "@/data/sdm-categories"
import { staff } from "@/data/staff"
import {
  EmeritusView,
  PractitionersView,
  SenatView,
} from "@/features/directory/sdm-views"
import { StaffListing } from "@/features/directory/staff-listing"
import { createPageMetadata } from "@/lib/metadata"

type PageProps = Readonly<{
  params: Promise<{
    category: string
  }>
}>

export async function generateStaticParams(): Promise<{ category: string }[]> {
  return validCategories.map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params

  switch (category) {
    case "tenaga-kependidikan":
    case "tendik":
      return createPageMetadata({
        title: "Tenaga Kependidikan & Staf Administrasi",
        description:
          "Direktori staf kependidikan, pengelola akademik, keuangan, laboratorium, dan layanan kemahasiswaan FEB UNJ.",
        path: `/sdm/${category}`,
      })
    case "dosen-praktisi":
      return createPageMetadata({
        title: "Dosen Praktisi & Pakar Industri",
        description:
          "Pakar industri dan praktisi profesional yang berkontribusi dalam pengajaran berbasis studi kasus nyata di FEB UNJ.",
        path: `/sdm/${category}`,
      })
    case "senat":
      return createPageMetadata({
        title: "Senat Fakultas Ekonomi dan Bisnis",
        description:
          "Badan normatif dan perwakilan akademik tertinggi di lingkungan Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.",
        path: `/sdm/${category}`,
      })
    case "dosen-purnabakti":
      return createPageMetadata({
        title: "Dosen Purnabakti & Guru Besar Emeritus",
        description:
          "Apresiasi dan dedikasi guru besar serta dosen purnabakti yang telah membangun fondasi keunggulan akademik FEB UNJ.",
        path: `/sdm/${category}`,
      })
    default:
      return createPageMetadata({
        title: "Kategori SDM Tidak Ditemukan",
        path: `/sdm/${category}`,
        noIndex: true,
      })
  }
}

export default async function SDMCategoryPage({ params }: PageProps) {
  const { category } = await params

  if (!validCategories.includes(category as SDMCategory)) {
    notFound()
  }

  if (category === "tenaga-kependidikan" || category === "tendik") {
    return <StaffListing staffMembers={staff} />
  }

  if (category === "dosen-praktisi") {
    return <PractitionersView />
  }

  if (category === "senat") {
    const senatProfessors = lecturers.filter((l) => l.title.includes("Guru Besar"))
    return <SenatView senatProfessors={senatProfessors} />
  }

  return <EmeritusView />
}
