/**
 * Tech stack icons: cùng nguồn với chanhdai.com (assets.chanhdai.com).
 * Keys có trên assets → dùng SVG tại assets (đẹp, đồng bộ).
 * Keys chưa có trên assets (wordpress, vue, gemini, html, css) → fallback Simple Icons CDN.
 *
 * Simple Icons: https://simpleicons.org, CDN: https://cdn.simpleicons.org/{slug}
 * Assets: https://assets.chanhdai.com/images/tech-stack-icons/{key}.svg (và -light.svg / -dark.svg)
 */
const ASSETS_TECH_STACK_BASE =
  "https://assets.chanhdai.com/images/tech-stack-icons"

/** Keys chưa có trên assets.chanhdai.com → dùng Simple Icons (fallback). */
const KEYS_USE_SIMPLE_ICONS = [
  "wordpress",
  "vue",
  "gemini",
  "html",
  "css",
]

export const TECH_STACK_ICON_SLUGS: Record<string, string | undefined> = {
  typescript: "typescript",
  js: "javascript",
  python: "python",
  vue: "vuedotjs",
  nodejs: "nodedotjs",
  wordpress: "wordpress",
  react: "react",
  nextjs2: "nextdotjs",
  tailwindcss: "tailwindcss",
  "shadcn-ui": "shadcnui",
  radixui: "radixui",
  "base-ui": "baseui",
  html: "html5",
  css: "css",
  "mobx-state-tree": "mobxstatetree",
  redux: "redux",
  antd: "antdesign",
  git: "git",
  docker: "docker",
  mysql: "mysql",
  php: "php",
  figma: "figma",
  gemini: "googlegemini",
  claude: "anthropic",
  cursor: "cursor",
  chatgpt: "openai",
}

const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org"
const PLACEHOLDER = "/images/tech-stack-icons/placeholder.svg"
const COLOR_LIGHT = "52525b"
const COLOR_DARK = "e4e4e7"

function getSimpleIconsUrl(
  key: string,
  variant?: "default" | "light" | "dark"
): string {
  const slug = TECH_STACK_ICON_SLUGS[key]
  if (!slug) return PLACEHOLDER
  if (variant === "light") return `${SIMPLE_ICONS_CDN}/${slug}/${COLOR_LIGHT}`
  if (variant === "dark") return `${SIMPLE_ICONS_CDN}/${slug}/${COLOR_DARK}`
  return `${SIMPLE_ICONS_CDN}/${slug}`
}

/**
 * Trả về URL icon tech stack. Ưu tiên assets.chanhdai.com (cùng nguồn chanhdai.com),
 * fallback Simple Icons cho key trong KEYS_USE_SIMPLE_ICONS.
 */
export function getTechStackIconUrl(
  key: string,
  variant?: "default" | "light" | "dark"
): string {
  if (KEYS_USE_SIMPLE_ICONS.includes(key)) return getSimpleIconsUrl(key, variant)
  if (variant === "light")
    return `${ASSETS_TECH_STACK_BASE}/${key}-light.svg`
  if (variant === "dark") return `${ASSETS_TECH_STACK_BASE}/${key}-dark.svg`
  return `${ASSETS_TECH_STACK_BASE}/${key}.svg`
}
