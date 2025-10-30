/**
 * Utility function to determine if static generation should be skipped during build
 */
export function shouldSkipStaticGeneration(): boolean {
  return (
    process.env.SKIP_STATIC_GENERATION === "true" ||
    process.env.NODE_ENV === "production"
  )
}

/**
 * Helper function to safely handle static generation with fallback
 */
export async function safeStaticGeneration<T>(
  fn: () => Promise<T[]>,
  fallback: T[] = []
): Promise<T[]> {
  if (shouldSkipStaticGeneration()) {
    console.log("Skipping static generation due to environment configuration")
    return fallback
  }

  try {
    return await fn()
  } catch (error) {
    console.warn(
      "Static generation failed, falling back to dynamic rendering:",
      error
    )
    return fallback
  }
}
