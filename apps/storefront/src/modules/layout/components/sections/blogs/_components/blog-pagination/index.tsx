import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import clsx from "clsx"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"

interface PaginationProps {
  currentPage?: number
  totalPages?: number
  baseUrl?: string
}

export function BlogPagination({
  currentPage = 1,
  totalPages = 8,
  baseUrl = "/blogs",
}: PaginationProps) {
  // Generate page numbers to show (show current page and 2 pages around it)
  const getPageNumbers = () => {
    const pages: number[] = []
    const showPages = 3 // Number of page buttons to show

    if (totalPages <= showPages) {
      // If total pages is small, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Show current page and surrounding pages
      let start = Math.max(1, currentPage - 1)
      let end = Math.min(totalPages, start + showPages - 1)

      // Adjust start if we're near the end
      if (end - start < showPages - 1) {
        start = Math.max(1, end - showPages + 1)
      }

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex items-center justify-center gap-1">
      {/* Previous Button */}
      <LocalizedClientLink
        href={currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : "#"}
        className={clsx(
          "flex items-center justify-center rounded-lg bg-white",
          // Mobile: icon only, smaller size
          "h-8 w-8 md:h-auto md:w-auto md:gap-2 md:px-4 md:py-2",
          currentPage > 1 ? "hover:bg-gray-50" : "cursor-not-allowed opacity-50"
        )}
      >
        <ChevronLeftIcon className="h-4 w-4 text-gray-600" />
        <span className="hidden text-base leading-6 font-medium text-[#111928] md:inline">
          Previous
        </span>
      </LocalizedClientLink>

      {/* Page Numbers - Desktop */}
      <div className="hidden md:flex md:gap-1">
        {pageNumbers.map((page) => (
          <LocalizedClientLink
            key={page}
            href={`${baseUrl}?page=${page}`}
            className={clsx(
              "relative flex h-10 w-10 items-center justify-center rounded-lg",
              page === currentPage
                ? // Active state - matches Figma design exactly
                  "text-white"
                : "bg-white text-[#111928] hover:bg-gray-50"
            )}
            style={
              page === currentPage
                ? {
                    borderRadius: "8px",
                    border: "1px solid #0077B6",
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(95deg, #0077B6 -0.26%, #00A3FF 134.33%)",
                    backgroundBlendMode: "screen, normal",
                    boxShadow:
                      "0 1px 2px 0 rgba(16, 24, 40, 0.06), 0 1px 3px 0 rgba(16, 24, 40, 0.10)",
                  }
                : {}
            }
          >
            <span className="text-base leading-6 font-medium">{page}</span>
          </LocalizedClientLink>
        ))}
      </div>

      {/* Page Numbers - Mobile (only current page) */}
      <div className="flex gap-1 md:hidden">
        <div
          className="relative flex h-8 w-8 items-center justify-center rounded-lg text-white"
          style={{
            borderRadius: "8px",
            border: "1px solid #0077B6",
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(95deg, #0077B6 -0.26%, #00A3FF 134.33%)",
            backgroundBlendMode: "screen, normal",
            boxShadow:
              "0 1px 2px 0 rgba(16, 24, 40, 0.06), 0 1px 3px 0 rgba(16, 24, 40, 0.10)",
          }}
        >
          <span className="text-sm leading-5 font-medium">{currentPage}</span>
        </div>
        {/* Mobile page indicator */}
        <div className="flex h-8 items-center px-2">
          <span className="text-sm font-medium text-[#637381]">
            of {totalPages}
          </span>
        </div>
      </div>

      {/* Ellipsis and Last Page - Desktop only */}
      <div className="hidden md:flex md:gap-1">
        {totalPages > 3 && pageNumbers[pageNumbers.length - 1] < totalPages && (
          <>
            {/* Ellipsis */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
              <div className="flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8C1 7.44772 1.44772 7 2 7C2.55228 7 3 7.44772 3 8Z"
                    fill="#6B7280"
                  />
                  <path
                    d="M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"
                    fill="#6B7280"
                  />
                  <path
                    d="M15 8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8Z"
                    fill="#6B7280"
                  />
                </svg>
              </div>
            </div>

            {/* Last Page */}
            <LocalizedClientLink
              href={`${baseUrl}?page=${totalPages}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#111928] hover:bg-gray-50"
            >
              <span className="text-base leading-6 font-medium">
                {totalPages}
              </span>
            </LocalizedClientLink>
          </>
        )}
      </div>

      {/* Next Button */}
      <LocalizedClientLink
        href={
          currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : "#"
        }
        className={clsx(
          "flex items-center justify-center rounded-lg bg-white",
          // Mobile: icon only, smaller size
          "h-8 w-8 md:h-auto md:w-auto md:gap-2 md:px-4 md:py-2",
          currentPage < totalPages
            ? "hover:bg-gray-50"
            : "cursor-not-allowed opacity-50"
        )}
      >
        <span className="hidden text-base leading-6 font-medium text-[#111928] md:inline">
          Next
        </span>
        <ChevronRightIcon className="h-4 w-4 text-gray-600" />
      </LocalizedClientLink>
    </div>
  )
}
