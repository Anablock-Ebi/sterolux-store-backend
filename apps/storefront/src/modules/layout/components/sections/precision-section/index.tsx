"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { SectionContainer } from "@/modules/common/components/container"

const metrics = [
  { label: "Sterilization Effectiveness", percentage: 99 },
  { label: "Faster Turnaround Time", percentage: 85 },
  { label: "Eco-Friendly Impact", percentage: 95 },
]

function ProgressBar({
  percentage,
  inView,
  delay = 0,
}: {
  percentage: number
  inView: boolean
  delay?: number
}) {
  const [width, setWidth] = useState(0)
  const [currentPercentage, setCurrentPercentage] = useState(0)

  useEffect(() => {
    if (inView) {
      let timer: NodeJS.Timeout
      let counter: NodeJS.Timeout

      timer = setTimeout(() => {
        setWidth(percentage)

        const duration = 2000
        const steps = 50
        const increment = percentage / steps
        let current = 0

        counter = setInterval(() => {
          current += increment
          if (current >= percentage) {
            setCurrentPercentage(percentage)
            clearInterval(counter)
          } else {
            setCurrentPercentage(Math.floor(current))
          }
        }, duration / steps)
      }, delay)

      return () => {
        clearTimeout(timer)
        if (counter) clearInterval(counter)
      }
    } else {
      setWidth(0)
      setCurrentPercentage(0)
    }
  }, [inView, percentage, delay])

  return (
    <div className="space-y-2">
      <div className="h-1.5 bg-neutral-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#6B2F35] rounded-full transition-all ease-out"
          style={{
            width: `${width}%`,
            transitionDuration: "1500ms",
          }}
        />
      </div>
      <div className="text-right">
        <span className="text-lg font-semibold text-white">
          {currentPercentage}%
        </span>
      </div>
    </div>
  )
}

export function PrecisionSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-neutral-900 text-white">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
              Precision Sterilization, Stronger Protection
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              By combining steam technology with precision engineering, Sterolux
              delivers near-perfect sterilization, faster turnaround, and
              full-room coverage that traditional methods can't match.
            </p>
          </div>

          {/* Right side - Progress bars */}
          <div className="space-y-8">
            {metrics.map((metric, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-3 font-inter">
                  {metric.label}
                </h3>
                <ProgressBar
                  percentage={metric.percentage}
                  inView={isInView}
                  delay={index * 200}
                />
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
