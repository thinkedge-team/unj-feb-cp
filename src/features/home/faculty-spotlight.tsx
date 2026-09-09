import { ArrowRight, Sparkles } from "lucide-react"

import { ProfileCard } from "@/components/cards/profile-card"
import { lecturers } from "@/data/lecturers"

export function FacultySpotlight() {
  const spotlightLecturers = [
    lecturers.find((l) => l.slug === "hendra-setiawan"),
    lecturers.find((l) => l.slug === "siti-aisyah"),
    lecturers.find((l) => l.slug === "indrajaya-wijaya"),
    lecturers.find((l) => l.slug === "farhan-akbar"),
  ].filter((l): l is NonNullable<typeof l> => Boolean(l))

  return (
    <section
      aria-labelledby="faculty-spotlight-heading"
      className="border-b border-slate-200 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C45F18]">
              Tenaga Pendidik &amp; Peneliti
            </span>
            <h2
              id="faculty-spotlight-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Pakar &amp; Dosen Pengampu
            </h2>
          </div>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#006569] hover:text-[#C45F18] transition-colors"
            href="/sdm/dosen"
          >
            <span>Direktori Dosen</span>
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spotlightLecturers.map((lecturer) => (
            <ProfileCard
              key={lecturer.slug}
              href={`/sdm/dosen/${lecturer.slug}`}
              profile={lecturer}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-slate-300/80 bg-slate-50 px-8 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition-all duration-300 hover:border-teal-700/50 hover:bg-white hover:text-teal-950 hover:shadow"
            href="/sdm/dosen"
          >
            <span>Jelajahi Seluruh 120+ Profil Tenaga Pendidik</span>
            <span className="flex size-6 items-center justify-center rounded-full bg-slate-200/80 text-slate-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-teal-900 group-hover:text-white">
              <ArrowRight aria-hidden="true" className="size-3" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

