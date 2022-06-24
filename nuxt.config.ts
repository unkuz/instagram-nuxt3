import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ['~/assets/css/index.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: ['@pinia/nuxt'],
  meta: {
    title: 'Nuxt3 PWA',
    charset: 'utf-8',
    meta: [{ name: 'theme-color', content: '#000' }],
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/instagram_icon.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },
})
