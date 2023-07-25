/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-end": "ping 2s ease-in-out 3",
      },
    backgroundImage: {
      'desk' : "url('assets/backgrounds/bg-1.jpg')",
      'confetti' : "url('assets/backgrounds/bg-4.svg')",
      'random' : "url('assets/backgrounds/random-pattern.svg')",
    }
    },
  },
  plugins: [],
});
