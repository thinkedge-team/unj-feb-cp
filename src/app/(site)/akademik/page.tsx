import type { Metadata } from "next"
import { ArrowRight, BookOpen, Calendar, FileText, GraduationCap } from "lucide-react"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Akademik",
  description:
    "Informasi akademik, kalender perkuliahan, kurikulum OBE, dan dokumen akademik resmi Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.",
  path: "/akademik",
})

const akademikMenu = [
  {
    title: "Informasi Akademik",
    href: "/akademik/informasi-akademik",
    description: "Pedoman perkuliahan, ketentuan SKS, bimbingan akademik, dan evaluasi hasil belajar.",
    icon: BookOpen,
  },
  {
    title: "Kalender Akademik",
    href: "/akademik/kalender-akademik",
    description: "Linimasa perkuliahan, jadwal KRS, UTS, UAS, dan agenda wisuda tahun ajaran berjalan.",
    icon: Calendar,
  },
  {
    title: "Kurikulum & MBKM",
    href: "/akademik/kurikulum",
    description: "Desain kurikulum berbasis Outcome-Based Education (OBE) dan program Merdeka Belajar Kampus Merdeka.",
    icon: GraduationCap,
  },
  {
    title: "Dokumen Akademik",
    href: "/akademik/dokumen-akademik",
    description: "Unduh buku panduan akademik, format penulisan skripsi/tesis, dan formulir permohonan.",
    icon: FileText,
  },
] as const

export default function AkademikIndexPage() {
  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Akademik" },
      ]}
      category="Layanan Akademik"
      cta={{
        title: "Perlu Bantuan Layanan Perkuliahan?",
        description: "Loket layanan akademik fakultas siap membantu kendala KRS, transkrip, dan administrasi perkuliahan.",
        label: "Akses Layanan Fakultas",
        href: "/layanan/layanan-fakultas",
      }}
      relatedResources={[
        {
          title: "Daftar Program Studi",
          href: "/program-studi",
          category: "Akademik",
          description: "Profil program studi D4, S1, S2, dan S3 di FEB UNJ.",
        },
        {
          title: "Arsip Dokumen Resmi",
          href: "/dokumen",
          category: "Dokumen",
          description: "Akses regulasi dan dokumen publik universitas.",
        },
      ]}
      sections={[
        {
          heading: "Penyelenggaraan Akademik FEB UNJ",
          body: "Akademik FEB UNJ didesain untuk memastikan proses transfer pengetahuan berlangsung komprehensif, terstruktur, dan selaras dengan kebutuhan dunia kerja masa kini. Didukung oleh portal sistem informasi akademik terpadu (SIAKAD) dan learning management system (LMS), mahasiswa dapat mengakses perkuliahan dengan fleksibel.",
        },
        {
          heading: "Integrasi Merdeka Belajar (MBKM)",
          body: "Kami memfasilitasi mahasiswa untuk mengambil hak belajar hingga 3 semester di luar program studi melalui magang bersertifikat industri, pertukaran mahasiswa merdeka, studi independen bersertifikat, dan riset kolaboratif.",
        },
      ]}
      summary="Pusat informasi dan panduan penyelenggaraan pendidikan tinggi di lingkungan Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta."
      title="Akademik FEB UNJ"
    >
      {/* Menu Cards */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          Layanan &amp; Informasi Akademik
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {akademikMenu.map((item) => {
            const Icon = item.icon
            return (
              <a
                className="group flex flex-col justify-between border border-[var(--color-border)] bg-[var(--color-white)] p-6 transition-all duration-200 hover:border-[var(--color-unj-teal)] hover:shadow-md"
                href={item.href}
                key={item.title}
              >
                <div>
                  <div className="flex size-10 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)] transition-colors group-hover:bg-[var(--color-unj-teal)] group-hover:text-[var(--color-white)]">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-unj-teal)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-unj-teal)]">
                  <span>Buka halaman</span>
                  <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </LandingPageTemplate>
  )
}
