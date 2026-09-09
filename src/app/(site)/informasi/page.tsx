import type { Metadata } from "next"
import { ArrowRight, Bell, Calendar, FileText, Newspaper } from "lucide-react"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Pusat Informasi & Warta",
  description:
    "Kanal informasi resmi Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta: berita kampus, pengumuman akademik, agenda event, dan artikel ilmiah.",
  path: "/informasi",
})

const infoChannels = [
  {
    title: "Berita Fakultas",
    href: "/informasi/berita",
    description: "Liputan kegiatan tridarma, prestasi mahasiswa, dan kerjasama strategis FEB UNJ.",
    icon: Newspaper,
  },
  {
    title: "Pengumuman Resmi",
    href: "/informasi/pengumuman",
    description: "Pengumuman penting terkait registrasi, beasiswa, wisuda, dan edaran pimpinan fakultas.",
    icon: Bell,
  },
  {
    title: "Event & Agenda Kampus",
    href: "/informasi/event",
    description: "Jadwal seminar nasional, konferensi internasional, workshop, dan webinar ekonomi terkini.",
    icon: Calendar,
  },
  {
    title: "Artikel & Opini",
    href: "/informasi/artikel",
    description: "Analisis ekonomi, ulasan riset terkini, dan pandangan pakar dosen FEB UNJ.",
    icon: FileText,
  },
] as const

export default function InformasiOverviewPage() {
  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Informasi" },
      ]}
      category="Warta & Publikasi"
      cta={{
        title: "Punya Liputan Kegiatan atau Rilis Berita?",
        description: "Unit Hubungan Masyarakat FEB UNJ menerima rilis kegiatan ormawa dan capaian akademik sivitas.",
        label: "Hubungi Tim Humas",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Dokumen Publik",
          href: "/dokumen",
          category: "Dokumen",
          description: "Arsip dokumen, panduan akademik, dan formulir resmi.",
        },
        {
          title: "Layanan PPID",
          href: "/layanan/ppid",
          category: "Layanan",
          description: "Keterbukaan informasi dan permohonan informasi publik.",
        },
      ]}
      sections={[
        {
          heading: "Keterbukaan Informasi FEB UNJ",
          body: "Sebagai institusi pendidikan tinggi berintegritas, Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta berkomitmen menyajikan warta kampus yang transparan, kredibel, dan mutakhir. Seluruh informasi disajikan untuk mendukung kelancaran studi mahasiswa dan kolaborasi dengan mitra.",
        },
        {
          heading: "Kanal Komunikasi Publik",
          body: "Informasi dikelompokkan ke dalam empat kanal utama guna memudahkan navigasi: Berita untuk perkembangan terkini, Pengumuman untuk instruksi administratif mendesak, Event untuk partisipasi akademik, dan Artikel untuk perluasan wawasan keilmuan.",
        },
      ]}
      summary="Pusat warta terkini, pengumuman resmi, agenda kegiatan, dan artikel keilmuan Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta."
      title="Pusat Informasi FEB UNJ"
    >
      {/* Channels Grid */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          Kanal Informasi
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {infoChannels.map((channel) => {
            const Icon = channel.icon
            return (
              <a
                className="group flex flex-col justify-between border border-[var(--color-border)] bg-[var(--color-white)] p-6 transition-all duration-200 hover:border-[var(--color-unj-teal)] hover:shadow-md"
                href={channel.href}
                key={channel.title}
              >
                <div>
                  <div className="flex size-10 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)] transition-colors group-hover:bg-[var(--color-unj-teal)] group-hover:text-[var(--color-white)]">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-unj-teal)]">
                    {channel.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
                    {channel.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-unj-teal)]">
                  <span>Lihat semua</span>
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
