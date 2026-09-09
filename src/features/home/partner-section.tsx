import { ArrowRight, Building2, Sparkles } from "lucide-react"

import { partners } from "@/data/partners"

export function PartnerSection() {
  return (
    <section
      aria-labelledby="partner-section-heading"
      className="border-b border-slate-200 bg-slate-50/50 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C45F18]">
              Ekosistem Kolaboratif
            </span>
            <h2
              id="partner-section-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Jejaring Kemitraan Strategis
            </h2>
          </div>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#006569] hover:text-[#C45F18] transition-colors"
            href="/kerjasama"
          >
            <span>Kemitraan &amp; Industri</span>
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.slug}
              className="group flex min-h-28 flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-teal-600/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-900 transition-colors">
                <Building2 aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <span className="mt-2.5 text-xs font-bold text-slate-800 line-clamp-2 leading-tight group-hover:text-teal-950 transition-colors">
                {partner.name}
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-copper">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3 text-center sm:text-left">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-1">
            <span className="font-sans text-3xl font-bold text-slate-900 sm:text-4xl tabular-nums">40+</span>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C45F18]">
              Perjanjian Kerja Sama Aktif
            </p>
            <p className="text-xs leading-relaxed text-slate-600">
              MoU dan MoA dengan kementerian, BUMN, perbankan, dan swasta.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-1">
            <span className="font-sans text-3xl font-bold text-slate-900 sm:text-4xl tabular-nums">100%</span>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C45F18]">
              Fasilitasi Magang MBKM
            </p>
            <p className="text-xs leading-relaxed text-slate-600">
              Seluruh mahasiswa tingkat akhir memperoleh konversi hingga 20 SKS.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-1">
            <span className="font-sans text-3xl font-bold text-slate-900 sm:text-4xl tabular-nums">12+</span>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C45F18]">
              Universitas Mitra Dunia
            </p>
            <p className="text-xs leading-relaxed text-slate-600">
              Program credit transfer, joint research, dan dosen tamu asing.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

