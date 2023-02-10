<script lang="ts" setup>
import ExpandIcon_ from '@/assets/svg/full_screen.svg'
import Loading from '@/components/Atoms/Video/Loading.vue'
import PauseIcon_ from '@/components/Atoms/Video/Pause.vue'
import ProgressVideoBar from '@/components/Atoms/Video/ProgressVideoBar.vue'
import { useDoubleClick } from '@/composables'
import { useTimeLineStore } from '@/store'
import { useMediaControls } from '@vueuse/core'

interface IProps {
  video: any
  idPost: string
}

const props = defineProps<IProps>()
const timelineStore = useTimeLineStore()
const videoRef = ref<HTMLVideoElement | null>(null)
let containerRef = $ref<HTMLVideoElement | null>(null)

const { playing, currentTime, duration, volume, muted, buffered, waiting } = useMediaControls(
  videoRef,
  {
    src: props.video.src,
  }
)

const togglePlay = () => {
  playing.value = !playing.value
}

const toggleLike = () => {
  timelineStore.setToggleLike(props.idPost)
}

useDoubleClick(videoRef, togglePlay, toggleLike)

const toggleFullScreen = () => {
  document.fullscreenElement ? document.exitFullscreen() : containerRef!.requestFullscreen()
}
</script>

<template>
  <div
    ref="containerRef"
    class="group relative flex min-w-full items-center justify-center overflow-hidden bg-c2"
  >
    <video
      ref="videoRef"
      class="video block max-h-[100vh] w-full"
      type="video/mp4"
      playsinline
      crossorigin="anonymous"
      loop
      preload="metadata"
      :poster="video.poster ?? ''"
    />
    <Loading v-show="waiting" />
    <PauseIcon_
      v-show="!waiting"
      @click="playing = true"
      :class="[playing ? 'scale-0 opacity-0' : 'scale-100 animate-play opacity-100']"
    />
    <ProgressVideoBar
      :currentTime="currentTime"
      :duration="duration"
      :buffered="buffered"
      @setCurentTime="(val) => (currentTime = val * duration)"
    />
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
