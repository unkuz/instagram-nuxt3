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
  buildModules: ['@pinia/nuxt', '@nuxtjs/pwa'],
  pwa: {
    icon: false, // disables the icon module
    manifest: {
      name: 'My Awesome App',
      lang: 'fa',
      useWebmanifestExtension: false,
    },
  },
})
