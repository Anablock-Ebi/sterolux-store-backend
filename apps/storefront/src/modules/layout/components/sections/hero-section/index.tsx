import Image from "next/image"
import { useState } from "react"

import { CalendlyModal } from "../../calendly-modal"
import { ChevronRight } from "lucide-react"
import { NavigationHeader } from "@/modules/layout/templates/nav"

export function HeroSection() {
  // const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  return (
    <div
      className="relative z-20 flex min-h-screen flex-col"
      style={{
        background:
          "linear-gradient(121deg, rgba(23, 23, 26, 0.70) 51.2%, rgba(106, 47, 54, 0.70) 138.71%)",
      }}
    >
      <Image
        src="/home/hero-backdrop.svg"
        alt="Hero Background"
        width={1440}
        height={800}
        className="absolute z-[-10] h-full w-full object-cover object-center opacity-40"
      />

      <NavigationHeader />

      <div className="flex flex-1 flex-col items-center justify-center px-3 pt-20 text-center text-white sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto w-full max-w-6xl  sm:space-y-6 ">
          <h1 className=" md:text-5xl font-bold leading-[65px] tracking-[-1.2px] capitalize text-center text-3xl">
            The New Standard in <br /> Sterilization Technology
          </h1>

          <p className="text-[#D7D6D3] text-lg font-normal leading-7 text-center">
            Smart sterilization systems that redefine safety, efficiency, and
            performance in modern healthcare.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-4 ">
            <a
              href="/products"
              className="relative flex w-full max-w-xs cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/[0.07] bg-[#6B2F35] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-white/20 hover:bg-white/25 hover:text-white sm:w-auto sm:px-6 sm:py-3 sm:text-base"
            >
              <div className="pointer-events-none absolute inset-[-0.5px] rounded-[8.5px] border border-white/[0.07]"></div>
              Explore Products
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <button
              // onClick={() => setIsCalendlyOpen(true)}
              className="w-full max-w-xs cursor-pointer rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:scale-105 hover:bg-gray-50 sm:w-auto sm:px-6 sm:py-3 sm:text-base"
              style={{
                backdropFilter: "blur(2px)",
                boxShadow: "0px 0px 8px 0px rgba(255, 255, 255, 0.08)",
              }}
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      <div className="h-16 sm:h-24 md:h-32 lg:h-48"></div>

      {/* <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      /> */}
    </div>
  )
}
