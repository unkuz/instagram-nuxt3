import { inject } from '@vercel/analytics'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(inject)
})
