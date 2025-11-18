import { listRegions } from "@/lib/data/regions"
import FeaturedProducts from "@/modules/home/components/featured-products"

import Hero from "@/modules/home/components/hero"
import { CtaSection } from "@/modules/layout/components/cta-section"
import { HeroSection } from "@/modules/layout/components/sections/hero-section"
import { PrecisionSection } from "@/modules/layout/components/sections/precision-section"
import { RecentBlogArticles } from "@/modules/layout/components/sections/blogs"
import { StatsSection } from "@/modules/layout/components/sections/stats-section"
import { TrustedHealthcare } from "@/modules/layout/components/trusted-health"
import Footer from "@/modules/layout/templates/footer"
import SkeletonFeaturedProducts from "@/modules/skeletons/templates/skeleton-featured-products"
import { Metadata } from "next"
import { Suspense } from "react"

export const dynamicParams = true

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export async function generateStaticParams() {
  try {
    const regions = await listRegions()
    const countryCodes = regions
      ?.map((r) => r.countries?.map((c) => c.iso_2))
      .flat()
      .filter(Boolean) as string[]

    return countryCodes.map((countryCode) => ({ countryCode }))
  } catch (error) {
    console.warn(
      "Failed to generate static paths for home page during build:",
      error
    )
    // Return empty array to allow build to continue with dynamic rendering
    return []
  }
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  return (
    <>
      <HeroSection />

      <div className="flex flex-col gap-y-2 m-2">
        {/* <Suspense fallback={<SkeletonFeaturedProducts />}>
          <FeaturedProducts countryCode={countryCode} />
        </Suspense> */}
        <FeaturedProducts />
      </div>
      <StatsSection />
      <PrecisionSection />
      <TrustedHealthcare />
      <RecentBlogArticles />
      <CtaSection />
      <Footer />
    </>
  )
}
