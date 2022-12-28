import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@twicpics/components/nuxt3',
    'magic-regexp/nuxt',
    '@nuxtjs/algolia',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-lodash',
    // 'nuxt-security',
    // '@nuxtjs/fontaine',
    // '@sidebase/nuxt-auth',
    // '@morev/vue-transitions/nuxt',
    // '@nuxtjs/i18n',
  ],
  app: {
    head: {
      meta: [
        {
          charset: 'utf-8',
        },
      ],
      link: [
        { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/icon-192x192.png' },
        { rel: 'manifest', href: '/manifest.json' },
      ],
      viewport:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
      title: 'Instagram',
    },
    keepalive: true,
    rootId: '__nuxt',
    rootTag: 'div',
  },
  appConfig: {
    analyze: {
      analyzerMode: 'static',
    },
  },
  buildDir: '.nuxt',
  builder: 'vite',
  //   debug: true,
  devServer: {
    host: 'localhost',
    port: 3000,
  },
  ssr: true,
  css: ['@/assets/scss/index.scss'],
  image: {
    presets: {},
  },
  vite: {
    plugins: [svgLoader({})],
  },
  twicpics: {
    domain: `https://<your-domain>.twic.pics`,
    anticipation: 0.5,
    step: 50,
  },
  algolia: {
    apiKey: 'MY_API_KEY',
    applicationId: 'MY_APPLICATION_ID',
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'cookies',
  },
  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isLodashDate'], // => _isLodashDate
    ],
  },
})
