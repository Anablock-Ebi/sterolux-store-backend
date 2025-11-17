const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
const CLIENT_NAME_FILTER = "Sterolux"

interface StrapiResponse<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export async function getEntriesByType(
  endpoint: string,
  page = 1,
  limit = 5,
  additionalParams = {}
): Promise<StrapiResponse<any>> {
  const params = new URLSearchParams({
    "pagination[page]": page.toString(),
    "pagination[pageSize]": limit.toString(),
    "sort[0]": "date:desc",
    "filters[clientName][$eq]": CLIENT_NAME_FILTER,
    ...additionalParams,
  })

  const response = await fetch(`${STRAPI_URL}/api/${endpoint}?${params}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`)
  }

  const data = await response.json()
  return data
}

export async function getEntriesTotalNumber(endpoint: string): Promise<number> {
  const params = new URLSearchParams({
    "pagination[pageSize]": "1",
    "filters[clientName][$eq]": CLIENT_NAME_FILTER,
  })

  const response = await fetch(`${STRAPI_URL}/api/${endpoint}?${params}`)

  if (!response.ok) {
    throw new Error(
      `Failed to fetch total for ${endpoint}: ${response.statusText}`
    )
  }

  const data = await response.json()
  return data.meta.pagination.total
}

export async function getEntryBySlug(slug: string, endpoint: string) {
  const params = new URLSearchParams({
    "filters[slug][$eq]": slug,
    "filters[clientName][$eq]": CLIENT_NAME_FILTER,
  })

  if (endpoint === "blog-posts") {
    params.append("populate[author][populate][0]", "avatar")
  } else if (endpoint === "case-studies") {
    params.append("populate[companyLogo]", "true")
    params.append("populate[sampleImage]", "true")
    params.append("populate[testimonial_body][populate][0]", "true")
  }

  const response = await fetch(`${STRAPI_URL}/api/${endpoint}?${params}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch entry by slug: ${response.statusText}`)
  }

  const data = await response.json()
  return data.data[0] || null
}

export async function getBlogPosts(page = 1, limit = 5) {
  const response = await getEntriesByType("blog-posts", page, limit, {
    "populate[author][populate][0]": "avatar",
  })

  return response.data.map((blog: any) => ({
    ...blog,
  }))
}

export async function getBlogPostsTotalNumber(): Promise<number> {
  return getEntriesTotalNumber("blog-posts")
}

export async function getBlogPostBySlug(slug: string) {
  return getEntryBySlug(slug, "blog-posts")
}

export async function getCaseStudies(page = 1, limit = 5) {
  const response = await getEntriesByType("case-studies", page, limit, {
    populate: "companyLogo",
  })

  return response.data.map((caseStudy: any) => ({
    ...caseStudy,
  }))
}

export async function getCaseStudiesTotalNumber(): Promise<number> {
  return getEntriesTotalNumber("case-studies")
}

export async function getCaseStudyBySlug(slug: string) {
  return getEntryBySlug(slug, "case-studies")
}
