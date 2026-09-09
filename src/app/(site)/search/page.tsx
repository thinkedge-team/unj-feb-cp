import type { Metadata } from "next";
import { Suspense } from "react";

import { SearchResults } from "@/features/search/search-results";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Pencarian Global",
  description:
    "Pusat pencarian terpadu program studi, dosen, warta berita, agenda kegiatan, dan dokumen resmi Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta.",
  path: "/search",
  noIndex: true,
});

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center p-12">
          <div className="flex items-center gap-3 text-sm font-semibold text-[var(--color-unj-teal)]">
            <span className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Memuat pencarian...
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
