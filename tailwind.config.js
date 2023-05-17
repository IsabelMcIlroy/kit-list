/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-logo-fallback": "#5D0473",
        "main-logo": "color(display-p3 0.43 0.02 0.92)",
        "action-color": "#9ECD3A",
        "dark-gray": "#BFB6AF",
        "light-gray": "#F2EDED",
      },
    },
  },
  plugins: [],
};
