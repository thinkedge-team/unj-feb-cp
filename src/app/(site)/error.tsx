"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "test") {
      console.error("FEB UNJ Client Route Error:", error);
    }
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[var(--color-limestone)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl border border-[var(--color-border)] bg-[var(--color-white)] p-8 text-center shadow-md sm:p-12">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[var(--color-copper-soft)] text-[var(--color-feb-copper)]">
          <AlertTriangle aria-hidden="true" className="size-7" strokeWidth={1.75} />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-[var(--color-feb-copper)]">
          Pemberitahuan Sistem
        </p>

        <h1 className="mt-2 font-sans text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Terjadi Kendala Teknis
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-ink)]">
          Mohon maaf atas ketidaknyamanan. Terjadi kendala teknis saat memuat data halaman FEB UNJ. Tim pengelola sistem informasi sedang menangani kendala ini.
        </p>

        {error.digest && (
          <p className="mt-3 font-mono text-xs text-[var(--color-muted)]">
            Kode Pelacakan: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            className="min-h-11 items-center gap-2"
            onClick={() => reset()}
            variant="primary"
          >
            <RefreshCw aria-hidden="true" className="size-4" />
            Coba Lagi
          </Button>

          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-[var(--color-unj-teal)] bg-[var(--color-white)] px-5 py-2.5 text-sm font-semibold text-[var(--color-unj-teal)] transition-colors duration-200 hover:bg-[var(--color-teal-soft)]"
            href="/"
          >
            <Home aria-hidden="true" className="size-4" />
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
