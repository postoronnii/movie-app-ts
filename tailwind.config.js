/** @type {import('tailwindcss').Config} */
/* disable eslint errors if any */
const { fontFamily } = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
