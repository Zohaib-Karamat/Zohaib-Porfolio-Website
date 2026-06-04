/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#0A0A0F',
        surface: '#111118',
        elevated: '#1A1A26',
        border: '#2A2A3A',
        primary: {
          50: '#F4F3FF',
          100: '#E7E5FF',
          200: '#CFCBFF',
          300: '#ADA6FF',
          400: '#8B81FF',
          500: '#6C63FF',
          600: '#5A52E0',
          700: '#4A43C2',
          800: '#3B359A',
          900: '#2C2873',
        },
        secondary: {
          50: '#FFF1F5',
          100: '#FFE4EC',
          200: '#FFC8D6',
          300: '#FF9DB3',
          400: '#FF7B99',
          500: '#FF6584',
          600: '#E65373',
          700: '#BF415C',
          800: '#8F2F43',
          900: '#66202E',
        },
        text: {
          primary: '#F0F0FF',
          muted: '#9090A8',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
