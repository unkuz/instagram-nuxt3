<script lang="ts" setup>
import ExpandIcon_ from '@@/assets/svg/full_screen.svg'
import PicInPicIcon_ from '@@/assets/svg/picture_in_picture.svg'
import PlayIcon_ from '@@/assets/svg/play_icon.svg'
import { useDoubleClick, usePercentVideo } from '@@/composables'
import { useTimeLineStore } from '@@/store'
import clsx from 'classnames'
import { gsap } from 'gsap'

interface IProps {
  video: any
  idPost: string
}

const props = defineProps<IProps>()
const videoRef = ref<HTMLVideoElement>(null)
const progressBarRef = ref<HTMLDivElement>(null)
const isVideoPlay = ref<boolean>(false)
const timelineStore = useTimeLineStore()

const togglePlay = () => {
  if (videoRef.value.paused) {
    play()
  } else {
    videoRef.value.pause()
  }
}

const toggleLike = () => {
  timelineStore.setToggleLike(props.idPost)
}

useDoubleClick(videoRef, togglePlay, toggleLike)

const { percent } = usePercentVideo(videoRef)

const updateTime = () => {
  if (videoRef?.value?.paused) {
    isVideoPlay.value = !videoRef.value.paused
  }
}

const play = () => {

  const allVideo = document.querySelectorAll('video')
  allVideo.forEach((video) => {
    video.pause()
  })
  videoRef.value.play()
}

watch(percent, () => {
  if (progressBarRef?.value) {
    const { clientWidth: widthParent } = progressBarRef.value.parentElement
    gsap.to(progressBarRef.value, {
      width: percent.value * widthParent,
      duration: 0
    })
  }

})

const scrub = (e: MouseEvent) => {
  if (progressBarRef?.value && videoRef?.value) {
    const scrubTime = (e.offsetX / progressBarRef.value.parentElement.offsetWidth) * videoRef.value.duration;
    videoRef.value.currentTime = scrubTime;
  }

}

onMounted(() => {
  videoRef.value.addEventListener('timeupdate', updateTime)
  progressBarRef.value.parentElement.addEventListener('click', scrub)
})

onUnmounted(() => {
  progressBarRef.value.parentElement.removeEventListener('click', scrub)
})

</script>

<template>
  <div class="group relative min-w-full overflow-hidden">
    <video ref="videoRef" class="video w-full block" :src="video.src" type="video/mp4" preload="auto" playsinline
      crossorigin="anonymous" loop />

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div :class="
        clsx(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100  duration-200',
          {
            'scale-0 opacity-0': isVideoPlay,
          }
        )
      ">
        <PlayIcon_ @click="play" class="!aspect-square !h-[80px] fill-[#ffffffc7]" />
      </div>
    </div>
    <div class="absolute bottom-0  h-[4px] hover:bg-[#45ff2077]  w-full cursor-pointer bg-transparent">
      <div ref="progressBarRef" class="h-full w-0 bg-[#2fff1c]"></div>
    </div>
    <div class="absolute bottom-[10px] right-[10px] flex gap-[15px]">
      <div title="Picture in picture">
        <PicInPicIcon_ @click="videoRef.requestPictureInPicture()"
          class="hidden w-[20px] cursor-pointer fill-white text-white md:group-hover:block" />
      </div>
      <div title="Full screen">
        <ExpandIcon_ @click="videoRef.requestFullscreen()"
          class="hidden w-[20px] cursor-pointer fill-white text-white group-hover:block" />
      </div>
    </div>
  </div>
</template>
