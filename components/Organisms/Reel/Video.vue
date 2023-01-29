<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'
import ProgressVideoBar from '@@/components/Atoms/Video/ProgressVideoBar.vue'
import Loading from '@@/components/Atoms/Video/Loading.vue'
import Mute from '@@/components/Atoms/Video/Mute.vue'
import Pause from '@@/components/Atoms/Video/Pause.vue'

interface IProps {
  src: string
}
const props = defineProps<IProps>()

const video = ref<HTMLVideoElement>()

const { playing, currentTime, duration, volume, muted, buffered, waiting } = useMediaControls(video, {
  src: props.src,
})

watch(buffered, (val) => {})
</script>

<template>
  <div class="relative">
    <video
      ref="video"
      class="h-[calc(100vh-65px)] w-auto bg-c19 md:h-[calc(100vh-114px)] md:w-[100vw] md:bg-c2"
      autoplay
      loop
      type="video/mp4"
      playsinline
      crossorigin="anonymous"
      preload="metadata"
      @click="playing = !playing"
    />

    <ProgressVideoBar
      :currentTime="currentTime"
      :duration="duration"
      @setCurentTime="(val) => (currentTime = val * duration)"
    />
    <Mute @click="muted = !muted" :isMute="muted" :buffered="buffered" />
    <Pause @click="playing = true" :class="[playing ? 'scale-0 opacity-0' : 'scale-100 animate-play opacity-100']" />
    <Loading v-if="waiting" />
  </div>
</template>
