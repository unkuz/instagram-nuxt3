<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'
import ProgressVideoBar from '~~/components/Atoms/Video/ProgressVideoBar.vue'

interface IProps {
  src: string
}
const props = defineProps<IProps>()

const video = ref<HTMLVideoElement>()

const { playing, currentTime, duration, volume } = useMediaControls(video, {
  src: props.src,
})
</script>

<template>
  <div class="relative">
    <video
      ref="video"
      class="h-[calc(100vh-65px)] md:h-[calc(100vh-114px)] md:max-w-[60vw] xl:max-w-[50vw] 2xl:max-w-[40vw]"
      autoplay
      loop
      type="video/mp4"
      playsinline
      crossorigin="anonymous"
      preload="metadata"
    />
    <div class="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2" @click="playing = true">PLAY</div>
    <ProgressVideoBar
      :currentTime="currentTime"
      :duration="duration"
      @setCurentTime="(val) => (currentTime = val * duration)"
    />
  </div>
</template>
