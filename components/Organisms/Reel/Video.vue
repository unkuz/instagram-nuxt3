<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'
import ProgressVideoBar from '@/components/Atoms/Video/ProgressVideoBar.vue'
import Loading from '@/components/Atoms/Video/Loading.vue'
import Mute from '@/components/Atoms/Video/Mute.vue'
import Pause from '@/components/Atoms/Video/Pause.vue'
import ReelCap from '@/components/Atoms/Video/ReelCap.vue'
import { IReel } from '@/models'

const props = defineProps<{
  src: string
}>()

const video = ref<HTMLVideoElement>()

const { playing, currentTime, duration, volume, muted, buffered, waiting } = useMediaControls(
  video,
  {
    src: props.src,
  }
)

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
      preload="metadata"
      @click="playing = !playing"
      :ins-data-video-id="id"
      muted
    />

    <ProgressVideoBar
      :currentTime="currentTime"
      :buffered="buffered"
      :duration="duration"
      @setCurentTime="(val) => (currentTime = val * duration)"
    />
    <Loading v-if="waiting" class="!bg-transparent" />
    <Pause
      v-show="!waiting"
      @click="playing = true"
      :class="[playing ? 'scale-0 opacity-0' : 'scale-100 animate-play opacity-100']"
    />

    <Mute @click="muted = !muted" :isMute="muted" class="!left-[15px] hidden md:!top-[15px]" />
  </div>
</template>
