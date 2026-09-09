import type { Metadata } from "next"
import { ArrowRight, Award, Flame, HeartHandshake, Lightbulb, Users } from "lucide-react"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Kemahasiswaan",
  description:
    "Pusat kegiatan, beasiswa, organisasi mahasiswa, dan prestasi mahasiswa Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.",
  path: "/kemahasiswaan",
})

const kemahasiswaanLinks = [
  {
    title: "Program Beasiswa",
    href: "/kemahasiswaan/beasiswa",
    description: "Informasi beasiswa pemerintah (KIP-K), beasiswa Bank Indonesia, dan kemitraan korporasi.",
    icon: HeartHandshake,
  },
  {
    title: "Organisasi Mahasiswa",
    href: "/kemahasiswaan/organisasi",
    description: "Lembaga eksekutif, legislatif, himpunan mahasiswa program studi, dan unit kegiatan penalaran.",
    icon: Users,
  },
  {
    title: "Prestasi Mahasiswa",
    href: "/kemahasiswaan/prestasi",
    description: "Capaian kejuaraan kompetisi ilmiah, seni, dan olahraga di tingkat nasional dan internasional.",
    icon: Award,
  },
  {
    title: "Karya Mahasiswa",
    href: "/kemahasiswaan/karya-mahasiswa",
    description: "Produk inkubasi wirausaha, publikasi ilmiah, dan proyek inovasi digital mahasiswa.",
    icon: Lightbulb,
  },
] as const

export default function KemahasiswaanIndexPage() {
  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Kemahasiswaan" },
      ]}
      category="Kehidupan Kampus"
      cta={{
        title: "Ingin Mengajukan Rekomendasi Kegiatan atau Prestasi?",
        description: "Subbagian Kemahasiswaan dan Alumni FEB UNJ siap memfasilitasi delegasi lomba dan pendampingan ormawa.",
        label: "Hubungi Kemahasiswaan",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Informasi Akademik",
          href: "/akademik/informasi-akademik",
          category: "Akademik",
          description: "Panduan registrasi dan bimbingan studi mahasiswa.",
        },
        {
          title: "Layanan Fakultas",
          href: "/layanan/layanan-fakultas",
          category: "Layanan",
          description: "Penerbitan surat pengantar, rekomendasi, dan legalisir.",
        },
      ]}
      sections={[
        {
          heading: "Ekosistem Mahasiswa Unggul",
          body: "Bidang Kemahasiswaan FEB UNJ bertekad membangun iklim kemahasiswaan yang berkarakter, mandiri, dan berjiwa wirausaha. Melalui berbagai program pembinaan soft skill, kepemimpinan, dan kompetisi, mahasiswa didorong untuk mengukir prestasi tertinggi di kancah global.",
        },
        {
          heading: "Fasilitas dan Pendampingan Prestasi",
          body: "Fakultas menyediakan alokasi dana pembinaan delegasi kompetisi, bimbingan intensif dari dosen pakar, serta insentif penghargaan bagi mahasiswa yang berhasil meraih gelar juara di ajang bergengsi.",
        },
      ]}
      summary="Wadah aktualisasi diri, kepemimpinan, dan inovasi bagi seluruh mahasiswa Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta."
      title="Kemahasiswaan FEB UNJ"
    >
      {/* Menu Cards */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          Kanal Kemahasiswaan &amp; Alumni
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {kemahasiswaanLinks.map((item) => {
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
                  <span>Lihat informasi</span>
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
