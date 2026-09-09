import Image from "next/image"
import { ArrowRight, Award, Compass, Globe2 } from "lucide-react"

export function AcademicHighlights() {
  return (
    <section
      aria-labelledby="academic-highlights-heading"
      className="border-b border-[#F0E4D8] bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
              Tonggak Mutu &amp; Diferensiasi
            </span>
            <h2
              id="academic-highlights-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Akreditasi &amp; Rekognisi Internasional
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              FEB UNJ secara konsisten mendorong internasionalisasi melalui penyelarasan kurikulum
              dengan badan akreditasi bereputasi Eropa dan Amerika Serikat, serta memperluas
              fasilitas riset mutakhir bagi dosen dan mahasiswa.
            </p>

            <div className="border-l-3 border-[#FE8C43] bg-orange-50/60 p-4 rounded-r-lg text-xs italic leading-relaxed text-slate-700">
              &ldquo;Transformasi akademik diarahkan untuk menghasilkan riset berdampak tinggi dan
              lulusan berdaya saing pada panggung ekonomi regional Asia Tenggara.&rdquo;
            </div>

            <div className="pt-2">
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-[#F97316] to-[#FE8C43] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:from-[#EA580C] hover:to-[#F97316]"
                href="/internasional"
              >
                <span>Program Internasional &amp; Kolaborasi</span>
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div className="group overflow-hidden rounded-xl border border-orange-100/90 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#FE8C43] hover:shadow-card-hover hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full sm:w-48 shrink-0 overflow-hidden rounded-lg bg-orange-50">
                  <Image
                    alt="Akreditasi Internasional FIBAA FEB UNJ"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    height={240}
                    src="/images/home/international-study.jpg"
                    width={320}
                  />
                  <div className="absolute top-2 left-2">
                    <span className="rounded bg-[#FE8C43] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-xs">
                      Global FIBAA
                    </span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-orange-100/80 text-[#EA580C]">
                      <Globe2 aria-hidden="true" className="size-4" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C]">
                      Standar Eropa &amp; Global
                    </span>
                  </div>
                  <h3 className="mt-2 font-sans text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#EA580C] transition-colors">
                    Akreditasi Internasional FIBAA &amp; Peta Jalan AACSB
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    Sejumlah program studi unggulan telah meraih akreditasi premium dari Foundation for
                    International Business Administration Accreditation (FIBAA) Jerman, dan kini tengah
                    menapaki proses akreditasi prestisius AACSB International.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] font-semibold">
                    <span className="rounded bg-orange-100/80 border border-orange-200 px-2 py-0.5 text-[#EA580C]">
                      FIBAA Accredited
                    </span>
                    <span className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-slate-700">
                      AACSB Member
                    </span>
                    <span className="rounded bg-amber-50 border border-amber-200 px-2 py-0.5 text-amber-800">
                      LAMEMBA Unggul
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl border border-orange-100/90 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#FE8C43] hover:shadow-card-hover hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full sm:w-48 shrink-0 overflow-hidden rounded-lg bg-orange-50">
                  <Image
                    alt="Laboratorium Pasar Modal Terpadu FEB UNJ"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    height={240}
                    src="/images/home/academic-lab.jpg"
                    width={320}
                  />
                  <div className="absolute top-2 left-2">
                    <span className="rounded bg-[#FE8C43] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-xs">
                      Fasilitas Lab
                    </span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-orange-100/80 text-[#EA580C]">
                      <Compass aria-hidden="true" className="size-4" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C]">
                      Infrastruktur Riset
                    </span>
                  </div>
                  <h3 className="mt-2 font-sans text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#EA580C] transition-colors">
                    Laboratorium Pasar Modal &amp; Analitika Bisnis Terpadu
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    Fasilitas Galeri Investasi BEI, laboratorium akuntansi forensik, serta perangkat lunak
                    analisis ekonometrika berstandar industri membekali mahasiswa dengan kemampuan empiris nyata.
                  </p>
                  <div className="mt-3 flex items-center gap-4 border-t border-orange-100/80 pt-2.5 text-xs font-bold text-[#EA580C]">
                    <a
                      className="inline-flex items-center gap-1 hover:text-[#FE8C43] transition-colors"
                      href="/profil/fasilitas"
                    >
                      <span>Lihat Fasilitas Kampus</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                    <a
                      className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors"
                      href="/riset"
                    >
                      <span>Pusat Kajian</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl border border-orange-100/90 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#FE8C43] hover:shadow-card-hover hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full sm:w-48 shrink-0 overflow-hidden rounded-lg bg-orange-50">
                  <Image
                    alt="Kebijakan Ekonomi Hijau &amp; Riset Inovasi"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    height={240}
                    src="/images/home/research-innovation.jpg"
                    width={320}
                  />
                  <div className="absolute top-2 left-2">
                    <span className="rounded bg-[#FE8C43] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-xs">
                      Riset &amp; Hilirisasi
                    </span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-orange-100/80 text-[#EA580C]">
                      <Award aria-hidden="true" className="size-4" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C]">
                      Reputasi &amp; Dampak
                    </span>
                  </div>
                  <h3 className="mt-2 font-sans text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#EA580C] transition-colors">
                    Kebijakan Ekonomi Hijau &amp; Inkubasi Kewirausahaan Mahasiswa
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    Fakultas melahirkan rekomendasi kebijakan ekonomi berkelanjutan bagi pemangku kepentingan
                    sekaligus mendampingi puluhan rintisan usaha mahasiswa melalui program akselerator bisnis.
                  </p>
                  <div className="mt-3 border-t border-orange-100/80 pt-2.5">
                    <a
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#EA580C] hover:text-[#FE8C43] transition-colors"
                      href="/profil/prestasi"
                    >
                      <span>Daftar Rekam Jejak Prestasi</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


