import Image from "next/image"
import { ArrowRight, Download, Search, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative border-b border-slate-200 bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="text-[#C45F18] font-bold">FEB UNJ</span>
              <span className="text-slate-300">|</span>
              <span className="inline-flex items-center gap-1 text-slate-600">
                <ShieldCheck className="size-3.5 text-[#006569]" />
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
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#006569] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#004e51]"
                href="/program-studi"
              >
                <span>Jelajahi Program Studi</span>
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                href="/dokumen"
              >
                <Download aria-hidden="true" className="size-4 text-slate-500" />
                <span>Unduh Pedoman Akademik</span>
              </a>
            </div>

            <form
              action="/informasi"
              className="mt-4 flex max-w-md items-center rounded-lg border border-slate-200 bg-slate-50/70 p-1 transition-colors focus-within:border-[#006569] focus-within:bg-white focus-within:ring-1 focus-within:ring-[#006569]"
              method="get"
              role="search"
            >
              <label className="sr-only" htmlFor="homepage-search-input">
                Cari informasi, program studi, atau agenda akademik
              </label>
              <Search aria-hidden="true" className="ml-3 size-4 text-slate-400" />
              <input
                className="w-full border-none bg-transparent px-3 py-1.5 text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none sm:text-sm"
                id="homepage-search-input"
                name="q"
                placeholder="Cari program studi, riset, atau berita..."
                type="search"
              />
              <button
                className="inline-flex min-h-8 items-center justify-center rounded-md bg-[#006569] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#004e51]"
                type="submit"
              >
                Cari
              </button>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                <Image
                  alt="Kampus Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta"
                  className="h-full w-full object-cover"
                  height={720}
                  priority
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                  width={960}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
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
                    <a className="font-semibold text-amber-300 hover:underline inline-flex items-center gap-1" href="/profil/tentang-feb">
                      Profil <ArrowRight className="size-3" />
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


