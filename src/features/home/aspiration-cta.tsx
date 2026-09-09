import { ArrowRight, HelpCircle } from "lucide-react"

export function AspirationCTA() {
  return (
    <section
      aria-labelledby="aspiration-cta-heading"
      className="border-b border-slate-200 bg-[#01383A] py-16 text-white md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Masa Depan Dimulai di Sini
            </span>
            <h2
              id="aspiration-cta-heading"
              className="font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Mulai Perjalanan Akademik Anda di FEB UNJ
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-teal-100/90 sm:text-base">
              Bergabunglah dengan komunitas intelektual yang menjunjung tinggi kebenaran ilmiah,
              etika profesional, dan komitmen memajukan kesejahteraan masyarakat melalui pendidikan unggul.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
            <a
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#C45F18] px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#80350B] sm:w-auto"
              href="/program-studi"
            >
              <span>Penerimaan Mahasiswa Baru</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-transparent px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              href="/kontak"
            >
              <HelpCircle aria-hidden="true" className="size-4 text-amber-300" />
              <span>Pusat Bantuan &amp; Kontak</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


