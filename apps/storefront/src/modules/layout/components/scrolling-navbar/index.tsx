"use client"
import { MenuIcon, X, Phone, User, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useCalendly } from "../calendly-provider"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

interface ScrollingNavbarProps {
  onScheduleDemo?: () => void
  showScheduleDemo?: boolean
  variant?: "light" | "dark"
}

export function ScrollingNavbar({
  onScheduleDemo,
  showScheduleDemo = true,
  variant = "dark",
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

  const isActiveMenuItem = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const isDarkMode = variant === "dark" || isScrolled || isMobileMenuOpen
  const textColor = isDarkMode ? "text-white" : "text-gray-900"
  const hoverColor = isDarkMode ? "hover:text-blue-200" : "hover:text-amber-900"
  const borderColor = isDarkMode ? "border-white/20" : "border-gray-300"
  const buttonBg = isDarkMode
    ? "bg-transparent hover:bg-white/10"
    : "bg-transparent hover:bg-gray-100"

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "h-16 shadow-lg backdrop-blur-md lg:h-32 bg-black"
          : variant === "light"
          ? "bg-white shadow-sm"
          : "bg-transparent"
      } px-3 sm:px-6 lg:px-32`}
    >
      <div className="flex h-full w-full items-center justify-between">
        <div
          className={`flex flex-shrink-0 items-center transition-all duration-300 ${
            isScrolled || isMobileMenuOpen ? "" : "py-4 lg:py-8"
          }`}
        >
          <LocalizedClientLink href="/">
            <Image
              src="/logo.svg"
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
          </LocalizedClientLink>
        </div>
        <div
          className={`absolute left-1/2 hidden -translate-x-3/4 transform items-center space-x-10 text-base font-medium ${textColor} transition-all duration-300 lg:flex ${
            isScrolled || isMobileMenuOpen ? "" : "py-4 lg:py-8"
          }`}
        >
          {navItems.map((item) => (
            <LocalizedClientLink
              key={item.href}
              href={item.href}
              className={`transition-transform duration-200 hover:scale-110 ${hoverColor} ${
                isActiveMenuItem(item.href) ? "font-bold" : ""
              }`}
            >
              {item.label}
            </LocalizedClientLink>
          ))}
        </div>

        <div
          className={`flex items-center gap-3 transition-all duration-300 ${
            isScrolled || isMobileMenuOpen ? "" : "py-4 lg:py-8"
          }`}
        >
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

          {/* Call Us Now button */}
          <LocalizedClientLink
            href="tel:+1234567890"
            className={`hidden rounded-lg border ${borderColor} ${buttonBg} font-semibold ${textColor} transition-all lg:flex lg:items-center lg:gap-2 ${
              isScrolled || isMobileMenuOpen
                ? "px-4 py-2 text-sm"
                : "px-6 py-3 text-base"
            }`}
          >
            Call Us Now
            <Phone className="h-4 w-4" />
          </LocalizedClientLink>

          {/* User and Cart icons */}
          <div className="hidden lg:flex items-center gap-3">
            <LocalizedClientLink
              href="/account"
              className={`${textColor} ${hoverColor} transition-colors`}
              aria-label="Account"
            >
              <User className="h-6 w-6" />
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/cart"
              className={`${textColor} ${hoverColor} transition-colors`}
              aria-label="Cart"
            >
              <ShoppingCart className="h-6 w-6" />
            </LocalizedClientLink>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${textColor} transition-colors ${hoverColor} lg:hidden`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 border-t border-white/10 backdrop-blur-md lg:hidden bg-black">
          {/* Mobile menu content */}
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <LocalizedClientLink
                key={item.href}
                href={item.href}
                className={`text-white text-base font-medium transition-colors hover:text-blue-200 ${
                  isActiveMenuItem(item.href) ? "font-bold" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </LocalizedClientLink>
            ))}
            {showScheduleDemo && (
              <button
                onClick={() => {
                  handleScheduleDemo()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-100"
              >
                Schedule Demo
              </button>
            )}
            <LocalizedClientLink
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Call Us Now
              <Phone className="h-4 w-4" />
            </LocalizedClientLink>
            <div className="flex items-center gap-3 pt-2 border-t border-white/10">
              <LocalizedClientLink
                href="/account"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">Account</span>
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/cart"
                className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="text-sm font-medium">Cart</span>
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
