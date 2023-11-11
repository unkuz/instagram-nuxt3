import { devfools } from 'devfools'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    devfools('all')
  })
})
