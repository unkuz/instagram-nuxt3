import { Ref } from "vue"

export const usePercentVideo = (videoRef: Ref<HTMLVideoElement | null>) => {
  const percent = ref<number>(0)

  const updateTime = () => {
    if (videoRef.value?.currentTime && videoRef.value?.duration)
      percent.value = videoRef.value.currentTime / videoRef.value.duration
  }

  onMounted(() => {
    if (videoRef.value) {
      videoRef.value.addEventListener('timeupdate', updateTime)
    }
  })

  return { percent }
}
