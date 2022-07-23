import { Ref } from 'nuxt/dist/app/compat/capi'

export const usePercentVideo = (videoRef: Ref<HTMLVideoElement>) => {
  const percent = ref<number>(0)

  const updateTime = () => {
    percent.value = videoRef.value.currentTime / videoRef.value.duration
    // Object.assign(barRef.value.style, {
    //   width: `${
    //     (videoRef.value.currentTime * containerBar.value.clientWidth) / videoRef.value.duration
    //   }px`,
    // })
  }

  onMounted(() => {
    videoRef.value.addEventListener('timeupdate', updateTime)
  })

  return { percent }
}
