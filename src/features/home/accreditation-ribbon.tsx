import { Award, CheckCircle2, Globe, ShieldCheck, Sparkles } from "lucide-react"

const accreditationItems = [
  {
    title: "BAN-PT",
    badge: "Akreditasi Unggul",
    description: "Peringkat akreditasi tertinggi nasional",
    icon: ShieldCheck,
  },
  {
    title: "FIBAA",
    badge: "Internasional (Jerman)",
    description: "Standar mutu pendidikan tinggi Eropa",
    icon: Globe,
  },
  {
    title: "LAMEMBA",
    badge: "Terakreditasi Unggul",
    description: "Akreditasi mandiri rumpun ekonomi & bisnis",
    icon: Award,
  },
  {
    title: "AACSB",
    badge: "Business Education Member",
    description: "Jejaring sekolah bisnis global terkemuka",
    icon: Sparkles,
  },
  {
    title: "ISO 9001:2015",
    badge: "Sistem Manajemen Mutu",
    description: "Standar operasional & tata kelola teruji",
    icon: CheckCircle2,
  },
] as const

export function AccreditationRibbon() {
  return (
    <div className="relative border-y border-orange-200/90 bg-gradient-to-r from-orange-50 via-white to-orange-50 py-6 shadow-2xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="text-center lg:text-left shrink-0">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#EA580C]">
              Rekognisi &amp; Jaminan Mutu
            </span>
            <p className="font-sans text-sm font-bold text-slate-900">
              Standar Nasional &amp; Internasional
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 w-full lg:w-auto">
            {accreditationItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-2.5 rounded-xl border border-orange-200/80 bg-white px-3.5 py-2 shadow-xs transition-all duration-200 hover:border-[#FE8C43] hover:shadow-sm"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#EA580C] group-hover:bg-[#FE8C43] group-hover:text-white transition-colors">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-xs font-bold text-slate-900 leading-tight">
                      {item.title}
                    </p>
                    <p className="text-[10px] font-medium text-[#EA580C] truncate leading-tight mt-0.5">
                      {item.badge}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
