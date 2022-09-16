import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots'],
  css: ['@/assets/css/index.css'],
  buildModules: ['@pinia/nuxt'],
  meta: {
    charset: 'utf-8',
    link: [
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/icon-192x192.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },
  vite: {
    plugins: [svgLoader({})],
  },
  robots:
    /* module options */
    {
      UserAgent: '*',
      Disallow: '',
    },
})
