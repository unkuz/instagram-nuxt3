import { Ref } from 'vue'

/**
 * This function returns the percentage of the current time of a video compared to its total duration.
 * @param videoRef - A reference to the HTMLVideoElement that the hook will be used on.
 * @returns A reactive object containing a single property `percent`, which is initialized to 0. The
 * `usePercentVideo` function sets up an event listener for the `timeupdate` event on the provided
 * `videoRef`, and updates the `percent` value based on the current time and duration of the video.
 */
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
