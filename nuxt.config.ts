import { defineNuxtConfig } from 'nuxt/config'
import VueTypeImports from 'vite-plugin-vue-type-imports'
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
    // '@nuxtjs/algolia',
    // '@nuxt/content',
    // 'nuxt-logrocket',
    // '@sidebase/nuxt-auth',
    // '@nuxtjs/i18n',
    // '@nuxt/content',
    // '@nuxtjs/device',
    // 'nuxt-security',
    // '@nuxtjs/algolia',
    // '@twicpics/components/nuxt3',
    // 'nuxt-security',
    // '@nuxtjs/fontaine',
    // '@sidebase/nuxt-auth',
    // '@morev/vue-transitions/nuxt',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
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
        {
          src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1817809598132751`,
          crossorigin: 'anonymous',
          async: true,
        },
        {
          src: '/ads.js',
        },
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
    // plugins: [svgLoader({}), eslintPlugin()],
    plugins: [svgLoader({}), VueTypeImports()],
    // build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id) {
    //         const seprateModule = firebaseModules.find((module) => id.includes(module))
    //         if (seprateModule) return seprateModule
    //       },
    //     },
    //   },
    // },
    build: {
      chunkSizeWarningLimit: 1600,
    },
  },
  // twicpics: {
  //   domain: `https://<your-domain>.twic.pics`,
  //   anticipation: 0.5,
  //   step: 50,
  // },
  // algolia: {
  //   apiKey: 'MY_API_KEY',
  //   applicationId: 'MY_APPLICATION_ID',
  // },
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
  experimental: {
    reactivityTransform: true,
  },
  // auth: {
  //     // The module is enabled. Change this to disable the module
  //     isEnabled: true,
  //     // The origin is set to the development origin. Change this when deploying to production by setting `origin` in this config before build-time or by exporting `AUTH_ORIGIN` by running `export AUTH_ORIGIN=...`
  //     origin: 'http://localhost:3000',
  //     // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
  //     basePath: '/api/auth',
  //     // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
  //     enableSessionRefreshPeriodically: false,
  //     // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
  //     enableSessionRefreshOnWindowFocus: true,
  //     // Whether to add a global authentication middleware that will protect all pages without exclusion
  //     enableGlobalAppMiddleware: false,
  //     // Configuration of the global auth-middleware (only applies if you set `enableGlobalAppMiddleware: true` above!)
  //     globalMiddlewareOptions: {
  //         // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing `404` pages. Setting this to false may lead to vue-router problems (as the target page does not exist)
  //         allow404WithoutAuth: true,
  //     },
  // },
  // i18n: {
  //     /* module options */
  // },
  // content: {
  //     // https://content.nuxtjs.org/api/configuration
  // },
  runtimeConfig: {
    public: {
      siteUrl: 'https://instagram-clone-nuxt3.vercel.app/',
      siteName: 'Instagram',
      siteDescription: 'Instagram Clone By Cuzknothz',
      language: 'en-AU',
      titleSeparator: '|',
    },
  },
  // content: {
  //   // https://content.nuxtjs.org/api/configuration
  // },
})
