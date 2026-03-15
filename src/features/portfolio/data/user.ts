import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Hoàng Khang",
  lastName: "Hồ Đỗ",
  displayName: "Hoàng Khang",
  username: "hoangkang",
  gender: "male",
  pronouns: "he/him",
  bio: "Building with code. Clarity and impact.",
  flipSentences: [
    "Building with code. Clarity and impact.",
    "Web Developer",
    "Full Stack Developer",
    "UI/UX Designer",
  ],
  address: "Ho Chi Minh City, Viet Nam",
  phoneNumber: "Kzg0MDMzODg3MzQ2MQ==", // E.164 format, base64 encoded (+840338873461)
  email: "aG9kb2hvYW5na2hhbmdAZ21haWwuY29t", // base64 encoded (hodohoangkhang@gmail.com)
  website: process.env.NEXT_PUBLIC_APP_URL || "https://hoangkhang.tech",
  jobTitle: "Web Developer",
  jobs: [
    {
      title: "Web Developer",
      company: "123Website",
      website: "https://123website.com.vn/",
      experienceId: "123-website",
    },
  ],
  about: `
- **Software Engineer** with experience in building web applications and clean, maintainable code.
- Skilled in **WordPress**, **Vue.js**, and modern front-end technologies; focused on **user experience** and performance.
- Passionate about turning ideas into reality through well-crafted projects and continuous learning.
- Open to collaboration and new opportunities.
`,
  avatar: "/images/avatar.png",
  ogImage: "/images/og-image.png",
  namePronunciationUrl: "", // optional: URL to audio file for name pronunciation
  timeZone: "Asia/Ho_Chi_Minh",
  keywords: [
    "hoang khang",
    "hồ đỗ hoàng khang",
    "hoangkang",
    "hk",
    "software engineer",
    "portfolio",
  ],
  dateCreated: "2024-01-01", // YYYY-MM-DD
}
