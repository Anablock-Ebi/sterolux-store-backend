"use client"

import { useCalendly } from "../layout/components/calendly-provider"

interface CTAInfectionControlProps {
  onScheduleDemo?: () => void
}

export function CTAInfectionControl({
  onScheduleDemo,
}: CTAInfectionControlProps = {}) {
  const { openCalendly } = useCalendly()

  const handleClick = () => {
    if (onScheduleDemo) {
      onScheduleDemo()
    } else {
      openCalendly()
    }
  }
  return (
    <div className="bg-gradient-cta flex w-full flex-col items-center justify-center px-4 py-20 lg:px-2.5 lg:py-[100px]">
      <div className="flex w-full max-w-[320px] flex-col items-center justify-start gap-8 md:max-w-4xl">
        <div className="flex flex-col items-center justify-start gap-8">
          <div className="flex flex-col items-center justify-start gap-6 text-center text-white">
            <h1 className="w-full font-sans text-xl leading-7 font-bold tracking-[-0.02em] lg:max-w-[551.758px] lg:text-[48px] lg:leading-[60px] lg:tracking-[-0.96px]">
              Take Infection Control to the Next Level
            </h1>
            <p className="w-full font-sans text-base leading-6 font-normal lg:max-w-[792.518px] lg:text-[18px] lg:leading-[28px]">
              Join leading healthcare providers who trust Sterolux to deliver
              safer, faster, and smarter sterilization.
            </p>
          </div>
          <button
            onClick={handleClick}
            className="flex cursor-pointer items-center justify-center rounded-[8px] bg-white px-6 py-3 transition-all duration-200 hover:scale-105 hover:bg-gray-50 active:scale-95"
          >
            <span className="font-sans text-sm leading-5 font-semibold text-[#1f88bf] lg:text-[16px] lg:leading-[24px]">
              Schedule Demo
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
