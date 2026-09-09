import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          950: "#431407",
          900: "#7C2D12",
          850: "#9A3412",
          800: "#C2410C",
          700: "#EA580C",
          600: "#F97316",
          500: "#FB923C",
          100: "#FFEDD5",
          50: "#FFF7ED",
        },
        copper: {
          900: "#7C2D12",
          800: "#9A3412",
          DEFAULT: "#C2410C",
          600: "#EA580C",
          500: "#FE8C43",
          100: "#FFEDD5",
          50: "#FFF7ED",
        },
        navy: {
          950: "#050B14",
          900: "#0A192F",
          800: "#0F284E",
          700: "#073D61",
          600: "#0C4A75",
        },
        gold: {
          DEFAULT: "#D97706",
          light: "#FEF3C7",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 20px 35px -8px rgba(194, 65, 12, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.04)",
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.08)",
        "glass-elevated": "0 24px 60px -12px rgba(15, 23, 42, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-right": "slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-down": "slideInDown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInDown: {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

export default config

