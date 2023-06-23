/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        customScreen: "865px",
        customScreen2: "440px",
      },
    },
  },
  plugins: [],
};
