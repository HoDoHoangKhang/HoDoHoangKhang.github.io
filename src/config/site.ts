import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

const DEFAULT_SITE_URL = "https://hodohoangkhang.github.io"

export const SITE_INFO = {
  name: USER.displayName,
  url:
    process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL || DEFAULT_SITE_URL,
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  { title: "About", href: "/#about" },
  { title: "Experience", href: "/#experience" },
  { title: "Education", href: "/#education" },
  { title: "Activities", href: "/#activities" },
  { title: "Projects", href: "/#projects" },
  { title: "Awards", href: "/#awards" },
  // { title: "Blog", href: "/#blog" }, // Ẩn tạm
]

// TODO: update Hoang Khang social usernames and repo
export const X_USERNAME = ""
export const GITHUB_USERNAME = "HoDoHoangKhang"
export const SOURCE_CODE_GITHUB_REPO = ""
export const SOURCE_CODE_GITHUB_URL = ""

export const SPONSORSHIP_URL = ""

export const UTM_PARAMS = {
  utm_source:
    SITE_INFO.url.replace(/^https?:\/\//, "").replace(/\/$/, "") || "portfolio",
}
