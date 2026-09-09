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
          950: "#012224",
          900: "#01383A",
          850: "#00474A",
          800: "#006569",
          700: "#0C7D82",
          600: "#14959B",
          500: "#22ACB2",
          100: "#D3EBEB",
          50: "#EAF5F5",
        },
        copper: {
          900: "#80350B",
          800: "#A34710",
          DEFAULT: "#C45F18",
          600: "#DC7326",
          500: "#E78945",
          100: "#FCEFE6",
          50: "#FDF8F3",
        },
        gold: {
          DEFAULT: "#D49B28",
          light: "#FDF3DD",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px -2px rgba(0, 45, 46, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 20px 35px -8px rgba(0, 45, 46, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.04)",
        glass: "0 8px 32px 0 rgba(0, 45, 46, 0.08)",
        "glass-elevated": "0 24px 60px -12px rgba(0, 45, 46, 0.2)",
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

