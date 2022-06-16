/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#13131F", 
        purple: "#8257E6",
        white: "#FEFBFB",
        gray: "#282830",
      },
      screens: {
        "xl": {"max": "1609px"},
        "lg": {"max": "992px"},
        "md": {"max": "780px"},
        "sm": {"max": "730px"},
        "xs": {"max": "400px"},
      }
    },
  },
  plugins: [],
}
