"use client"

import { useState } from "react"

import { DetailPageTemplate } from "@/components/templates/detail-page-template"
import {
  LecturerAcademicContent,
  LecturerProfileHeader,
  LecturerSidebar,
} from "@/features/directory/lecturer-sections"
import type { Lecturer } from "@/types/content"

export type LecturerDetailProps = Readonly<{
  readonly lecturer: Lecturer
}>

export function LecturerDetail({ lecturer }: LecturerDetailProps) {
  const [cvDownloaded, setCvDownloaded] = useState(false)

  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "SDM", href: "/sdm/dosen" },
    { label: "Dosen", href: "/sdm/dosen" },
    { label: lecturer.name },
  ] as const

  const metadataItems = [
    { label: "NIDN", value: `NIDN ${lecturer.nidn}` },
    { label: "Jabatan Fungsional", value: lecturer.title },
    { label: "Status Ikatan Kerja", value: "Dosen Tetap PNS / ASN" },
    { label: "Program Studi", value: lecturer.homebase },
    { label: "Email Resmi", value: `${lecturer.slug}@unj.ac.id` },
    { label: "Lokasi Kantor", value: "Gedung M, FEB Kampus A UNJ Rawamangun" },
  ] as const

  function handleDownloadCv() {
    setCvDownloaded(true)
    setTimeout(() => {
      setCvDownloaded(false)
    }, 4000)
  }

  return (
    <DetailPageTemplate
      breadcrumbs={breadcrumbs}
      eyebrow={`SDM FEB UNJ • ${lecturer.title}`}
      featuredMedia={<LecturerProfileHeader lecturer={lecturer} />}
      metadataItems={metadataItems}
      sidebarSlot={
        <LecturerSidebar
          cvDownloaded={cvDownloaded}
          lecturer={lecturer}
          onDownloadCv={handleDownloadCv}
        />
      }
      summary={`${lecturer.name} adalah ${lecturer.title} pada program studi ${lecturer.homebase} Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta dengan fokus kepakaran dalam ${lecturer.expertise.join(", ")}.`}
      title={lecturer.name}
    >
      <LecturerAcademicContent lecturer={lecturer} />
    </DetailPageTemplate>
  )
}

