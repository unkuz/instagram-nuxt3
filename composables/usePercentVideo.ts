import { Ref } from 'vue'

export const usePercentVideo = (videoRef: Ref<HTMLVideoElement | null>) => {
  let percent = $ref(0)

  const updateTime = () => {
    const videoEl = unref(videoRef)

    percent = videoEl!.currentTime / videoEl!.duration
  }

  onMounted(() => {
    const videoEl = unref(videoRef)

    videoEl!.addEventListener('timeupdate', updateTime)
  })

  return $$({ percent })
}
