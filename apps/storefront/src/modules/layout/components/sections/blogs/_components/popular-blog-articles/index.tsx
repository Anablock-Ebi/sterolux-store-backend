import {
  extractBlogImage,
  getAvatarUrl,
  getHeroImageUrl,
} from "@/lib/image-utils"
import { getBlogPosts } from "@/lib/strapi-service"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  slug: string
  blogContent: string
  summary: string
  date: string
  author: {
    name: string
    avatar?: {
      url: string
    }
  }
}

interface PopularBlogItem {
  post: BlogPost
}

function PopularBlogItem({ post }: PopularBlogItem) {
  // Extract the main image from blog content
  const mainImageSrc = extractBlogImage(post.blogContent)
  // Use a proper fallback image that exists
  const postImage = mainImageSrc || "/home/featuresBackdrop.webp"
  const optimizedPostImage = getHeroImageUrl(postImage)

  return (
    <div className="w-full">
      <LocalizedClientLink
        href={`/blogs/${post.slug}`}
        className="group -m-2 flex w-full items-center justify-start gap-4 rounded-lg p-2 transition-colors hover:bg-gray-50 lg:gap-5"
      >
        {/* Blog Image */}
        <div
          className="h-16 w-16 shrink-0 rounded-[5px] bg-cover bg-center bg-no-repeat sm:h-18 sm:w-18 lg:h-20 lg:w-20"
          style={{ backgroundImage: `url('${optimizedPostImage}')` }}
        />

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col items-start justify-start gap-1">
          <div className="w-full text-base font-bold text-[#111928] transition-colors group-hover:text-gray-700 sm:text-lg md:text-[20px]">
            <p className="line-clamp-2 leading-6 sm:leading-7 md:leading-[28px]">
              {post.title}
            </p>
          </div>
          <div className="text-xs font-normal text-[#637381] sm:text-sm md:text-[16px]">
            <p className="leading-4 sm:leading-5 md:leading-[24px]">
              {post.author?.name || "Unknown Author"}
            </p>
          </div>
        </div>
      </LocalizedClientLink>
    </div>
  )
}

export default async function PopularBlogArticles() {
  const popularPostsData = await getBlogPosts()

  if (popularPostsData.length === 0) {
    return null
  }

  // Transform Contentful data to match BlogPost interface
  const popularPosts: BlogPost[] = popularPostsData.map(
    (post: any, index: number) => ({
      id: index + 1, // Generate a numeric ID since Contentful uses strings
      title: post.title,
      slug: post.slug,
      blogContent: post.blogContent,
      summary: post.summary,
      date: post.date || "",
      author: {
        name: post.author?.name || "Unknown Author",
        avatar: getAvatarUrl(post.author?.avatar?.url)
          ? {
              url: getAvatarUrl(post.author.avatar.url),
            }
          : undefined,
      },
    })
  )

  return (
    <div className="flex w-full flex-col items-start justify-start gap-8 md:gap-12 lg:gap-[60px]">
      {/* Section Title */}
      <div className="flex w-full max-w-none flex-col items-start justify-center gap-2 md:max-w-[640px] md:gap-[8px]">
        <div className="flex w-full flex-col items-start justify-center gap-3.5 leading-[0] not-italic md:gap-[14px]">
          <div className="w-full text-2xl font-bold tracking-[-0.5px] text-[#111928] md:text-3xl md:tracking-[-0.72px] lg:text-[36px]">
            <p className="leading-8 md:leading-10 lg:leading-[44px]">
              Popular Articles
            </p>
          </div>
          <div className="h-[1.349px] w-[80px] bg-gradient-to-r from-[#0077B6] to-[#00A3FF]"></div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="flex w-full flex-col gap-6 sm:gap-8 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-[30px]">
        {popularPosts.map((post, index) => (
          <PopularBlogItem key={post.id || index} post={post} />
        ))}
      </div>
    </div>
  )
}
