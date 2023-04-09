/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        primary: "#0FB043",
        title_text: "#323232",
        subtext: "#8D8D8D",
        btn_background: "#565656",
        blog_text: "#565656",
        white: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
