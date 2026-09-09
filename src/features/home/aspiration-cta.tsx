import { ArrowRight, HelpCircle } from "lucide-react"

export function AspirationCTA() {
  return (
    <section
      aria-labelledby="aspiration-cta-heading"
      className="border-b border-orange-300 bg-gradient-to-r from-[#EA580C] via-[#FE8C43] to-[#F97316] py-16 text-white md:py-20 shadow-xl shadow-orange-500/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-950 bg-white/25 px-2.5 py-1 rounded-md inline-block">
              Masa Depan Dimulai di Sini
            </span>
            <h2
              id="aspiration-cta-heading"
              className="font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Mulai Perjalanan Akademik Anda di FEB UNJ
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-white/95 font-medium sm:text-base">
              Bergabunglah dengan komunitas intelektual yang menjunjung tinggi kebenaran ilmiah,
              etika profesional, dan komitmen memajukan kesejahteraan masyarakat melalui pendidikan unggul.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
            <a
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-2.5 text-center text-sm font-bold text-[#EA580C] shadow-md transition-all hover:bg-orange-50 hover:text-[#C2410C] sm:w-auto active:scale-[0.98]"
              href="/program-studi"
            >
              <span>Penerimaan Mahasiswa Baru</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border-2 border-white/80 bg-white/10 backdrop-blur-xs px-6 py-2.5 text-center text-sm font-bold text-white transition-all hover:bg-white/20 sm:w-auto active:scale-[0.98]"
              href="/kontak"
            >
              <HelpCircle aria-hidden="true" className="size-4 text-white" />
              <span>Pusat Bantuan &amp; Kontak</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


