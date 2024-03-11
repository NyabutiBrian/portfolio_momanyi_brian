/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        Bruno: ['"Bruno Ace"'],
      },
      colors: {
        primary: '#013644',
        secondary: '#B38B59',
        white: 'FFFFFF',
        whity: '#E9EAEB',
        darky: '#262626',
        gray: '999D9E',
      },
    },
  },
  plugins: [],
}