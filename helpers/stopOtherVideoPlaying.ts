/**
 * The function stops all other videos from playing on a webpage.
 */
export const stopOtherVideoPlaying = () => {
  const allVideo: NodeListOf<HTMLVideoElement> = document.querySelectorAll('video')
  allVideo.forEach((video) => {
    video.pause()
  })
}
