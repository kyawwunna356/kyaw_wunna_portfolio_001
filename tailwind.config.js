/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ ...fontFamily.sans],
        gruppo: ['var(--font-gruppo)'],
        quicksand: ['var(--font-quicksand)'],
        unbounded: ['var(--font-unbounded)']
      },
    },
  },
  plugins: [],
}
