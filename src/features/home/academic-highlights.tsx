import { ArrowRight, Award, Compass, Globe2, Sparkles } from "lucide-react"

export function AcademicHighlights() {
  return (
    <section
      aria-labelledby="academic-highlights-heading"
      className="border-b border-slate-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C45F18]">
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

            <div className="border-l-2 border-[#C2410C] bg-slate-50 p-4 rounded-r-lg text-xs italic leading-relaxed text-slate-700">
              &ldquo;Transformasi akademik diarahkan untuk menghasilkan riset berdampak tinggi dan
              lulusan berdaya saing pada panggung ekonomi regional Asia Tenggara.&rdquo;
            </div>

            <div className="pt-2">
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#C2410C] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#9A3412]"
                href="/internasional"
              >
                <span>Program Internasional &amp; Kolaborasi</span>
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 ease-out hover:border-[#C2410C]/60 hover:shadow-card-hover hover:-translate-y-0.5">
              <div className="flex items-center gap-3.5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-orange-50 text-[#C2410C]">
                  <Globe2 aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C45F18]">
                    Standar Eropa &amp; Global
                  </span>
                  <h3 className="font-sans text-lg font-bold tracking-tight text-slate-900">
                    Akreditasi Internasional FIBAA &amp; Peta Jalan AACSB
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Sejumlah program studi unggulan telah meraih akreditasi premium dari Foundation for
                International Business Administration Accreditation (FIBAA) Jerman, dan kini tengah
                menapaki proses akreditasi prestisius AACSB International.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-emerald-800">
                  FIBAA Accredited
                </span>
                <span className="rounded bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-slate-700">
                  AACSB Member
                </span>
                <span className="rounded bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-amber-800">
                  LAMEMBA Unggul
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 ease-out hover:border-[#C2410C]/60 hover:shadow-card-hover hover:-translate-y-0.5">
              <div className="flex items-center gap-3.5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-orange-50 text-[#C2410C]">
                  <Compass aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#EA580C]">
                    Infrastruktur Riset
                  </span>
                  <h3 className="font-sans text-lg font-bold tracking-tight text-slate-900">
                    Laboratorium Pasar Modal &amp; Analitika Bisnis Terpadu
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Fasilitas Galeri Investasi BEI, laboratorium akuntansi forensik, serta perangkat lunak
                analisis ekonometrika berstandar industri membekali mahasiswa dengan kemampuan empiris nyata.
              </p>
              <div className="mt-4 flex items-center gap-6 border-t border-slate-100 pt-3.5">
                <a
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
                  href="/profil/fasilitas"
                >
                  <span>Lihat Fasilitas Kampus</span>
                  <ArrowRight className="size-3.5" />
                </a>
                <a
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                  href="/riset"
                >
                  <span>Pusat Kajian &amp; Riset</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 ease-out hover:border-[#C2410C]/60 hover:shadow-card-hover hover:-translate-y-0.5">
              <div className="flex items-center gap-3.5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-orange-50 text-[#C2410C]">
                  <Award aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#EA580C]">
                    Reputasi &amp; Dampak
                  </span>
                  <h3 className="font-sans text-lg font-bold tracking-tight text-slate-900">
                    Kebijakan Ekonomi Hijau &amp; Inkubasi Kewirausahaan Mahasiswa
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Fakultas melahirkan rekomendasi kebijakan ekonomi berkelanjutan bagi pemangku kepentingan
                sekaligus mendampingi puluhan rintisan usaha mahasiswa melalui program akselerator bisnis.
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3.5">
                <a
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EA580C] hover:underline transition-colors"
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
    </section>
  )
}


