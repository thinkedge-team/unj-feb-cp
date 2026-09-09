import { Award, CheckCircle2, Sparkles, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Event } from "@/types/content"
import type { EventScheduleItem, EventSpeaker } from "./event-detail-data"

export type EventSectionsProps = Readonly<{
  event: Event
  speakers: readonly EventSpeaker[]
  schedule: readonly EventScheduleItem[]
}>

export function EventSpeakersSection({
  speakers,
}: Readonly<{ speakers: readonly EventSpeaker[] }>) {
  return (
    <section aria-labelledby="section-speakers">
      <h2
        className="text-2xl font-bold tracking-tight text-[var(--color-ink)]"
        id="section-speakers"
      >
        Pembicara &amp; Narasumber
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, index) => (
          <div
            className="flex flex-col border border-[var(--color-border)] bg-[var(--color-white)] p-5"
            key={index}
          >
            <div className="flex size-12 items-center justify-center rounded-sm bg-[var(--color-teal-mist)] text-[var(--color-unj-teal)]">
              <Users aria-hidden="true" className="size-6" strokeWidth={1.5} />
            </div>
            <h3 className="mt-4 font-bold text-[var(--color-ink)]">{speaker.name}</h3>
            <p className="text-xs font-semibold text-[var(--color-feb-copper)]">
              {speaker.title}
            </p>
            <p className="mt-2 text-xs text-[var(--color-muted-ink)]">
              {speaker.institution}
            </p>
            <div className="mt-4 border-t border-[var(--color-border)] pt-3">
              <p className="text-xs italic text-[var(--color-muted)]">
                Topik: &ldquo;{speaker.topic}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function EventScheduleSection({
  schedule,
}: Readonly<{ schedule: readonly EventScheduleItem[] }>) {
  return (
    <section aria-labelledby="section-schedule">
      <h2
        className="text-2xl font-bold tracking-tight text-[var(--color-ink)]"
        id="section-schedule"
      >
        Jadwal &amp; Susunan Acara
      </h2>
      <div className="mt-6 overflow-hidden border border-[var(--color-border)] bg-[var(--color-white)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[var(--color-border)] bg-[var(--color-limestone)] text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]">
              <tr>
                <th className="px-6 py-4">Waktu</th>
                <th className="px-6 py-4">Sesi / Agenda</th>
                <th className="px-6 py-4">Penanggung Jawab</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] text-xs text-[var(--color-ink)] sm:text-sm">
              {schedule.map((item, index) => (
                <tr className="transition-colors hover:bg-[var(--color-teal-soft)]/40" key={index}>
                  <td className="whitespace-nowrap px-6 py-4 font-mono font-semibold text-[var(--color-unj-teal)]">
                    {item.time}
                  </td>
                  <td className="px-6 py-4 font-medium">{item.session}</td>
                  <td className="px-6 py-4 text-[var(--color-muted-ink)]">{item.pic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export function EventBenefitsSection() {
  return (
    <section aria-labelledby="section-benefits">
      <h2
        className="text-2xl font-bold tracking-tight text-[var(--color-ink)]"
        id="section-benefits"
      >
        Benefit &amp; Luaran Kegiatan
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-5">
          <div className="flex items-center gap-3">
            <Award aria-hidden="true" className="size-5 text-[var(--color-feb-copper)]" />
            <h3 className="text-base font-bold text-[var(--color-ink)]">E-Sertifikat Nasional</h3>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-ink)]">
            Sertifikat resmi bertanda tangan pimpinan dekanat dengan bobot SKP akademik.
          </p>
        </div>
        <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-5">
          <div className="flex items-center gap-3">
            <Users aria-hidden="true" className="size-5 text-[var(--color-unj-teal)]" />
            <h3 className="text-base font-bold text-[var(--color-ink)]">Networking Profesional</h3>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-ink)]">
            Membangun jejaring kolaborasi lintas kampus, asosiasi profesi, dan industri.
          </p>
        </div>
      </div>
    </section>
  )
}

export function EventSidebarSlot({
  category,
  onOpenModal,
}: Readonly<{ category: string; onOpenModal: () => void }>) {
  return (
    <div className="space-y-6">
      <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6">
        <Badge variant="copper">{category}</Badge>
        <h3 className="mt-3 text-lg font-bold text-[var(--color-ink)]">
          Daftar Sebagai Peserta
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-ink)]">
          Dapatkan akses materi presentasi lengkap, rekaman sesi, dan sertifikat elektronik resmi ber-SKP.
        </p>
        <div className="mt-5">
          <Button
            className="w-full justify-center gap-2"
            onClick={onOpenModal}
            variant="primary"
          >
            <Sparkles aria-hidden="true" className="size-4" />
            <span>Daftar Acara Sekarang</span>
          </Button>
        </div>
      </div>

      <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6">
        <h3 className="text-base font-bold text-[var(--color-ink)]">
          Fasilitas Peserta
        </h3>
        <ul className="mt-3 space-y-2 text-xs text-[var(--color-muted-ink)]">
          <li className="flex items-center gap-2">
            <CheckCircle2 aria-hidden="true" className="size-4 text-[var(--color-unj-teal)]" />
            <span>E-Sertifikat Resmi Terverifikasi</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 aria-hidden="true" className="size-4 text-[var(--color-unj-teal)]" />
            <span>Materi Pembicara &amp; Modul Studi</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 aria-hidden="true" className="size-4 text-[var(--color-unj-teal)]" />
            <span>Akses Sesi Tanya Jawab Interaktif</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 aria-hidden="true" className="size-4 text-[var(--color-unj-teal)]" />
            <span>Konsumsi &amp; Coffee Break (Sesi Luring)</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
