"use client"

import { useState } from "react"

import { EventCard } from "@/components/cards/event-card"
import type { MetadataItem } from "@/components/common/metadata-row"
import { DetailPageTemplate } from "@/components/templates/detail-page-template"
import type { Event } from "@/types/content"
import {
  defaultEventSchedule,
  defaultEventSpeakers,
} from "./event-detail-data"
import { EventRegistrationModal } from "./event-registration-modal"
import {
  EventBenefitsSection,
  EventScheduleSection,
  EventSidebarSlot,
  EventSpeakersSection,
} from "./event-sections"

export type EventDetailProps = Readonly<{
  readonly event: Event
  readonly relatedEvents?: readonly Event[]
}>

export function EventDetail({ event, relatedEvents = [] }: EventDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const startDate = new Date(event.startsAt)
  const endDate = new Date(event.endsAt)

  const dateFormatted = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(startDate)

  const startTime = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(startDate)

  const endTime = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(endDate)

  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "Informasi", href: "/informasi/berita" },
    { label: "Event", href: "/informasi/event" },
    { label: event.title },
  ] as const

  const metadataItems: readonly MetadataItem[] = [
    { label: "Kategori", value: event.category },
    { label: "Tanggal Pelaksanaan", value: dateFormatted },
    { label: "Waktu", value: `${startTime} - ${endTime} WIB` },
    { label: "Lokasi / Tempat", value: event.venue },
    { label: "Penyelenggara", value: "Fakultas Ekonomi dan Bisnis UNJ" },
    { label: "Biaya Partisipasi", value: "Gratis / Terbuka untuk Umum" },
    { label: "Batas Pendaftaran", value: "H-1 Sebelum Pelaksanaan" },
  ]

  const relatedSection =
    relatedEvents.length > 0 ? (
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            Agenda Acara Lainnya
          </h2>
          <p className="mt-1 text-sm text-[var(--color-muted-ink)]">
            Eksplorasi seminar, workshop, dan konferensi akademik FEB UNJ mendatang.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedEvents.slice(0, 3).map((item) => (
            <EventCard
              event={item}
              href={`/informasi/event/${item.slug}`}
              key={item.slug}
            />
          ))}
        </div>
      </div>
    ) : null

  return (
    <>
      <DetailPageTemplate
        breadcrumbs={breadcrumbs}
        eyebrow={event.category}
        metadataItems={metadataItems}
        relatedContentSlot={relatedSection}
        sidebarSlot={
          <EventSidebarSlot
            category={event.category}
            onOpenModal={() => setIsModalOpen(true)}
          />
        }
        summary={event.summary}
        title={event.title}
      >
        <div className="space-y-12">
          <section aria-labelledby="section-overview">
            <h2
              className="text-2xl font-bold tracking-tight text-[var(--color-ink)]"
              id="section-overview"
            >
              Deskripsi Acara
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--color-muted-ink)] sm:text-lg">
              <p>
                {event.summary} Acara ini diselenggarakan oleh Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta sebagai wahana diseminasi keilmuan dan penguatan sinergi antara dunia akademis, praktisi industri, dan pengambil kebijakan.
              </p>
              <p>
                Melalui forum interaktif ini, para peserta diajak mendalami perkembangan mutakhir di sektor ekonomi, manajemen strategis, dan tata kelola akuntansi publik demi merespons dinamika pasar domestik maupun global.
              </p>
            </div>
          </section>

          <EventSpeakersSection speakers={defaultEventSpeakers} />
          <EventScheduleSection schedule={defaultEventSchedule} />
          <EventBenefitsSection />
        </div>
      </DetailPageTemplate>

      <EventRegistrationModal
        eventTitle={event.title}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
