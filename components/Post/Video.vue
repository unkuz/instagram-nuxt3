<script lang="ts" setup>
import ExpandIcon_ from '@@/assets/svg/full_screen.svg'
import PicInPicIcon_ from '@@/assets/svg/picture_in_picture.svg'
import PlayIcon_ from '@@/assets/svg/play_icon.svg'
import { useDoubleClick, usePercentVideo } from '@@/composables'
import { useTimeLineStore } from '@@/store'
import clsx from 'classnames'

interface IProps {
  video: any
  idPost: string
}
const props = defineProps<IProps>()
const videoRef = ref<HTMLVideoElement>(null)
const progressBarRef = ref<HTMLDivElement>(null)
const isVideoPlay = ref<boolean>(false)
const timelineStore = useTimeLineStore()

const toggleLike = () => {
  timelineStore.setToggleLike(props.idPost)
}

const updateTime = () => {
  isVideoPlay.value = !videoRef.value.paused
}

onMounted(() => {
  videoRef.value.addEventListener('timeupdate', updateTime)
})

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
const { percent } = usePercentVideo(videoRef)

watch(percent, () => {
  const { clientWidth: widthParent } = progressBarRef.value.parentElement
  Object.assign(progressBarRef.value.style, {
    width: `${percent.value * widthParent}px`,
  })
})
</script>

<template>
  <div class="group relative min-w-full overflow-hidden">
    <video :src="video.src" ref="videoRef" class="min-w-full" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        :class="
          clsx(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100  duration-200',
            {
              'scale-0 opacity-0': isVideoPlay,
            }
          )
        "
      >
        <PlayIcon_ @click="play" class="!aspect-square !h-[80px] fill-[#ffffffee]" />
      </div>
    </div>
    <div class="absolute bottom-0 h-[4px] w-full cursor-default bg-transparent duration-500">
      <div ref="progressBarRef" class="h-full w-0 bg-[#3eff25]"></div>
    </div>
    <div class="absolute bottom-[10px] right-[10px] flex gap-[15px]">
      <PicInPicIcon_
        title="Picture in picture"
        @click="videoRef.requestPictureInPicture()"
        class="hidden w-[20px] cursor-pointer fill-white text-white md:group-hover:block"
      />
      <ExpandIcon_
        title="Full screen"
        @click="videoRef.requestFullscreen()"
        class="hidden w-[20px] cursor-pointer fill-white text-white group-hover:block"
      />
    </div>
  </div>
</template>
