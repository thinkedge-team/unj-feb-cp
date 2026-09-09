import { ArrowDownToLine, FileText } from "lucide-react"

import type { DocumentItem } from "@/types/content"

export function DocumentCard({ document }: Readonly<{ readonly document: DocumentItem }>) {
  const format = document.fileUrl.endsWith(".pdf") ? "PDF" : "DOC"
  const year = new Intl.DateTimeFormat("id-ID", { year: "numeric" }).format(new Date(document.publishedAt))

  return (
    <article className="group flex h-full flex-col justify-between rounded-xl border border-orange-100/90 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#FE8C43] hover:-translate-y-1 hover:shadow-card-hover">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-orange-100/80 text-[#EA580C] shadow-2xs">
            <FileText aria-hidden="true" className="size-5" strokeWidth={1.75} />
          </div>
          <span className="rounded bg-orange-50 border border-orange-200/80 px-2 py-0.5 text-xs font-bold text-[#EA580C]">
            {format}
          </span>
        </div>

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          {document.category} / {year}
        </p>

        <h3 className="mt-1.5 font-sans text-base font-bold tracking-tight text-slate-900 leading-snug transition-colors group-hover:text-[#EA580C]">
          {document.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
          {document.description}
        </p>
      </div>

      <div className="mt-5 pt-3.5 border-t border-slate-100">
        <a
          className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#FE8C43] transition-colors"
          download
          href={document.fileUrl}
        >
          <ArrowDownToLine aria-hidden="true" className="size-3.5 text-[#FE8C43]" />
          <span>Unduh {format}</span>
        </a>
      </div>
    </article>
  )
}


