"use client"

import { useState, type SyntheticEvent } from "react"
import { CheckCircle2, Info, Send } from "lucide-react"

type FormState = {
  name: string
  email: string
  category: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  category?: string
  message?: string
}

const initialForm: FormState = {
  name: "",
  email: "",
  category: "umum",
  message: "",
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!form.name.trim()) {
      newErrors.name = "Nama wajib diisi"
    }

    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Format email tidak valid"
    }

    if (!form.category) {
      newErrors.category = "Kategori pesan wajib dipilih"
    }

    if (!form.message.trim()) {
      newErrors.message = "Pesan wajib diisi"
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Pesan minimal berisi 10 karakter"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setForm((prev) => ({
      name: prev.name.trim(),
      email: prev.email.trim(),
      category: prev.category,
      message: prev.message.trim(),
    }))
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setForm(initialForm)
    setErrors({})
    setIsSubmitted(false)
  }

  return (
    <div className="border border-[var(--color-border)] bg-[var(--color-white)] p-6 sm:p-8">
      {/* Prototype Disclaimer Banner */}
      <aside aria-label="Informasi prototipe formulir" className="mb-6 flex items-start gap-3 rounded-sm border border-[var(--color-teal-soft)] bg-[var(--color-teal-soft)] p-4 text-xs text-[var(--color-ink)] sm:text-sm">
        <Info aria-hidden="true" className="size-5 shrink-0 text-[var(--color-unj-teal)]" strokeWidth={2} />
        <div>
          <strong className="font-semibold text-[var(--color-teal-deep)]">Prototipe Visual:</strong> Formulir ini merupakan prototipe interaktif antarmuka publik FEB UNJ. Pesan yang dimasukkan disimulasikan secara lokal pada peramban tanpa pengiriman data ke peladen (backend/API).
        </div>
      </aside>

      {isSubmitted ? (
        <div aria-live="polite" className="rounded-sm border border-emerald-200 bg-emerald-50 p-6 text-center">
          <CheckCircle2 aria-hidden="true" className="mx-auto size-10 text-emerald-600" strokeWidth={2} />
          <h2 className="mt-3 text-lg font-bold text-emerald-950">Pesan Berhasil Terkirim!</h2>
          <p className="mt-2 text-sm text-emerald-800">
            Terima kasih, <strong>{form.name}</strong>. Pesan Anda mengenai topik <strong>{form.category}</strong> telah kami terima dalam simulasi ini. Tim Humas FEB UNJ akan segera menindaklanjuti.
          </p>
          <button
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--color-unj-teal)] px-6 py-2.5 text-sm font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-teal-deep)]"
            onClick={handleReset}
            type="button"
          >
            Kirim Pesan Lainnya
          </button>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-[var(--color-ink)]" htmlFor="contact-name">
                Nama Lengkap <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <input
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={errors.name ? "true" : undefined}
                aria-required="true"
                className="mt-1.5 block w-full rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] transition-colors focus:border-[var(--color-unj-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--color-unj-teal)]"
                id="contact-name"
                maxLength={100}
                name="name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="cth. Ahmad Dahlan"
                type="text"
                value={form.name}
              />
              {errors.name ? (
                <p className="mt-1 text-xs text-red-600" id="name-error">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-ink)]" htmlFor="contact-email">
                Email Aktif <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <input
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={errors.email ? "true" : undefined}
                aria-required="true"
                className="mt-1.5 block w-full rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] transition-colors focus:border-[var(--color-unj-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--color-unj-teal)]"
                id="contact-email"
                maxLength={120}
                name="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="nama@domain.ac.id"
                type="email"
                value={form.email}
              />
              {errors.email ? (
                <p className="mt-1 text-xs text-red-600" id="email-error">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-ink)]" htmlFor="contact-category">
                Kategori Informasi <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <select
                aria-describedby={errors.category ? "category-error" : undefined}
                aria-invalid={errors.category ? "true" : undefined}
                aria-required="true"
                className="mt-1.5 block w-full rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] transition-colors focus:border-[var(--color-unj-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--color-unj-teal)]"
                id="contact-category"
                name="category"
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                value={form.category}
              >
                <option value="umum">Pertanyaan Umum</option>
                <option value="akademik">Layanan Akademik &amp; Perkuliahan</option>
                <option value="kemahasiswaan">Kemahasiswaan &amp; Beasiswa</option>
                <option value="kerjasama">Kemitraan &amp; Kerjasama</option>
                <option value="ppid">Permohonan Informasi Publik (PPID)</option>
              </select>
              {errors.category ? (
                <p className="mt-1 text-xs text-red-600" id="category-error">
                  {errors.category}
                </p>
              ) : null}
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-ink)]" htmlFor="contact-message">
                Pesan / Pertanyaan <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <textarea
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={errors.message ? "true" : undefined}
                aria-required="true"
                className="mt-1.5 block w-full rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] px-3.5 py-2.5 text-sm text-[var(--color-ink)] transition-colors focus:border-[var(--color-unj-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--color-unj-teal)]"
                id="contact-message"
                maxLength={2000}
                name="message"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tuliskan pertanyaan atau kebutuhan informasi Anda secara jelas..."
                rows={4}
                value={form.message}
              />
              {errors.message ? (
                <p className="mt-1 text-xs text-red-600" id="message-error">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-[var(--color-unj-teal)] px-6 py-3 text-sm font-semibold text-[var(--color-white)] transition-colors duration-200 hover:bg-[var(--color-teal-deep)]"
              type="submit"
            >
              <span>Kirim Pesan</span>
              <Send aria-hidden="true" className="size-4" strokeWidth={2} />
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
