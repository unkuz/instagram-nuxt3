import { useGlobalStore } from '@/store'
import { useWindowSize } from '@vueuse/core'

/**
 * This function uses the current window size to update the client size in a global store.
 * @returns The function `useResizeWindow` returns an object with two properties: `width` and `height`.
 */
export function useResizeWindow() {
  const globalStore = useGlobalStore()
  const { width, height } = useWindowSize()

  watchEffect(() => {
    globalStore.setClientSize(width.value, height.value)
  })

  return { width, height }
}
