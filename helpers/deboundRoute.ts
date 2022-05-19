import { TIMMING_PAGE_TRANSITION } from '~~/constants/pageTransition'
import { useGlobalStore } from '~~/store/global'
export function deboundRoute(url: string) {
  const globalStore = useGlobalStore()
  const router = useRouter()

  // globalStore.setTransition(true)
  // setTimeout(() => {
  router.push(url)
  // // }, TIMMING_PAGE_TRANSITION / 2)
  // setTimeout(() => {
  // globalStore.setTransition(false)
  // }, TIMMING_PAGE_TRANSITION)
}
