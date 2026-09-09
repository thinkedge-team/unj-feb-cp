import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Compass,
  Download,
  School,
  Sparkles,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { StudyProgram } from "@/types/content"

export function ProgramAdvantagesSection({
  program,
}: Readonly<{ program: StudyProgram }>) {
  return (
    <section aria-labelledby="section-overview" className="space-y-4">
      <h2 className="text-2xl font-bold text-[var(--color-ink)]" id="section-overview">
        Keunggulan Program
      </h2>
      <p className="text-base leading-relaxed text-[var(--color-muted-ink)]">
        Program studi {program.name} dirancang untuk menjawab dinamika industri modern dan tantangan transformasi digital melalui kurikulum berbasis luaran (Outcome-Based Education) yang adaptif dan komprehensif.
      </p>

      <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
        <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 aria-hidden="true" className="size-5 text-[var(--color-unj-teal)]" />
            <h3 className="text-base font-bold text-[var(--color-ink)]">Kurikulum Relevan &amp; Berbasis OBE</h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
            Pembelajaran mengintegrasikan teori mutakhir, studi kasus riil, dan analitika data untuk pemecahan masalah bisnis.
          </p>
        </div>

        <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-5">
          <div className="flex items-center gap-3">
            <Users aria-hidden="true" className="size-5 text-[var(--color-unj-teal)]" />
            <h3 className="text-base font-bold text-[var(--color-ink)]">Dosen Berkualifikasi Unggul</h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
            Didukung oleh Guru Besar, Doktor lulusan perguruan tinggi terkemuka, serta dosen praktisi bersertifikasi industri.
          </p>
        </div>

        <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-5">
          <div className="flex items-center gap-3">
            <Briefcase aria-hidden="true" className="size-5 text-[var(--color-unj-teal)]" />
            <h3 className="text-base font-bold text-[var(--color-ink)]">Kemitraan &amp; Magang Industri</h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
            Jejaring mitra luas dengan BUMN, korporasi multinasional, kementerian, dan asosiasi profesi untuk magang dan riset.
          </p>
        </div>

        <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-5">
          <div className="flex items-center gap-3">
            <Award aria-hidden="true" className="size-5 text-[var(--color-unj-teal)]" />
            <h3 className="text-base font-bold text-[var(--color-ink)]">Akreditasi {program.accreditation}</h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
            Pengakuan standar mutu nasional dan persiapan sertifikasi internasional untuk menjamin daya saing lulusan.
          </p>
        </div>
      </div>
    </section>
  )
}

