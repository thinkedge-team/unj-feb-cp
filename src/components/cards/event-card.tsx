import { ArrowRight, Clock3, MapPin } from "lucide-react"

import type { Event } from "@/types/content"

export function EventCard({ event, href }: Readonly<{ readonly event: Event; readonly href?: string }>) {
  const date = new Date(event.startsAt)
  const day = new Intl.DateTimeFormat("id-ID", { day: "numeric" }).format(date)
  const month = new Intl.DateTimeFormat("id-ID", { month: "short" }).format(date)
  const time = new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit" }).format(date)
  const targetHref = href ?? event.registrationUrl
  const isExternal = targetHref.startsWith("http")

  return (
    <article className="group flex h-full flex-col justify-between rounded-xl border border-orange-100/90 border-t-4 border-t-[#FE8C43] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#FE8C43] hover:-translate-y-1 hover:shadow-card-hover">
      <div>
        <div className="flex items-start gap-4">
          <time
            className="flex size-14 shrink-0 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#F97316] to-[#FE8C43] text-white shadow-xs"
            dateTime={event.startsAt}
          >
            <span className="font-sans text-xl font-black leading-none text-white">{day}</span>
            <span className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-white/95">{month}</span>
          </time>

          <div className="min-w-0 flex-1">
            <span className="inline-flex rounded bg-orange-100/70 px-2 py-0.5 text-[10px] font-bold text-[#EA580C]">
              {event.category}
            </span>
            <h3 className="mt-1.5 font-sans text-base font-bold tracking-tight text-slate-900 leading-snug transition-colors group-hover:text-[#EA580C]">
              {event.title}
            </h3>
          </div>
        </div>

        <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3.5 text-xs text-slate-600">
          <p className="flex items-center gap-2">
            <Clock3 aria-hidden="true" className="size-3.5 text-[#FE8C43] shrink-0" />
            <span>{time} WIB</span>
          </p>
          <p className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-3.5 text-[#FE8C43] shrink-0" />
            <span className="line-clamp-1">{event.venue}</span>
          </p>
        </div>
      </div>

      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">Agenda Fakultas</span>
        <a
          className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#FE8C43] transition-colors"
          href={targetHref}
          rel={isExternal ? "noopener noreferrer" : undefined}
          target={isExternal ? "_blank" : undefined}
        >
          <span>Lihat Event</span>
          <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  )
}


