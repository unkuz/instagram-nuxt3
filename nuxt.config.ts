import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/index.css"],
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
  buildModules: ["@pinia/nuxt", "@nuxtjs/pwa"],
  pwa: {
    icon: false, // disables the icon module
    meta: {
      title: "My PWA",
      author: "Me",
    },
    manifest: {
      name: "Nuxt.js PWAs are so easy",
      short_name: "Nuxt.js PWA",
      lang: "en",
    },
  },
});
