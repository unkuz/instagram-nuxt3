<script lang="ts" setup>
import PlayIcon_ from '~~/assets/svg/play_icon.svg'
import { useDoubleClick } from '~~/composables/useDoubleClick'
import { useTimeLineStore } from '~~/store/timeline'
import { useVideoPauseViewPort } from '~~/composables/useVideoPauseViewPort'
import { usePercentVideo } from '~~/composables/usePercentVideo'
import { gsap } from 'gsap'
import { useCurrentVideoStore } from '~~/store/currentVideo'

interface IProps {
  video: any
  idPost: string
}
const props = defineProps<IProps>()

const videoRef = ref<HTMLVideoElement>(null)
const currentVideoStore = useCurrentVideoStore()
const progressBarRef = ref<HTMLDivElement>(null)
const isVideoPlay = ref(false)
// const isVideoReady = ref(false)
const timelineStore = useTimeLineStore()

const toggleLike = () => {
  timelineStore.setToggleLikePost(props.idPost)
}

onMounted(() => {
  // videoRef.value.addEventListener('loadeddata', onLoadedData)
  videoRef.value.addEventListener('timeupdate', updateTime)
  console.log(videoRef.value.readyState)
})

// watch(
//   () => videoRef?.value?.readyState,
//   () => {
//     videoRef.value.readyState === 4 ? (isVideoReady.value = true) : (isVideoMuted.value = false)
//   }
// )

// const onLoadedData = () => {
//   console.log('??????', videoRef.value.readyState)
//   debugger
//   videoRef.value.readyState === 4 ? (isVideoReady.value = true) : (isVideoReady.value = false)
// }

const updateTime = () => {
  isVideoPlay.value = !videoRef.value.paused
}

const play = () => {
  const allVideo = document.querySelectorAll('video')
  allVideo.forEach((video) => {
    video.pause()
  })
  videoRef.value.play()
}
const togglePlay = () => {
  if (videoRef.value.paused) {
    play()
  } else {
    videoRef.value.pause()
  }
}

useDoubleClick(videoRef, togglePlay, toggleLike)
useVideoPauseViewPort(videoRef)
const { percent } = usePercentVideo(videoRef)

watch(percent, () => {
  // const { clientWidth: widthParent } = progressBarRef.value.parentElement
  // gsap.to(progressBarRef.value, {
  //   width: percent.value * widthParent,
  // })
})

watch(isVideoPlay, () => {
  if (isVideoPlay) {
    console.log(videoRef.value.currentTime)
    currentVideoStore.set({
      src: videoRef.value.src,
      isPlaying: !videoRef.value.paused,
      startTime: videoRef.value.currentTime,
      ready: false,
    })
  } else {
    currentVideoStore.$reset()
  }
})
</script>

<template>
  <div class="group relative min-w-full overflow-hidden" :key="video.id">
    <video :src="video.src" ref="videoRef" class="min-w-full" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        ref="bigPlayIcon"
        :class="`absolute top-1/2 left-1/2 h-[90px] w-[90px] origin-center -translate-x-1/2 -translate-y-1/2  ${
          isVideoPlay ? 'scale-0 opacity-0' : ' scale-100 opacity-100'
        } opacity-0 duration-500`"
      >
        <PlayIcon_ @click="play" />
      </div>
    </div>
    <div
      class="absolute bottom-[5px] left-1/2 h-[3px] w-[150px] -translate-x-1/2 bg-white opacity-0 duration-500 group-hover:opacity-100"
    >
      <div ref="progressBarRef" class="h-full w-0 bg-blue-500"></div>
    </div>
    <!-- <div v-if="!isVideoReady" class="absolute inset-0 bg-[#e6e6e6d0]">
      <div class="skeleton absolute h-full w-[50px] bg-white blur-2xl"></div>
    </div> -->
  </div>
</template>
<style lang="css">
.skeleton {
  animation: haha 0.8s infinite linear;
}

@keyframes haha {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}
</style>
