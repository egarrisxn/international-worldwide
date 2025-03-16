import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["selector"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "var(--rubik)"],
      },
      backgroundImage: {
        "span-bg": "var(--span-bg)",
      },
      colors: {
        background: "var(--background)",
        primary: {
          DEFAULT: "var(--primary)",
        },
        "button-secondary": "var(--button-secondary)",
        "button-text": "var(--button-text)",
        "text-secondary": "var(--text-secondary)",
        "background-secondary": "var(--background-secondary)",
        "background-secondary": "var(--background-secondary)",
        secondary: "var(--secondary)",
        button: "var(--button)",
        selected: "var(--selected)",
        dropdown: "var(--dropdown)",
        dropdownHover: "var(--dropdown-hover)",
        buttonSecondary: "var(--button-secondary)",
        border: "var(--border)",
        overlay: "var(--overlay)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        base: "5px",
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
      translate: {
        boxShadowX: "2px",
        boxShadowY: "3px",
        reverseBoxShadowX: "-2px",
        reverseBoxShadowY: "-3px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
