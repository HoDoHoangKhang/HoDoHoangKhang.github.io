import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "vinaopen",
    title: "VinaOpen",
    period: {
      start: "11.2025",
      end: "01.2026",
    },
    teamSize: 1,
    role: "Full-stack Developer",
    link: "https://vinaopen.com/",
    skills: [
      "VueJS",
      "TailwindCSS ",
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
      "Claude"
    ],
    description:
      `**B2B e-commerce** for Vietnam — **suppliers** and **buyers** connect via **RFQ** (Request for Quotation) and product catalog.
- **RFQ & quotation** workflow: buyers post requests, suppliers quote; core differentiator vs typical B2B sites.
- **Supplier recommendation** algorithm to match buyers with relevant suppliers.
- **Multi-language search** (Vi/En) across catalog and content.
- **Vue.js** dashboards (supplier + buyer) for full self-service management.`,
    logo: "/images/logosite/vinaopen.png",
    images: [
      "/images/projects/vinaopen/vina1.png",
      "/images/projects/vinaopen/vina2.png",
      "/images/projects/vinaopen/vina3.png",
      "/images/projects/vinaopen/vina4.png",
      "/images/projects/vinaopen/vina5.png",
    ],
    isExpanded: true,
    isFeatured: true,
  },
  {
    id: "akareal",
    title: "RealCart — Internal Real Estate Management System (Akareal)",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Full-stack Developer",
    link: "https://akareal.vn/",
    skills: [
      "WordPress",
      "PHP",
      "MySQL",
      "VueJS",
      "TailwindCSS",
      "WordPress REST API",
      "WP Nonce",
      "ACF",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
    ],
    description:
      `**RealCart** — internal **real estate** management system for **Akareal**. Custom **WordPress + Vue.js** plugin: teams organize properties, collaborate via **comments**, process data efficiently.
- **Vue.js SPA** connected to **WordPress REST API** for fast, interactive property management.
- **Advanced filtering**, **inline editing**, **customizable data columns** for large property datasets.
- **Role-based access** with **JWT authentication**; **WP Nonce** for secure requests.
- **Excel import/export** for **bulk property** management.`,
    logo: "/images/logosite/akareal.png",
    isFeatured: true,
  },
  {
    id: "skeyndor",
    title: "Skeyndor Vietnam",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://skeyndorvietnam.vn/",
    skills: ["WordPress", "WooCommerce", "UI/UX", "CSS", "PHP"],
    description:
      `**E-commerce website** for **Skeyndor** — Spanish professional skincare brand in Vietnam.
- **WooCommerce** store: product catalog, cart, checkout, and order management.
- **Branding & product showcase** for beauty and skincare; category and filter for product discovery.
- **Responsive UI/UX** and custom styling to align with brand identity.
- **Company project** — built and maintained as part of 123Website.`,
    logo: "/images/logosite/skeyndor.png",
  },
  {
    id: "nicesite",
    title: "NiceSite",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "#",
    skills: [
      "Next.js",
      "React",
      "21st",
      "React Bits",
      "Website Development",
      "Commission Management",
      "User Dashboard",
    ],
    description:
      `**Service website** with **user commission management** for NiceSite.
- **Tech stack**: **Next.js**, UI libraries **21st** and **React Bits** for modern, interactive components.
- **Service presentation**: showcase offerings and digital brand; business-focused layout and content.
- **Commission management**: track and display **user commissions**; dashboard or admin view for referral/affiliate earnings.`,
    logo: "",
  },
  {
    id: "website-html-css-trinhha",
    title: "Dr. Trinh Ha",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "UI Design & Development",
    link: "#",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI/UX",
      "MCP",
    ],
    description:
      `**Website** for Dr. Trinh Ha — **UI design** and **development** handled end-to-end.
- **First project** using my **MCP server** (Model Context Protocol): streamlined workflow and tooling; **demo delivered in 4 days**.
- Custom frontend (HTML, CSS, JavaScript), responsive layout for professional presentation.`,
    logo: "/images/logosite/trinhha.png",
  },
  {
    id: "zoom-map",
    title: "Zoom Map — Deep Zoom Plugin",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Frontend Developer",
    link: "#",
    skills: [
      "OpenSeadragon",
      "JavaScript",
      "Plugin Development",
      "Layer Control",
      "UI/UX",
      "Frontend",
    ],
    description:
      `**Deep zoom plugin** for **real estate (BDS) presentation** — high-resolution maps/layouts with layer control.
- **OpenSeadragon**: deep zoom and pan; smooth navigation across large imagery for client demos.
- **Layer control**: toggle **all layers** on/off so presenters can show/hide plan layers when presenting BDS projects to clients.
- Company project — plugin format for reuse in real estate and mapping contexts.`,
    logo: "",
  },
  {
    id: "langdingpage",
    title: "Landing Page Zalo Mini App",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Design & Development",
    link: "https://123website.com.vn/dich-vu-thiet-ke-zalo-mini-app/",
    skills: [
      "Tailwind CSS",
      "Landing Page",
      "UI/UX",
      "Design",
      "Frontend",
      "Marketing",
    ],
    description:
      `**Landing page** for my company — introduces **Zalo Mini App** design & development services.
- Built with **Tailwind CSS**; conversion-focused layout to present the product and support lead generation.
- **Design & development** handled end-to-end: UI/UX and implementation.`,
    logo: "/images/logosite/123website.png",
  },
  {
    id: "asg",
    title: "ASG Investments",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "UI & Development",
    link: "https://asgvn.com.vn/",
    skills: ["WordPress", "UI/UX", "Frontend", "HTML", "CSS"],
    description:
      `**Corporate website** for **ASG Investments** — investment company (real estate, finance, technology).
- **UI design** and **development** with **WordPress (WP)**: structure, layout, and content for brand and business presence.
- Presents company vision, investment areas, and contact; responsive and professional.`,
    logo: "/images/logosite/asg.png",
  },
  {
    id: "ez-learning-labs",
    title: "EZ Learning Labs",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://ezlearninglabs.com/",
    skills: [
      "WordPress",
      "Education",
      "UI/UX",
      "Responsive Design",
      "Placement Test",
    ],
    description:
      `**Website** for **EZ Learning Labs** — French language center: course catalog, intro, and **incoming student placement test**.
- Built with **WordPress (WP)**: course pages (A1–B2, intensive, 1:1, TCF/DELF prep, Vietnamese for foreigners), testimonials, library, contact.
- **Incoming placement test**: free level check and TCF/DELF trial so new students can assess their level before enrolling.`,
    logo: "/images/logosite/ezlearning.png",
  },
  {
    id: "tran-thuy-hang",
    title: "Trần Thúy Hằng",
    period: {
      start: "01.2026",
    },
    link: "https://tranthuyhang.com",
    skills: ["BDS", "WordPress", "UI/UX", "Frontend"],
    description:
      "**Real estate (BDS)** intro website — presents properties and brand. WordPress, UI/UX.",
    logo: "",
  },
  {
    id: "jenny-do",
    title: "Jenny Đỗ",
    period: {
      start: "01.2026",
    },
    link: "https://itsjennyworld.com/",
    skills: ["Personal Brand", "Portfolio Website", "WordPress", "UI/UX", "Frontend"],
    description:
      "**Portfolio** — personal website showcasing identity, work, and professional story.",
    logo: "/images/logosite/jenny.png",
  },
  {
    id: "minh-quan",
    title: "Minh Quân",
    period: {
      start: "01.2026",
    },
    link: "https://minhquan-nguyen.com/",
    skills: ["Personal Brand", "Portfolio Website", "WordPress", "UI/UX", "Frontend"],
    description:
      "**Portfolio** — personal website showcasing identity, achievements, and professional presence.",
    logo: "",
  },
  {
    id: "tim-tho-khoa",
    title: "Tìm thợ khóa",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://timthokhoa.vn",
    skills: [
      "WordPress",
      "ACF",
      "Custom Post Types",
      "PHP",
      "PHPSpreadsheet",
      "AJAX",
      "RBAC",
      "SEO",
      "Responsive Design",
    ],
    description:
      `**Service marketplace** — helps users find locksmiths by **province → district → service** via a **3-level advanced search**.
- **AJAX filtering**: results update instantly without page reload.
- **Custom Post Types + ACF** for locksmith profiles and custom data management.
- **Bulk Excel import** with **PHPSpreadsheet** for large datasets.
- **Role-based access**: Admin, Regional Manager, Contributor for data permissions.`,
    logo: "/images/logosite/timthokhoa.png",
  },
  {
    id: "nexusnovum",
    title: "Nexusnovum",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://nexusnovum.ca",
    skills: ["Corporate Website", "WordPress", "UI/UX", "Frontend"],
    description:
      "**Corporate website** for **Nexusnovum** — Canadian law firm: company intro, services, and brand presence.",
    logo: "/images/logosite/nexusnovum.png",
  },
  {
    id: "li-cang-vn",
    title: "Li Cang VN",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://licangvn.com",
    skills: ["WordPress", "B2B", "HTML", "CSS", "Responsive Design"],
    description:
      "**B2B website** for **Li Cang VN** — industrial shelving (kệ công nghiệp): product catalog, company intro, and services.",
    logo: "/images/logosite/licang.png",
  },
  {
    id: "samm",
    title: "SAMM Coffee",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "http://samcoffee.com/",
    skills: ["Brand Website", "WordPress", "UI/UX", "Responsive Design"],
    description:
      "**Brand website** for **SAMM Coffee** — Korean ginseng coffee shop: intro, menu, and visual identity.",
    logo: "/images/logosite/samm.png",
  },
  {
    id: "buu-nghi",
    title: "Bửu Nghi",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://buunghi.com/",
    skills: ["Personal Brand", "Portfolio Website", "WordPress", "UI/UX", "Frontend"],
    description:
      "**Portfolio** — personal website showcasing identity, work, and professional story.",
    logo: "",
  },
  {
    id: "thep-addc",
    title: "Thép ADDC",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://thepaddc.com",
    skills: ["Corporate Website", "WordPress", "B2B", "Responsive Design"],
    description:
      "**Corporate website** for **Thép ADDC** — company intro and services presentation.",
    logo: "/images/logosite/addc.png",
  },
  {
    id: "amh20k",
    title: "AMH20K",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://ausmod20k.com.au/",
    skills: ["Real Estate", "WordPress", "UI/UX", "Frontend", "International"],
    description:
      "**Real estate website** for **AMH20K** — Australian property intro and presentation.",
    logo: "/images/logosite/amh20k.png",
  },
  {
    id: "heli-binh-minh",
    title: "Heli Bình Minh",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://helibinhminh.com.vn/",
    skills: ["WordPress", "B2B", "Frontend", "UI/UX", "Responsive Design"],
    description:
      "**B2B website** for **Heli Bình Minh** — forklift (xe nâng) sales: product catalog, company intro, and services.",
    logo: "/images/logosite/helibinhminh.png",
  },
  {
    id: "trieu-vi",
    title: "Triệu Vi",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://annievi.com/",
    skills: ["Personal Brand", "Portfolio Website", "WordPress", "UI/UX", "Responsive Design"],
    description:
      "**Portfolio** — personal website showcasing identity, work, and professional story.",
    logo: "",
  },
  {
    id: "v-studio",
    title: "V Studio",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://vstudio.vn",
    skills: ["Studio Website", "WordPress", "UI/UX", "Frontend"],
    description:
      "**Studio website** for **V Studio** — studio intro, services, and visual presentation.",
    logo: "/images/logosite/vstudio.png",
  },
  {
    id: "logico-vn",
    title: "Logico VN",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://xuongintuivai.com",
    skills: ["WordPress", "B2B", "E-commerce", "UI/UX", "Responsive Design"],
    description:
      "**B2B / e-commerce website** for **Logico VN** — bag (túi) sales: product catalog, company intro, and services.",
    logo: "",
  },
  {
    id: "iwa-luxury",
    title: "IWa Luxury",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://thangmayiwaluxury.com",
    skills: ["WordPress", "B2B", "UI/UX", "Frontend", "Responsive Design"],
    description:
      "**Corporate website** for **IWa Luxury** — company intro and elevator (thang máy) product presentation.",
    logo: "/images/logosite/thangmayiwa.png",
  },
  {
    id: "dang-space",
    title: "Đăng Space",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://dangspace.com/",
    skills: ["Personal Brand", "Portfolio Website", "WordPress", "UI/UX", "Responsive Design"],
    description:
      "**Portfolio** — personal website showcasing identity, work, and professional story.",
    logo: "/images/logosite/giadang.png",
  },
  {
    id: "nhan-de-dan-dau",
    title: "Nhẫn để dẫn đầu",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://nhandedandau.com",
    skills: [
      "WordPress",
      "Plugin Development",
      "YouTube API",
      "Video",
      "UI/UX",
      "Frontend",
    ],
    description:
      `**YouTube clone** — video platform with short-form content.
- **Custom plugin**: pull **short videos directly from YouTube** (import/sync) into the site.
- WordPress-based; video feed and presentation.`,
    logo: "",
  },
  {
    id: "vinfast-xe-may-dien",
    title: "Vinfast xe máy điện",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "http://vinfastxemaydientiengiang.com",
    skills: ["Automotive Website", "WordPress", "UI/UX", "Responsive Design"],
    description:
      "**VinFast vehicle sales** — electric motorbike (xe máy điện) dealership: product info, showroom, and services.",
    logo: "/images/logosite/vinfast.png",
  },
  {
    id: "vinfast-can-tho",
    title: "Vinfast Cần Thơ",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://vinfastotocantho.com",
    skills: ["Automotive Website", "WordPress", "Frontend", "UI/UX"],
    description:
      "**VinFast vehicle sales** — Cần Thơ car dealership: vehicles, showroom info, and contact.",
    logo: "/images/logosite/vinfast.png",
  },
  {
    id: "vinfast-nhat-duy",
    title: "Vinfast Nhật Duy",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://vinfastnhatduytiengiang.com",
    skills: ["Automotive Website", "WordPress", "Responsive Design", "Frontend"],
    description:
      "**VinFast vehicle sales** — Nhật Duy (Tiền Giang) dealership: vehicles, showroom, and contact.",
    logo: "/images/logosite/vinfast.png",
  },
  {
    id: "idyllicco",
    title: "Idyllicco",
    period: {
      start: "01.2026",
    },
    teamSize: 1,
    role: "Web Developer",
    link: "https://idyllicco.com/",
    skills: ["WordPress", "E-commerce", "UI/UX", "Frontend", "Responsive Design"],
    description:
      "**E-commerce website** for **Idyllicco** — products made from water hyacinth (lục bình): catalog, brand intro, and sales.",
    logo: "/images/logosite/idyllic.png",
  },
  {
    id: "wood-shop",
    title: "Wood Shop",
    period: {
      start: "04.2025",
    },
    teamSize: 1,
    role: "Frontend Developer",
    link: "https://github.com/HoDoHoangKhang/woodshop_fe",
    skills: ["React", "Tailwind CSS", "Vite", "Strapi", "PostgreSQL", "E-commerce", "UI/UX"],
    description:
      `**E-commerce** — wooden toys store. **React**, **Tailwind CSS**, **Vite**.
- Responsive interface; **Strapi CMS** for product data and user interactions.
- **Advanced search**, cart, checkout, and order history.
- State and API with **React Context** and custom hooks.`,
    logo: "",
  },
  {
    id: "music-social-app",
    title: "Music Social App",
    period: {
      start: "03.2025",
      end: "04.2025",
    },
    teamSize: 1,
    role: "Full-stack Developer",
    link: "https://github.com/HoDoHoangKhang/music_app_fe",
    skills: ["React", "Tailwind CSS", "Vite", "Django", "MySQL", "REST API", "UI/UX"],
    description:
      `**Social music app** — **React**, **Tailwind CSS**, **Vite**; **Django** + **MySQL** backend.
- **Personal playlists**, favorites, **real-time chat**, dynamic audio player.
- **Django REST APIs** for user, playlist, music, and chat.
- Component-based architecture for scalability.`,
    logo: "",
  },
  {
    id: "cinema-app",
    title: "Cinema App",
    period: {
      start: "03.2025",
    },
    teamSize: 1,
    role: "Frontend Developer",
    link: "https://github.com/HoDoHoangKhang/cinema_fe",
    skills: ["React", "Tailwind CSS", "Vite", "TMDB API", "React Hook Form", "UI/UX"],
    description:
      `**Movie discovery** — real-time content from **TMDB API**.
- **Keyword search**, genre filtering, detailed movie info.
- Clean responsive UI with **React Hook Form**; **ESLint**, **Prettier**, **Vite**.`,
    logo: "",
  },
  {
    id: "shoes-store",
    title: "Shoes Store",
    period: {
      start: "03.2024",
      end: "05.2024",
    },
    teamSize: 1,
    role: "Full-stack Developer",
    link: "https://github.com/HoDoHoangKhang/shoes_shop",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "E-commerce", "Responsive Design"],
    description:
      `**E-commerce** — **HTML**, **CSS**, **JavaScript** frontend; **PHP** + **MySQL** backend.
- Led task allocation and progress tracking.
- **MySQL** schema for product, order, and user management.
- **PHP**: product CRUD, reviews, cart, checkout, comments, payment processing.`,
    logo: "",
  },
  {
    id: "human-resource-management",
    title: "Human Resource Management",
    period: {
      start: "03.2023",
      end: "05.2023",
    },
    teamSize: 1,
    role: "Backend Developer",
    link: "https://github.com/HoDoHoangKhang/hrm",
    skills: ["Java", "SQL Server", "Maven", "Authentication", "Reporting"],
    description:
      `**HRM system** — **Java**, **SQL Server**; **Maven** for deployment.
- **Recruitment management** and **attendance tracking** modules.
- **Auth**: login, registration, password recovery.
- **Check-in/out** with daily attendance reports.`,
    logo: "",
  },
]
