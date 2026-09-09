import type { Metadata } from "next"
import { ArrowRight, Building2, ExternalLink, FileCheck, Globe2, Handshake } from "lucide-react"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { partners } from "@/data/partners"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Kerja Sama dan Kemitraan",
  description:
    "Jejaring kemitraan strategis FEB UNJ bersama instansi pemerintah, regulator perbankan, BUMN, Kantor Akuntan Publik, dan universitas bereputasi global.",
  path: "/kerjasama",
})

const kerjasamaSubpages = [
  {
    title: "Mitra Dalam Negeri",
    href: "/kerjasama/dalam-negeri",
    description: "Kemitraan perbankan, OJK, Bank Indonesia, dan KAP terkemuka.",
    icon: Building2,
  },
  {
    title: "Mitra Internasional",
    href: "/kerjasama/internasional",
    description: "Kolaborasi tridarma perguruan tinggi dengan universitas mitra di luar negeri.",
    icon: Globe2,
  },
  {
    title: "Dokumen Kerjasama",
    href: "/kerjasama/dokumen",
    description: "Pedoman, alur pengajuan, dan arsip MoU/MoA kemitraan aktif.",
    icon: FileCheck,
  },
] as const

export default function KerjasamaPage() {
  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Kerjasama" },
      ]}
      category="Jejaring & Kemitraan"
      cta={{
        title: "Tertarik Menjalin Kemitraan Strategis dengan FEB UNJ?",
        description: "Subbagian Kerjasama membuka inisiasi kerjasama magang, rekrutmen, riset terapan, dan kuliah tamu industri.",
        label: "Inisiasi Kerjasama",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Program Internasional",
          href: "/internasional",
          category: "Global",
          description: "Jejaring mobilitas mahasiswa dan program pertukaran global.",
        },
        {
          title: "Program Studi",
          href: "/program-studi",
          category: "Akademik",
          description: "Penyelarasan kurikulum berbasis kebutuhan mitra industri.",
        },
      ]}
      sections={[
        {
          heading: "Ekosistem Kolaborasi FEB UNJ",
          body: "Kemitraan strategis merupakan pilar akselerasi FEB UNJ dalam mewujudkan relevansi pembelajaran dan riset terhadap kebutuhan industri dan regulator. Kolaborasi kami mencakup program magang bersertifikat, beasiswa industri, kuliah umum praktisi, dan penelitian kebijakan publik.",
        },
        {
          heading: "Bentuk-Bentuk Kerjasama",
          body: "Kami memfasilitasi kemitraan dalam 4 ruang lingkup: (1) Penyerapan lulusan dan magang industri terstruktur, (2) Kuliah dosen praktisi dan kurikulum bersama, (3) Penelitian terapan dan konsultansi bisnis, serta (4) Program beasiswa dan tanggung jawab sosial institusi (CSR).",
        },
      ]}
      summary="Menghubungkan potensi akademik FEB UNJ dengan ekosistem industri, regulator, dan institusi pendidikan terkemuka di tingkat nasional dan internasional."
      title="Kerja Sama dan Kemitraan FEB UNJ"
    >
      {/* Subpage Nav */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-8">
        <h2 className="text-xl font-bold text-[var(--color-ink)] sm:text-2xl">
          Ruang Lingkup Kemitraan
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {kerjasamaSubpages.map((item) => {
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
                  <span>Lihat rincian</span>
                  <ArrowRight aria-hidden="true" className="size-3 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* Strategic Partners Section */}
      <div className="mt-12 border-t border-[var(--color-border)] pt-10" id="mitra-strategis">
        <div className="flex items-center gap-2">
          <Handshake aria-hidden="true" className="size-6 text-[var(--color-unj-teal)]" />
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            Mitra Strategis FEB UNJ
          </h2>
        </div>
        <p className="mt-2 text-base text-[var(--color-muted-ink)]">
          Berikut adalah sebagian institusi regulator, korporasi perbankan, kantor audit, dan perguruan tinggi yang bekerjasama aktif dengan FEB UNJ.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              className="flex flex-col justify-between border border-[var(--color-border)] bg-[var(--color-white)] p-5 shadow-sm transition-all hover:border-[var(--color-unj-teal)]"
              key={partner.slug}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-sm bg-[var(--color-limestone)] px-2 py-0.5 text-xs font-semibold text-[var(--color-feb-copper)]">
                    {partner.category}
                  </span>
                  <span className="text-xs text-[var(--color-muted-ink)] font-medium">
                    {partner.country}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-[var(--color-ink)]">
                  {partner.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-ink)] sm:text-sm">
                  {partner.summary}
                </p>
              </div>

              <div className="mt-4 border-t border-[var(--color-border)] pt-3">
                <a
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-unj-teal)] hover:text-[var(--color-teal-deep)]"
                  href={partner.website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Kunjungi situs mitra</span>
                  <ExternalLink aria-hidden="true" className="size-3" strokeWidth={2} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LandingPageTemplate>
  )
}
