import { CalendarIcon } from "lucide-react"
import dayjs from "dayjs"
import Image from "next/image"
import { getAvatarUrl } from "@/lib/image-utils"

interface BlogPostHeaderProps {
  post: {
    title: string
    date: string
    author?: {
      name: string
      avatar?: {
        url: string
      }
    }
    mainImage?: {
      url: string
    }
  }
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="space-y-6 md:space-y-8">
      {/* Title */}
      <h1 className="text-2xl leading-tight font-bold tracking-tight text-gray-950 sm:text-3xl md:text-4xl md:leading-tight lg:text-5xl">
        {post.title}
      </h1>

      {/* Author and Date */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 md:gap-10">
        {/* Author */}
        {post.author && (
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative h-8 w-8 overflow-hidden rounded-full sm:h-9 sm:w-9 md:h-10 md:w-10">
              <Image
                src={
                  getAvatarUrl(post.author.avatar?.url) || "/default-avatar.svg"
                }
                alt={post.author.name}
                width={40}
                height={40}
                className="h-full w-full object-cover"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
                placeholder="blur"
              />
            </div>
            <span className="text-sm font-medium text-gray-600 sm:text-base">
              {post.author.name}
            </span>
          </div>
        )}

        {/* Date */}
        <div className="flex items-center gap-2 md:gap-3">
          <CalendarIcon className="h-3 w-3 text-gray-500 sm:h-4 sm:w-4" />
          <span className="text-xs font-medium text-gray-600 sm:text-sm">
            {dayjs(post.date).format("D MMM YYYY")}
          </span>
        </div>
      </div>

      {/* Featured Image */}
    </header>
  )
}
