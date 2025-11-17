"use client"
import { Hamburger, X, Phone, User, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useCalendly } from "../calendly-provider"
import { ProductsDropdown } from "../products-dropdown"

interface ScrollingNavbarProps {
  /** Show schedule demo button and handle its click */
  onScheduleDemo?: () => void
  /** Show schedule demo button */
  showScheduleDemo?: boolean
}

export function ScrollingNavbar({
  onScheduleDemo,
  showScheduleDemo = true,
}: ScrollingNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { openCalendly } = useCalendly()
  const pathname = usePathname()

  const handleScheduleDemo = onScheduleDemo || openCalendly

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/products", label: "Products" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/case-studies", label: "Case Studies" },
  ]

  // Helper function to check if current page matches menu item (including sub-pages)
  const isActiveMenuItem = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "h-16 shadow-lg backdrop-blur-md lg:h-32"
          : "bg-transparent"
      } px-3 sm:px-6 lg:px-32`}
      style={
        isScrolled || isMobileMenuOpen
          ? {
              background: "black",
              backgroundBlendMode: "screen, normal",
            }
          : {}
      }
    >
      <div className="flex h-full w-full items-center justify-between">
        {/* Logo */}
        <div
          className={`flex flex-shrink-0 items-center transition-all duration-300 ${
            isScrolled || isMobileMenuOpen ? "" : "py-4 lg:py-8"
          }`}
        >
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="Sterolux Logo"
              width={150}
              height={100}
              className={`transition-all duration-300 ${
                isScrolled || isMobileMenuOpen
                  ? "h-[80px] w-[150px]"
                  : "h-[80px] w-[150px]"
              }`}
              priority
            />
          </Link>
        </div>
        <div
          className={`absolute left-1/2 hidden -translate-x-3/4 transform items-center space-x-10 text-base font-medium text-white transition-all duration-300 lg:flex ${
            isScrolled || isMobileMenuOpen ? "" : "py-4 lg:py-8"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-transform duration-200 hover:scale-110 ${
                isActiveMenuItem(item.href) ? "font-bold text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile & Desktop Right Side */}
        <div
          className={`flex items-center gap-3 transition-all duration-300 ${
            isScrolled || isMobileMenuOpen ? "" : "py-4 lg:py-8"
          }`}
        >
          {/* Schedule Demo Button - Desktop Only */}
          {showScheduleDemo && (
            <button
              onClick={handleScheduleDemo}
              className={`hidden rounded-lg bg-white font-semibold text-gray-900 shadow-md transition-all hover:bg-gray-100 lg:flex ${
                isScrolled || isMobileMenuOpen
                  ? "px-4 py-2 text-sm"
                  : "px-6 py-3 text-base"
              }`}
            >
              Schedule Demo
            </button>
          )}
          <Link
            href="tel:+1234567890"
            className={`hidden rounded-lg border border-white/20 bg-transparent font-semibold text-white transition-all hover:bg-white/10 lg:flex lg:items-center lg:gap-2 ${
              isScrolled || isMobileMenuOpen
                ? "px-4 py-2 text-sm"
                : "px-6 py-3 text-base"
            }`}
          >
            Call Us Now
            <Phone className="h-4 w-4" />
          </Link>

          {/* User and Cart icons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/account"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Account"
            >
              <User className="h-6 w-6" />
            </Link>
            <Link
              href="/cart"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white transition-colors hover:text-blue-200 lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Hamburger className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-full right-0 left-0 border-t border-white/10 backdrop-blur-md lg:hidden"
          style={{
            background:
              "var(--gradient-blue, linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(95deg, #0077B6 -0.26%, #00A3FF 134.33%))",
            backgroundBlendMode: "screen, normal",
          }}
        ></div>
      )}
    </nav>
  )
}
