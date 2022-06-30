/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
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
    colors: {
      primary: "#D37657",
      secondary: "#484543",
      success: "#5FBD74",
      "top-bar-bg": "#73A9A9",
      flag: "#2E58B2",
    },
    extend: {
      fontFamily: {
        poppins: "font-family: 'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
