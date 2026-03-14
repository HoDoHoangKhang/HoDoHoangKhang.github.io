export type EducationProgram = {
  id: string
  /** Degree or program name (e.g. "Bachelor of Information Technology") */
  degree: string
  /**
   * Study period.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current.
   */
  period: {
    start: string
    end?: string
  }
  /** Optional: GPA, grade, or honor (e.g. "GPA 3.5", "Top 10%") */
  grade?: string
  /** Optional rich text description; Markdown supported. */
  description?: string
  /** Whether the program is expanded by default in the UI. */
  isExpanded?: boolean
}

export type Education = {
  id: string
  schoolName: string
  /** URL to the school logo (absolute URL or path under /public). */
  schoolLogo?: string
  /** URL to the school's website. */
  schoolWebsite?: string
  /** Programs or degrees at this school; newest first for display. */
  programs: EducationProgram[]
}
