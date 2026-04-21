/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "oklch(var(---))",
        "base-foreground": "oklch(0.205 0 0)",

        card: "oklch(1 0 0)",
        "card-foreground": "oklch(0.145 0 0)",

        popover: "oklch(0.25 0 0)",
        "popover-foreground": "oklch(0.985 0 0)",

        primary: "oklch(0.205 0 0)",
        "primary-foreground": "oklch(0.985 0 0)",

        secondary: "oklch(0.3 0 0)",
        "secondary-foreground": "oklch(0.985 0 0)",

        muted: "oklch(0.97 0 0)",
        "muted-foreground": "oklch(0.556 0 0)",

        accent: "oklch(0.97 0 0)",
        "accent-foreground": "oklch(0.205 0 0)",

        destructive: "oklch(0.6 0.25 25)",
        "destructive-foreground": "oklch(0.985 0 0)",

        border: "oklch(0.922 0 0)",
        input: "oklch(0.3 0 0)",

        sidebar: "oklch(1 0 0)",
        "sidebar-foreground": "oklch(0.145 0 0)",

        "sidebar-accent": "oklch(0.97 0 0)",
        "sidebar-accent-FG": "oklch(0.205 0 0)",

        "sidebar-boder": "oklch(0.922 0 0)",
        "sidebar-ring": "oklch(0.708 0 0)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
