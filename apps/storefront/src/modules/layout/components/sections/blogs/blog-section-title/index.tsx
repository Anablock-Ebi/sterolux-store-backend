import { SectionContainer } from "@/modules/common/components/container"
import { FadeIn } from "@/modules/common/components/fade-in"

export function BlogSectionTitle() {
  return (
    <SectionContainer className="mt-20 lg:mt-[120px]">
      <FadeIn className="max-w-[576px]">
        <h2 className="text-[36px] leading-[44px] font-bold tracking-[-0.72px] text-[#111928]">
          Read Our Latest Blog Posts
        </h2>
        <p className="mt-3 text-base leading-6 font-normal text-[#637381]">
          Explore articles that uncover challenges, share solutions, and
          highlight advances in infection control.
        </p>
      </FadeIn>
    </SectionContainer>
  )
}
