import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        c1: '#fff',
        c2: '#000',
        c3: '#646D79',
        c4: '#f0f2f7',
        'sc-thumb': '#00b3ff',
        'sc-thumb-hover': '#ff0088',
        c5: '#95C0E7',
        c6: '#b7ff00',
        c7: '#09f',
        c8: '#fae1da',
        c9: '#ff48a3',
        c10: '#dff1fc',
        c11: '#ff8800',
        c12: '#8bff48',
        c13: '#EF5B50',
        c14: '#1de5ff',
        c15: '#5cff1c',
        c16: '#45ff2077',
        c17: '#cc00ff',
        c18: '#1bb7ff',
        'back-drop': '#fff',
        // dark theme
        c19: '#121212',
        c20: '#414143',
        c21: '#A1ABBA',
        c22: '#E8E8E8',
        c23: '#2B2D30',
        c24: '#00ccff',
        c25: '#16ff01',
      },
      clipPath: {
        cuzknothz:
          'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
        cuzknothz2: 'polygon(12px 0, 100% 0, 100% 100%, 0 100%, 0 12px)',
      },
      keyframes: {
        'play-kf': {
          '50%': {
            opacity: '0.7',
          },
        },
        'cuzknothz-kf': {
          '0%': {
            left: '-30px',
          },
          '100%': {
            left: '53px',
          },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animation: {
        play: 'play-kf 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        cuzknothz: 'cuzknothz-kf 1s linear 4s infinite',
        bg: 'blob 4s infinite',
      },
    },
    fontFamily: {
      august: ['august'],
      quicksan: ['quicksand'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require('tailwind-clip-path'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config
