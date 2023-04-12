/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '4xl': '2560px',
    },
    extend: {
      colors: {
        zain: {
          primary: '#669933',
          light: '#e4e4e4',
          medium: '#333333',
          mediumgray: '#ccc',
          lightgray: '#aaaaaa14',
          red:'#C50000',
          inactive: '#f4f4f4'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
