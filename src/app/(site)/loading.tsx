import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div
      aria-busy="true"
      className="min-h-[70vh] bg-[var(--color-limestone)]"
      role="status"
    >
      <span className="sr-only">Memuat informasi FEB UNJ...</span>

      {/* Header Banner Skeleton */}
      <div className="border-b border-[var(--color-border)] bg-[var(--color-white)] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-16" />
            <span className="text-[var(--color-muted)]">/</span>
            <Skeleton className="h-4 w-28" />
          </div>
          <div className="mt-6 space-y-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-9 w-3/4 max-w-lg md:h-12" />
            <Skeleton className="h-4 w-full max-w-2xl" />
          </div>
        </div>
      </div>

      {/* Content Cards Grid Skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4">
          <Skeleton className="h-8 w-44" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              className="flex flex-col border border-[var(--color-border)] bg-[var(--color-white)] p-6 shadow-sm"
              key={i}
            >
              <Skeleton className="h-4 w-20" />
              <Skeleton className="mt-4 h-6 w-5/6" />
              <Skeleton className="mt-2 h-4 w-full" />
              <Skeleton className="mt-1 h-4 w-3/4" />
              <div className="mt-8 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
