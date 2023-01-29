<script setup lang="ts">
import ReelKeyBoardShortcut from '@@/components/Utils/ReelKeyBoardShortcut.vue'
import { TIME_IDLE_REELS } from '@@/configs'
import { useIdle } from '@vueuse/core'
import { useKeenSlider } from 'keen-slider/vue.es'
import { useReelStore } from '@@/store'

export interface IActiveKey {
  up: boolean
  down: boolean
  m: boolean
  l: boolean
}

const reelStore = useReelStore()

const reels = $computed(() => reelStore.data)
const [container, slider] = useKeenSlider({
  slides: {
    perView: 1,
  },
  dragSpeed: 2,
  renderMode: 'precision',
  vertical: true,
})

const videoRefs = $ref<HTMLVideoElement[]>([])
let observer: IntersectionObserver
let currentVideoOnScreen = $ref<HTMLVideoElement>()
// const { idle } = useIdle(TIME_IDLE_REELS)

let activeKey = reactive<IActiveKey>({
  up: false,
  down: false,
  m: false,
  l: false,
})

// watch(idle, (val) => {
//   if (val) {
//     currentVideoOnScreen!.pause()
//   } else {
//     currentVideoOnScreen!.play()
//   }
// })

onMounted(() => {
  document.onkeydown = (e) => {
    switch (e.key.toLowerCase()) {
      case 'arrowup':
        activeKey.up = true
        slider.value!.prev()
        break
      case 'arrowdown':
        activeKey.down = true
        slider.value!.next()
        break
      case 'm':
        activeKey.m = true
        currentVideoOnScreen!.muted = !currentVideoOnScreen?.muted
        break
      case 'l':
        activeKey.l = true
        console.log('L')
    }
  }
  //   document.onkeyup = (e) => {
  //     switch (e.key.toLowerCase()) {
  //       case 'arrowup':
  //         activeKey.up = false
  //         break
  //       case 'arrowdown':
  //         activeKey.down = false
  //         break
  //       case 'm':
  //         activeKey.m = false
  //         break
  //       case 'l':
  //         activeKey.l = false
  //     }
  //   }
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
        v-for="(
          { caption_text, like_count, media, total_comment, user }, idx
        ) in reels"
        :key="idx"
        class="keen-slider__slide !w-auto cursor-grab active:cursor-grabbing"
      >
        <video
          ref="videoRefs"
          class="h-[calc(100vh-65px)] w-auto object-cover md:h-[calc(100vh-114px)]"
          :src="media.video[0].src"
          autoplay
          loop
          type="video/mp4"
          playsinline
          crossorigin="anonymous"
          preload="metadata"
        />
      </div>
    </div>
    <ReelKeyBoardShortcut :active-key="activeKey" />
  </div>
</template>
