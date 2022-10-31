import { Ref } from 'vue'
import { isNil } from 'lodash';

export const usePercentVideo = (videoRef: Ref<HTMLVideoElement>) => {
  const percent = ref<number>(0)

  const updateTime = () => {
    if (!isNil(videoRef?.value?.currentTime) && !isNil(videoRef?.value?.duration))
      percent.value = videoRef.value.currentTime / videoRef.value.duration
  }

  onMounted(() => {
    videoRef.value.addEventListener('timeupdate', updateTime)
  })

  return { percent }
}
