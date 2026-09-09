import type { Metadata } from "next"

import { studyPrograms } from "@/data/study-programs"
import { ProgramListing } from "@/features/programs/program-listing"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Daftar Program Studi",
  description:
    "Temukan 21 program studi unggul jenjang Diploma, Sarjana, Sarjana Terapan, Magister, dan Doktor di Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.",
  path: "/program-studi",
})

export default function ProgramStudiPage() {
  return <ProgramListing programs={studyPrograms} />
}
