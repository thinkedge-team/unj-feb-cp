import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { lecturers } from "@/data/lecturers"
import { studyPrograms } from "@/data/study-programs"
import { ProgramDetail } from "@/features/programs/program-detail"
import { ProgramListing } from "@/features/programs/program-listing"
import { getStudyProgram } from "@/lib/content"
import { createPageMetadata } from "@/lib/metadata"
import type { DegreeLevel, Lecturer, StudyProgram } from "@/types/content"

type PageProps = Readonly<{
  params: Promise<{
    slug: string
  }>
}>

const DEGREE_MAP: Record<string, DegreeLevel> = {
  doktor: "Doktor",
  magister: "Magister",
  sarjana: "Sarjana",
  "sarjana-terapan": "Sarjana Terapan",
  diploma: "Diploma",
}

function getRelatedLecturers(program: StudyProgram): readonly Lecturer[] {
  const progName = program.name.toLowerCase()
  const progSlug = program.slug.toLowerCase()

  const matched = lecturers.filter((lecturer) => {
    const homebase = lecturer.homebase.toLowerCase()
    return (
      progName.includes(homebase) ||
      homebase.includes(progName) ||
      progSlug.includes(lecturer.slug) ||
      (homebase === "akuntansi" && progName.includes("akuntansi")) ||
      (homebase === "manajemen" && progName.includes("manajemen")) ||
      (homebase === "pendidikan ekonomi" && progName.includes("pendidikan ekonomi")) ||
      (homebase === "bisnis digital" && progName.includes("bisnis digital")) ||
      (homebase.includes("logistik") && progName.includes("logistik")) ||
      (homebase.includes("perbankan") && progName.includes("perbankan")) ||
      (homebase.includes("perkantoran") && progName.includes("perkantoran")) ||
      (homebase.includes("pemasaran") && progName.includes("pemasaran"))
    )
  })

  if (matched.length > 0) {
    return matched.slice(0, 3)
  }

  return lecturers.slice(0, 3)
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const degreeParams = Object.keys(DEGREE_MAP).map((slug) => ({
    slug,
  }))
  const programParams = studyPrograms.map((program) => ({
    slug: program.slug,
  }))

  return [...degreeParams, ...programParams]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  if (DEGREE_MAP[slug]) {
    const degreeName = DEGREE_MAP[slug]
    return createPageMetadata({
      title: `Program Studi Jenjang ${degreeName}`,
      description: `Daftar program studi jenjang ${degreeName} di Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.`,
      path: `/program-studi/${slug}`,
    })
  }

  const program = getStudyProgram(slug)

  if (!program) {
    return createPageMetadata({
      title: "Program Studi Tidak Ditemukan",
      path: `/program-studi/${slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: program.name,
    description: `${program.name} Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta. ${program.vision}`,
    path: `/program-studi/${slug}`,
  })
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params

  if (DEGREE_MAP[slug]) {
    const degree = DEGREE_MAP[slug]
    return <ProgramListing initialDegree={degree} programs={studyPrograms} />
  }

  const program = getStudyProgram(slug)

  if (!program) {
    notFound()
  }

  const relatedLecturers = getRelatedLecturers(program)

  return <ProgramDetail program={program} relatedLecturers={relatedLecturers} />
}
