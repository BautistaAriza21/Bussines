/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {
      fontSize: {
        '64px':'4rem',
        '32px':'2rem',
        '16px':'1rem',
        '14px':'0.875rem',
        '20px':'1.25rem'
      },

      fontFamily:{
        'Be_Vietnam_Pro': ['Be_Vietnam_Pro, sans-serif'],
      },
      
      colors: {
        'violeta':'#4036A9',
        'negrita':'#111729',
        'gris':'#CDD5E0',
        'blanco-pastel':'#F8FAFC',
      },

      screens: {
        'sm':'280px',
        'md':'768px',

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

