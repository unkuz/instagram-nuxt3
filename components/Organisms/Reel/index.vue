<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue.es'
import ReelKeyBoardShortcut from '@@/components/Utils/ReelKeyBoardShortcut.vue'
import { useIdle } from '@vueuse/core'

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

const { idle } = useIdle(2000)
let observer: IntersectionObserver
let currentVideoOnScreen = $ref<HTMLVideoElement>()

watch(idle, (val) => {
  if (val) {
    currentVideoOnScreen!.pause()
  } else {
    currentVideoOnScreen!.play()
  }
})

const videoRefs = $ref<HTMLVideoElement[]>([])

onMounted(() => {
  document.onkeydown = (e) => {
    switch (e.key.toLowerCase()) {
      case 'arrowup':
        slider.value!.prev()
        break
      case 'arrowdown':
        slider.value!.next()
        break
      case 'm':
        currentVideoOnScreen!.muted = !currentVideoOnScreen?.muted
        break
      case 'l':
        console.log('L')
    }
  }
})

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentVideoOnScreen = entry.target as HTMLVideoElement
          currentVideoOnScreen.currentTime = 0
          currentVideoOnScreen.play()
        } else {
          ;(entry.target as HTMLVideoElement).pause()
        }
      })
    },
    {
      threshold: 1,
    }
  )
  videoRefs.forEach((videoEl) => {
    observer.observe(videoEl)
  })
})

onBeforeUnmount(() => {
  videoRefs.forEach((videoEl) => {
    observer.unobserve(videoEl)
  })
})
</script>

<template>
  <div>
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
          type="video/mp4"
          playsinline
          crossorigin="anonymous"
          preload="metadata"
        />
      </div>
    </div>
    <ReelKeyBoardShortcut />
  </div>
</template>
