import { ArrowRight, Medal, Sparkles, Trophy } from "lucide-react"

interface AchievementItem {
  readonly title: string
  readonly category: string
  readonly level: string
  readonly year: string
  readonly recipient: string
  readonly description: string
}

const achievements: readonly AchievementItem[] = [
  {
    title: "Medali Emas Pekan Kreativitas Mahasiswa (PKM-RSH)",
    category: "Riset Sosial Humaniora",
    level: "Nasional",
    year: "2025",
    recipient: "Tim Mahasiswa S1 Manajemen & S1 Akuntansi",
    description: "Kajian empiris model mitigasi risiko pembiayaan perbankan syariah bagi pelaku usaha mikro perempuan perkotaan.",
  },
  {
    title: "Juara 1 National Business Case Competition OJK",
    category: "Inovasi Keuangan Digital",
    level: "Nasional",
    year: "2025",
    recipient: "Delegasi Mahasiswa Bisnis Digital FEB UNJ",
    description: "Solusi terintegrasi sistem scoring kredit alternatif berbasis jejak transaksi e-commerce dan literasi pajak.",
  },
  {
    title: "Best Paper Award pada Asia-Pacific Economics Forum",
    category: "Publikasi Ilmiah Bereputasi",
    level: "Internasional",
    year: "2024",
    recipient: "Prof. Dr. Hendra Setiawan & Tim Peneliti",
    description: "Analisis dampak pengungkapan ESG terhadap biaya modal BUMN di negara-negara berkembang Asia Tenggara.",
  },
  {
    title: "Juara Umum Olimpiade Akuntansi Nasional",
    category: "Kompetisi Bidang Keilmuan",
    level: "Nasional",
    year: "2024",
    recipient: "Himpunan Mahasiswa Akuntansi (HIMA AK)",
    description: "Dominasi pada kategori audit analitis, akuntansi keuangan menengah, dan studi kasus perpajakan.",
  },
]

export function AchievementSection() {
  return (
    <section
      aria-labelledby="achievement-section-heading"
      className="border-b border-slate-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C45F18]">
              Rekam Jejak Keunggulan
            </span>
            <h2
              id="achievement-section-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Prestasi &amp; Capaian Unggul
            </h2>
          </div>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#006569] hover:text-[#C45F18] transition-colors"
            href="/profil/prestasi"
          >
            <span>Arsip Lengkap Prestasi</span>
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#006569] hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                    <Trophy aria-hidden="true" className="size-3.5 text-amber-600" />
                    <span>Tingkat {item.level}</span>
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-4 font-sans text-lg font-bold tracking-tight text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs font-semibold text-[#006569]">
                  {item.recipient}
                </p>

                <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5 text-xs">
                <span className="text-slate-400 font-medium">{item.category}</span>
                <span className="flex items-center gap-1 font-semibold text-[#C45F18]">
                  <Medal aria-hidden="true" className="size-3.5" />
                  Capaian Terpilih
                </span>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-10 border-t border-slate-200/80 pt-6 text-center sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            FEB UNJ mendukung pendanaan dan pembimbingan intensif bagi setiap mahasiswa yang berkompetisi.
          </p>
          <a
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-900 sm:mt-0 hover:text-copper transition-colors"
            href="/kemahasiswaan/prestasi"
          >
            <span>Prestasi Kemahasiswaan</span>
            <ArrowRight className="size-3" />
          </a>
        </div>
      </div>
    </section>
  )
}

