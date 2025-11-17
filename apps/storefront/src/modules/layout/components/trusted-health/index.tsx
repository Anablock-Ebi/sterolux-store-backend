import { SectionContainer } from "@/modules/common/components/container"
import { Check } from "@medusajs/icons"
import Image from "next/image"

const features = [
  {
    title: "Green Certification Compliance",
    icon: Check,
  },
  {
    title: "FDA Approved",
    icon: Check,
  },
  {
    title: "Energy-Efficient Sterilization",
    icon: Check,
  },
]

const facilities = [
  {
    title: "Hospitals",
    description:
      "Streamline sterilization in operating rooms and high-traffic areas.",
    icon: "/icons/hospital-icon.svg",
  },
  {
    title: "Clinics & Practices",
    description:
      "Ensure exam rooms and equipment meet safety standards every time.",
    icon: "/icons/uit_hospital.svg",
  },
  {
    title: "Labs",
    description: "Protect your research with precise sterilization.",
    icon: "/icons/lab-icon.svg",
  },
  {
    title: "Care Facilities",
    description: "Safeguard residents and staff every single day.",

    icon: "/icons/health-care-icon.svg",
  },
]

export function TrustedHealthcare() {
  return (
    <SectionContainer className="w-full bg-[#F4F3EF] py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="w-full aspect-square bg-neutral-400 rounded-3xl" />

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-inter">
                Trusted Across Healthcare
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Sterolux brings faster, safer, and greener sterilization to any
                healthcare setting. Whether it's a hospital, clinic, lab, or
                care facility, our steam technology simplifies infection control
                and keeps every environment protected.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6B2F35] text-white flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold font-inter">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Facilities grid */}
        <div className="border-t border-neutral-300 pt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility) => (
              <div key={facility.title} className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-[#6B2F35] text-white flex items-center justify-center">
                  <Image
                    src={facility.icon || "/placeholder.svg"}
                    alt={`${facility.title} icon`}
                    width={28}
                    height={28}
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed  max-w-xs">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
