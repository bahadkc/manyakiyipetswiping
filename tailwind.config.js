/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B365D', // Deep navy
          light: '#2D4A7C',
          dark: '#0F2444',
        },
        accent: {
          DEFAULT: '#C4A777', // Soft gold
          light: '#D4B787',
          dark: '#B49767',
        },
        background: {
          DEFAULT: '#F9F9F9',
          dark: '#1A1A1A',
          light: '#FFFFFF',
        },
        text: {
          primary: '#1B365D',
          secondary: '#4A5568',
          light: '#718096',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
} 