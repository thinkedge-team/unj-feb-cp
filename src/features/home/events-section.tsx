import { ArrowRight, CalendarDays, Sparkles } from "lucide-react"

import { EventCard } from "@/components/cards/event-card"
import { events } from "@/data/events"

export function EventsSection() {
  const upcomingEvents = events.slice(0, 4)

  return (
    <section
      aria-labelledby="events-section-heading"
      className="border-b border-slate-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C45F18]">
              Kalender Ilmiah &amp; Seminar
            </span>
            <h2
              id="events-section-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Agenda &amp; Kalender Kegiatan
            </h2>
          </div>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#006569] hover:text-[#C45F18] transition-colors"
            href="/informasi/event"
          >
            <span>Semua Agenda</span>
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.slug}
              event={event}
              href={`/informasi/event/${event.slug}`}
            />
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col items-center justify-between gap-4 sm:flex-row sm:px-8 transition-all duration-300 hover:shadow-sm hover:border-slate-300">
          <div className="flex items-center gap-3.5">
            <span className="flex size-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-[#C45F18] shadow-2xs">
              <CalendarDays aria-hidden="true" className="size-5" />
            </span>
            <p className="text-xs font-medium text-slate-600 sm:text-sm">
              Ingin menyelenggarakan kegiatan akademik atau bermitra dalam seminar ilmiah?
            </p>
          </div>
          <a
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-150 active:scale-[0.98] shadow-2xs"
            href="/kontak"
          >
            <span>Hubungi Bagian Humas</span>
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}


