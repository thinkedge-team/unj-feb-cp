import type { Lecturer } from "@/types/content"

export type LecturerFilterOptions = {
  readonly query?: string
  readonly programSlug?: string
  readonly expertise?: string
}

export const programChips: readonly {
  readonly label: string
  readonly value: string
}[] = [
  { label: "Semua", value: "all" },
  { label: "Manajemen", value: "manajemen" },
  { label: "Akuntansi", value: "akuntansi" },
  { label: "Pendidikan Ekonomi", value: "pendidikan-ekonomi" },
  { label: "Bisnis Digital", value: "bisnis-digital" },
  { label: "Logistik Maritim", value: "logistik-maritim" },
]

export function filterLecturers(
  lecturers: readonly Lecturer[],
  options?: LecturerFilterOptions,
): readonly Lecturer[] {
  if (!options) {
    return lecturers
  }

  const { expertise, programSlug, query } = options
  const hasQuery = Boolean(query && query.trim().length > 0)
  const hasProgram = Boolean(programSlug && programSlug !== "all")
  const hasExpertise = Boolean(expertise && expertise !== "all")

  if (!hasQuery && !hasProgram && !hasExpertise) {
    return lecturers
  }

  const q = query ? query.trim().toLowerCase() : ""
  const p = programSlug ? programSlug.trim().toLowerCase() : ""
  const exp = expertise ? expertise.trim().toLowerCase() : ""

  return lecturers.filter((lecturer) => {
    if (hasQuery) {
      const matchName = lecturer.name.toLowerCase().includes(q)
      const matchNidn = lecturer.nidn.toLowerCase().includes(q)
      const matchTitle = lecturer.title.toLowerCase().includes(q)
      const matchRole = lecturer.role.toLowerCase().includes(q)
      const matchHomebase = lecturer.homebase.toLowerCase().includes(q)
      const matchExp = lecturer.expertise.some((item) =>
        item.toLowerCase().includes(q),
      )
      if (
        !matchName &&
        !matchNidn &&
        !matchTitle &&
        !matchRole &&
        !matchHomebase &&
        !matchExp
      ) {
        return false
      }
    }

    if (hasProgram) {
      const h = lecturer.homebase.toLowerCase()
      const hSlug = h.replace(/\s+/g, "-")
      const pNorm = p.replace(/-/g, " ")
      const match =
        h === p || hSlug === p || h.includes(pNorm) || pNorm.includes(h)
      if (!match) {
        return false
      }
    }

    if (hasExpertise) {
      const matchExp = lecturer.expertise.some((item) =>
        item.toLowerCase().includes(exp),
      )
      if (!matchExp) {
        return false
      }
    }

    return true
  })
}
