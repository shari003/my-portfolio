import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "infinite-scroll": "infiniteScroll 18s linear infinite",
      },
      keyframes: {
        "infiniteScroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 20px))" },
        }
      },
      fontFamily: {
        "teko": ["Teko", "serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
