"use client"

import { useState, createContext, useContext, type ReactNode } from "react"
import { CalendlyModal } from "../calendly-modal"

// Create a context for the Calendly modal
const CalendlyContext = createContext<{
  openCalendly: () => void
} | null>(null)

export const useCalendly = () => {
  const context = useContext(CalendlyContext)
  if (!context) {
    // Return a no-op function when not in a provider context
    return {
      openCalendly: () =>
        console.warn("useCalendly called outside CalendlyProvider"),
    }
  }
  return context
}

interface CalendlyProviderProps {
  children: ReactNode
}

export function CalendlyProvider({ children }: CalendlyProviderProps) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  const openCalendly = () => setIsCalendlyOpen(true)

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      {children}

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </CalendlyContext.Provider>
  )
}
