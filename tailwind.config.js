/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/App.js"
  ],
  theme: {
    extend: {
      colors: {
        'ground': '#d7ccc8',
        'blue': '#44556F',
        'orange': '#ff7849',
        'green': '#48BF91',
        'yellow': '#e7ae18',
        'gray-dark': '#273444',
        'gray': '#708090',
        'gray-light': '#d3dce6',
        'stone': '#f5f5f4',
        'pruebas_amorcito':'#44556F'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}