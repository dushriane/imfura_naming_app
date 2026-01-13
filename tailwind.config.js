/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        cursive: ['Dancing Script', 'Pacifico', 'cursive'],
      },
      colors: {
        'pastel-pink': '#ffc8dd',
        'pastel-blue': '#bde0fe',
        'pastel-yellow': '#fff4a3',
      },
    },
  },
  plugins: [],
}
