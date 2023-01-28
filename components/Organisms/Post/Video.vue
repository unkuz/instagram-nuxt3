<script lang="ts" setup>
import LoadingIcon_ from '@@/assets/svg/loading_34295aioi.svg'
import ExpandIcon_ from '@@/assets/svg/full_screen.svg'
import PlayIcon_ from '@@/assets/svg/play_icon.svg'
import { useDoubleClick, usePercentVideo } from '@@/composables'
import { useTimeLineStore } from '@@/store'
import { gsap } from 'gsap'
import { stopOtherVideoPlaying } from '~~/helpers'

interface IProps {
  video: any
  idPost: string
}

const props = defineProps<IProps>()
const timelineStore = useTimeLineStore()
const videoRef = ref<HTMLVideoElement | null>(null)
let containerRef = $ref<HTMLVideoElement | null>(null)
let progressBarRef = $ref<HTMLDivElement | null>(null)
let isVideoPlay = $ref(false)
let isFullScreen = $ref(false)
let isLoading = $ref(true)

const play = () => {
  stopOtherVideoPlaying()
  videoRef.value!.play()
}

const togglePlay = () => {
  videoRef.value!.paused ? play() : videoRef.value!.pause()
}

const toggleLike = () => {
  timelineStore.setToggleLike(props.idPost)
}

useDoubleClick(videoRef, togglePlay, toggleLike)

const { percent } = usePercentVideo(videoRef)

const updateTime = () => (isVideoPlay = !videoRef.value!.paused)

watch(percent, () => {
  const { clientWidth: widthParent } = progressBarRef!.parentElement!
  gsap.to(progressBarRef!, {
    width: unref(percent) * widthParent,
    duration: 0,
  })
})

const scrub = (e: MouseEvent) => {
  const scrubTime =
    (e.offsetX / progressBarRef!.parentElement!.offsetWidth) *
    videoRef.value!.duration
  videoRef.value!.currentTime = scrubTime
}

let timerLoadingCheck: NodeJS.Timer

onMounted(() => {
  timerLoadingCheck = setInterval(() => {
    const { readyState } = videoRef.value!
    isLoading = readyState <= 2
  }, 100)
})

onBeforeUnmount(() => {
  clearInterval(timerLoadingCheck)
})

const toggleFullScreen = () => {
  document.fullscreenElement
    ? document.exitFullscreen()
    : containerRef!.requestFullscreen()
}

onMounted(() => {
  containerRef!.addEventListener('fullscreenchange', (e) => {
    isFullScreen = !!document.fullscreenElement
  })
})
</script>

<template>
  <div
    ref="containerRef"
    class="group relative flex min-w-full items-center justify-center overflow-hidden bg-c2"
  >
    <video
      ref="videoRef"
      class="video block max-h-[100vh] w-full"
      :src="video.src"
      type="video/mp4"
      playsinline
      crossorigin="anonymous"
      loop
      @timeupdate="updateTime"
      preload="metadata"
      :poster="video.poster"
    />
    <div
      v-show="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-c20/40"
    >
      <LoadingIcon_ class="w-[10%] !bg-transparent invert" />
    </div>

    <div
      v-show="!isLoading"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        :class="[
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-200',
          isVideoPlay
            ? 'scale-0 opacity-0'
            : 'scale-100 animate-play opacity-100',
        ]"
      >
        <PlayIcon_ class="!aspect-square !h-[80px] fill-c4" @click="play" />
      </div>
    </div>
    <div
      @click="scrub"
      :class="[
        'absolute bottom-0  h-[4px] w-full cursor-pointer  bg-transparent hover:bg-c16 [&>div]:bg-c15',
        {
          'h-[8px] [&>div]:bg-c14': isFullScreen,
        },
      ]"
    >
      <div ref="progressBarRef" class="h-full w-0" />
    </div>
    <div class="absolute bottom-[10px] right-[10px] flex gap-[15px]">
      <div title="Full screen">
        <ExpandIcon_
          class="hidden w-[20px] cursor-pointer fill-c1 text-c1 group-hover:block dark:fill-black"
          @click.stop.prevent="toggleFullScreen"
        />
      </div>
    </div>
  </div>
</template>
