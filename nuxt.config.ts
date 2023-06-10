import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image-edge',
    'magic-regexp/nuxt',
    'nuxt-icon',
    'nuxt-lodash',
    '@nuxtjs/fontaine',
    '@vite-pwa/nuxt',
    '@nuxt/devtools',
    // '@sidebase/nuxt-auth',
    // '@nuxtjs/eslint-module',
    // '@nuxtjs/algolia',
    // 'nuxt-logrocket',
    // '@nuxtjs/i18n',
    // '@nuxtjs/device',
    // 'nuxt-security',
    // '@twicpics/components/nuxt3',
    // '@nuxtjs/fontaine',
    // '@morev/vue-transitions/nuxt',
  ],
  content: {},
  extends: ['nuxt-seo-kit'],
  app: {
    head: {
      meta: [
        {
          charset: 'utf-8',
        },
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          href: '/icon-192x192.png',
        },
        { rel: 'manifest', href: '/manifest.json' },
      ],
      viewport:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
      title: 'Instagram',
      script: [
        // {
        //   src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1817809598132751`,
        //   crossorigin: 'anonymous',
        //   async: true,
        // },
        // {
        //   src: '/ads.js',
        // },
      ],
    },
    keepalive: false,
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
    build: {
      chunkSizeWarningLimit: 5000,
    },
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
      ['camelCase', 'stringToCamelCase'],
      ['kebabCase', 'stringToKebab'],
      ['isDate', 'isLodashDate'],
    ],
  },
  experimental: {
    reactivityTransform: true,
    viewTransition: true,
    componentIslands: true,
  },
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://instagram-clone-nuxt3.vercel.app/',
      siteName: 'Instagram',
      siteDescription: 'Instagram Clone By Cuzknothz',
      language: 'en-AU',
      titleSeparator: '|',
    },
  },
})
