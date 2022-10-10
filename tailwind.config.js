/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
    fontFamily: {
      sans: ["'Nunito Sans', sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1500px",
        xl: "1500px",
        "2xl": "1500px",
      },
    },
  },
  plugins: [],
}