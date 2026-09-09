import type { Metadata } from "next"

import { lecturers } from "@/data/lecturers"
import { LecturerListing } from "@/features/directory/lecturer-listing"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Direktori Dosen & Peneliti",
  description:
    "Direktori lengkap dosen, guru besar, dan peneliti Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.",
  path: "/sdm/dosen",
})

export default function LecturerDirectoryPage() {
  return <LecturerListing lecturers={lecturers} />
}
