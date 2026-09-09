import type { StaffMember } from "@/types/content"

export type StaffFilterOptions = Readonly<{
  query?: string
  unit?: string
}>

export const staffUnitChips = [
  { label: "Semua Unit", value: "all" },
  { label: "Tata Usaha", value: "tata-usaha" },
  { label: "Akademik", value: "akademik" },
  { label: "Keuangan", value: "keuangan" },
  { label: "Kemahasiswaan", value: "kemahasiswaan" },
  { label: "IT & Lab", value: "it-lab" },
] as const

export function filterStaff(
  staffMembers: readonly StaffMember[],
  options: StaffFilterOptions,
): readonly StaffMember[] {
  const q = options.query?.toLowerCase().trim() ?? ""
  const u = options.unit?.toLowerCase().trim() ?? "all"

  return staffMembers.filter((member) => {
    if (q) {
      const matchName = member.name.toLowerCase().includes(q)
      const matchRole = member.role.toLowerCase().includes(q)
      const matchUnit = member.unit.toLowerCase().includes(q)
      const matchEmail = member.email.toLowerCase().includes(q)
      const matchBio = member.bio.toLowerCase().includes(q)
      if (!matchName && !matchRole && !matchUnit && !matchEmail && !matchBio) {
        return false
      }
    }

    if (u !== "all") {
      const unitLower = member.unit.toLowerCase()
      if (u === "it-lab" || u === "it" || u === "laboratorium") {
        const isItOrLab =
          unitLower.includes("teknologi informasi") ||
          unitLower.includes("ti") ||
          unitLower.includes("laboratorium")
        if (!isItOrLab) return false
      } else {
        const normalizedTarget = u.replace(/-/g, " ")
        const match =
          unitLower === u ||
          unitLower.replace(/\s+/g, "-") === u ||
          unitLower.includes(normalizedTarget) ||
          normalizedTarget.includes(unitLower)
        if (!match) return false
      }
    }

    return true
  })
}
