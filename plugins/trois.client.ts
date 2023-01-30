import { TroisJSVuePlugin } from 'troisjs'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(TroisJSVuePlugin)
})
