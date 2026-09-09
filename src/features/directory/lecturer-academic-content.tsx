import {
  Award,
  BookOpen,
  CheckCircle,
  GraduationCap,
  Sparkles,
} from "lucide-react"

import { LecturerPublicationsSection } from "@/features/directory/lecturer-publications"
import type { Lecturer } from "@/types/content"

export function LecturerAcademicContent({
  lecturer,
}: Readonly<{ readonly lecturer: Lecturer }>) {
  return (
    <>
      <section aria-labelledby="biografi-heading" className="space-y-4">
        <h2
          className="text-2xl font-bold tracking-tight text-[var(--color-ink)]"
          id="biografi-heading"
        >
          Biografi Akademik
        </h2>
        <p className="text-base leading-relaxed text-[var(--color-muted-ink)]">
          {lecturer.name} mengabdikan diri sebagai tenaga pendidik dan periset di
          Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta. Dengan jabatan
          fungsional sebagai {lecturer.title}, beliau secara konsisten mengampu mata
          kuliah inti serta membimbing riset mahasiswa pada program studi{" "}
          {lecturer.homebase} baik jenjang Sarjana maupun Pascasarjana.
        </p>
        <p className="text-base leading-relaxed text-[var(--color-muted-ink)]">
          Fokus tridharma perguruan tinggi yang dijalankan mencakup pengembangan model
          pembelajaran mutakhir, publikasi pada jurnal bereputasi nasional dan
          internasional, serta pendampingan masyarakat dan kemitraan industri untuk
          memperkuat daya saing ekonomi nasional.
        </p>
      </section>

      <section
        aria-labelledby="pendidikan-heading"
        className="mt-10 space-y-4 border-t border-[var(--color-border)] pt-8"
      >
        <h2
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[var(--color-ink)]"
          id="pendidikan-heading"
        >
          <GraduationCap
            aria-hidden="true"
            className="size-6 text-[var(--color-unj-teal)]"
          />
          Riwayat Pendidikan
        </h2>
        <p className="text-sm text-[var(--color-muted-ink)]">
          Jejak pendidikan tinggi formal yang ditempuh dari jenjang Sarjana hingga Doktor:
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-5">
            <span className="inline-flex rounded-sm bg-[var(--color-teal-soft)] px-2.5 py-1 text-xs font-bold text-[var(--color-unj-teal)]">
              Jenjang Sarjana (S1)
            </span>
            <h3 className="mt-3 text-base font-bold text-[var(--color-ink)]">
              Sarjana Ekonomi / Pendidikan
            </h3>
            <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
              Universitas Negeri Terkemuka &bull; Lulus dengan predikat sangat memuaskan
            </p>
          </div>

          <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-5">
            <span className="inline-flex rounded-sm bg-[var(--color-teal-soft)] px-2.5 py-1 text-xs font-bold text-[var(--color-unj-teal)]">
              Jenjang Magister (S2)
            </span>
            <h3 className="mt-3 text-base font-bold text-[var(--color-ink)]">
              Magister Manajemen / Akuntansi / Pendidikan
            </h3>
            <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
              Program Pascasarjana Terakreditasi Unggul &bull; Konsentrasi Keilmuan Terapan
            </p>
          </div>

          <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-5">
            <span className="inline-flex rounded-sm bg-[var(--color-teal-soft)] px-2.5 py-1 text-xs font-bold text-[var(--color-unj-teal)]">
              Jenjang Doktor (S3)
            </span>
            <h3 className="mt-3 text-base font-bold text-[var(--color-ink)]">
              Doktor Ilmu Ekonomi / Manajemen / Pendidikan
            </h3>
            <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
              Disertasi Riset Kebijakan &bull; Terpublikasi pada Jurnal Internasional
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="keahlian-heading"
        className="mt-10 space-y-4 border-t border-[var(--color-border)] pt-8"
      >
        <h2
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[var(--color-ink)]"
          id="keahlian-heading"
        >
          <Sparkles
            aria-hidden="true"
            className="size-6 text-[var(--color-feb-copper)]"
          />
          Bidang Keahlian &amp; Riset
        </h2>
        <p className="text-sm text-[var(--color-muted-ink)]">
          Area konsentrasi kepakaran dan klaster riset strategis:
        </p>
        <div className="flex flex-wrap gap-2.5 pt-2">
          {lecturer.expertise.map((exp) => (
            <div
              className="flex items-center gap-2 rounded-sm border border-[var(--color-unj-teal)] bg-[var(--color-teal-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-unj-teal)]"
              key={exp}
            >
              <CheckCircle aria-hidden="true" className="size-4" />
              <span>{exp}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)]">
            <span>Metodologi Penelitian Ekonomi &amp; Bisnis</span>
          </div>
          <div className="flex items-center gap-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)]">
            <span>Analisis Kebijakan &amp; Tata Kelola Kelembagaan</span>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="sertifikasi-heading"
        className="mt-10 space-y-4 border-t border-[var(--color-border)] pt-8"
      >
        <h2
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[var(--color-ink)]"
          id="sertifikasi-heading"
        >
          <Award
            aria-hidden="true"
            className="size-6 text-[var(--color-unj-teal)]"
          />
          Sertifikasi &amp; Kompetensi Profesi
        </h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <li className="flex items-start gap-3 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-4">
            <CheckCircle
              aria-hidden="true"
              className="size-5 shrink-0 text-[var(--color-unj-teal)]"
            />
            <div>
              <p className="text-sm font-bold text-[var(--color-ink)]">
                Sertifikat Pendidik Profesional (SERDOS)
              </p>
              <p className="text-xs text-[var(--color-muted-ink)]">
                Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-4">
            <CheckCircle
              aria-hidden="true"
              className="size-5 shrink-0 text-[var(--color-unj-teal)]"
            />
            <div>
              <p className="text-sm font-bold text-[var(--color-ink)]">
                Sertifikasi Kompetensi Asesor / Praktisi Keahlian
              </p>
              <p className="text-xs text-[var(--color-muted-ink)]">
                Badan Nasional Sertifikasi Profesi (BNSP)
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section
        aria-labelledby="matakuliah-heading"
        className="mt-10 space-y-4 border-t border-[var(--color-border)] pt-8"
      >
        <h2
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[var(--color-ink)]"
          id="matakuliah-heading"
        >
          <BookOpen
            aria-hidden="true"
            className="size-6 text-[var(--color-unj-teal)]"
          />
          Mata Kuliah yang Diampu
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-feb-copper)]">
              Jenjang Sarjana &bull; {lecturer.homebase}
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">
              {lecturer.expertise[0] || "Teori & Kebijakan Ekonomi"}
            </p>
            <p className="mt-0.5 text-xs text-[var(--color-muted-ink)]">
              Mata kuliah wajib keahlian program studi (3 SKS)
            </p>
          </div>
          <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-feb-copper)]">
              Jenjang Pascasarjana &bull; FEB UNJ
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">
              Metodologi Riset Lanjutan &amp; Seminar Proposal
            </p>
            <p className="mt-0.5 text-xs text-[var(--color-muted-ink)]">
              Mata kuliah pendalaman riset tesis/disertasi (3 SKS)
            </p>
          </div>
        </div>
      </section>

      <LecturerPublicationsSection lecturer={lecturer} />
    </>
  )
}
