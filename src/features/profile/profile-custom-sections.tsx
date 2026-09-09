import {
  Building,
  CheckCircle2,
  Laptop,
  Library,
  Presentation,
  Users,
} from "lucide-react"

import { faculty } from "@/data/faculty"

export function PimpinanSection() {
  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
        Struktur Pimpinan Dekanat FEB UNJ
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {faculty.leadership.map((leader) => (
          <div
            className="border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-sm transition-all hover:border-[var(--color-unj-teal)]"
            key={leader.role}
          >
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
                <Users aria-hidden="true" className="size-6" strokeWidth={1.5} />
              </div>
              <div>
                <span className="inline-block rounded-sm bg-[var(--color-limestone)] px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[var(--color-feb-copper)]">
                  {leader.role}
                </span>
                <h3 className="mt-1 text-base font-bold text-[var(--color-ink)] sm:text-lg">
                  {leader.name}
                </h3>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[var(--color-muted-ink)] sm:text-sm">
              Bertanggung jawab memimpin koordinasi bidang dan penjaminan mutu tridarma perguruan tinggi di lingkungan FEB UNJ.
            </p>
          </div>
        ))}
      </div>

      <aside className="mt-6 rounded-sm border border-[var(--color-border)] bg-[var(--color-limestone)] p-6">
        <h3 className="text-base font-bold text-[var(--color-ink)]">Senat Fakultas</h3>
        <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted-ink)]">
          {faculty.senate}
        </p>
      </aside>
    </div>
  )
}

export function FasilitasSection() {
  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
        Daftar Sarana dan Prasarana Utama
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-sm">
          <div className="flex size-10 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
            <Laptop aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-[var(--color-ink)]">
            Laboratorium Pasar Modal &amp; Komputasi
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
            Dilengkapi dengan 60 unit terminal komputer berkecepatan tinggi, feed data pasar modal real-time Bursa Efek Indonesia, software ekonometrika EViews, SPSS, dan Stata.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-[var(--color-muted-ink)]">
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="size-3.5 text-[var(--color-unj-teal)]" />
              Kapasitas 60 mahasiswa
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="size-3.5 text-[var(--color-unj-teal)]" />
              Gedung M Lantai 3
            </li>
          </ul>
        </div>

        <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-sm">
          <div className="flex size-10 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
            <Library aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-[var(--color-ink)]">
            Perpustakaan &amp; Ruang Baca Terpadu
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
            Koleksi lebih dari 12.000 judul literatur ekonomi, manajemen, akuntansi, jurnal terindeks Scopus, serta ruang baca hening dengan akses internet nirkabel.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-[var(--color-muted-ink)]">
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="size-3.5 text-[var(--color-unj-teal)]" />
              Akses database e-Journal internasional
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="size-3.5 text-[var(--color-unj-teal)]" />
              Gedung R Lantai 2
            </li>
          </ul>
        </div>

        <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-sm">
          <div className="flex size-10 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
            <Presentation aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-[var(--color-ink)]">
            Smart Hybrid Classroom &amp; Auditorium
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
            Ruang perkuliahan interaktif dengan smart board, sistem audio visual terintegrasi untuk perkuliahan hybrid, serta auditorium berkapasitas 250 peserta untuk seminar nasional.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-[var(--color-muted-ink)]">
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="size-3.5 text-[var(--color-unj-teal)]" />
              Full AC &amp; Smart Interactive Display
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="size-3.5 text-[var(--color-unj-teal)]" />
              Gedung M Lantai 2
            </li>
          </ul>
        </div>

        <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-sm">
          <div className="flex size-10 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
            <Building aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-[var(--color-ink)]">
            Pusat Layanan Mahasiswa &amp; Student Lounge
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
            Area kerja bersama (coworking space) terbuka, ruang konsultasi bimbingan konseling, sekretariat organisasi kemahasiswaan, dan kafetaria sehat.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-[var(--color-muted-ink)]">
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="size-3.5 text-[var(--color-unj-teal)]" />
              Buka setiap hari kerja 08.00 - 17.00
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" className="size-3.5 text-[var(--color-unj-teal)]" />
              Gedung R Lantai 1
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function SejarahSection() {
  return (
    <div className="mt-8 border-t border-[var(--color-border)] pt-8">
      <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
        Tonggak Sejarah Perkembangan
      </h2>
      <div className="mt-6 space-y-6">
        {faculty.history.map((milestone) => (
          <div
            className="flex items-start gap-4 border-l-2 border-[var(--color-unj-teal)] pl-4"
            key={milestone.year}
          >
            <span className="rounded-sm bg-[var(--color-teal-soft)] px-2.5 py-1 text-sm font-extrabold text-[var(--color-unj-teal)]">
              {milestone.year}
            </span>
            <p className="text-sm leading-relaxed text-[var(--color-ink)] sm:text-base">
              {milestone.event}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
