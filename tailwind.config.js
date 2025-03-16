/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmic: {
          blue: '#0A0B2E',
          yellow: '#FFE135',
          pink: '#FF69B4',
          orange: '#FFA500'
        }
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(45deg, #FFE135, #FF69B4, #FFA500)',
        'gradient-cosmic-text': 'linear-gradient(90deg, #FFE135, #FF69B4, #FFA500)'
      }
    },
  },
  plugins: [],
};