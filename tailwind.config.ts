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
        primary: "#d9dde0",
        
      },
      backgroundColor: {
        primary: "#d9dde0"
      },
      animation: {
        "infinite-scroll": "infinite-scroll 4s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        }
      },
      fontFamily: {
        "teko": ["Teko", "serif"],
      },
      screens: {
        '2xl': '1600px'
      }
    },
  },
  plugins: [],
} satisfies Config;
