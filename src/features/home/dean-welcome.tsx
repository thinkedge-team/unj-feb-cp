import Image from "next/image"
import { ArrowRight, Award, Quote } from "lucide-react"

export function DeanWelcome() {
  return (
    <section
      aria-labelledby="dean-welcome-heading"
      className="relative overflow-hidden border-b border-[#F0E4D8] bg-[#FFF9F2] py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-academic-dots opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_50%,transparent_100%)]" />
      <div className="absolute top-1/2 -right-24 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-300/20 blur-3xl pointer-events-none" />

      {/* Authentic University Emblem Background Watermark */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none hidden md:block">
        <Image
          alt="Watermark Lambang FEB UNJ"
          className="size-[580px] object-contain"
          height={580}
          src="/images/logo/feb-logo.png"
          width={580}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="group overflow-hidden rounded-2xl border border-orange-100/90 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:shadow-card-hover hover:border-[#FE8C43]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                <img
                  alt="Potret Dekan Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta"
                  className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  height="450"
                  src="/images/lecturers/dekan.jpg"
                  width="360"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1 rounded bg-[#FE8C43] px-2.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                    <Award className="size-3" />
                    Dekan FEB UNJ
                  </span>
                  <h3 className="mt-2 font-sans text-xl font-bold tracking-tight text-white">
                    Prof. Dr. M. Yusuf Santoso, M.M.
                  </h3>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold text-slate-700">
                  Guru Besar Bidang Manajemen &amp; Kepemimpinan Organisasi
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <div className="font-sans text-base font-bold text-slate-900">
                      Prof. Dr. M. Yusuf Santoso
                    </div>
                    <span className="text-[10px] text-slate-400">
                      Dekan Periode Berjalan
                    </span>
                  </div>

                  <a
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-orange-200 px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-orange-50/80 hover:text-[#EA580C] hover:border-[#FE8C43] transition-colors"
                    href="/profil/pimpinan"
                  >
                    <span>Pimpinan Fakultas</span>
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-orange-100/90 border border-orange-200/80 px-3 py-1 text-xs font-semibold text-[#EA580C]">
              <Quote aria-hidden="true" className="size-3.5 text-[#FE8C43]" />
              <span>Sambutan Dekan</span>
            </div>

            <h2
              id="dean-welcome-heading"
              className="font-sans text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              Selamat Datang di Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-slate-600">
              <p className="text-lg font-medium text-slate-900 border-l-4 border-[#FE8C43] pl-4 py-1">
                &ldquo;Pendidikan tinggi ekonomi tidak semata-mata mencetak lulusan yang piawai dalam hitungan angka, melainkan membentuk insan berkarakter yang mampu menggerakkan keadilan sosial dan keberlanjutan bangsa.&rdquo;
              </p>
              <p>
                Sebagai salah satu fakultas terkemuka di lingkungan Universitas Negeri Jakarta,
                FEB UNJ memikul tanggung jawab peradaban untuk terus melahirkan sarjana, magister,
                dan doktor di bidang manajemen, akuntansi, dan pendidikan ekonomi yang memiliki ketangguhan moral,
                daya nalar kritis, serta kecakapan digital masa depan.
              </p>
              <p>
                Kami memperkokoh kurikulum berstandar internasional yang terhubung langsung dengan dinamika
                sektor keuangan, korporasi global, dan kebijakan publik. Melalui integrasi laboratorium modern,
                hibah riset kolaboratif, serta program mobilitas mahasiswa ke universitas mitra di luar negeri,
                kami memastikan setiap sivitas akademika memiliki ruang optimal untuk berinovasi dan berkontribusi nyata.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-orange-100 pt-6">
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-[#F97316] to-[#FE8C43] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:from-[#EA580C] hover:to-[#F97316]"
                href="/profil/tentang-feb"
              >
                <span>Visi &amp; Misi Fakultas</span>
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </a>
              <a
                className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#EA580C] transition-colors"
                href="/profil/sejarah"
              >
                <span>Sejarah Fakultas</span>
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


