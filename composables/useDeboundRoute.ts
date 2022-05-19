import { TIMMING_PAGE_TRANSITION } from '~~/constants/pageTransition'
import { useGlobalStore } from '~~/store/global'
export function useDebounceRoute(url: string, router: any) {
  const globalStore = useGlobalStore()

  globalStore.setTransition(true)
  setTimeout(() => {
    router.push(url)
  }, TIMMING_PAGE_TRANSITION / 2)
  setTimeout(() => {
    globalStore.setTransition(false)
  }, TIMMING_PAGE_TRANSITION)
}
