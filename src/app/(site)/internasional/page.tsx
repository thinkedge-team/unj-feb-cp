import type { Metadata } from "next"
import { ArrowRight, BookOpen, Compass, Globe, Plane, School } from "lucide-react"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Program Internasional",
  description:
    "Kantor Urusan Internasional FEB UNJ, program mobilitas mahasiswa global (IISMA, student exchange), dan kelas internasional.",
  path: "/internasional",
})

const internasionalSubpages = [
  {
    title: "Mobilitas Mahasiswa",
    href: "/internasional/mobilitas",
    description: "Program pertukaran pelajar internasional, IISMA, summer school, dan credit transfer.",
    icon: Plane,
  },
  {
    title: "Program Internasional & Dual Degree",
    href: "/internasional/program",
    description: "Kelas internasional sarjana, visiting professor, dan skema gelar ganda perguruan tinggi luar negeri.",
    icon: School,
  },
  {
    title: "Mitra Global",
    href: "/internasional/mitra",
    description: "Jejaring universitas mitra terkemuka di Australia, Jepang, Malaysia, Korea, dan Eropa.",
    icon: Globe,
  },
] as const

export default function InternasionalPage() {
  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Internasional" },
      ]}
      category="Global Engagement"
      cta={{
        title: "Tertarik Mengikuti Program Pertukaran Internasional?",
        description: "International Office FEB UNJ menyediakan layanan konsultasi beasiswa IISMA, persiapan berkas, dan pendampingan seleksi.",
        label: "Konsultasi Internasional",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Kerjasama Kemitraan",
          href: "/kerjasama",
          category: "Kemitraan",
          description: "Jejaring kolaborasi dalam dan luar negeri FEB UNJ.",
        },
        {
          title: "Program Beasiswa",
          href: "/kemahasiswaan/beasiswa",
          category: "Kemahasiswaan",
          description: "Peluang beasiswa studi dan mobilitas mahasiswa.",
        },
      ]}
      sections={[
        {
          heading: "Visi Internasionalisasi FEB UNJ",
          body: "FEB UNJ terus memperluas eksposur internasional bagi sivitas akademika melalui kemitraan tridarma global. Kami mendorong mahasiswa dan dosen untuk memiliki kompetensi global, kesadaran multikultural, dan daya saing di pasar kerja internasional.",
        },
        {
          heading: "Layanan International Office FEB UNJ",
          body: "International Office bertindak sebagai simpul fasilitasi mobilitas masuk (inbound) dan keluar (outbound) bagi mahasiswa dan dosen asing, penyelenggaraan visiting professor, serta pengurusan akreditasi internasional (FIBAA dan AACSB).",
        },
      ]}
      summary="Membuka gerbang kolaborasi global untuk pembelajaran berstandar dunia, mobilitas lintas negara, dan riset bersama."
      title="Program Internasional FEB UNJ"
    >
      {/* Subpage Nav */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-8">
        <h2 className="text-xl font-bold text-[var(--color-ink)] sm:text-2xl">
          Kanal Internasionalisasi
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {internasionalSubpages.map((item) => {
            const Icon = item.icon
            return (
              <a
                className="group flex flex-col justify-between border border-[var(--color-border)] bg-[var(--color-white)] p-5 transition-all hover:border-[var(--color-unj-teal)] hover:shadow-sm"
                href={item.href}
                key={item.title}
              >
                <div>
                  <div className="flex size-9 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
                    <Icon aria-hidden="true" className="size-4.5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-unj-teal)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[var(--color-unj-teal)]">
                  <span>Telusuri program</span>
                  <ArrowRight aria-hidden="true" className="size-3 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </LandingPageTemplate>
  )
}
