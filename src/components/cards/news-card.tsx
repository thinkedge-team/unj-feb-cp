import { ArrowRight, Clock3, Landmark } from "lucide-react"

import type { NewsArticle } from "@/types/content"

export type NewsCardProps = Readonly<{
  readonly article: NewsArticle
  readonly href?: string
  readonly variant?: "vertical" | "horizontal"
}>

export function NewsCard({ article, href, variant = "vertical" }: NewsCardProps) {
  const date = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(article.publishedAt))
  const targetHref = href ?? `/berita/${article.slug}`

  if (variant === "horizontal") {
    return (
      <article className="group flex h-full items-center gap-3.5 sm:gap-4 overflow-hidden rounded-xl border border-orange-100/90 border-l-4 border-l-[#FE8C43] bg-white p-3.5 shadow-xs transition-all duration-300 ease-out hover:border-[#FE8C43] hover:-translate-y-0.5 hover:shadow-card-hover sm:p-4">
        <div className="relative aspect-[4/3] w-28 sm:w-36 shrink-0 overflow-hidden rounded-lg bg-slate-100">
          {article.image ? (
            <img
              alt={`Foto berita ${article.title}`}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              height="160"
              src={article.image}
              width="210"
            />
          ) : (
            <div className="flex size-full items-center justify-center text-orange-800">
              <Landmark aria-hidden="true" className="size-6" strokeWidth={1.25} />
            </div>
          )}
          <div className="absolute left-2 top-2">
            <span className="rounded bg-[#FE8C43] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-2xs">
              {article.category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between min-w-0 h-full py-0.5">
          <div>
            <p className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
              <time dateTime={article.publishedAt}>{date}</time>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock3 aria-hidden="true" className="size-3" />
                {article.readingMinutes} min
              </span>
            </p>

            <h3 className="mt-1 font-sans text-sm sm:text-base font-bold tracking-tight text-slate-900 leading-snug transition-colors group-hover:text-[#EA580C] line-clamp-2">
              <a href={targetHref}>{article.title}</a>
            </h3>

            <p className="mt-1 text-xs text-slate-500 line-clamp-1 sm:line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="mt-2 flex items-center justify-between border-t border-slate-100/80 pt-2">
            <span className="text-[10px] font-medium text-slate-400">Warta Akademik</span>
            <a
              className="inline-flex min-h-6 items-center gap-1 text-xs font-bold text-[#EA580C] hover:text-[#FE8C43] transition-colors"
              href={targetHref}
            >
              <span>Baca Berita</span>
              <ArrowRight aria-hidden="true" className="size-3 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-orange-100/90 border-t-4 border-t-[#FE8C43] bg-white shadow-sm transition-all duration-300 ease-out hover:border-[#FE8C43] hover:-translate-y-1 hover:shadow-card-hover">
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          {article.image ? (
            <img
              alt={`Foto berita ${article.title}`}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              height="360"
              src={article.image}
              width="640"
            />
          ) : (
            <div className="flex size-full items-center justify-center text-orange-800">
              <Landmark aria-hidden="true" className="size-10" strokeWidth={1.25} />
              <span className="sr-only">Ilustrasi editorial FEB UNJ</span>
            </div>
          )}
          <div className="absolute left-3 top-3">
            <span className="rounded bg-[#FE8C43] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <p className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
            <time dateTime={article.publishedAt}>{date}</time>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock3 aria-hidden="true" className="size-3" />
              {article.readingMinutes} menit baca
            </span>
          </p>

          <h3 className="mt-2 font-sans text-base font-bold tracking-tight text-slate-900 leading-snug transition-colors group-hover:text-[#EA580C] line-clamp-2">
            <a href={targetHref}>{article.title}</a>
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-0">
        <div className="flex items-center justify-between border-t border-slate-100 pt-3.5">
          <span className="text-[11px] text-slate-400">Warta Akademik</span>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#FE8C43] transition-colors"
            href={targetHref}
          >
            <span>Baca Berita</span>
            <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  )
}



