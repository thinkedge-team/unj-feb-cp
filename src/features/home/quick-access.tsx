import { ArrowUpRight, BookOpen, GraduationCap, Handshake, Users2 } from "lucide-react"

interface TargetAudienceItem {
  readonly title: string
  readonly subtitle: string
  readonly href: string
  readonly description: string
  readonly icon: typeof GraduationCap
}

const targetAudiences: readonly TargetAudienceItem[] = [
  {
    title: "Calon Mahasiswa",
    subtitle: "Penerimaan & Jalur Masuk",
    href: "/program-studi",
    description: "Jelajahi 21 program studi jenjang Sarjana, Sarjana Terapan, Magister, hingga Doktor.",
    icon: GraduationCap,
  },
  {
    title: "Mahasiswa Aktif",
    subtitle: "Portal & Layanan Akademik",
    href: "/akademik",
    description: "Akses kalender akademik, dokumen perkuliahan, pedoman skripsi, dan informasi beasiswa.",
    icon: BookOpen,
  },
  {
    title: "Dosen & Peneliti",
    subtitle: "Riset & Pengabdian",
    href: "/sdm/dosen",
    description: "Direktori keahlian pengajar, agenda penelitian unggulan, dan publikasi bereputasi.",
    icon: Users2,
  },
  {
    title: "Mitra & Alumni",
    subtitle: "Kolaborasi & Jejaring",
    href: "/kerjasama",
    description: "Peluang kerja sama industri, rekrutmen talenta muda, dan program mobilitas global.",
    icon: Handshake,
  },
]

export function QuickAccess() {
  return (
    <section
      aria-labelledby="quick-access-heading"
      className="border-b border-slate-200/80 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
              Gerbang Informasi Cepat
            </span>
            <h2 id="quick-access-heading" className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Akses Berdasarkan Kebutuhan
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 md:text-sm">
            Temukan layanan, kurikulum, dan informasi administrasi sesuai peran Anda dalam ekosistem kampus.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {targetAudiences.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.title}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#C2410C] hover:-translate-y-1 hover:shadow-card-hover"
                href={item.href}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-orange-50 text-[#C2410C] transition-colors group-hover:bg-[#C2410C] group-hover:text-white">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C2410C]"
                    />
                  </div>

                  <h3 className="mt-5 font-sans text-base font-bold tracking-tight text-slate-900 transition-colors group-hover:text-[#C2410C]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#EA580C]">
                    {item.subtitle}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#C2410C] group-hover:text-[#EA580C] transition-colors">
                  <span>Buka Halaman</span>
                  <span>&rarr;</span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}


