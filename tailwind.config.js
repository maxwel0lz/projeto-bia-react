/** @type {import('tailwindcss').Config} */
import textShadow from "tailwindcss-textshadow"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    textShadow,
  ],
  theme: {
    extend: {
      fontFamily:{
        card: 'Raleway',
        banner: ["Imperial Script","cursive"]
      },
      boxShadow: {
        'right': '2px 0 6px -3px rgba(0, 0, 0, 0.1), 2px 0 5px -1px rgba(0, 0, 0, 0.01)',
        'text': '2px 2px 5px rgba(0, 0, 0, 0.5)',
      },
  plugins: [],
    }
  }
}