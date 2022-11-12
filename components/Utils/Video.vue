<script lang="ts" setup>
import { useCurrentVideoStore } from '@@/store'

const currentVideoStore = useCurrentVideoStore()
const videoRef = ref<HTMLVideoElement | null>(null)
const data = computed(() => currentVideoStore.data)

watch(
  data,
  () => {
    if (data.value.ready) {
      videoRef.value!.src = data.value.src
      !data.value.isPlaying ? videoRef.value!.play() : videoRef.value!.pause()
      videoRef.value!.currentTime = data.value.startTime
    }
  },
  {
    deep: true,
  }
)
</script>

<template>
  <div class="fixed bottom-[10px] right-[10px] hidden cursor-pointer lg:block" id="video">
    <video class="w-[200px]" ref="videoRef" />
  </div>
</template>
