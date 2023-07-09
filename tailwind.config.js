/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-end": "ping 2s ease-in-out 3",
      },
    },
  },
  plugins: [],
};
