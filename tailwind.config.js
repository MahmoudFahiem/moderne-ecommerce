/** @type {import('tailwindcss').Config} */
const colors = {
  primary: "#D37657",
  secondary: "#484543",
  accent: "#1FB2A6",
  topbar: "#73A9A9",
  neutral: "#191D24",
  "base-100": "#fff",
  info: "#3ABFF8",
  success: "#5FBD74",
  warning: "#FBBD23",
  error: "#F87272",
  flag: "#2E58B2",
  white: "#fff",
  black: "#000",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "568px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2lx": "1400px",
    },
    colors: { ...colors },
    fontFamily: {
      sans: ["poppins", "ui-sans-serif", "sans-serif"],
    },
    extend: {
      fontFamily: {
        poppins: "font-family: 'Poppins', sans-serif",
      },
    },
  },
  safelist: ["opacity-0", "opacity-100"],
  daisyui: {
    themes: [
      {
        base: { ...colors },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
