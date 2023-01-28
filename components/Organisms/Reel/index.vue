<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue.es'

const [container, slider] = useKeenSlider({
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

const videoRefs = $ref<HTMLVideoElement[]>([])

onMounted(() => {
  document.onkeydown = (e) => {
    switch (String(e.key).toLowerCase()) {
      case 'arrowup':
        slider.value!.prev()
        break
      case 'arrowdown':
        slider.value!.next()
        break
      case 'm':
        console.log('M')
        // left arrow
        break
      case 'l':
        console.log('L')
      // right arrow
    }
  }
})
</script>

<template>
  <div
    ref="container"
    class="keen-slider flex h-[calc(100vh-65px)] flex-col !flex-nowrap items-center md:h-[calc(100vh-84px)]"
  >
    <div
      v-for="(_i, idx) in 2"
      :key="idx"
      class="keen-slider__slide !w-auto cursor-grab duration-500 active:cursor-grabbing"
    >
      <video
        ref="videoRefs"
        class="h-[calc(100vh-65px)] w-auto object-cover md:h-[calc(100vh-114px)]"
        src="/video/242322324_812426336116660_1281566458903572911_n.mp4"
        autoplay
        loop
        muted
        type="video/mp4"
        playsinline
        crossorigin="anonymous"
        preload="metadata"
      />
    </div>
  </div>
</template>
