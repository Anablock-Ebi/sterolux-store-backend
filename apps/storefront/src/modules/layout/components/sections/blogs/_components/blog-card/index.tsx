import { extractBlogImage, getHeroImageUrl } from "@/lib/image-utils"
import { FadeIn } from "@/modules/common/components/fade-in"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

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

interface BlogCardProps {
  post: BlogPost
  showReadMore?: boolean
}

export function BlogCard({ post, showReadMore = true }: BlogCardProps) {
  const mainImageSrc = extractBlogImage(post.blogContent)

  const postImage =
    getHeroImageUrl(mainImageSrc) || "/home/featuresBackdrop.webp"

  const summary = post.summary || "No summary available."

  return (
    <FadeIn className="mx-auto flex w-full max-w-[370px] flex-col gap-6 md:mx-0 md:gap-[30px]">
      <div
        className="h-[180px] w-full shrink-0 rounded-[8px] bg-cover bg-center bg-no-repeat sm:h-[200px] md:h-[220px]"
        style={{ backgroundImage: `url('${postImage}')` }}
      />

      <div className="relative flex shrink-0 flex-col items-start justify-start gap-4 md:gap-[25px]">
        <div className="relative flex shrink-0 flex-col items-start justify-start gap-3 leading-[0] not-italic md:gap-[15px]">
          <div className="relative w-full shrink-0 text-lg font-bold text-[#111928] md:text-[20px]">
            <LocalizedClientLink
              href={`/blogs/${post.slug}`}
              className="transition-colors hover:text-gray-700"
            >
              <p className="leading-6 md:leading-[28px]">{post.title}</p>
            </LocalizedClientLink>
          </div>

          <div className="relative w-full shrink-0 text-sm font-normal text-[#637381] md:text-[16px]">
            <p className="line-clamp-4 leading-5 md:leading-[24px]">
              {summary}
            </p>
          </div>

          {showReadMore && (
            <div className="mt-3 md:mt-4">
              <LocalizedClientLink
                href={`/blogs/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm leading-5 font-semibold transition-all hover:opacity-90 md:text-base md:leading-6 text-[#6B2F35]"
              >
                Read More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 text-[#6B2F35] transition-transform md:h-5 md:w-5"
                >
                  <path
                    d="M13.825 10L8.425 4.6L9.8375 3.1875L17.15 10.5L9.8375 17.8125L8.425 16.4L13.825 11H2.85V9H13.825V10Z"
                    fill="currentColor"
                  />
                </svg>
              </LocalizedClientLink>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  )
}
