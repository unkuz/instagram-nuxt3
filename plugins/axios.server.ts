import axiosDebug from 'axios-debug-log';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(axiosDebug)
})
