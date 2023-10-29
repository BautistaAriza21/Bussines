/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm':'280px',
        
      },

      fontFamily: {
        'BeVietnamPro': ['Be Vietnam Pro, sans-serif'],
      },

      fontSize: {
        '64px':'4rem',
        '32px':'2rem',
        '16px':'1rem',
        '14px':'0.875rem',
        '20px':'1.25rem',
      },

      colors: {
        'violeta':'#4036A9',
        'grisoscuro':'#111729',
        'gris':'#CDD5E0',
        'blancopastel':'#F8FAFC',
      }
    },
  },
  plugins: [],
}

