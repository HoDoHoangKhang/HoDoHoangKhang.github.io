import Link from "next/link"
import React from "react"

import { cn } from "@/lib/utils"
import type { NavItem } from "@/types/nav"

export function Nav({
  items,
  activeId,
  className,
}: {
  items: NavItem[]
  activeId?: string
  className?: string
}) {
  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-4", className)}
    >
      {items.map(({ title, href }, index) => {
        const active =
          activeId === href ||
          (href === "/" // Home page
            ? ["/", "/index"].includes(activeId || "")
            : activeId?.startsWith(href))

        return (
          <React.Fragment key={href}>
            {index > 0 && (
              <span
                aria-hidden
                className="font-mono text-sm text-muted-foreground/60"
              >
                |
              </span>
            )}
            <NavItem href={href} active={active}>
              {title}
            </NavItem>
          </React.Fragment>
        )
      })}
    </nav>
  )
}

export function NavItem({
  active,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean
}) {
  return (
    <Link
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground transition-[color] hover:text-foreground",
        active && "text-foreground"
      )}
      {...props}
    />
  )
}
