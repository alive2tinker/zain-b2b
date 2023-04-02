/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zain: {
          primary: '#669933',
          light: '#e4e4e4',
          medium: '#333333',
          mediumgray: '#ccc',
          lightgray: '#aaaaaa14',
          red:'#C50000'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
