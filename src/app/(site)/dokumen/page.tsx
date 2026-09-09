import type { Metadata } from "next"

import { documents } from "@/data/documents"
import { DocumentListing } from "@/features/information/document-listing"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Repositori Dokumen Publik & Akademik",
  description:
    "Pusat unduhan berkas resmi, pedoman akademik, kalender perkuliahan, kode etik, dan formulir layanan administrasi FEB UNJ.",
  path: "/dokumen",
})

export default function DocumentRepositoryPage() {
  return <DocumentListing documents={documents} />
}
