import { ArrowRight, Camera, Compass, HeartHandshake, Sparkles, Video } from "lucide-react"

export function SocialLifeSection() {
  return (
    <section
      aria-labelledby="social-life-heading"
      className="border-b border-[#F0E4D8] bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
              Komunitas &amp; Pengembangan Diri
            </span>
            <h2
              id="social-life-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Dinamika Kampus &amp; Kehidupan Mahasiswa
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Lingkungan belajar di FEB UNJ menghidupkan keseimbangan antara ketajaman intelektual
              dan kepemimpinan sosial. Mahasiswa aktif terlibat dalam organisasi otonom,
              komunitas minat bakat, inkubator wirausaha, serta aksi pengabdian masyarakat di berbagai pelosok.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 rounded-2xl border border-orange-100 bg-[#FFFDFB] p-4 transition-colors hover:bg-orange-50/60">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-100/70 text-orange-900">
                  <HeartHandshake aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Organisasi Mahasiswa (BEM FEB UNJ &amp; Lembaga Legislatif)
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Wadah advokasi, pengkaderan kepemimpinan, dan penyaluran aspirasi mahasiswa yang berintegritas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-orange-100 bg-[#FFFDFB] p-4 transition-colors hover:bg-orange-50/60">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange-100/70 text-orange-900">
                  <Compass aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Komunitas Studi &amp; Tax Center
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Klub Pasar Modal (KSPM), Tax Center relawan pajak, dan laboratorium debat ekonomi bertaraf nasional.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-[#7C2D12] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#9A3412] hover:shadow-lg"
                href="/kemahasiswaan/organisasi"
              >
                <span>Jelajahi Seluruh Lembaga Mahasiswa</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </span>
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#EA580C]">
                Kanal Resmi Media Sosial
              </span>
              <p className="mt-2 font-sans text-2xl font-bold tracking-tight text-slate-900">
                Terhubung Bersama Komunitas FEB UNJ
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Ikuti perkembangan terkini jadwal perkuliahan, liputan kegiatan akademik, dan pencapaian sivitas di media sosial resmi kami.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  className="group flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors hover:bg-white hover:border-[#C2410C]"
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-orange-50 text-[#EA580C]">
                      <Camera aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Instagram</p>
                      <p className="text-xs text-slate-500">@feunjofficial (Warta &amp; Galeri Kampus)</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#C2410C] group-hover:text-[#EA580C] transition-colors">
                    Ikuti &rarr;
                  </span>
                </a>

                <a
                  className="group flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors hover:bg-white hover:border-[#C2410C]"
                  href="https://youtube.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                      <Video aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">YouTube</p>
                      <p className="text-xs text-slate-500">FEB UNJ Official (Kuliah Umum &amp; Seminar)</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#C2410C] group-hover:text-[#EA580C] transition-colors">
                    Langganan &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


