/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          600: '#8B5CF6',
        },
        'blue': {
          500: '#3B82F6',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

