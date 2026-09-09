"use client"

import { AlertTriangle, RefreshCw } from "lucide-react"
import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "test") {
      console.error("FEB UNJ Global Root Error:", error)
    }
  }, [error])

  return (
    <html lang="id">
      <body className="flex min-h-screen items-center justify-center bg-slate-100 p-4 font-sans text-slate-900">
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center shadow-lg">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-amber-50 text-[#C45F18]">
            <AlertTriangle aria-hidden="true" className="size-6" />
          </div>
          <h1 className="mt-4 text-xl font-bold text-slate-900">
            Terjadi Kesalahan Sistem
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            Aplikasi mengalami kendala kritis pada tingkat dasar sistem. Silakan muat ulang halaman.
          </p>
          {error.digest ? (
            <p className="mt-2 font-mono text-[11px] text-slate-400">
              ID Pelacakan: {error.digest}
            </p>
          ) : null}
          <div className="mt-6">
            <button
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#006569] px-6 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#004e51]"
              onClick={() => reset()}
              type="button"
            >
              <RefreshCw aria-hidden="true" className="size-3.5" />
              Muat Ulang Aplikasi
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
