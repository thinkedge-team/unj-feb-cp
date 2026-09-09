import Image from "next/image"
import { ArrowRight, Award, Download, Search, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-[#F0E4D8] bg-[#FFF9F2] py-12 md:py-16 lg:py-20"
    >
      {/* Background Academic Grid & Ambient Light Orbs */}
      <div className="absolute inset-0 bg-academic-grid opacity-75 pointer-events-none [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,#000_60%,transparent_100%)]" />
      <div className="absolute -top-32 -right-32 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-orange-300/25 via-amber-200/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-orange-400/20 via-orange-200/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-lg border border-orange-200/80 bg-orange-100/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
              <span className="text-[#EA580C] font-bold">FEB UNJ</span>
              <span className="text-orange-300">|</span>
              <span className="inline-flex items-center gap-1 text-slate-700">
                <ShieldCheck className="size-3.5 text-[#FE8C43]" />
                Akreditasi Unggul BAN-PT
              </span>
            </div>

            <h1
              id="hero-title"
              className="font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12]"
            >
              Mencerdaskan, Memartabatkan, Menggerakkan Ekonomi Berkelanjutan
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Pusat keunggulan pendidikan ekonomi, manajemen, dan akuntansi yang memadukan
              integritas akademik berstandar internasional dengan komitmen nyata mendorong
              transformasi ekonomi berkeadilan dan berwawasan lingkungan.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#F97316] to-[#FE8C43] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:from-[#EA580C] hover:to-[#F97316] hover:shadow-xl active:scale-[0.98]"
                href="/program-studi"
              >
                <span>Jelajahi Program Studi</span>
                <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-[#FE8C43] bg-white px-5 py-2.5 text-sm font-bold text-[#EA580C] shadow-2xs transition-all duration-200 hover:border-[#F97316] hover:bg-orange-50 hover:text-[#C2410C] active:scale-[0.98]"
                href="/dokumen"
              >
                <Download aria-hidden="true" className="size-4 text-[#EA580C]" />
                <span>Unduh Pedoman Akademik</span>
              </a>
            </div>

            <form
              action="/informasi"
              className="mt-4 flex max-w-md items-center rounded-lg border border-orange-300/80 bg-white/95 p-1 transition-all duration-200 focus-within:border-[#FE8C43] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#FE8C43]/25 shadow-2xs"
              method="get"
              role="search"
            >
              <label className="sr-only" htmlFor="homepage-search-input">
                Cari informasi, program studi, atau agenda akademik
              </label>
              <Search aria-hidden="true" className="ml-3 size-4 text-[#FE8C43]" />
              <input
                className="w-full border-none bg-transparent px-3 py-1.5 text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none sm:text-sm"
                id="homepage-search-input"
                name="q"
                placeholder="Cari program studi, riset, atau berita..."
                type="search"
              />
              <button
                className="inline-flex min-h-8 items-center justify-center rounded-md bg-gradient-to-r from-[#F97316] to-[#FE8C43] px-4 text-xs font-bold text-white transition-all duration-150 hover:from-[#EA580C] hover:to-[#F97316] active:scale-[0.97] shadow-xs"
                type="submit"
              >
                Cari
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="group overflow-hidden rounded-2xl border-2 border-orange-200/80 bg-white shadow-xl shadow-orange-500/10 transition-all duration-300 hover:shadow-2xl hover:border-[#FE8C43]">
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11]">
                <Image
                  alt="Kampus Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  height={720}
                  priority
                  src="/images/home/hero-students.jpg"
                  width={960}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                
                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-white/95 px-3 py-1 text-[11px] font-bold text-[#EA580C] shadow-md backdrop-blur-xs">
                  <span className="size-2 rounded-full bg-[#FE8C43] animate-pulse" />
                  <span>PMB 2026/2027</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-300">
                    Kampus A Rawamangun, Jakarta Timur
                  </span>
                  <p className="mt-1 font-sans text-base font-bold sm:text-lg">
                    Gedung M — Fakultas Ekonomi dan Bisnis
                  </p>
                  <div className="mt-2 flex items-center justify-between border-t border-white/20 pt-2 text-xs text-slate-200">
                    <span>21 Program Studi</span>
                    <span className="text-white/40">•</span>
                    <span>120+ Dosen &amp; Peneliti</span>
                    <span className="text-white/40">•</span>
                    <a className="font-bold text-orange-300 hover:text-white hover:underline inline-flex items-center gap-1" href="/profil/tentang-feb">
                      Profil <ArrowRight className="size-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden xl:flex items-center gap-2.5 rounded-xl border border-orange-200/90 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
              <div className="flex size-9 items-center justify-center rounded-lg bg-orange-100 text-[#EA580C]">
                <Award className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Standar Mutu Internasional</p>
                <p className="text-[10px] font-bold text-[#EA580C]">BAN-PT &bull; LAMEMBA &bull; FIBAA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


