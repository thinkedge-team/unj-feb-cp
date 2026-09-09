import type { Metadata } from "next"
import { ArrowRight, BookMarked, FlaskConical, Globe, Microscope, Share2 } from "lucide-react"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Riset dan Inovasi",
  description:
    "Agenda riset unggulan, publikasi ilmiah internasional, jurnal terakreditasi SINTA, dan pengabdian kepada masyarakat FEB UNJ.",
  path: "/riset",
})

const risetSubpages = [
  {
    title: "Penelitian",
    href: "/riset/penelitian",
    description: "Klaster riset ekonomi terapan, keuangan berkelanjutan, dan hibah penelitian dosen-mahasiswa.",
    icon: Microscope,
  },
  {
    title: "Publikasi Ilmiah",
    href: "/riset/publikasi",
    description: "Jurnal ilmiah bereputasi SINTA & Scopus (JRMSI, JABE, JPEB) dan prosiding konferensi internasional ICEBE.",
    icon: BookMarked,
  },
  {
    title: "Pengabdian Masyarakat",
    href: "/riset/pengabdian",
    description: "Pemberdayaan UMKM, pendampingan desa binaan, dan program literasi keuangan masyarakat.",
    icon: Share2,
  },
] as const

export default function RisetPage() {
  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Riset" },
      ]}
      category="Inovasi & Pengetahuan"
      cta={{
        title: "Tertarik Berkolaborasi Riset dengan Peneliti FEB UNJ?",
        description: "Kami membuka peluang joint research, pendanaan bersama, dan penulisan policy paper dengan mitra industri dan pemerintah.",
        label: "Hubungi Unit Riset",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Direktori Dosen & Peneliti",
          href: "/sdm/dosen",
          category: "SDM",
          description: "Profil kepakaran dan publikasi SINTA/Scopus dosen FEB UNJ.",
        },
        {
          title: "Kerjasama Kemitraan",
          href: "/kerjasama",
          category: "Kemitraan",
          description: "Jejaring kemitraan riset terapan dengan industri.",
        },
      ]}
      sections={[
        {
          heading: "Visi Riset FEB UNJ",
          body: "Riset di Fakultas Ekonomi dan Bisnis UNJ diarahkan untuk menghasilkan temuan empiris yang relevan dengan tantangan perekonomian nasional dan global, khususnya dalam percepatan transformasi digital, keuangan hijau, dan ketahanan UMKM.",
        },
        {
          heading: "Pusat Studi dan Laboratorium Riset",
          body: "FEB UNJ menaungi beberapa pusat studi aktif: Pusat Studi Ekonomi & Keuangan Syariah, Laboratorium Pasar Modal & Galeri Investasi BEI, serta Laboratorium Ekonometrika Terapan.",
        },
        {
          heading: "Diseminasi Ilmiah & Konferensi",
          body: "Setiap tahun, FEB UNJ menyelenggarakan International Conference on Economics, Business, and Education (ICEBE) yang mengundang narasumber kunci dari berbagai belahan dunia serta menerbitkan 3 jurnal ilmiah terakreditasi SINTA.",
        },
      ]}
      summary="Pusat pengembangan ilmu ekonomi, manajemen, dan akuntansi berbasis riset berkualitas tinggi yang berdampak bagi kebijakan dan masyarakat."
      title="Riset dan Inovasi FEB UNJ"
    >
      {/* Subpage Navigation Grid */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          Fokus Bidang Riset
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {risetSubpages.map((item) => {
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
                  <span>Telusuri fokus</span>
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
