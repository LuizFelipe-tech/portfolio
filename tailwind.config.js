/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // --- Cores --- 🎨
      colors: {
        'it-blue': '#38BDF8',
        'background': '#0D1117',
        'text': '#C9D1D9',
        'accent': '#38BDF8',
        'standard-gray': '#8B949E',
        'border': '#30363D',
        'white': '#FFFFFF',
        'accent-transparent': '#38BDF833', // Equivalente a rgba(56, 189, 248, 0.2)
      },

      // --- Tipografia --- ✍️
      fontSize: {
        'sm': '1.5rem', // text-sm
        'md': '2rem', // text-md
        'lg': '6rem', // text-lg
        'xl': '6.5rem', // text-xl
        'nav-mobile': '1.5em', // text-nav-mobile
        'nav-desktop': '1em', // text-nav-desktop
      },

      // --- Espaçamento --- 📏
      spacing: {
        'xxs': '1px',   // p-xxs, m-xxs, etc.
        'xs': '0.5rem', // p-xs, m-xs, etc.
        'sm': '1rem',   // p-sm, m-sm, etc.
        'md': '2rem',   // p-md, m-md, etc.
        'burger-menu': '0.5vh', // p-burger-menu
      },
      
      // --- Layout & Componentes --- 🏗️
      maxWidth: {
        'hero': '700px', // max-w-hero
      },
      width: {
        'nav-menu': '150px', // w-nav-menu
      },
      height: {
        'underline': '2px', // h-underline
      },

      // --- Bordas --- 🖼️
      borderRadius: {
        'sm': '5%', // rounded-sm
      },

      // --- Transições --- ✨
      transitionDuration: {
        'fast': '0.3s', // duration-fast
        'medium': '0.4s', // duration-medium
      },
      transitionTimingFunction: {
        'ease': 'ease', // ease-ease
        'alt': 'ease-in-out', // ease-alt
      }
    },
  },
  plugins: [],
}