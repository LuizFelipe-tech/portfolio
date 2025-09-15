// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'it-blue': '#38BDF8',
        'primary': '#0D1117',
        'text-primary': '#C9D1D9',
        'accent': '#38BDF8',
        'standard-gray': '#8B949E',
        'border-color': '#30363D',
        'white': '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
      },
      fontSize: {
        'hero-lg': '6rem',
        'hero-xl': '6.5rem',
      },
      spacing: {
        'underline': '2px',
      },
      maxWidth: {
        'hero': '700px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        blink: 'blink 1s infinite',
      }
    },
  },
  plugins: [],
}