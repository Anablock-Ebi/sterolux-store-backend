"use client"

import {
  FacebookIcon,
  LinkedInIcon,
  XIcon,
} from "@/modules/common/icons/social/indext"

interface BlogPostShareProps {
  title: string
  url: string
}

export function BlogPostShare({ title, url }: BlogPostShareProps) {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  return (
    <div className="flex w-full items-center justify-start gap-5">
      <span className="text-sm font-medium text-gray-600">Share This Post</span>
      <div className="flex items-center gap-2.5">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-blue-600 hover:text-white"
          aria-label="Share on Facebook"
        >
          <FacebookIcon className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-black hover:text-white"
          aria-label="Share on X (Twitter)"
        >
          <XIcon className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-blue-700 hover:text-white"
          aria-label="Share on LinkedIn"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
