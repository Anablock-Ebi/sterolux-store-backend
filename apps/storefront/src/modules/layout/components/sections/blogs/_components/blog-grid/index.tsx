import { getBlogPosts } from "@/lib/strapi-service"
import { SectionContainer } from "@/modules/common/components/container"
import { BlogCard } from "../blog-card"

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

interface BlogGridProps {
  currentPage?: number
  limit?: number
}

export async function BlogGrid({ currentPage = 1, limit = 12 }: BlogGridProps) {
  let blogPosts: BlogPost[] = []

  try {
    // Fetch blog posts from Strapi using currentPage
    blogPosts = await getBlogPosts(currentPage, limit)
  } catch (error) {
    console.error("Failed to fetch blog posts:", error)
    return (
      <SectionContainer className="mt-[70px] pb-24">
        <div className="text-center text-gray-600">
          <p>Unable to load blog posts at this time.</p>
        </div>
      </SectionContainer>
    )
  }

  if (blogPosts.length === 0) {
    return (
      <SectionContainer className="mt-[70px] pb-24">
        <div className="text-center text-gray-600">
          <p>No blog posts available.</p>
        </div>
      </SectionContainer>
    )
  }

  // Group posts into rows of 3 for proper spacing (matches Figma)
  const postRows = []
  for (let i = 0; i < blogPosts.length; i += 3) {
    postRows.push(blogPosts.slice(i, i + 3))
  }

  return (
    <SectionContainer className="mt-[70px] pb-24">
      <div className="flex flex-col gap-[80px]">
        {postRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col gap-[30px] lg:flex-row lg:justify-start lg:gap-[30px]"
          >
            {row.map((post, postIndex) => (
              <BlogCard
                key={`${rowIndex}-${postIndex}-${post.id || post.slug}`}
                post={post}
              />
            ))}
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
