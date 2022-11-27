/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Autour One', 'cursive'],
        body: ['Abel', 'sans-serif'],
        highlight: ['Architects Daughter', 'cursive'],
      },
    extend: {},
    },
  },
  plugins: [],
}
