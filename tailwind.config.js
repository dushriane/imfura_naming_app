const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: '#7c3aed', // violet
            secondary: '#f472b6', // pink
            success: '#10b981',
            warning: '#f59e0b',
            danger: '#ef4444',
            background: '#ffffff',
            foreground: '#111827',
            focus: '#a78bfa',
          },
        },
        dark: {
          colors: {
            primary: '#a78bfa',
            secondary: '#fb7185',
            success: '#34d399',
            warning: '#fbbf24',
            danger: '#f87171',
            background: '#0b1020',
            foreground: '#e5e7eb',
            focus: '#c4b5fd',
          },
        },
      },
    }),
  ],
}
