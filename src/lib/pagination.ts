export type PaginatedResult<T> = {
  readonly items: readonly T[]
  readonly page: number
  readonly pageSize: number
  readonly totalPages: number
  readonly totalItems: number
}

/**
 * Pure pagination utility that clamps boundary pages and slices entries deterministically.
 */
export function paginate<T>(
  items: readonly T[],
  page: number,
  pageSize: number,
): PaginatedResult<T> {
  const safePageSize = Math.max(1, Math.floor(pageSize))
  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / safePageSize)

  if (totalItems === 0) {
    return {
      items: [],
      page: 1,
      pageSize: safePageSize,
      totalPages: 0,
      totalItems: 0,
    }
  }

  const clampedPage = Math.min(Math.max(1, Math.floor(page)), totalPages)
  const startIndex = (clampedPage - 1) * safePageSize
  const slicedItems = items.slice(startIndex, startIndex + safePageSize)

  return {
    items: slicedItems,
    page: clampedPage,
    pageSize: safePageSize,
    totalPages,
    totalItems,
  }
}

/**
 * Calculates page number list with ellipsis markers for accessible pagination navigation.
 */
export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
): readonly (number | "ellipsis")[] {
  if (totalPages <= 1) {
    return totalPages === 1 ? [1] : []
  }

  const totalNumbers = siblingCount * 2 + 3
  const totalBlocks = totalNumbers + 2

  if (totalPages <= totalBlocks) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const shouldShowLeftEllipsis = leftSiblingIndex > 2
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
    return [...leftRange, "ellipsis", totalPages]
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1,
    )
    return [1, "ellipsis", ...rightRange]
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i,
  )
  return [1, "ellipsis", ...middleRange, "ellipsis", totalPages]
}
