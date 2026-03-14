"use client"

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { toast } from "sonner"

import { copyText } from "@/utils/copy"

import { getMarkSVG,SiteMark } from "./site-mark"
import { getWordmarkSVG } from "./site-wordmark"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem
          onClick={() => {
            const svg = getMarkSVG(resolvedTheme === "light" ? "#000" : "#fff")
            copyText(svg)
            toast.success("Mark as SVG copied")
          }}
        >
          <SiteMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            const svg = getWordmarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            )
            copyText(svg)
            toast.success("Logotype as SVG copied")
          }}
        >
          <TypeIcon />
          Copy Logotype as SVG
        </ContextMenuItem>

        {/* TODO: update Hoang Khang — add brand guidelines page or remove */}
        <ContextMenuItem asChild>
          <Link href="/#about">
            <TriangleDashedIcon />
            About
          </Link>
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <a href="#" download>
            <DownloadIcon />
            Download Brand Assets
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
