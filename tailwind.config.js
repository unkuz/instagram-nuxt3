module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
    fontFamily: {
      august: ['august'],
      quicksan: ['quicksand'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
