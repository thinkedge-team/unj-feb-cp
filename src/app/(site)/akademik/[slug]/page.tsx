import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Calendar, CheckCircle2, Clock, FileDown, GraduationCap } from "lucide-react"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { landingPages } from "@/data/landing-pages"
import { createPageMetadata } from "@/lib/metadata"

type PageProps = Readonly<{
  params: Promise<{
    slug: string
  }>
}>

const AKADEMIK_SLUGS = [
  "informasi-akademik",
  "informasi",
  "kalender-akademik",
  "kalender",
  "kurikulum",
  "dokumen-akademik",
  "dokumen",
] as const

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return AKADEMIK_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const targetSlug =
    slug === "informasi"
      ? "informasi-akademik"
      : slug === "kalender"
      ? "kalender-akademik"
      : slug === "dokumen"
      ? "dokumen-akademik"
      : slug

  const data = landingPages.find((item) => item.slug === targetSlug)

  if (!data) {
    return createPageMetadata({
      title: "Halaman Tidak Ditemukan",
      path: `/akademik/${slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: `${data.title} - Akademik`,
    description: data.summary,
    path: `/akademik/${slug}`,
  })
}

const semesterGanjilSchedule = [
  { tanggal: "1 - 18 Agustus 2024", kegiatan: "Pembayaran UKT dan Registrasi Administrasi", kategori: "Registrasi" },
  { tanggal: "19 - 25 Agustus 2024", kegiatan: "Pengisian KRS Daring melalui SIAKAD UNJ", kategori: "KRS" },
  { tanggal: "26 Agustus - 13 Desember 2024", kegiatan: "Masa Perkuliahan Semester Ganjil (16 Pertemuan)", kategori: "Perkuliahan" },
  { tanggal: "14 - 25 Oktober 2024", kegiatan: "Ujian Tengah Semester (UTS)", kategori: "Evaluasi" },
  { tanggal: "16 - 27 Desember 2024", kegiatan: "Ujian Akhir Semester (UAS)", kategori: "Evaluasi" },
  { tanggal: "6 Januari 2025", kegiatan: "Batas Akhir Pemasukan Nilai oleh Dosen", kategori: "Penilaian" },
]

const semesterGenapSchedule = [
  { tanggal: "3 - 17 Februari 2025", kegiatan: "Pembayaran UKT dan Registrasi Administrasi Genap", kategori: "Registrasi" },
  { tanggal: "18 - 24 Februari 2025", kegiatan: "Konsultasi PA dan Pengisian KRS Genap", kategori: "KRS" },
  { tanggal: "3 Maret - 20 Juni 2025", kegiatan: "Masa Perkuliahan Semester Genap", kategori: "Perkuliahan" },
  { tanggal: "21 April - 2 Mei 2025", kegiatan: "Ujian Tengah Semester (UTS)", kategori: "Evaluasi" },
  { tanggal: "23 Juni - 4 Juli 2025", kegiatan: "Ujian Akhir Semester (UAS)", kategori: "Evaluasi" },
  { tanggal: "September 2025", kegiatan: "Wisuda Semester Genap Tahun Akademik 2024/2025", kategori: "Kelulusan" },
]

export default async function AkademikDetailPage({ params }: PageProps) {
  const { slug } = await params

  if (!AKADEMIK_SLUGS.includes(slug as (typeof AKADEMIK_SLUGS)[number])) {
    notFound()
  }

  const targetSlug =
    slug === "informasi"
      ? "informasi-akademik"
      : slug === "kalender"
      ? "kalender-akademik"
      : slug === "dokumen"
      ? "dokumen-akademik"
      : slug

  const pageData = landingPages.find((item) => item.slug === targetSlug)

  if (!pageData) {
    notFound()
  }

  const isKalender = targetSlug === "kalender-akademik"
  const isKurikulum = targetSlug === "kurikulum"

  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Akademik", href: "/akademik" },
        { label: pageData.title },
      ]}
      category={pageData.eyebrow}
      cta={{
        title: "Perlu Bantuan Layanan Perkuliahan?",
        description: "Hubungi Subbagian Akademik FEB UNJ untuk bimbingan KRS, transkrip, dan surat pengantar.",
        label: "Layanan Fakultas",
        href: "/layanan/layanan-fakultas",
      }}
      relatedResources={[
        {
          title: "Program Studi",
          href: "/program-studi",
          category: "Akademik",
          description: "Struktur program studi dan capaian pembelajaran lulusan.",
        },
        {
          title: "Dokumen Unduhan",
          href: "/dokumen/unduhan",
          category: "Dokumen",
          description: "Unduh formulir akademik dan panduan resmi.",
        },
      ]}
      sections={pageData.sections.map((section) => ({
        heading: section.heading,
        body: section.body,
      }))}
      summary={pageData.summary}
      title={pageData.title}
    >
      {/* Structured Calendar Timeline Table */}
      {isKalender ? (
        <div className="mt-8 space-y-10">
          <div>
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] pb-3">
              <Calendar aria-hidden="true" className="size-5 text-[var(--color-unj-teal)]" />
              <h2 className="text-xl font-bold text-[var(--color-ink)] sm:text-2xl">
                Jadwal Semester Ganjil 2024/2025
              </h2>
            </div>
            <div className="mt-4 overflow-x-auto border border-[var(--color-border)] bg-[var(--color-white)]">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-[var(--color-border)] bg-[var(--color-limestone)] text-xs font-semibold uppercase text-[var(--color-ink)]">
                  <tr>
                    <th className="px-4 py-3" scope="col">Kategori</th>
                    <th className="px-4 py-3" scope="col">Kegiatan Akademik</th>
                    <th className="px-4 py-3" scope="col">Rentang Waktu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)] text-[var(--color-ink)]">
                  {semesterGanjilSchedule.map((row, index) => (
                    <tr className="hover:bg-[var(--color-teal-soft)] transition-colors" key={index}>
                      <td className="px-4 py-3">
                        <span className="inline-block rounded-sm bg-[var(--color-limestone)] px-2 py-0.5 text-xs font-medium text-[var(--color-feb-copper)]">
                          {row.kategori}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium">{row.kegiatan}</td>
                      <td className="px-4 py-3 text-[var(--color-muted-ink)]">{row.tanggal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] pb-3">
              <Calendar aria-hidden="true" className="size-5 text-[var(--color-unj-teal)]" />
              <h2 className="text-xl font-bold text-[var(--color-ink)] sm:text-2xl">
                Jadwal Semester Genap 2024/2025
              </h2>
            </div>
            <div className="mt-4 overflow-x-auto border border-[var(--color-border)] bg-[var(--color-white)]">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-[var(--color-border)] bg-[var(--color-limestone)] text-xs font-semibold uppercase text-[var(--color-ink)]">
                  <tr>
                    <th className="px-4 py-3" scope="col">Kategori</th>
                    <th className="px-4 py-3" scope="col">Kegiatan Akademik</th>
                    <th className="px-4 py-3" scope="col">Rentang Waktu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)] text-[var(--color-ink)]">
                  {semesterGenapSchedule.map((row, index) => (
                    <tr className="hover:bg-[var(--color-teal-soft)] transition-colors" key={index}>
                      <td className="px-4 py-3">
                        <span className="inline-block rounded-sm bg-[var(--color-limestone)] px-2 py-0.5 text-xs font-medium text-[var(--color-feb-copper)]">
                          {row.kategori}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium">{row.kegiatan}</td>
                      <td className="px-4 py-3 text-[var(--color-muted-ink)]">{row.tanggal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}

      {/* Kurikulum Special Content */}
      {isKurikulum ? (
        <div className="mt-8 rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-6">
          <h2 className="text-xl font-bold text-[var(--color-ink)]">
            Struktur Beban Studi Program Sarjana
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted-ink)]">
            Total beban studi sarjana berkisar 144 - 146 SKS yang ditempuh dalam waktu 8 semester (maksimal 14 semester).
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-sm border border-[var(--color-border)] p-4 text-center">
              <p className="text-2xl font-extrabold text-[var(--color-unj-teal)]">20 SKS</p>
              <p className="mt-1 text-xs font-medium text-[var(--color-muted-ink)]">Mata Kuliah Umum Universitas</p>
            </div>
            <div className="rounded-sm border border-[var(--color-border)] p-4 text-center">
              <p className="text-2xl font-extrabold text-[var(--color-unj-teal)]">84 SKS</p>
              <p className="mt-1 text-xs font-medium text-[var(--color-muted-ink)]">Mata Kuliah Keilmuan Wajib</p>
            </div>
            <div className="rounded-sm border border-[var(--color-border)] p-4 text-center">
              <p className="text-2xl font-extrabold text-[var(--color-unj-teal)]">40 SKS</p>
              <p className="mt-1 text-xs font-medium text-[var(--color-muted-ink)]">Konsentrasi &amp; Pilihan MBKM</p>
            </div>
          </div>
        </div>
      ) : null}
    </LandingPageTemplate>
  )
}
