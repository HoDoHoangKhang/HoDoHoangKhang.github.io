/** Logo mark (HK) used in brand context menu and any legacy references. */
export function SiteMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      {/* H */}
      <path
        fill="currentColor"
        d="M0 0h64v256H0z M64 96h128v64H64z M192 0h64v256h-64z"
      />
      {/* K */}
      <path
        fill="currentColor"
        d="M256 0h56v256h-56z M312 0L512 0L456 56L256 56z M312 128L512 256L512 192L356 128L256 128z"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M0 0h32v128H0z M32 48h64v32H32z M96 0h32v128h-32z M128 0h28v128h-28z M156 0L256 0L228 28L128 28z M156 64L256 128L256 96L178 64L128 64z"/></svg>`
}
