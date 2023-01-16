export const usePercentVideo = (videoRef: HTMLVideoElement | null) => {
  let percent = $ref<number>(0)

  const updateTime = () => {
    if (videoRef?.currentTime && videoRef?.duration)
      percent = videoRef.currentTime / videoRef.duration
  }

  onMounted(() => {
    videoRef!.addEventListener('timeupdate', updateTime)
  })

  return { percent }
}

