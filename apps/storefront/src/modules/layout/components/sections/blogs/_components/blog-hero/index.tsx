import { ScrollingNavbar } from "@/modules/layout/components/scrolling-navbar"

interface BlogHeroSectionProps {
  title?: string
  subtitle?: string
}

export function BlogHeroSection({
  title = "Insights That Shape Healthcare Sterilization",
  subtitle = "Stay updated with expert perspectives, best practices, and the latest innovations in sterilization technology.",
}: BlogHeroSectionProps) {
  return (
    <div
      className="relative z-20 flex min-h-screen flex-col"
      style={{
        backgroundColor: "#004080",
      }}
    >
      <div
        className="absolute z-[-10] h-full w-full opacity-40"
        style={{
          backgroundImage: "url(/background/blogs-backdrop.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <ScrollingNavbar />

      <div className="flex flex-1 flex-col items-center justify-center px-3 pt-20 text-center text-white sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto flex w-full flex-col items-center">
          <div className="mt-5 flex w-full flex-col items-center gap-4">
            <h1 className="text-center text-5xl leading-[60px] font-bold tracking-[-0.02em]">
              {title}
            </h1>

            <p className="text-center text-xl leading-7 font-semibold">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="h-16 sm:h-24 md:h-32 lg:h-48"></div>
    </div>
  )
}
