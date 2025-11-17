const CDN_BASE =
  process.env.NEXT_PUBLIC_CDN_BASE_URL ||
  "https://d2g1v73fjo3fyg.cloudfront.net"

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function buildCdnUrl(
  key: string,
  opts?: {
    width?: number
    height?: number
    quality?: number
    format?: "webp" | "jpeg" | "png"
  }
) {
  const u = new URL(
    `${CDN_BASE}/${encodeURIComponent(key.replace(/^\/+/, ""))}`
  )
  const width = clamp(opts?.width ?? 800, 1, 4096)
  const quality = clamp(opts?.quality ?? 75, 1, 100)
  const format = opts?.format ?? "webp"
  u.searchParams.set("width", String(width))
  if (opts?.height)
    u.searchParams.set("height", String(clamp(opts.height, 1, 4096)))
  u.searchParams.set("quality", String(quality))
  u.searchParams.set("format", format)
  return u.toString()
}

export function getOptimizedImageUrl(
  imageUrl: string | null | undefined,
  options?: {
    width?: number
    height?: number
    quality?: number
    format?: "webp" | "jpeg" | "png"
  }
): string {
  if (!imageUrl) return "/placeholder-image.jpg"

  try {
    const baseForRelative =
      process.env.NEXT_PUBLIC_API_URL || "https://silverstatesmiles-cms.com"
    const u = new URL(imageUrl, baseForRelative)

    // If already a CloudFront URL and it carries sizing params, return as-is
    if (u.hostname.includes("cloudfront.net")) {
      const hasParams =
        u.searchParams.has("width") ||
        u.searchParams.has("w") ||
        u.searchParams.has("quality") ||
        u.searchParams.has("format")
      if (hasParams) return u.toString()
      return buildCdnUrl(u.pathname, options) // normalize CF path without double prefixing
    }

    let key = u.pathname.replace(/^\/+/, "") // drop leading slash
    if (key.startsWith("uploads/")) key = key.slice("uploads/".length)

    const knownHosts = [
      "silverstatesmiles.s3.us-east-1.amazonaws.com",
      "silverstatesmiles-cms.s3.us-east-1.amazonaws.com",
      "silverstatesmiles-cms.com",
    ]
    if (!knownHosts.includes(u.hostname) && !imageUrl.startsWith("/")) {
      key = u.pathname.replace(/^\/+/, "")
    }

    return buildCdnUrl(key, options)
  } catch {
    return buildCdnUrl(imageUrl, options)
  }
}

export function getHeroImageUrl(imageUrl: string | null | undefined) {
  return getOptimizedImageUrl(imageUrl, {
    width: 1200,
    quality: 80,
    format: "webp",
  })
}

export function getThumbnailUrl(imageUrl: string | null | undefined) {
  return getOptimizedImageUrl(imageUrl, {
    width: 500,
    height: 300,
    quality: 80,
    format: "webp",
  })
}

export function getAvatarUrl(imageUrl: string | null | undefined) {
  return getOptimizedImageUrl(imageUrl, {
    width: 100,
    height: 100,
    quality: 85,
    format: "webp",
  })
}

export function getCardImageUrl(imageUrl: string | null | undefined) {
  return getOptimizedImageUrl(imageUrl, {
    width: 400,
    height: 250,
    quality: 75,
    format: "webp",
  })
}

export function extractBlogImage(markdown: string): string | null {
  const match = markdown.match(/!\[.*?\]\((.*?)\)/)
  return match ? match[1] : null
}