export function ProgramVisionMissionSection({
  program,
}: Readonly<{ program: StudyProgram }>) {
  return (
    <section aria-labelledby="section-vision-mission" className="border-t border-[var(--color-border)] pt-8 space-y-4">
      <div className="flex items-center gap-2 text-[var(--color-unj-teal)]">
        <Compass aria-hidden="true" className="size-6" />
        <h2 className="text-2xl font-bold text-[var(--color-ink)]" id="section-vision-mission">
          Visi &amp; Misi Program Studi
        </h2>
      </div>

      <div className="border-l-4 border-[var(--color-unj-teal)] bg-[var(--color-white)] p-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-ink)]">Visi</h3>
        <p className="mt-2 font-sans text-base font-medium text-slate-800">
          {program.vision}
        </p>
      </div>

      <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-ink)]">Misi</h3>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[var(--color-ink)]">
          {program.mission.map((item, index) => (
            <li key={index} className="pl-1">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function ProgramCurriculumSection({
  program,
  totalSks,
}: Readonly<{ program: StudyProgram; totalSks: string }>) {
  return (
    <section aria-labelledby="section-curriculum" className="border-t border-[var(--color-border)] pt-8 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[var(--color-unj-teal)]">
          <BookOpen aria-hidden="true" className="size-6" />
          <h2 className="text-2xl font-bold text-[var(--color-ink)]" id="section-curriculum">
            Struktur Kurikulum
          </h2>
        </div>
        <Badge variant="quiet">{totalSks}</Badge>
      </div>
      <p className="text-sm leading-relaxed text-[var(--color-muted-ink)]">
        Kurikulum dirancang bertahap untuk membangun landasan konseptual, keterampilan analitis, hingga riset terapan dan pengalaman profesional.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {program.curriculum.map((semesterCourses, index) => {
          const semesterNumber = index + 1
          return (
            <div
              className="border border-[var(--color-border)] bg-[var(--color-white)] p-5 transition-colors duration-150 hover:border-[var(--color-unj-teal)]"
              key={`semester-${semesterNumber}`}
            >
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2">
                <h3 className="text-sm font-bold text-[var(--color-unj-teal)]">
                  Semester {semesterNumber}
                </h3>
                <span className="text-xs text-[var(--color-muted-ink)]">Paket Inti</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink)]">
                {semesterCourses.map((course, courseIndex) => (
                  <li className="flex items-start gap-2" key={`course-${courseIndex}`}>
                    <span aria-hidden="true" className="text-[var(--color-feb-copper)] font-bold">&bull;</span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function ProgramCareersSection({
  program,
}: Readonly<{ program: StudyProgram }>) {
  return (
    <section aria-labelledby="section-career" className="border-t border-[var(--color-border)] pt-8 space-y-4">
      <div className="flex items-center gap-2 text-[var(--color-unj-teal)]">
        <Briefcase aria-hidden="true" className="size-6" />
        <h2 className="text-2xl font-bold text-[var(--color-ink)]" id="section-career">
          Prospek Karir &amp; Peluang Kerja
        </h2>
      </div>
      <p className="text-sm leading-relaxed text-[var(--color-muted-ink)]">
        Lulusan program studi ini dipersiapkan untuk mengisi berbagai peran strategis pada sektor publik, korporasi swasta, perbankan, konsultan, maupun wirausaha mandiri:
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {program.careerProspects.map((career, index) => (
          <div
            className="flex items-start gap-3 border border-[var(--color-border)] bg-[var(--color-white)] p-4"
            key={index}
          >
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[var(--color-feb-copper)]" />
            <div>
              <h3 className="text-sm font-bold text-[var(--color-ink)]">{career}</h3>
              <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
                Peran profesional pada lembaga publik, institusi riset, dan dunia usaha.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ProgramSidebarSlot({
  program,
}: Readonly<{ program: StudyProgram }>) {
  return (
    <div className="space-y-6">
      <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-sm">
        <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--color-ink)]">
          <Sparkles aria-hidden="true" className="size-5 text-[var(--color-feb-copper)]" />
          Penerimaan Mahasiswa
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-ink)]">
          Pendaftaran dibuka melalui jalur Nasional (SNBP &amp; SNBT) serta Jalur Mandiri Penmaba UNJ.
        </p>
        <a
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-[var(--color-feb-copper)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--color-white)] transition-colors duration-200 hover:bg-[var(--color-copper-deep)]"
          href="https://penmaba.unj.ac.id"
          rel="noopener noreferrer"
          target="_blank"
        >
          Informasi Pendaftaran
        </a>
      </div>

      <div className="border border-[var(--color-border)] bg-[var(--color-teal-soft)] p-6">
        <h3 className="flex items-center gap-2 text-base font-bold text-[var(--color-unj-teal)]">
          <Download aria-hidden="true" className="size-5" />
          Dokumen Akademik
        </h3>
        <p className="mt-2 text-sm text-[var(--color-muted-ink)]">
          Unduh kurikulum lengkap, pedoman akademik, dan RPS mata kuliah program studi ini.
        </p>
        <a
          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-unj-teal)] hover:text-[var(--color-teal-deep)]"
          href="/dokumen/unduhan"
        >
          <span>Pusat Unduhan FEB</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6">
        <h3 className="flex items-center gap-2 text-base font-bold text-[var(--color-ink)]">
          <School aria-hidden="true" className="size-5 text-[var(--color-unj-teal)]" />
          Lokasi Kampus
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-ink)]">
          Gedung M &amp; Gedung R Kampus A UNJ, Jl. Rawamangun Muka, Jakarta Timur.
        </p>
      </div>
    </div>
  )
}
