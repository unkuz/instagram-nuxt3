<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue.es'

const [container] = useKeenSlider({
  slides: {
    perView: 1,
  },
  dragSpeed: 0.3,
  renderMode: 'precision',
  vertical: true,
  defaultAnimation: {
    duration: 1,
  },
})
</script>

<template>
  <div
    ref="container"
    class="keen-slider flex flex-col !flex-nowrap items-center"
  >
    <div v-for="(_i, idx) in 2" :key="idx" class="keen-slider__slide !w-auto cursor-grab active:cursor-grabbing">
      <video
        class="md:h-[calc(100vh-84px)] h-[calc(100vh-65px)] w-auto object-cover"
        src="/video/242322324_812426336116660_1281566458903572911_n.mp4"
        autoplay
        loop
        muted
      />
    </div>
  </div>
</template>
