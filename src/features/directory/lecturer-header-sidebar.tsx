import {
  Calendar,
  CheckCircle,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Lecturer } from "@/types/content"

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((part) => !part.endsWith("."))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
}

export function LecturerProfileHeader({
  lecturer,
}: Readonly<{ readonly lecturer: Lecturer }>) {
  return (
    <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
      <div className="flex size-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-[var(--color-feb-copper)] bg-[var(--color-teal-mist)] font-sans text-2xl font-bold text-[var(--color-unj-teal)] shadow-md">
        {lecturer.photo ? (
          <img
            alt={`Foto ${lecturer.name}`}
            className="size-full object-cover"
            height="128"
            src={lecturer.photo}
            width="128"
          />
        ) : (
          getInitials(lecturer.name)
        )}
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="primary">{lecturer.role}</Badge>
          <Badge variant="quiet">{lecturer.homebase}</Badge>
          <Badge variant="secondary">NIDN {lecturer.nidn}</Badge>
        </div>
        <h2 className="text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
          {lecturer.name}
        </h2>
        <p className="text-base font-medium text-[var(--color-muted-ink)]">
          Fakultas Ekonomi dan Bisnis &bull; Universitas Negeri Jakarta
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {lecturer.expertise.map((exp) => (
            <span
              className="inline-flex items-center rounded-sm bg-[var(--color-teal-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--color-unj-teal)]"
              key={exp}
            >
              {exp}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function LecturerSidebar({
  cvDownloaded,
  lecturer,
  onDownloadCv,
}: Readonly<{
  readonly lecturer: Lecturer
  readonly cvDownloaded: boolean
  readonly onDownloadCv: () => void
}>) {
  return (
    <div className="space-y-6">
      <section
        aria-label="Profil Akademik Eksternal"
        className="border border-[var(--color-border)] bg-[var(--color-white)] p-6"
      >
        <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--color-ink)]">
          <GraduationCap
            aria-hidden="true"
            className="size-5 text-[var(--color-unj-teal)]"
          />
          Profil Akademik Eksternal
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-ink)]">
          Akses indeks sitasi, rekam jejak riset, dan publikasi terverifikasi pada
          portal akademik nasional &amp; internasional.
        </p>
        <div className="mt-4 flex flex-col gap-2.5">
          <a
            aria-label={`Profil SINTA ${lecturer.name}`}
            className="inline-flex min-h-11 items-center justify-between rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)] hover:text-[var(--color-unj-teal)]"
            href={lecturer.links.sinta}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="flex items-center gap-2">
              <span className="rounded-sm bg-[#16A34A] px-2 py-0.5 text-xs font-bold text-[var(--color-white)]">
                SINTA
              </span>
              <span>Profil SINTA Kemdikbud</span>
            </span>
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>

          <a
            aria-label={`Profil Scopus ${lecturer.name}`}
            className="inline-flex min-h-11 items-center justify-between rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)] hover:text-[var(--color-unj-teal)]"
            href={lecturer.links.scopus}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="flex items-center gap-2">
              <span className="rounded-sm bg-[#E9711C] px-2 py-0.5 text-xs font-bold text-[var(--color-white)]">
                Scopus
              </span>
              <span>Scopus Author Profile</span>
            </span>
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>

          <a
            aria-label={`Profil Google Scholar ${lecturer.name}`}
            className="inline-flex min-h-11 items-center justify-between rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)] hover:text-[var(--color-unj-teal)]"
            href={lecturer.links.googleScholar}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="flex items-center gap-2">
              <span className="rounded-sm bg-[#4285F4] px-2 py-0.5 text-xs font-bold text-[var(--color-white)]">
                Scholar
              </span>
              <span>Google Scholar</span>
            </span>
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>
        </div>
      </section>

      <section
        aria-label="Unduh Dokumen CV"
        className="border border-[var(--color-border)] bg-[var(--color-white)] p-6"
      >
        <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--color-ink)]">
          <FileText
            aria-hidden="true"
            className="size-5 text-[var(--color-feb-copper)]"
          />
          Curriculum Vitae
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-ink)]">
          Unduh ringkasan riwayat hidup, publikasi ilmiah, dan portofolio akademik
          resmi.
        </p>
        <div className="mt-4">
          <Button
            className="w-full justify-center"
            onClick={onDownloadCv}
            variant="primary"
          >
            <Download aria-hidden="true" className="size-4" />
            <span>Unduh CV Akademik (PDF)</span>
          </Button>
          {cvDownloaded ? (
            <p
              aria-live="polite"
              className="mt-3 flex items-center gap-1.5 text-xs font-medium text-emerald-700"
            >
              <CheckCircle aria-hidden="true" className="size-4 shrink-0" />
              <span>Memulai pengunduhan CV resmi {lecturer.name}...</span>
            </p>
          ) : null}
        </div>
      </section>

      <section
        aria-label="Jam Konsultasi Mahasiswa"
        className="border-l-4 border-[var(--color-feb-copper)] bg-[var(--color-white)] p-6 shadow-sm"
      >
        <h3 className="flex items-center gap-2 text-base font-bold text-[var(--color-ink)]">
          <Calendar
            aria-hidden="true"
            className="size-5 text-[var(--color-feb-copper)]"
          />
          Konsultasi &amp; Bimbingan
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-ink)]">
          Mahasiswa dapat mengajukan jadwal bimbingan akademik melalui SIAKAD atau
          koordinasi langsung via email.
        </p>
        <div className="mt-3 text-xs font-semibold text-[var(--color-unj-teal)]">
          Jadwal: Selasa &amp; Kamis (10.00 - 15.00 WIB)
        </div>
      </section>
    </div>
  )
}
