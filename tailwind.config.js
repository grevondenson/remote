/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          gold:      '#D4A017',
          'gold-lt': '#E8B820',
          'gold-dk': '#A87800',
          bg:        '#080808',
          900:       '#0D0D0D',
          800:       '#111111',
          700:       '#181818',
          600:       '#222222',
          500:       '#D4A017',
          400:       '#E8B820',
          orange:      '#D4A017',
          'orange-lt': '#E8B820',
          'orange-dk': '#A87800',
        },
      },
      animation: {
        'gradient-x': 'gradientX 16s ease infinite',
        'float':      'float 6s ease-in-out infinite',
        'fade-in':    'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
