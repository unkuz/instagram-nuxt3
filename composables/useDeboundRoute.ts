import { Router } from 'vue-router'
import { useGlobalStore } from '@/store'

/**
 * The function uses debounce to transition to a new route using a router and a global store.
 * @param {string} url - A string representing the URL of the route to navigate to.
 * @param {Router} router - The router parameter is an instance of a router object, which is used for
 * client-side navigation in a Vue.js application. It is typically provided by a Vue.js plugin such as
 * Vue Router.
 * @returns The function does not have a return statement, so it implicitly returns `undefined`.
 */
export function useDebounceRoute(url: string, router: Router) {
  const globalStore = useGlobalStore()
  if (router.currentRoute.value.path == url) {
    return
  }
  if (url === '') {
    return
  }
  globalStore.setTransition(true)

  // setTimeout(() => {
  router.push(url)
  // }, TIMMING_PAGE_TRANSITION / 2)

  // setTimeout(() => {
  // globalStore.setTransition(false)
  // }, TIMMING_PAGE_TRANSITION)
}
