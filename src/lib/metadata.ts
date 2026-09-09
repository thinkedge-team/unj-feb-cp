import type { Metadata } from "next"

import { siteConfig } from "@/config/site"

export const SITE_TITLE_SUFFIX = " | Fakultas Ekonomi dan Bisnis UNJ"

export type PageMetadataOptions = {
  readonly title?: string
  readonly description?: string
  readonly path?: string
  readonly ogType?: "website" | "article" | "profile"
  readonly image?: string
  readonly noIndex?: boolean
  readonly keywords?: readonly string[]
}

export function formatPageTitle(title?: string): string {
  if (!title || title.trim() === "") {
    return siteConfig.name
  }

  const cleanTitle = title.trim()

  if (
    cleanTitle.includes("Fakultas Ekonomi dan Bisnis UNJ") ||
    cleanTitle.includes(siteConfig.name) ||
    cleanTitle.includes(siteConfig.shortName)
  ) {
    return cleanTitle
  }

  return `${cleanTitle}${SITE_TITLE_SUFFIX}`
}

export function resolveCanonicalUrl(path?: string): string {
  const baseUrl = siteConfig.url.replace(/\/+$/, "")
  if (!path || path === "/" || path.trim() === "") {
    return baseUrl
  }

  const cleanPath = path.trim().replace(/^\/+/, "").replace(/\/+$/, "")
  return `${baseUrl}/${cleanPath}`
}

export function resolveImageUrl(image?: string): string {
  if (!image || image.trim() === "") {
    return siteConfig.logos.feb
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image
  }

  const baseUrl = siteConfig.url.replace(/\/+$/, "")
  const cleanImage = image.trim().replace(/^\/+/, "")
  return `${baseUrl}/${cleanImage}`
}

export function createPageMetadata(options: PageMetadataOptions = {}): Metadata {
  const title = formatPageTitle(options.title)
  const description = options.description?.trim() || siteConfig.description
  const canonicalUrl = resolveCanonicalUrl(options.path)
  const imageUrl = resolveImageUrl(options.image)
  const ogType = options.ogType ?? "website"

  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: ogType,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/images/logo/feb-logo.png", type: "image/png" },
      ],
      apple: [{ url: "/images/logo/feb-logo.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }

  if (options.keywords && options.keywords.length > 0) {
    metadata.keywords = [...options.keywords]
  }

  if (options.noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
    }
  }

  return metadata
}
