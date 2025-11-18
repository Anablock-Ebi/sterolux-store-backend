import { getCardImageUrl } from "@/lib/image-utils"
import { MarkdownComponents } from "@/modules/layout/components/markdown-component"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

interface BlogPostContentProps {
  post: {
    blogContent: string
    summary?: string
  }
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const OptimizedImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt, width, height, ...rest } = props // Extract width and height to prevent conflicts
    // Ensure src is a string and handle undefined case
    const imageSrc = typeof src === "string" ? src : ""
    const optimizedSrc = getCardImageUrl(imageSrc)

    return (
      <Image
        src={optimizedSrc || "/placeholder.svg"}
        alt={alt || "Blog image"}
        width={800}
        height={400}
        className="mb-8 h-[400px] w-full rounded-[2rem] object-cover"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg=="
        {...rest}
      />
    )
  }

  // Combine: Use all MarkdownComponents but override the img component
  const OptimizedMarkdownComponents = {
    ...MarkdownComponents,
    img: OptimizedImage,
  }

  return (
    <div className="mt-6 space-y-6 md:mt-8 md:space-y-8">
      {/* Summary/Intro */}
      {post.summary && (
        <div className="text-base leading-relaxed text-gray-600 sm:text-lg md:leading-relaxed">
          <p>{post.summary}</p>
        </div>
      )}

      {/* Main Content */}
      <div className="prose prose-sm sm:prose-base md:prose-lg prose-headings:text-gray-950 prose-h1:text-xl prose-h1:font-bold prose-h1:leading-7 prose-h1:mt-8 prose-h1:mb-4 sm:prose-h1:text-2xl sm:prose-h1:leading-8 sm:prose-h1:mt-10 sm:prose-h1:mb-5 md:prose-h1:text-3xl md:prose-h1:leading-9 md:prose-h1:mt-12 md:prose-h1:mb-6 prose-h2:text-lg prose-h2:font-bold prose-h2:leading-6 prose-h2:mt-6 prose-h2:mb-3 sm:prose-h2:text-xl sm:prose-h2:leading-7 sm:prose-h2:mt-8 sm:prose-h2:mb-4 md:prose-h2:text-2xl md:prose-h2:leading-8 md:prose-h2:mt-12 md:prose-h2:mb-6 prose-h3:text-base prose-h3:font-semibold prose-h3:leading-6 prose-h3:mt-5 prose-h3:mb-2 sm:prose-h3:text-lg sm:prose-h3:leading-6 sm:prose-h3:mt-6 sm:prose-h3:mb-3 md:prose-h3:text-xl md:prose-h3:leading-7 md:prose-h3:mt-8 md:prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4 sm:prose-p:mb-5 md:prose-p:mb-6 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-ul:my-4 sm:prose-ul:my-5 md:prose-ul:my-6 prose-ol:my-4 sm:prose-ol:my-5 md:prose-ol:my-6 prose-li:my-1 sm:prose-li:my-2 prose-img:rounded-lg prose-img:shadow-sm prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:italic prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-white prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto max-w-none">
        <ReactMarkdown components={OptimizedMarkdownComponents}>
          {post.blogContent}
        </ReactMarkdown>
      </div>
    </div>
  )
}
