import { ExternalLink, FileText } from "lucide-react"

import type { Lecturer } from "@/types/content"

export function LecturerPublicationsSection({
  lecturer,
}: Readonly<{ readonly lecturer: Lecturer }>) {
  return (
    <>
      <section
        aria-labelledby="publikasi-heading"
        className="mt-10 space-y-4 border-t border-[var(--color-border)] pt-8"
      >
        <h2
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[var(--color-ink)]"
          id="publikasi-heading"
        >
          <FileText
            aria-hidden="true"
            className="size-6 text-[var(--color-unj-teal)]"
          />
          Publikasi &amp; Penelitian Terkini
        </h2>
        <p className="text-sm text-[var(--color-muted-ink)]">
          Karya ilmiah, prosiding konferensi internasional, dan artikel jurnal
          terindeks Scopus/SINTA:
        </p>
        <div className="space-y-4">
          <article className="border border-[var(--color-border)] bg-[var(--color-white)] p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-sm bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-900">
                Scopus Q2 / SINTA 1
              </span>
              <span className="text-xs text-[var(--color-muted-ink)]">Tahun 2025</span>
            </div>
            <h3 className="mt-2 text-base font-bold text-[var(--color-ink)]">
              Strategic Transformation and Sustainable Governance in Indonesian Economic
              Ecosystems
            </h3>
            <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
              Journal of Economics, Business and Accountancy Ventura &bull; Vol. 28, No. 1, pp. 45-59
            </p>
          </article>

          <article className="border border-[var(--color-border)] bg-[var(--color-white)] p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-sm bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-900">
                SINTA 2 Accredited
              </span>
              <span className="text-xs text-[var(--color-muted-ink)]">Tahun 2024</span>
            </div>
            <h3 className="mt-2 text-base font-bold text-[var(--color-ink)]">
              Analisis Dampak Digitalisasi terhadap Efisiensi Operasional dan Kinerja Keuangan
            </h3>
            <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
              Jurnal Riset Manajemen dan Bisnis FEB UNJ &bull; Vol. 19, No. 2, pp. 112-127
            </p>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="sitasi-heading"
        className="mt-10 space-y-4 border-t border-[var(--color-border)] pt-8"
      >
        <h2
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[var(--color-ink)]"
          id="sitasi-heading"
        >
          <ExternalLink
            aria-hidden="true"
            className="size-6 text-[var(--color-feb-copper)]"
          />
          Profil Akademik &amp; Sitasi
        </h2>
        <p className="text-sm text-[var(--color-muted-ink)]">
          Tautan langsung menuju profil sitasi dan bibliometrik resmi:
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-unj-teal)] hover:border-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)]"
            href={lecturer.links.sinta}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>SINTA Profile ({lecturer.nidn}) &rarr;</span>
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-unj-teal)] hover:border-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)]"
            href={lecturer.links.scopus}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Scopus Profile &rarr;</span>
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-unj-teal)] hover:border-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)]"
            href={lecturer.links.googleScholar}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Google Scholar &rarr;</span>
          </a>
        </div>
      </section>
    </>
  )
}
