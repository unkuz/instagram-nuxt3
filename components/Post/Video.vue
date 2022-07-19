<script lang="ts" setup>
import PlayIcon_ from '~~/assets/svg/play_icon.svg'
import { useDoubleClick } from '~~/composables/useDoubleClick'
import { useTimeLineStore } from '~~/store/timeline'

interface IProps {
  video: any
  idPost: string
}
const props = defineProps<IProps>()

const videoRef = ref(null)
const isVideoPlay = ref(false)
const timelineStore = useTimeLineStore()

const isVideoMuted = ref(true)
const toggleLike = () => {
  timelineStore.setToggleLikePost(props.idPost)
}

onMounted(() => {
  videoRef.value.addEventListener('timeupdate', updateTime)
})

const updateTime = () => {
  isVideoPlay.value = !videoRef.value.paused
  isVideoMuted.value = videoRef.value.muted
}

const togglePlay = () => {
  if (videoRef.value.paused) {
    videoRef.value.play()
  } else {
    videoRef.value.pause()
  }
}
const play = () => videoRef.value.play()

useDoubleClick(videoRef, togglePlay, toggleLike)
</script>

<template>
  <div class="relative min-w-full overflow-hidden" :key="video.id">
    <video :src="video.src" loop ref="videoRef" class="min-w-full" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        ref="bigPlayIcon"
        :class="`absolute top-1/2 left-1/2 h-[100px] w-[100px] origin-center -translate-x-1/2 -translate-y-1/2  ${
          isVideoPlay ? 'scale-0 opacity-0' : ' scale-100 opacity-100'
        } opacity-0 duration-500`"
      >
        <PlayIcon_ @click="play" />
      </div>
    </div>
  </div>
</template>
