import { ArrowRight, Clock3 } from "lucide-react"

import { NewsCard } from "@/components/cards/news-card"
import { news } from "@/data/news"

export function NewsSection() {
  const featuredArticle = news[0]
  const recentArticles = news.slice(1, 4)

  const featuredDate = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(featuredArticle.publishedAt))

  return (
    <section
      aria-labelledby="news-section-heading"
      className="border-b border-slate-200 bg-slate-50/50 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
              Jurnalisme &amp; Dokumentasi
            </span>
            <h2
              id="news-section-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Kabar &amp; Warta Kampus
            </h2>
          </div>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
            href="/informasi/berita"
          >
            <span>Semua Berita</span>
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          <article className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 ease-out hover:border-[#C2410C] hover:-translate-y-1 hover:shadow-card-hover lg:col-span-7">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  alt={`Foto berita utama: ${featuredArticle.title}`}
                  className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  height="450"
                  src={featuredArticle.image || "/images/news/campus.jpg"}
                  width="720"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded bg-white/95 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#C2410C] shadow-sm">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <time dateTime={featuredArticle.publishedAt}>{featuredDate}</time>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock3 aria-hidden="true" className="size-3.5" />
                    {featuredArticle.readingMinutes} menit baca
                  </span>
                </div>

                <h3 className="mt-3 font-sans text-xl font-bold tracking-tight text-slate-900 leading-snug hover:text-[#C2410C] transition-colors sm:text-2xl line-clamp-2">
                  <a href={`/informasi/berita/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </a>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7">
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-medium text-slate-400">Liputan Utama</span>
                <a
                  className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
                  href={`/informasi/berita/${featuredArticle.slug}`}
                >
                  <span>Baca Liputan Lengkap</span>
                  <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </article>

          <div className="flex flex-col justify-between gap-4 h-full lg:col-span-5">
            {recentArticles.map((article) => (
              <div className="flex-1" key={article.slug}>
                <NewsCard
                  article={article}
                  href={`/informasi/berita/${article.slug}`}
                  variant="horizontal"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



