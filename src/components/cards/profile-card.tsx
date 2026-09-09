import { ArrowRight, BookOpen, GraduationCap } from "lucide-react"

import type { Lecturer, StaffMember } from "@/types/content"

type Profile = Lecturer | StaffMember

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => !part.endsWith("."))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
}

export type ProfileCardProps = Readonly<{
  readonly profile: Profile
  readonly href?: string | null
}>

export function ProfileCard({ href, profile }: ProfileCardProps) {
  const isLecturer = "nidn" in profile
  const identifier = isLecturer ? `NIDN ${profile.nidn}` : profile.unit
  const expertise = isLecturer ? profile.expertise : []
  const photo = profile.photo
  const targetHref =
    href === null
      ? undefined
      : (href ?? (isLecturer ? `/sdm/dosen/${profile.slug}` : undefined))

  return (
    <article className="group flex h-full flex-col justify-between rounded-xl border border-orange-100/90 border-t-4 border-t-[#FE8C43] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#FE8C43] hover:-translate-y-1 hover:shadow-card-hover">
      <div>
        <div className="flex items-start gap-4">
          <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-orange-200/80 bg-orange-50 font-sans text-base font-bold text-slate-700">
            {photo ? (
              <img
                alt={`Foto ${profile.name}`}
                className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                height="64"
                src={photo}
                width="64"
              />
            ) : (
              initials(profile.name)
            )}
          </div>

          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1 rounded bg-orange-100/70 px-2 py-0.5 text-[10px] font-bold text-[#EA580C]">
              {isLecturer ? <GraduationCap className="size-3 text-[#FE8C43]" /> : <BookOpen className="size-3 text-[#EA580C]" />}
              {identifier}
            </span>
            <h3 className="mt-1.5 font-sans text-base font-bold tracking-tight text-slate-900 transition-colors group-hover:text-[#EA580C]">
              {profile.name}
            </h3>
            <p className="text-xs font-semibold text-[#EA580C]">
              {profile.role}
            </p>
          </div>
        </div>

        <p className="mt-3.5 text-xs leading-relaxed text-slate-600 line-clamp-2">
          {isLecturer ? profile.homebase : profile.bio}
        </p>

        {expertise.length > 0 ? (
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {expertise.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded border border-orange-200/60 bg-orange-50/50 px-2 py-0.5 text-[10px] font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">Direktori SDM</span>
        {targetHref ? (
          <a
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#FE8C43] transition-colors"
            href={targetHref}
          >
            <span>Lihat Profil</span>
            <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        ) : (
          <span className="text-xs font-medium text-slate-500">Staf FEB UNJ</span>
        )}
      </div>
    </article>
  )
}



