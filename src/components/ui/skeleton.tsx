import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export type SkeletonProps = Readonly<HTMLAttributes<HTMLDivElement>>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-sm bg-[var(--color-skeleton)]", className)}
      {...props}
    />
  )
}
