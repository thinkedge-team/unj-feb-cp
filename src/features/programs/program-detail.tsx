import { Mail } from "lucide-react"

import { ProfileCard } from "@/components/cards/profile-card"
import { degreeBadge } from "@/components/cards/study-program-card"
import type { MetadataItem } from "@/components/common/metadata-row"
import { DetailPageTemplate } from "@/components/templates/detail-page-template"
import type { Lecturer, StudyProgram } from "@/types/content"
import {
  ProgramAdvantagesSection,
  ProgramCareersSection,
  ProgramCurriculumSection,
  ProgramSidebarSlot,
  ProgramVisionMissionSection,
} from "./program-detail-sections"
import {
  getDegreeDuration,
  getDegreeTitle,
  getDepartment,
  getTotalCredits,
} from "./program-utils"

export type ProgramDetailProps = Readonly<{
  readonly program: StudyProgram
  readonly relatedLecturers?: readonly Lecturer[]
}>

export function ProgramDetail({ program, relatedLecturers = [] }: ProgramDetailProps) {
  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "Program Studi", href: "/program-studi" },
    { label: program.name },
  ] as const

  const duration = getDegreeDuration(program.degree)
  const totalSks = getTotalCredits(program.degree)
  const degreeTitle = getDegreeTitle(program.name, program.degree)
  const department = getDepartment(program.name)

  const metadataItems: readonly MetadataItem[] = [
    { label: "Jenjang Studi", value: degreeBadge(program.degree) || program.degree },
    { label: "Akreditasi", value: `Terakreditasi ${program.accreditation}` },
    { label: "Gelar Akademik", value: degreeTitle },
    { label: "Departemen", value: department },
    { label: "Masa Studi", value: duration },
    { label: "Beban SKS", value: totalSks },
    { label: "Bahasa Pengantar", value: "Bahasa Indonesia & Bahasa Inggris (Kelas Internasional)" },
    { label: "Kontak Prodi", value: program.contact },
  ]

  const relatedSection =
    relatedLecturers.length > 0 ? (
      <div>
        <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[var(--color-border)] pb-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Dosen Pengampu Program Studi
            </h2>
            <p className="mt-1 text-sm text-[var(--color-muted-ink)]">
              Tenaga pendidik dan peneliti berdedikasi pada {program.name}.
            </p>
          </div>
          <a
            className="text-sm font-semibold text-[var(--color-unj-teal)] hover:text-[var(--color-copper-deep)]"
            href="/sdm/dosen"
          >
            Semua Dosen &rarr;
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedLecturers.map((lecturer) => (
            <ProfileCard
              href={`/sdm/dosen/${lecturer.slug}`}
              key={lecturer.slug}
              profile={lecturer}
            />
          ))}
        </div>
      </div>
    ) : null

  return (
    <DetailPageTemplate
      breadcrumbs={breadcrumbs}
      eyebrow={`${program.degree} • Akreditasi ${program.accreditation}`}
      metadataItems={metadataItems}
      relatedContentSlot={relatedSection}
      sidebarSlot={<ProgramSidebarSlot program={program} />}
      summary={`Program ${program.name} Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta berkomitmen menghasilkan lulusan yang kompeten, berintegritas, serta berdaya saing global.`}
      title={program.name}
    >
      <ProgramAdvantagesSection program={program} />
      <ProgramVisionMissionSection program={program} />
      <ProgramCurriculumSection program={program} totalSks={totalSks} />
      <ProgramCareersSection program={program} />

      <section aria-label="Konsultasi program studi" className="border-t border-[var(--color-border)] pt-8">
        <div className="flex flex-col items-start justify-between gap-6 border border-[var(--color-border)] bg-[var(--color-teal-soft)] p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-ink)]">
              Butuh Informasi Lebih Lanjut Mengenai {program.name}?
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted-ink)]">
              Hubungi sekretariat program studi atau layanan terpadu akademik FEB UNJ.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-[var(--color-unj-teal)]">
              <Mail aria-hidden="true" className="size-4" />
              <span>{program.contact}</span>
            </div>
          </div>
          <a
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-sm bg-[var(--color-unj-teal)] px-6 py-2.5 text-sm font-semibold text-[var(--color-white)] transition-colors duration-200 hover:bg-[var(--color-teal-deep)]"
            href={`mailto:${program.contact}`}
          >
            Hubungi Program Studi
          </a>
        </div>
      </section>
    </DetailPageTemplate>
  )
}
