import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "alive-vietnam",
    companyName: "Alive Vietnam",
    companyLogo: "/images/companies/alive.jpg",
    companyWebsite: "https://alive-web.vn/",
    positions: [
      {
        id: "1",
        title: "Web Developer",
        employmentPeriod: { start: "04.2026" },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed **corporate branding websites** and landing pages with CMS for various businesses, ensuring high performance, responsiveness, and near pixel-perfect implementation
- Built **custom WordPress themes and plugins** from scratch to meet specific client requirements
- Optimized web applications for **cross-browser compatibility** and accessibility, following **Google PSI** and **W3C** best practices
- Engineered scalable **React.js** applications using **Next.js**, building modular reusable components and applying **SSR/SSG** strategies to improve performance, load speed, and SEO
- Created user flows and forms for recruiters and candidates using **PHPMailer** and **Contact Form 7**
- Collaborated closely with designers and stakeholders to translate **UI/UX** designs into functional web interfaces`,
        skills: [
          "Next.js",
          "React",
          "WordPress",
          "PHP",
          "PHPMailer",
          "Contact Form 7",
          "SEO",
          "Accessibility",
          "Performance Optimization",
          "UI/UX",
          "CMS",
          "Branding",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "123-website",
    companyName: "123Website",
    companyLogo: "/images/companies/123website.png",
    companyWebsite: "https://123website.com.vn/",
    positions: [
      {
        id: "1",
        title: "Junior WordPress Developer",
        employmentPeriod: { start: "04.2025", end: "03.2026" },
        employmentType: "Full-time",
        icon: "code",
        description: `- Participated in developing and deploying **30+ website projects** for clients, including B2B platforms, corporate sites, landing pages, e‑commerce, and custom enterprise solutions
- Led **quality assurance** for all projects before handover: verified UI, functionality, performance, and responsiveness
- Handled critical technical tasks: custom feature development and core system components
- Built **custom WordPress themes and plugins** in PHP to extend functionality per project requirements
- Used **Vue.js** in **Headless WordPress** setup to build modern, interactive interfaces
- Contributed to **UI/UX design** on selected projects`,
        skills: [
          "Vue.js",
          "Tailwind CSS",
          "shadcn/ui",
          "WordPress",
          "PHP",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
          "WordPress REST API",
          "ACF",
          "CMP",
          "UI Design",
          "Cursor",
          "Claude",
        ],
        isExpanded: true,
      },
      {
        id: "2",
        title: "UI Designer",
        employmentPeriod: { start: "04.2025", end: "03.2026" },
        employmentType: "Full-time",
        icon: "design",
        description: `- Design **UI** for client websites and landing pages
- Create layouts and visual systems to improve **user experience**
- Collaborate with development on implementation and consistency`,
        skills: ["Figma", "UI Design", "UX", "Layout", "Visual Design"],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "nicesite",
    companyName: "Nicesite",
    companyLogo: "/images/companies/nicesite.png",
    companyWebsite: "#",
    positions: [
      {
        id: "1",
        title: "Web Developer",
        employmentPeriod: { start: "2024" },
        employmentType: "Part-time",
        icon: "code",
        description: `- Lead product and **web development** for **Nicesite**
- Build and maintain websites and web applications`,
        skills: [
          "Next.js",
          "WordPress",
          "Web Development",
          "PHP",
          "Vue.js",
          "UI/UX",
        ],
        isExpanded: false,
      },
      {
        id: "2",
        title: "Founder",
        employmentPeriod: { start: "2024" },
        employmentType: "Part-time",
        icon: "idea",
        description: `- **Founded** and operate **Nicesite**
- Define vision, strategy, and product direction`,
        skills: ["Business Ownership", "Product", "Strategy"],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "tada-labs",
    companyName: "TADA Labs",
    companyLogo: "/images/companies/tadalabs.png",
    companyWebsite: "https://tadalabs.vn/",
    positions: [
      {
        id: "1",
        title: "Freelance WordPress Developer",
        employmentPeriod: { start: "04.2024", end: "03.2025" },
        employmentType: "Remote",
        icon: "code",
        description: `- Handled critical technical tasks: custom feature development and core system components
- Built **custom WordPress themes and plugins** in PHP to extend functionality per project requirements
- Used **Vue.js** in **Headless WordPress** setup to build modern, interactive interfaces
- Contributed to **UI/UX design**: layout and structure to improve user experience
- Developed and customized sites with **WordPress**, **WooCommerce**, and **Elementor**
- Optimized **performance**, responsiveness, and UX across devices`,
        skills: [
          "WordPress",
          "PHP",
          "Vue.js",
          "WooCommerce",
          "Elementor",
          "UI/UX",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
]
