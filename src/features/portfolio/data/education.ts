import type { Education } from "../types/education"

export const EDUCATION: Education[] = [
  {
    id: "saigon-university",
    schoolName: "Saigon University",
    schoolLogo: "/images/education/sgu.png",
    schoolWebsite: "https://sgu.edu.vn",
    programs: [
      {
        id: "1",
        degree: "Engineer's Degree in Software Engineering",
        period: { start: "2021" },
        grade: "Current GPA: 3.23/4.0",
        description: `- Focus on **software development**, **web technologies**, and **database** systems
- Coursework in **data structures**, **algorithms**, **object-oriented programming**, and **web development**`,
        isExpanded: true,
      },
    ],
  },
  {
    id: "vinh-binh-high-school",
    schoolName: "Vĩnh Bình High School",
    schoolLogo: "/images/education/vinhbinh.png",
    schoolWebsite: "#",
    programs: [
      {
        id: "1",
        degree: "High School Diploma",
        period: { start: "2017", end: "2020" },
        grade: "",
        description: `- General education with focus on **mathematics** and **science**
- Foundation for higher studies in technology`,
        isExpanded: false,
      },
    ],
  },
]
