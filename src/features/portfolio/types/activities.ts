export type Activity = {
  id: string
  organizationName: string
  /** Role or title (e.g. "Member", "Lead") */
  role: string
  /**
   * Period. Use "YYYY" or "MM.YYYY". Omit `end` for current.
   */
  period: {
    start: string
    end?: string
  }
  /** Optional description; Markdown supported. */
  description?: string
}
