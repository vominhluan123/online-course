/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "oklch(var(--base))",
        "base-foreground": "oklch(var(--base-foreground))",

        card: "oklch(var(--card))",
        "card-foreground": "oklch(var(--card-foreground))",

        popover: "oklch(var(--popover))",
        "popover-foreground": "oklch(var(--popover-foreground))",

        primary: "oklch(var(--primary))",
        "primary-foreground": "oklch(var(--primary-foreground))",

        secondary: "oklch(var(--secondary))",
        "secondary-foreground": "oklch(var(--secondary-foreground))",

        muted: "oklch(var(--muted))",
        "muted-foreground": "oklch(var(--muted-foreground))",

        accent: "oklch(var(--accent))",
        "accent-foreground": "oklch(var(--accent-foreground))",

        destructive: "oklch(var(--destructive))",
        "destructive-foreground": "oklch(var(--destructive-foreground))",

        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(0.708 0 0)",

        sidebar: "oklch(var(--sidebar))",
        "sidebar-foreground": "oklch(var(--sidebar-foreground))",

        "sidebar-accent": "oklch(var(--sidebar-accent))",
        "sidebar-accent-FG": "oklch(var(--sidebar-accent-FG))",

        "sidebar-boder": "oklch(var(--sidebar-boder))",
        "sidebar-ring": "oklch(var(--sidebar-ring))",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
