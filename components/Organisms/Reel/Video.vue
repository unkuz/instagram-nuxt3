<script setup lang="ts">
interface IProps {
  src: string
}
defineProps<IProps>()
</script>

<template>
  <video
    ref="videoRefs"
    class="h-[calc(100vh-65px)] md:h-[calc(100vh-114px)] md:max-w-[60vw] xl:max-w-[50vw] 2xl:max-w-[40vw]"
    :src="src"
    autoplay
    loop
    type="video/mp4"
    playsinline
    crossorigin="anonymous"
    preload="metadata"
  />
</template>
