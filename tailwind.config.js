/***************
 * Tailwind CSS
 ***************/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f4faf6',
          100: '#e6f3eb',
          200: '#c4e3d0',
          300: '#9fd2b4',
          400: '#6bbf90',
          500: '#3aa971',
          600: '#2b8c5c',
          700: '#226e49',
          800: '#1d583c',
          900: '#153e2b'
        }
      }
    }
  },
  plugins: []
}
