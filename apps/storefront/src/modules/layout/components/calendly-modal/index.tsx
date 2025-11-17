"use client"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState, type MouseEvent } from "react"

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
  url?: string
}

export function CalendlyModal({
  isOpen,
  onClose,
  url = "https://calendly.com/steroluxsocials/30min",
}: CalendlyModalProps) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  // Only load the script on the client side
  useEffect(() => {
    setMounted(true)

    // Load Calendly script when modal is opened
    if (isOpen && mounted) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)

      // Listen for Calendly events
      const allowedOrigins = new Set([
        "https://calendly.com",
        "https://assets.calendly.com",
      ])
      const handleCalendlyEvent = (e: MessageEvent) => {
        // Validate origin and expected event shape
        if (!allowedOrigins.has(e.origin)) return
        const evt = (e as any)?.data?.event as string | undefined
        if (evt === "calendly.event_scheduled") {
          onClose()
          router.push("/thank-you")
        }
      }

      window.addEventListener("message", handleCalendlyEvent)

      return () => {
        // Clean up script when modal closes
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
        window.removeEventListener("message", handleCalendlyEvent)
      }
    }
  }, [isOpen, mounted, onClose, router])

  // Handle clicking on the overlay (outside the modal content)
  const handleOverlayClick = () => {
    onClose()
  }

  // Prevent clicks inside the modal from closing it
  const handleModalClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  if (!isOpen || !mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl rounded-xl bg-white"
        onClick={handleModalClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-gray-200 p-2 text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          aria-label="Close"
        >
          <X className="h-5 w-5 cursor-pointer" />
          <span className="sr-only">Close</span>
        </button>

        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </div>
  )
}
