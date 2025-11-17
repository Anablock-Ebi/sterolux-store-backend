import Link from "next/link"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import Image from "next/image"
import { SectionContainer } from "@/modules/common/components/container"
import { SocialIcons } from "@/modules/common/icons/social/indext"
import { EmailIcon } from "@/modules/common/icons/email"

export default function Footer() {
  return (
    <footer className="bg-[#F4F3EF] py-16">
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div>
                <Image
                  src="/logo.svg"
                  alt="Sterolux"
                  width={120}
                  height={50}
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Innovative Technology for Healthcare Infection Control
              </p>
            </div>

            <div className="flex gap-4">
              <SocialIcons />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-neutral-900 text-lg">Products</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <LocalizedClientLink
                  href="/products/sterilizers"
                  className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                >
                  Sterilizers
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/products/sealing-machines"
                  className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                >
                  Sealing Machines
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/products/water-distillers"
                  className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                >
                  Water Distillers
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/products/ultra-sonic-cleaners"
                  className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                >
                  Ultra - Sonic Cleaners
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-neutral-900 text-lg">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <LocalizedClientLink
                  href="/blogs"
                  className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                >
                  Blogs
                </LocalizedClientLink>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <LocalizedClientLink
                  href="/contact"
                  className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                >
                  Contact
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/shipping-returns"
                  className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                >
                  Shipping & Returns
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/warranty-policy"
                  className="text-neutral-600 hover:text-neutral-900 text-sm transition-colors"
                >
                  Warranty Policy
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-neutral-900 text-lg">
              Subscribe To Newsletter
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Enter your email address for receiving latest news & product
              updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2.5 border border-neutral-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-[#6B2F35] hover:bg-amber-800 text-white p-2.5 rounded transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <EmailIcon className="w-5 h-5" />
              </button>
            </form>
            <p className="text-neutral-500 text-xs mt-2">
              © Copyright 2025 - Sterolux
            </p>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
