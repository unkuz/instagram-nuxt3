import { TIMMING_PAGE_TRANSITION } from '~~/constants/pageTransition'
import { useGlobalStore } from '~~/store/global'
export function useDebounceRoute(url: string) {
  const globalStore = useGlobalStore()
  const router = useRouter()

  globalStore.setTransition(true)
  let timer1 = setTimeout(() => {
    router.push(url)
  }, TIMMING_PAGE_TRANSITION / 2)
  let timer2 = setTimeout(() => {
    globalStore.setTransition(false)
  }, TIMMING_PAGE_TRANSITION)

  onUnmounted(() => {
    clearTimeout(timer1)
    clearTimeout(timer2)
  })
}
