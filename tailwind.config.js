/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "inter": ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        'sucess': '#52FF00',
        'pending': '#EBFF00'
      }
    },
  },
  plugins: [],
}