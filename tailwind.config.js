/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  // Habilita o modo escuro baseado em classe
  darkMode: 'class',

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cores semânticas para o Light Mode
        background: colors.slate[100],
        foreground: colors.white,
        'text-primary': colors.slate[800],
        'text-secondary': colors.slate[500],
        accent: colors.sky[500],
        'accent-hover': colors.sky[600],
        border: colors.slate[300],

        // Cores semânticas para o Dark Mode
        dark: {
          background: colors.slate[900],
          foreground: colors.slate[800],
          'text-primary': colors.slate[200],
          'text-secondary': colors.slate[400],
          accent: colors.sky[500],
          'accent-hover': colors.sky[400],
          border: colors.slate[700],
        }
      },
      // ... suas outras customizações de fonte, espaçamento, etc.
    },
  },
  plugins: [],
}