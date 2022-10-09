import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@twicpics/components/nuxt3',
    'magic-regexp/nuxt',
    '@nuxtjs/algolia',
  ],
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
  htmlValidator: {
    usePrettier: false,
    failOnError: false,
    options: {
      extends: ['html-validate:document', 'html-validate:recommended', 'html-validate:standard'],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off',
      },
    },
  },
  algolia: {
    apiKey: 'MY_API_KEY',
    applicationId: 'MY_APPLICATION_ID',
  },
  ionic: {
    integrations: {
      //
    },
    css: {
      //
    },
    config: {
      //
    },
  },
})
