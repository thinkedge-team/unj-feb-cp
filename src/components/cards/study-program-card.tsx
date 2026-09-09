import { ArrowRight } from "lucide-react"

import type { DegreeLevel, StudyProgram } from "@/types/content"

export function degreeBadge(degree: DegreeLevel): string {
  switch (degree) {
    case "Doktor":
      return "S3"
    case "Magister":
      return "S2"
    case "Sarjana":
      return "S1"
    case "Sarjana Terapan":
      return "D4"
    case "Diploma":
      return "D3"
    default:
      return degree
  }
}

export function StudyProgramCard({ program }: Readonly<{ readonly program: StudyProgram }>) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-xl border border-orange-100/90 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#FE8C43] hover:-translate-y-1 hover:shadow-card-hover">
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-md bg-[#FE8C43] font-sans text-xs font-bold text-white shadow-2xs">
              {degreeBadge(program.degree)}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {program.degree}
            </span>
          </div>
          <span className="inline-flex items-center rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-800">
            {program.accreditation}
          </span>
        </div>

        <h3 className="mt-4 font-sans text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-[#EA580C]">
          {program.name}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
          {program.vision}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs text-slate-400">8 Semester</span>
        <a
          className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#FE8C43] transition-colors"
          href={`/program-studi/${program.slug}`}
        >
          <span>Lihat Program</span>
          <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  )
}



