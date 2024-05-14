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
        primary: '#28E98C',
        secondary: '#999999',
        white: '#FFFFF0',
        dark: '#1F1F1F',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

