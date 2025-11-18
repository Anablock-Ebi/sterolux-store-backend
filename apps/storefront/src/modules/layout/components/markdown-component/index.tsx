import Link from "next/link"
import type { Components } from "react-markdown"

export const MarkdownComponents: Components = {
  h1: ({ children, ...props }) => (
    <h1 className="mt-8 mb-4 text-4xl font-bold" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="mt-8 mb-4 text-3xl font-semibold" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mt-6 mb-3 text-2xl font-semibold" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="mt-4 mb-4 list-inside list-disc pl-4 text-gray-600"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="mt-4 mb-4 list-inside list-decimal pl-4 text-gray-600"
      {...props}
    >
      {children}
    </ol>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold" {...props}>
      {children}
    </strong>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-4 border-l-4 border-gray-200 pl-4 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  img: ({ src, alt, ...props }) => (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className="mb-8 h-[400px] w-full rounded-[2rem] object-cover"
      {...props}
    />
  ),
  // Add link component
  a: ({ href, children, ...props }) => {
    const isInternal = href?.startsWith("/")

    if (isInternal) {
      return (
        <Link
          href={href || "#"}
          className="text-blue-600 underline underline-offset-4 hover:text-blue-800"
          {...props}
        >
          {children}
        </Link>
      )
    }

    return (
      <a
        href={href}
        className="text-blue-600 underline underline-offset-4 hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  },
}
