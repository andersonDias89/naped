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
      }
    },
  },
  plugins: [],
}
