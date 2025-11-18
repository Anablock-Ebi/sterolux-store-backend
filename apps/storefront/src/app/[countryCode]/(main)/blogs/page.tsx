import { getEntriesTotalNumber } from "@/lib/strapi-service"
import { BlogGrid } from "@/modules/layout/components/sections/blogs/_components/blog-grid"
import { BlogHeroSection } from "@/modules/layout/components/sections/blogs/_components/blog-hero"
import { BlogPagination } from "@/modules/layout/components/sections/blogs/_components/blog-pagination"
import { BlogSectionTitle } from "@/modules/layout/components/sections/blogs/blog-section-title"
import Footer from "@/modules/layout/templates/footer"

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function Blogs({ searchParams }: BlogsPageProps) {
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const postsPerPage = 12

  // Fetch total number of blog posts to calculate pagination
  const totalPosts = await getEntriesTotalNumber("blog-posts")
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  return (
    <div className="">
      <BlogHeroSection />
      <BlogSectionTitle />
      <BlogGrid currentPage={currentPage} limit={postsPerPage} />
      <div className="flex justify-center pb-24">
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          baseUrl="/blogs"
        />
      </div>
      <Footer />
    </div>
  )
}
