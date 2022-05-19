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
})
