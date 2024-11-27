/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        card: 'Raleway',
        banner: ["Imperial Script","cursive"]
      },
      boxShadow: {
        'right': '2px 0 6px -3px rgba(0, 0, 0, 0.1), 2px 0 5px -1px rgba(0, 0, 0, 0.01)',
      },
  plugins: [],
    }
  }
}