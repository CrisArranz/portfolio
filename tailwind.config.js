/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
      },
      keyframes: {
        'background-shine': {
          '0%': { 'background-position': '0 0'},
          '100%': { 'background-position': '-200% 0' }
        }
      }
    },
  },
  plugins: [],
}

