/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        separator: "rgb(var(--color-separator) / <alpha-value>)",
      },
      textColor: {
        primary: "rgb(var(--color-foreground) / <alpha-value>)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}