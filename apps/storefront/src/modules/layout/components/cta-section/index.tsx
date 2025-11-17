import { ArrowRight } from "@medusajs/icons"
import { Button } from "@medusajs/ui"

export function CtaSection() {
  return (
    <section className="w-full bg-neutral-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Take Infection Control to the
          <br /> Next Level with Sterolux
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
          Advanced sterilization that's intelligent, efficient, and built for
          the future of healthcare.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-white text-neutral-900 hover:bg-neutral-100 py-3 flex items-center">
            Explore Products
            <ArrowRight className="ml-2 h-5 w-5 text-center " />
          </Button>
          <Button className="border-white text-white hover:bg-white/10 bg-transparent py-3 px-6 border-[1px]">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
