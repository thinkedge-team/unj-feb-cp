import type { Metadata } from "next"
import { ArrowRight, FileCheck, HelpCircle, Landmark, ShieldCheck } from "lucide-react"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Layanan Terpadu",
  description:
    "Pusat layanan informasi publik (PPID), zona integritas (WBK/WBBM), dan layanan administrasi akademik terpadu FEB UNJ.",
  path: "/layanan",
})

const layananLinks = [
  {
    title: "PPID FEB UNJ",
    href: "/layanan/ppid",
    description: "Layanan permohonan informasi publik resmi dan laporan transparansi institusi.",
    icon: Landmark,
  },
  {
    title: "Zona Integritas",
    href: "/layanan/zona-integritas",
    description: "Pembangunan tata kelola bersih, bebas korupsi (WBK/WBBM), dan saluran whistleblowing.",
    icon: ShieldCheck,
  },
  {
    title: "Layanan Fakultas",
    href: "/layanan/layanan-fakultas",
    description: "Pelayanan legalisir dokumen, surat keterangan aktif, dan peminjaman fasilitas.",
    icon: FileCheck,
  },
] as const

export default function LayananIndexPage() {
  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Layanan" },
      ]}
      category="Tata Kelola & Pelayanan"
      cta={{
        title: "Butuh Bantuan Langsung dari Petugas Layanan?",
        description: "Front Office Layanan Terpadu FEB UNJ di Gedung M Lantai 1 buka setiap hari kerja pukul 08.00 - 16.00 WIB.",
        label: "Hubungi Petugas",
        href: "/kontak",
      }}
      relatedResources={[
        {
          title: "Dokumen Publik",
          href: "/dokumen/publik",
          category: "Dokumen",
          description: "Akses laporan kinerja dan dokumen keterbukaan informasi.",
        },
        {
          title: "Informasi Akademik",
          href: "/akademik/informasi-akademik",
          category: "Akademik",
          description: "Prosedur dan jadwal registrasi akademik mahasiswa.",
        },
      ]}
      sections={[
        {
          heading: "Komitmen Pelayanan Prima",
          body: "Fakultas Ekonomi dan Bisnis UNJ menerapkan prinsip pelayanan prima (Service Excellence) yang transparan, tepat waktu, akuntabel, dan ramah bagi seluruh pemangku kepentingan. Kami terus mendigitalkan proses birokrasi demi kemudahan sivitas akademika dan masyarakat.",
        },
        {
          heading: "Maklumat Pelayanan",
          body: "Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan dan apabila tidak menepati janji ini, kami siap menerima sanksi sesuai ketentuan peraturan perundang-undangan yang berlaku.",
        },
      ]}
      summary="Pusat layanan terpadu informasi publik, zona integritas, serta administrasi akademik dan kemahasiswaan FEB UNJ."
      title="Layanan FEB UNJ"
    >
      {/* Menu Cards */}
      <div className="mt-8 border-t border-[var(--color-border)] pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          Pilihan Layanan
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {layananLinks.map((item) => {
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
                  <span>Akses layanan</span>
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
