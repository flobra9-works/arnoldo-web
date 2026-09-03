import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        espresso: "var(--color-espresso)",
        pistachio: "var(--color-pistachio)",
        blush: "var(--color-blush)",
        gold: "var(--color-gold)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-geist)", "var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
    },
  },
} satisfies Config;
