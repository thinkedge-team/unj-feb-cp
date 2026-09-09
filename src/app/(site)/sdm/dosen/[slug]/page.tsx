import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { lecturers } from "@/data/lecturers"
import { LecturerDetail } from "@/features/directory/lecturer-detail"
import { getLecturer } from "@/lib/content"
import { createPageMetadata } from "@/lib/metadata"

type PageProps = Readonly<{
  params: Promise<{
    slug: string
  }>
}>

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return lecturers.map((lecturer) => ({
    slug: lecturer.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const lecturer = getLecturer(slug)

  if (!lecturer) {
    return createPageMetadata({
      title: "Dosen Tidak Ditemukan",
      description: "Profil dosen atau peneliti tidak ditemukan pada direktori FEB UNJ.",
      path: `/sdm/dosen/${slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: `${lecturer.name} - Profil Dosen`,
    description: `Profil akademik, riwayat pendidikan, kepakaran, publikasi riset, dan rekam jejak ${lecturer.name}, ${lecturer.title} pada program studi ${lecturer.homebase} FEB UNJ.`,
    path: `/sdm/dosen/${slug}`,
    ogType: "profile",
    image: lecturer.photo,
  })
}

export default async function LecturerDetailPage({ params }: PageProps) {
  const { slug } = await params
  const lecturer = getLecturer(slug)

  if (!lecturer) {
    notFound()
  }

  return <LecturerDetail lecturer={lecturer} />
}
