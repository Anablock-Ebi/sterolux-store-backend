import { cn } from "@/lib/util/cn"
import type React from "react"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
}

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 md:px-8 lg:px-24", className)}>
      {children}
    </div>
  )
}
