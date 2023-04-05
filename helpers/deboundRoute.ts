import { useGlobalStore } from '@/store'

/**
 * This function navigates to a new URL using the router and global store.
 * @param {string} url - The `url` parameter is a string representing the URL that the router should
 * navigate to.
 */
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
