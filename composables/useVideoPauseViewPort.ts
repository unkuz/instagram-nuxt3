import { Ref } from 'vue'
import { useCurrentVideoStore } from '@@/store'

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
