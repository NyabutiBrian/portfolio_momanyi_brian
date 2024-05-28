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
        primary: '#478CDA',
        secondary: '#999999',
        white: '#FFFFF0',
        dark: '#1F1F1F',
        creamy: '#F9D47E'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

