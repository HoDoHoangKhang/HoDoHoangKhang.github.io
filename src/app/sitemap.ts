import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
import { getAllDocs } from "@/features/doc/data/documents"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllDocs().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const routes = [
    { url: `${SITE_INFO.url}`, lastModified: new Date().toISOString() },
    { url: `${SITE_INFO.url}/blog`, lastModified: new Date().toISOString() },
  ]

  return [...routes, ...posts]
}
