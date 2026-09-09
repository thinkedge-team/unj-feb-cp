import type { StudyProgram } from "@/types/content"

export function getDegreeDuration(degree: StudyProgram["degree"]): string {
  switch (degree) {
    case "Doktor":
      return "6 Semester (3 Tahun)"
    case "Magister":
      return "4 Semester (2 Tahun)"
    case "Sarjana":
    case "Sarjana Terapan":
      return "8 Semester (4 Tahun)"
    case "Diploma":
      return "6 Semester (3 Tahun)"
    default:
      return "8 Semester"
  }
}

export function getTotalCredits(degree: StudyProgram["degree"]): string {
  switch (degree) {
    case "Doktor":
      return "48 - 52 SKS"
    case "Magister":
      return "36 - 44 SKS"
    case "Sarjana":
    case "Sarjana Terapan":
      return "144 - 146 SKS"
    case "Diploma":
      return "108 - 114 SKS"
    default:
      return "144 SKS"
  }
}

export function getDegreeTitle(programName: string, degree: StudyProgram["degree"]): string {
  const name = programName.toLowerCase()
  if (degree === "Doktor") return "Dr. (Doktor)"
  if (degree === "Magister") {
    if (name.includes("akuntansi")) return "M.Ak. (Magister Akuntansi)"
    if (name.includes("pendidikan")) return "M.Pd. (Magister Pendidikan)"
    if (name.includes("terapan")) return "M.Tr.M. (Magister Terapan Manajemen)"
    return "M.M. (Magister Manajemen)"
  }
  if (degree === "Sarjana") {
    if (name.includes("akuntansi")) return "S.Ak. (Sarjana Akuntansi)"
    if (name.includes("pendidikan")) return "S.Pd. (Sarjana Pendidikan)"
    if (name.includes("bisnis digital")) return "S.Bns. (Sarjana Bisnis)"
    return "S.E. (Sarjana Ekonomi)"
  }
  if (degree === "Sarjana Terapan") {
    if (name.includes("logistik")) return "S.Tr.Log. (Sarjana Terapan Logistik)"
    if (name.includes("akuntansi")) return "S.Tr.Ak. (Sarjana Terapan Akuntansi)"
    if (name.includes("perkantoran")) return "S.Tr.A.P. (Sarjana Terapan Administrasi Perkantoran)"
    return "S.Tr.M. (Sarjana Terapan Manajemen)"
  }
  if (degree === "Diploma") {
    if (name.includes("akuntansi")) return "A.Md.Ak. (Ahli Madya Akuntansi)"
    if (name.includes("perkantoran")) return "A.Md.A.P. (Ahli Madya Administrasi Perkantoran)"
    return "A.Md.M. (Ahli Madya Manajemen)"
  }
  return "Gelar Kelulusan Standar"
}

export function getDepartment(programName: string): string {
  const name = programName.toLowerCase()
  if (name.includes("akuntansi")) return "Departemen Akuntansi"
  if (name.includes("manajemen") || name.includes("pemasaran") || name.includes("logistik") || name.includes("keuangan")) {
    return "Departemen Manajemen"
  }
  return "Departemen Pendidikan Ekonomi & Bisnis Digital"
}
