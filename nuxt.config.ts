import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', '@twicpics/components/nuxt3'],
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
  robots: {
    UserAgent: '*',
    Disallow: '',
  },
  twicpics: {
    domain: `https://<your-domain>.twic.pics`,
    anticipation: 0.5,
    step: 50,
  },
})
