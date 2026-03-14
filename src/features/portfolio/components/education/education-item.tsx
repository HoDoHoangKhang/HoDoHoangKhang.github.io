import type { Education } from "../../types/education"
import { EducationProgramItem } from "./education-program-item"

export function EducationItem({ education }: { education: Education }) {
  return (
    <div
      id={`education-${education.id}`}
      className="screen-line-after scroll-mt-14"
    >
      {education.programs.map((program) => (
        <EducationProgramItem
          key={program.id}
          program={program}
          schoolName={education.schoolName}
          schoolLogo={education.schoolLogo}
          schoolWebsite={education.schoolWebsite}
        />
      ))}
    </div>
  )
}
