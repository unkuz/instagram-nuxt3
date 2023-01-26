export const stopOtherVideoPlaying = () => {
  const allVideo: NodeListOf<HTMLVideoElement> =
    document.querySelectorAll('video')
  allVideo.forEach((video) => {
    video.pause()
  })
}
