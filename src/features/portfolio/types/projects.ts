export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string
  title: string
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /** Optional: number of participants (e.g. 3) or range (e.g. "3–5"). */
  teamSize?: number | string
  /** Optional: your role in the project (e.g. "Full-stack Developer", "Lead"). */
  role?: string
  /** Public URL (site, repository, demo, or video). */
  link: string
  /** Tags/technologies for chips or filtering. */
  skills: string[]
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string
  /** Optional images for project gallery slider (paths under /public or full URLs). */
  images?: string[]
  /** Logo image URL (absolute or path under /public). */
  logo?: string
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean
  /** If true, project is highlighted and shown at the top with a "Featured" badge. */
  isFeatured?: boolean
}
