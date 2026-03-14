import type { Registry } from "shadcn/schema"

export const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    title: "Utility Functions",
    author: "Hoàng Khang (HK)",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "src/lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "haptic",
    type: "registry:lib",
    title: "Haptic Feedback",
    author: "Hoàng Khang (HK)",
    description: "Trigger haptic feedback on mobile devices.",
    files: [
      {
        path: "lib/haptic/haptic.ts",
        type: "registry:lib",
      },
    ],
  },
]
