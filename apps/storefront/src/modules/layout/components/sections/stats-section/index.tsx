import { SectionContainer } from "@/modules/common/components/container"
import { AnimatedNumber } from "../../animated-number"
import Image from "next/image"

const features = [
  {
    icon: "/icons/electron.svg",
    title: "Powerful & Precise",
    description:
      "Steam reaches every surface, eliminating pathogens others miss.",
  },
  {
    icon: "/icons/leaf.svg",
    title: "Eco-Friendly",
    description: "Leaves behind only oxygen, reducing chemicals and waste.",
  },
  {
    icon: "/icons/carbon.svg",
    title: "Intelligent Tracking",
    description:
      "Every cycle is logged automatically for full compliance visibility.",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F4F3EF]">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 font-inter">
              Smarter, Safer, and More <br /> Reliable Sterilization for <br />{" "}
              Modern Healthcare.
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              At Sterolux, we don't just manufacture sterilization equipment -
              we design intelligent systems that make infection control
              effortless. Every unit is engineered with precision, reliability,
              and efficiency in mind - empowering clinics, hospitals, and
              laboratories to maintain the highest hygiene standards with less
              downtime, fewer errors, and full regulatory compliance.
            </p>
          </div>

          {/* Right side - Statistics */}
          <div className="space-y-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#6B2F35] mb-3 font-inter">
                <AnimatedNumber start={0} end={99} />%
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Sterilization consistency achieved across validated cycles,
                ensuring reliable infection control and peace of mind for every
                procedure.
              </p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#6B2F35] mb-3 font-inter">
                <AnimatedNumber start={0} end={100} />%
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Commitment to uncompromising safety, long-term performance, and
                medical-grade durability in every product we build.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-neutral-200">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#6B2F35] flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  height={24}
                  width={24}
                  className="w-7 h-7 text-white"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2 font-inter">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
