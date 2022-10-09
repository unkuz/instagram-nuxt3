import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', '@twicpics/components/nuxt3'],
  buildModules: ['@pinia/nuxt', '@nuxtjs/web-vitals'],
  css: ['@/assets/css/index.css'],
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
  webVitals: {
    // provider: '', // auto detectd
    debug: false,
    disabled: false,
  },
})
