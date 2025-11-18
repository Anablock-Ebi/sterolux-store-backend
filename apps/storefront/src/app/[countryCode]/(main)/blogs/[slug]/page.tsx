import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ScrollingNavbar } from "@/modules/layout/components/scrolling-navbar"
import { getEntryBySlug } from "@/lib/strapi-service"
import {
  extractBlogImage,
  getAvatarUrl,
  getHeroImageUrl,
} from "@/lib/image-utils"
import { RecentBlogArticles } from "@/modules/layout/components/sections/blogs"
import Footer from "@/modules/layout/templates/footer"
import { BlogPostHeader } from "@/modules/layout/components/sections/blogs/_components/blog-header"
import { BlogPostContent } from "@/modules/layout/components/sections/blogs/_components/blog-post-content"
import { BlogPostShare } from "@/modules/layout/components/sections/blogs/_components/blog-share"
import PopularBlogArticles from "@/modules/layout/components/sections/blogs/_components/popular-blog-articles"

import { CtaSection } from "@/modules/layout/components/cta-section"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getEntryBySlug(slug, "blog-posts")

  if (!post) {
    return {}
  }

  return {
    title: post.title as string,
    description: post.summary as string,
  }
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post: any = await getEntryBySlug(slug, "blog-posts")

  if (!post) {
    notFound()
  }

  const mainImageUrl = extractBlogImage(post.blogContent)
  const postImageUrl = getHeroImageUrl(mainImageUrl)

  // Transform post data to match component interfaces
  const transformedPost = {
    title: post.title as string,
    date: (post.date as string) || post.createdAt,
    author: post.author
      ? {
          name: (post.author as any)?.name,
          avatar: (post.author as any)?.avatar?.url
            ? {
                url: getAvatarUrl(
                  `${process.env.NEXT_PUBLIC_API_URL}${
                    (post.author as any)?.avatar?.url
                  }`
                ),
              }
            : undefined,
        }
      : undefined,
    ...(postImageUrl && {
      mainImage: {
        url: postImageUrl,
      },
    }),
    blogContent: post.blogContent as string,
    summary: post.summary as string,
  }

  // Generate current URL for sharing
  const currentUrl = `${
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000"
  }/blogs/${slug}`

  return (
    <>
      <ScrollingNavbar variant="light" />

      {/* Blog Post Container */}
      <div className="mx-auto max-w-[770px] px-8 pt-8 pb-[74px] lg:pt-24 xl:px-0">
        <BlogPostHeader post={transformedPost} />
        <BlogPostContent post={transformedPost} />
        <BlogPostShare title={transformedPost.title} url={currentUrl} />
      </div>
      {/* Recent Blog Articles Section */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RecentBlogArticles limit={3} />
        </div>
      </section>

      <section className="mb-16 py-4 lg:mb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PopularBlogArticles />
        </div>
      </section>

      <CtaSection />

      <Footer />
    </>
  )
}
