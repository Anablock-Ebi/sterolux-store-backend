import { getBlogPosts } from "@/lib/strapi-service"
import { BlogCard } from "./_components/blog-card"
import { SectionContainer } from "@/modules/common/components/container"

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

interface RecentBlogArticlesProps {
  limit?: number
}

export async function RecentBlogArticles({
  limit = 3,
}: RecentBlogArticlesProps) {
  const blogPosts = await getBlogPosts(1, limit)

  if (!blogPosts || blogPosts.length === 0) {
    return null
  }

  return (
    <div className=" w-full py-16 md:py-24 lg:py-32 bg-white">
      <SectionContainer>
        <div className="flex w-full max-w-none flex-col items-start justify-center gap-2  md:gap-[8px] mb-12">
          <div className="flex w-full flex-col items-start justify-center gap-3 leading-[0] not-italic md:gap-[12px]">
            <div className="w-full text-2xl font-bold tracking-[-0.5px] text-[#111928] md:text-3xl md:tracking-[-0.72px] lg:text-[36px] flex justify-center">
              <p className="leading-8 md:leading-10 lg:leading-[44px] ">
                Our Recent News
              </p>
            </div>
            <div className="w-full text-sm font-normal text-[#637381] md:text-base lg:text-[16px]  flex justify-center">
              <p className="leading-5 md:leading-6 lg:leading-[24px] ">
                Stay up to date on the future of sterilization, healthcare
                compliance, and sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="flex w-full flex-col gap-6 sm:gap-8 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-[30px]">
          {blogPosts.map((post: BlogPost, index: number) => (
            <div
              key={`recent-blog-${post.id || post.slug || index}`}
              className="w-full"
            >
              <BlogCard post={post} showReadMore={true} />
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  )
}
