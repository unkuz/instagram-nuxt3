import { Ref } from 'vue'

export const usePercentVideo = (videoRef: Ref<HTMLVideoElement>) => {
  const percent = ref<number>(0)

  const updateTime = () => {
    percent.value = videoRef.value.currentTime / videoRef.value.duration
  }

  onMounted(() => {
    videoRef.value.addEventListener('timeupdate', updateTime)
  })

  return { percent }
}
