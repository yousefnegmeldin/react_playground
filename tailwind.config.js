/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0E1217',
        'secondary':'#1C1F26',
        'primary-button':'#201C40',
        'secondary-button':'#361E4F',
      }
    },
  },
  plugins: [],
}

