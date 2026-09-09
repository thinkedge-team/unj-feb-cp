"use client"

import { CheckCircle2, Info, X } from "lucide-react"
import { useState, type SyntheticEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export type EventRegistrationModalProps = Readonly<{
  isOpen: boolean
  eventTitle: string
  onClose: () => void
}>

export function EventRegistrationModal({
  isOpen,
  eventTitle,
  onClose,
}: EventRegistrationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    phone: "",
    participantType: "Mahasiswa",
  })
  const [errorMsg, setErrorMsg] = useState("")

  if (!isOpen) return null

  function handleClose() {
    setIsSubmitted(false)
    setErrorMsg("")
    onClose()
  }

  function handleSubmitRegistration(e: SyntheticEvent) {
    e.preventDefault()
    const name = formData.fullName.trim()
    const email = formData.email.trim()
    const inst = formData.institution.trim()

    if (!name || !email || !inst) {
      setErrorMsg("Mohon lengkapi semua kolom wajib.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Format email tidak valid.")
      return
    }

    setFormData((prev) => ({
      ...prev,
      fullName: name,
      email: email,
      institution: inst,
    }))
    setErrorMsg("")
    setIsSubmitted(true)
  }

  return (
    <div
      aria-labelledby="modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
    >
      <div className="relative w-full max-w-lg border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-2xl sm:p-8">
        <button
          aria-label="Tutup jendela pendaftaran"
          className="absolute right-4 top-4 rounded-sm p-2 text-[var(--color-muted-ink)] transition-colors hover:bg-[var(--color-limestone)] hover:text-[var(--color-ink)]"
          onClick={handleClose}
          type="button"
        >
          <X aria-hidden="true" className="size-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center" role="status">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
              <CheckCircle2 aria-hidden="true" className="size-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-[var(--color-ink)]">
              Pendaftaran Berhasil Dikonfirmasi!
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
              Terima kasih,{" "}
              <strong className="text-[var(--color-ink)]">
                {formData.fullName || "Peserta"}
              </strong>
              . E-tiket dan tautan akses ruangan telah berhasil dikirimkan ke alamat
              email{" "}
              <strong className="text-[var(--color-ink)]">
                {formData.email || "Anda"}
              </strong>
              .
            </p>
            <div className="mt-6">
              <Button onClick={handleClose} variant="primary">
                Selesai & Tutup
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-feb-copper)]">
              <Info aria-hidden="true" className="size-4" />
              <span>Pendaftaran Terbuka</span>
            </div>
            <h2
              className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-ink)]"
              id="modal-title"
            >
              Formulir Pendaftaran Acara
            </h2>
            <p className="mt-1 text-xs text-[var(--color-muted-ink)]">{eventTitle}</p>

            {errorMsg ? (
              <p className="mt-3 rounded-sm bg-red-50 p-2 text-xs text-red-700">
                {errorMsg}
              </p>
            ) : null}

            <form className="mt-6 space-y-4" onSubmit={handleSubmitRegistration}>
              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]"
                  htmlFor="modal-full-name"
                >
                  Nama Lengkap:
                </label>
                <Input
                  className="mt-1.5"
                  id="modal-full-name"
                  maxLength={100}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                  placeholder="Contoh: Ahmad Fauzi, S.E."
                  required
                  value={formData.fullName}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]"
                  htmlFor="modal-email"
                >
                  Email Aktif:
                </label>
                <Input
                  className="mt-1.5"
                  id="modal-email"
                  maxLength={120}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="nama@email.com"
                  required
                  type="email"
                  value={formData.email}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]"
                  htmlFor="modal-institution"
                >
                  Institusi / Instansi:
                </label>
                <Input
                  className="mt-1.5"
                  id="modal-institution"
                  maxLength={150}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, institution: e.target.value }))
                  }
                  placeholder="Universitas Negeri Jakarta / Nama Perusahaan"
                  required
                  value={formData.institution}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]"
                  htmlFor="modal-participant-type"
                >
                  Kategori Peserta:
                </label>
                <select
                  className="mt-1.5 min-h-11 w-full rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-2 text-sm font-medium text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-feb-copper)]"
                  id="modal-participant-type"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      participantType: e.target.value,
                    }))
                  }
                  value={formData.participantType}
                >
                  <option value="Mahasiswa">Mahasiswa Aktif</option>
                  <option value="Dosen / Peneliti">Dosen / Peneliti</option>
                  <option value="Praktisi / Umum">Praktisi / Umum</option>
                </select>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 pt-4">
                <Button onClick={handleClose} type="button" variant="quiet">
                  Batal
                </Button>
                <Button type="submit" variant="primary">
                  Konfirmasi Pendaftaran
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
