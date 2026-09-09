import Image from "next/image"
import { ArrowRight, Building2, Laptop, Library, TrendingUp } from "lucide-react"

const facilities = [
  {
    title: "Galeri Investasi BEI & Lab Pasar Modal",
    category: "Fasilitas Riset Finansial",
    description: "Pusat simulasi transaksi saham real-time dan analisis ekonometrika bekerjasama dengan PT Bursa Efek Indonesia dan MNC Sekuritas.",
    image: "/images/home/academic-lab.jpg",
    icon: TrendingUp,
    badge: "Bursa Efek Indonesia",
  },
  {
    title: "Smart Hybrid Classroom & Studio",
    category: "Infrastruktur Pembelajaran",
    description: "Ruang perkuliahan interaktif berbasis teknologi cerdas dengan konektivitas audio-visual canggih untuk blended learning.",
    image: "/images/home/smart-classroom.jpg",
    icon: Laptop,
    badge: "Hybrid Technology",
  },
  {
    title: "Perpustakaan Riset & Digital Commons",
    category: "Sumber Belajar Ilmiah",
    description: "Akses ribuan pangkalan data jurnal internasional terindeks Scopus & ProQuest serta ruang baca privat yang nyaman.",
    image: "/images/home/campus-library.jpg",
    icon: Library,
    badge: "E-Library Terpadu",
  },
  {
    title: "Inkubator Bisnis Digital & CDC",
    category: "Pusat Karir & Kewirausahaan",
    description: "Ruang kolaborasi kreatif mahasiswa merintis startup, inkubasi proposal P2MW, dan rekrutmen magang industri BUMN/Swasta.",
    image: "/images/home/digital-business.jpg",
    icon: Building2,
    badge: "Career Development",
  },
] as const

export function CampusFacilities() {
  return (
    <section
      aria-labelledby="campus-facilities-heading"
      className="relative overflow-hidden border-b border-[#F0E4D8] bg-white py-16 md:py-20"
    >
      <div className="absolute inset-0 bg-academic-grid opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-orange-100 pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
              Sarana &amp; Prasarana Unggul
            </span>
            <h2
              id="campus-facilities-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Fasilitas Kampus Modern
            </h2>
            <div className="mt-2.5 flex items-center gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-[#F97316] to-[#FE8C43]" />
              <span className="h-1.5 w-3 rounded-full bg-orange-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-orange-200" />
            </div>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Mendukung ekosistem belajar berstandar internasional dengan laboratorium komputasi mutakhir, perpustakaan digital, dan sarana kreativitas mahasiswa.
            </p>
          </div>

          <a
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#FE8C43] transition-colors"
            href="/profil/fasilitas"
          >
            <span>Semua Fasilitas Kampus</span>
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-orange-100/90 border-t-4 border-t-[#FE8C43] bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#FE8C43] hover:shadow-card-hover"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-orange-50">
                    <Image
                      alt={item.title}
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      height={240}
                      src={item.image}
                      width={380}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="rounded bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#EA580C] shadow-xs backdrop-blur-xs">
                        {item.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white flex items-center gap-2">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[#FE8C43] text-white shadow-xs">
                        <Icon className="size-4" />
                      </span>
                      <span className="text-[11px] font-semibold truncate text-white/90">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-sans text-base font-bold tracking-tight text-slate-900 group-hover:text-[#EA580C] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <a
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#EA580C] group-hover:text-[#FE8C43] transition-colors border-t border-slate-100 pt-3 w-full"
                    href="/profil/fasilitas"
                  >
                    <span>Jelajahi Sarana</span>
                    <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
