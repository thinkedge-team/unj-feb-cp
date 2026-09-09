import { ArrowDownToLine, FileText } from "lucide-react"

import type { DocumentItem } from "@/types/content"

export function DocumentCard({ document }: Readonly<{ readonly document: DocumentItem }>) {
  const format = document.fileUrl.endsWith(".pdf") ? "PDF" : "DOC"
  const year = new Intl.DateTimeFormat("id-ID", { year: "numeric" }).format(new Date(document.publishedAt))

  return (
    <article className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#006569] hover:-translate-y-1 hover:shadow-card-hover">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-[#006569]">
            <FileText aria-hidden="true" className="size-5" strokeWidth={1.75} />
          </div>
          <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
            {format}
          </span>
        </div>

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          {document.category} / {year}
        </p>

        <h3 className="mt-1.5 font-sans text-base font-bold tracking-tight text-slate-900 leading-snug transition-colors group-hover:text-[#006569]">
          {document.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
          {document.description}
        </p>
      </div>

      <div className="mt-5 pt-3.5 border-t border-slate-100">
        <a
          className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#006569] hover:text-[#C45F18] transition-colors"
          download
          href={document.fileUrl}
        >
          <ArrowDownToLine aria-hidden="true" className="size-3.5" />
          <span>Unduh {format}</span>
        </a>
      </div>
    </article>
  )
}


