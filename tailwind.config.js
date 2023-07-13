/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Fasthand"],
      },
      screens: {
        sm: "330px",
      },
    },
  },
  plugins: [],
};
