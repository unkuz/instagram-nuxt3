import { Ref } from 'vue'
import { useCurrentVideoStore } from '@/store'

/**
 * This function checks if a video element is within the viewport and pauses it if it is not.
 * @param videoRef - A reference to the HTMLVideoElement that needs to be checked for visibility in the
 * viewport.
 */
export const useVideoPauseViewPort = (videoRef: Ref<HTMLVideoElement | null>) => {
  const currentVideoStore = useCurrentVideoStore()

  const check = () => {
    const rect = videoRef.value!.getBoundingClientRect()

    const condition =
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (innerWidth || document.documentElement.clientWidth) &&
      rect.top < (innerHeight || document.documentElement.clientHeight)

    if (!condition) {
      videoRef.value!.pause()
      currentVideoStore.setReady()
    }
  }

  onMounted(() => {
    addEventListener('scroll', check)
  })

  onBeforeUnmount(() => {
    removeEventListener('scroll', check)
  })
}
