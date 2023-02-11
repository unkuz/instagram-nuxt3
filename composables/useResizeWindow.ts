import { useGlobalStore } from '@/store'
import { useWindowSize } from '@vueuse/core'

export function useResizeWindow() {
  const globalStore = useGlobalStore()
  const { width, height } = useWindowSize()

  watchEffect(() => {
    globalStore.setClientSize(width.value, height.value)
  })

  return { width, height }
}
