import scrollbarHide from "tailwind-scrollbar-hide";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { withUt } from "uploadthing/tw";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@uploadthing/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "oklch(var(--base) / <alpha-value>)",
        "base-foreground": "oklch(var(--base-foreground) / <alpha-value>)",

        card: "oklch(var(--card) / <alpha-value>)",
        "card-foreground": "oklch(var(--card-foreground) / <alpha-value>)",

        popover: "oklch(var(--popover) / <alpha-value>)",
        "popover-foreground":
          "oklch(var(--popover-foreground) / <alpha-value>)",

        primary: "oklch(var(--primary) / <alpha-value>)",
        "primary-foreground":
          "oklch(var(--primary-foreground) / <alpha-value>)",

        secondary: "oklch(var(--secondary) / <alpha-value>)",
        "secondary-foreground":
          "oklch(var(--secondary-foreground) / <alpha-value>)",

        muted: "oklch(var(--muted) / <alpha-value>)",
        "muted-foreground": "oklch(var(--muted-foreground) / <alpha-value>)",

        accent: "oklch(var(--accent) / <alpha-value>)",
        "accent-foreground": "oklch(var(--accent-foreground) / <alpha-value>)",

        destructive: "oklch(var(--destructive) / <alpha-value>)",
        "destructive-foreground":
          "oklch(var(--destructive-foreground) / <alpha-value>)",

        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        sidebar-primary: ""
        sidebar: "oklch(var(--sidebar) / <alpha-value>)",
        "sidebar-foreground":
          "oklch(var(--sidebar-foreground) / <alpha-value>)",

        "sidebar-accent": "oklch(var(--sidebar-accent) / <alpha-value>)",

        "sidebar-accent-FG": "oklch(var(--sidebar-accent-FG) / <alpha-value>)",

        "sidebar-boder": "oklch(var(--sidebar-boder) / <alpha-value>)",

        "sidebar-ring": "oklch(var(--sidebar-ring) / <alpha-value>)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [animate, require("@tailwindcss/typography"), scrollbarHide],
};

export default withUt(config);
