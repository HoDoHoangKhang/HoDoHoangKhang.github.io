import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SITE_INFO } from "@/config/site"
import { PostItem } from "@/features/blog/components/post-item"
import { getAllDocs } from "@/features/doc/data/documents"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Blog",
  description: `Blog | ${SITE_INFO.name}`,
  alternates: {
    canonical: `${SITE_INFO.url}/blog`,
  },
}

export default function BlogPage() {
  const allPosts = getAllDocs()

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between border-x border-edge px-4 py-4">
        <Button
          className="h-7 gap-2 border-none px-0 font-mono text-muted-foreground hover:text-foreground"
          variant="link"
          size="sm"
          asChild
        >
          <Link href="/">
            <ArrowLeftIcon />
            Home
          </Link>
        </Button>
      </div>

      <div
        className={cn(
          "screen-line-before screen-line-after border-x border-edge px-4 py-6"
        )}
      >
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-1 text-muted-foreground">
          {allPosts.length} post{allPosts.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="relative border-x border-edge">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge" />
          <div className="border-l border-edge" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {allPosts.map((post, index) => (
            <PostItem
              key={post.slug}
              post={post}
              shouldPreloadImage={index < 4}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
