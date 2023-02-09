import { signature } from '@/utils'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted(el) {
      el.focus()
    },
  })
  nuxtApp.vueApp.directive('signature', {
    mounted() {
      signature()
    },
  })
})
