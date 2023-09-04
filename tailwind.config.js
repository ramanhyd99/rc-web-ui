/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  important: true,
  // content: ["*"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-end": "ping 2s ease-in-out 3",
      },
      fontFamily: {
        varela: ['"Varela Round"', "sans-serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-highlights")],
});
