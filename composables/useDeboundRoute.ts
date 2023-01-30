import { Router } from 'vue-router'
import { useGlobalStore } from '@@/store'

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
