import type { Metadata } from "next";
import { ArrowRight, FileText, GraduationCap, Home, HelpCircle, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Halaman Tidak Ditemukan - 404",
  description:
    "Halaman yang Anda tuju tidak tersedia pada portal resmi Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-[var(--color-limestone)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl border border-[var(--color-border)] bg-[var(--color-white)] p-8 text-center shadow-md sm:p-12">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
          <HelpCircle aria-hidden="true" className="size-8" strokeWidth={1.5} />
        </div>

        <span className="mt-6 inline-block rounded-sm bg-[var(--color-copper-soft)] px-3 py-1 font-mono text-sm font-bold text-[var(--color-feb-copper)]">
          404
        </span>

        <h1 className="mt-3 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Halaman Tidak Ditemukan
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-muted-ink)] sm:text-base">
          Mohon maaf, halaman yang Anda tuju tidak tersedia, telah dialihkan ke alamat baru, atau tautan yang Anda ikuti sudah kedaluwarsa.
        </p>

        {/* Primary CTA button */}
        <div className="mt-8 flex justify-center">
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[var(--color-unj-teal)] px-6 py-2.5 text-sm font-semibold text-[var(--color-white)] transition-colors duration-200 hover:bg-[var(--color-teal-deep)]"
            href="/"
          >
            <Home aria-hidden="true" className="size-4" />
            Kembali ke Beranda
          </a>
        </div>

        {/* Fast-Track Navigation Links */}
        <div className="mt-10 border-t border-[var(--color-border)] pt-8 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-ink)] text-center sm:text-left">
            Tautan Cepat yang Mungkin Anda Cari:
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              className="group flex flex-col justify-between border border-[var(--color-border)] bg-[var(--color-limestone)] p-4 transition-colors hover:border-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)]"
              href="/program-studi"
            >
              <div className="flex items-center gap-2">
                <GraduationCap aria-hidden="true" className="size-4 text-[var(--color-unj-teal)]" />
                <span className="text-xs font-bold text-[var(--color-ink)]">Program Studi</span>
              </div>
              <p className="mt-2 text-[11px] text-[var(--color-muted-ink)]">
                Daftar program sarjana, magister, dan doktor.
              </p>
            </a>

            <a
              className="group flex flex-col justify-between border border-[var(--color-border)] bg-[var(--color-limestone)] p-4 transition-colors hover:border-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)]"
              href="/layanan"
            >
              <div className="flex items-center gap-2">
                <FileText aria-hidden="true" className="size-4 text-[var(--color-feb-copper)]" />
                <span className="text-xs font-bold text-[var(--color-ink)]">Layanan Mahasiswa</span>
              </div>
              <p className="mt-2 text-[11px] text-[var(--color-muted-ink)]">
                Layanan administrasi, surat, dan perizinan.
              </p>
            </a>

            <a
              className="group flex flex-col justify-between border border-[var(--color-border)] bg-[var(--color-limestone)] p-4 transition-colors hover:border-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)]"
              href="/search"
            >
              <div className="flex items-center gap-2">
                <Search aria-hidden="true" className="size-4 text-[var(--color-unj-teal)]" />
                <span className="text-xs font-bold text-[var(--color-ink)]">Pencarian Terpadu</span>
              </div>
              <p className="mt-2 text-[11px] text-[var(--color-muted-ink)]">
                Cari informasi dosen, kurikulum, dan dokumen.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
