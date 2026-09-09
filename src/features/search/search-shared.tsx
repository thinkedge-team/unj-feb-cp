import {
  Calendar,
  FileText,
  GraduationCap,
  Layout,
  Newspaper,
  User,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { SearchEntityType, SearchScope } from "@/lib/search"

export const filterScopes: readonly { scope: SearchScope; label: string }[] = [
  { scope: "all", label: "Semua" },
  { scope: "programs", label: "Program Studi" },
  { scope: "lecturers", label: "Dosen" },
  { scope: "news", label: "Berita" },
  { scope: "events", label: "Agenda" },
  { scope: "documents", label: "Dokumen" },
  { scope: "pages", label: "Halaman" },
]

export const quickSuggestions: readonly string[] = [
  "S1 Manajemen",
  "Akreditasi Unggul",
  "Beasiswa",
  "Pedoman Akademik",
  "Kalender Akademik",
  "Direktori Dosen",
  "Jurnal Riset",
  "Hubungi Kami",
]

export function getEntityBadge(type: SearchEntityType) {
  switch (type) {
    case "program":
      return <Badge variant="primary">Program Studi</Badge>
    case "lecturer":
      return <Badge variant="copper">Dosen</Badge>
    case "news":
      return <Badge variant="secondary">Berita</Badge>
    case "event":
      return <Badge variant="quiet">Agenda</Badge>
    case "document":
      return <Badge variant="quiet">Dokumen</Badge>
    case "page":
      return <Badge variant="secondary">Halaman</Badge>
  }
}

export function getEntityIcon(type: SearchEntityType) {
  switch (type) {
    case "program":
      return (
        <GraduationCap
          aria-hidden="true"
          className="size-4 text-[var(--color-unj-teal)]"
        />
      )
    case "lecturer":
      return (
        <User
          aria-hidden="true"
          className="size-4 text-[var(--color-feb-copper)]"
        />
      )
    case "news":
      return (
        <Newspaper
          aria-hidden="true"
          className="size-4 text-[var(--color-unj-teal)]"
        />
      )
    case "event":
      return (
        <Calendar
          aria-hidden="true"
          className="size-4 text-[var(--color-ink)]"
        />
      )
    case "document":
      return (
        <FileText
          aria-hidden="true"
          className="size-4 text-[var(--color-muted-ink)]"
        />
      )
    case "page":
      return (
        <Layout
          aria-hidden="true"
          className="size-4 text-[var(--color-unj-teal)]"
        />
      )
  }
}
