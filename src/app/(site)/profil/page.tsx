import type { Metadata } from "next"
import { ArrowRight, Award, Building2, Compass, History, ShieldCheck, Users } from "lucide-react"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { faculty } from "@/data/faculty"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Profil Fakultas Ekonomi dan Bisnis",
  description:
    "Profil lengkap Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta, sejarah, visi misi, struktur organisasi, pimpinan, dan fasilitas kampus.",
  path: "/profil",
})

const profilSections = [
  {
    title: "Tentang FEB",
    href: "/profil/tentang-feb",
    description: "Identitas, nilai-nilai utama, dan komitmen tridarma perguruan tinggi FEB UNJ.",
    icon: Building2,
  },
  {
    title: "Sejarah",
    href: "/profil/sejarah",
    description: "Napak tilas perjalanan institusi sejak 1964 hingga transformasi modern saat ini.",
    icon: History,
  },
  {
    title: "Visi, Misi, dan Tujuan",
    href: "/profil/visi-misi-tujuan",
    description: "Haluan strategis menuju fakultas bereputasi internasional berorientasi kewirausahaan.",
    icon: Compass,
  },
  {
    title: "Struktur Organisasi",
    href: "/profil/struktur-organisasi",
    description: "Tata pamong, jurusan, program studi, dan unit penunjang akademik terpadu.",
    icon: ShieldCheck,
  },
  {
    title: "Pimpinan Fakultas",
    href: "/profil/pimpinan",
    description: "Dewan pimpinan fakultas: Dekan dan para Wakil Dekan periode 2024–2028.",
    icon: Users,
  },
  {
    title: "Prestasi dan Akreditasi",
    href: "/profil/prestasi",
    description: "Capaian akreditasi unggul, sertifikasi internasional FIBAA, dan rekor kompetisi.",
    icon: Award,
  },
  {
    title: "Fasilitas Kampus",
    href: "/profil/fasilitas",
    description: "Laboratorium pasar modal, ruang baca, smart classroom, dan student lounge.",
    icon: Building2,
  },
] as const

export default function ProfilPage() {
  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Profil" },
      ]}
      category="Profil Institusi"
      cta={{
        title: "Ingin Berkonsultasi atau Berkunjung ke FEB UNJ?",
        description: "Layanan informasi publik dan humas FEB UNJ siap melayani kebutuhan informasi Anda.",
        label: "Hubungi Kami",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Program Studi",
          href: "/program-studi",
          category: "Akademik",
          description: "Jelajahi jenjang Sarjana, Sarjana Terapan, Magister, dan Doktor di FEB UNJ.",
        },
        {
          title: "Direktori SDM",
          href: "/sdm",
          category: "SDM",
          description: "Profil dosen dan tenaga kependidikan berintegritas dan berkeahlian tinggi.",
        },
      ]}
      sections={[
        {
          heading: "Sekilas FEB UNJ",
          body: "Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta (FEB UNJ) memadukan keunggulan akademik, riset terapan, dan ekosistem kewirausahaan untuk mencetak generasi pemimpin masa depan. Dengan dukungan 120+ dosen dan peneliti berkualifikasi doktor dan master, kami melayani lebih dari 5.000 mahasiswa aktif.",
        },
        {
          heading: "Statistik Kunci Fakultas",
          body: "Pertumbuhan dan capaian kelembagaan FEB UNJ terefleksi dalam angka-angka strategis yang terus meningkat dari tahun ke tahun.",
          content: (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {faculty.statistics.map((stat) => (
                <div
                  className="border border-[var(--color-border)] bg-[var(--color-white)] p-5 text-center shadow-sm"
                  key={stat.label}
                >
                  <p className="text-2xl font-extrabold text-[var(--color-unj-teal)] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[var(--color-muted-ink)] sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          ),
        },
      ]}
      summary="Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta berkomitmen menyelenggarakan pendidikan bermutu tinggi berorientasi pada inovasi, integritas, dan kewirausahaan."
      title="Profil Fakultas Ekonomi dan Bisnis"
    >
      {/* Directory of Profile Sub-pages */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          Eksplorasi Profil Fakultas
        </h2>
        <p className="mt-2 text-base text-[var(--color-muted-ink)]">
          Pilih topik di bawah ini untuk mengetahui informasi mendalam mengenai struktur, sejarah, dan tata kelola FEB UNJ.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profilSections.map((item) => {
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
                  <span>Pelajari lebih lanjut</span>
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
