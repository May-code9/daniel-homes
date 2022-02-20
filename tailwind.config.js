const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue'
  ],

  theme: {
    extend: {
      fontFamily: {
        asul: ['Asul', 'sans-serif', ...defaultTheme.fontFamily.sans],
        jost: ['Jost', 'sans-serif', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#284e54',
        'primary-2': '#3b686f',
        secondary: '#ede7df',
        'secondary-2': '#c69e6f',
        'secondary-3': '#e1d5c8',
        'secondary-4': '#e9c18d',
        'secondary-5': '#e0d5c8',
        'dh-black': '#071315'
      },
      maxHeight: {
        '60-screen': '60vh',
        '72-screen': '72vh',
        '80-screen': '80vh',
        '90-screen': '90vh'
      },
      height: {
        '60-screen': '60vh',
        '72-screen': '72vh',
        '80-screen': '80vh',
        '90-screen': '90vh'
      },
      width: {
        '10-screen': '10vw',
        '20-screen': '20vw',
        '72-screen': '72vw',
        '80-screen': '80vw',
        '90-screen': '90vw',
        '200-screen': '200vw',
        '300-screen': '300vw',
        '400-screen': '400vw'
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem'
       }
    },
    screens: {
      xxs: '375px',
      xs: '425px',
      ...defaultTheme.screens,
      xxl: '1536px'
    }
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
