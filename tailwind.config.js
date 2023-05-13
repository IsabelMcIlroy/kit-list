/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-purple-fallback": "#7700f0",
        "main-purple": "color(display-p3 0.43 0.02 0.92)",
      },
    },
  },
  plugins: [],
};
