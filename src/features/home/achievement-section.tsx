import Image from "next/image"
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
      className="border-b border-[#F0E4D8] bg-[#FFF9F2] py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-orange-100 pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
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
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
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
              className="group flex h-full flex-col justify-between rounded-xl border border-orange-100/90 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#FE8C43] hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-orange-200 bg-orange-100/80 px-2.5 py-0.5 text-xs font-bold text-[#EA580C] transition-colors group-hover:bg-orange-200/80">
                    <Trophy aria-hidden="true" className="size-3.5 text-[#FE8C43]" />
                    <span>Tingkat {item.level}</span>
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-4 font-sans text-lg font-bold tracking-tight text-slate-900 leading-snug transition-colors group-hover:text-[#EA580C]">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs font-semibold text-[#EA580C]">
                  {item.recipient}
                </p>

                <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5 text-xs">
                <span className="text-slate-400 font-medium">{item.category}</span>
                <span className="flex items-center gap-1 font-semibold text-[#FE8C43]">
                  <Medal aria-hidden="true" className="size-3.5" />
                  Capaian Terpilih
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-orange-200/80 bg-gradient-to-r from-orange-50/70 via-white to-orange-50/40 p-6 sm:p-7 flex flex-col md:flex-row items-center gap-6 shadow-xs">
          <div className="relative aspect-[16/10] w-full md:w-64 shrink-0 overflow-hidden rounded-xl bg-orange-100 shadow-xs">
            <Image
              alt="Inovasi & Inkubator Bisnis Mahasiswa FEB UNJ"
              className="size-full object-cover"
              height={240}
              src="/images/home/digital-business.jpg"
              width={360}
            />
            <div className="absolute top-2 left-2 rounded bg-[#FE8C43] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-2xs">
              Karya Inovasi
            </div>
          </div>
          <div className="flex-1 space-y-1.5 text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C]">
              Inkubasi Bisnis &amp; Inovasi Digital
            </span>
            <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 leading-snug">
              Mendorong Karya &amp; Startup Mahasiswa Menuju Panggung Nasional
            </h3>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              Melalui Career Development Center (CDC) dan program inkubasi kewirausahaan FEB UNJ, tim mahasiswa mendapatkan pendampingan intensif, uji kelayakan bisnis, dan akses hibah Program Pembinaan Mahasiswa Wirausaha (P2MW).
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-orange-200/80 pt-6 text-center sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            FEB UNJ mendukung pendanaan dan pembimbingan intensif bagi setiap mahasiswa yang berkompetisi.
          </p>
          <a
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA580C] sm:mt-0 hover:text-[#FE8C43] transition-colors"
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

