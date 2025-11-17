"use client"

import { additionalProducts } from "@/lib/additional-products"
import { defaultProducts } from "@/lib/products"
import { ChevronDownIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

interface ProductsDropdownProps {
  /** Custom styling for the trigger button */
  className?: string
  /** Whether this item is currently active/selected */
  isActive?: boolean
  /** Callback when mobile menu item should close */
  onMobileClose?: () => void
  /** Whether this is in mobile menu (affects styling) */
  isMobile?: boolean
}

export function ProductsDropdown({
  className = "",
  isActive = false,
  onMobileClose,
  isMobile = false,
}: ProductsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileExpanded, setIsMobileExpanded] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleProductClick = () => {
    setIsOpen(false)
    setIsMobileExpanded(false)
    onMobileClose?.()
  }

  // Mobile version - render as stacked menu items with expand/collapse
  if (isMobile) {
    return (
      <>
        <div className="flex items-center justify-between">
          <Link
            href="/products"
            className={`block py-2 font-medium text-white transition-transform duration-200 hover:scale-105 ${
              isActive ? "font-bold" : ""
            }`}
            onClick={onMobileClose}
          >
            Products
          </Link>
          <button
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
            className="p-1 text-white transition-colors hover:text-blue-200"
            aria-label="Toggle products menu"
            aria-haspopup="menu"
            aria-expanded={isMobileExpanded}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "ArrowDown") {
                e.preventDefault()
                setIsMobileExpanded(true)
              }
            }}
          >
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-200 ${
                isMobileExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        {isMobileExpanded && (
          <div
            className="ml-4 max-h-[90vh] space-y-2 overflow-y-auto overscroll-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
            role="menu"
          >
            {[...defaultProducts, ...additionalProducts].map((product) => (
              <Link
                key={product.id}
                href={product.href || `/products/${product.id}`}
                className="block py-1 text-sm text-white/80 transition-colors hover:text-white"
                onClick={handleProductClick}
                role="menuitem"
                tabIndex={0}
              >
                {product.name}
              </Link>
            ))}
          </div>
        )}
      </>
    )
  }

  // Desktop version - render as dropdown
  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsOpen(false)
        }
      }}
    >
      <div className="flex items-center">
        <Link
          href="/products"
          className={`transition-transform duration-200 hover:scale-110 ${
            isActive ? "font-bold text-white" : ""
          } ${className}`}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "ArrowDown") {
              e.preventDefault()
              setIsOpen(true)
            }
          }}
        >
          Products
        </Link>
        <ChevronDownIcon
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 w-72" role="menu">
          <div className="overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5">
            <div
              className="max-h-[90vh] overflow-y-auto overscroll-contain py-2"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* All Products link */}
              <Link
                href="/products"
                className="block px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                tabIndex={0}
              >
                All Products
              </Link>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Individual Products */}
              {[...defaultProducts, ...additionalProducts].map((product) => (
                <Link
                  key={product.id}
                  href={product.href || `/products/${product.id}`}
                  className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-[#0077B6]"
                  onClick={handleProductClick}
                  role="menuitem"
                  tabIndex={0}
                >
                  {product.name}
                  {product.comingSoon && (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                      Coming Soon
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
