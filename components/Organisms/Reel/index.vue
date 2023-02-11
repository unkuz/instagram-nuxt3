<script setup lang="ts">
import ReelAction from '@/components/Atoms/ReelAction.vue'
import ReelCap from '@/components/Atoms/Video/ReelCap.vue'
import ReelKeyBoardShortcut from '@/components/Utils/ReelKeyBoardShortcut.vue'
import { APP_CONFIGS } from '@/configs'
import { useReelStore } from '@/store'
import { IActiveKey } from '@/type'
import { useIdle, useTemplateRefsList } from '@vueuse/core'
import { useKeenSlider } from 'keen-slider/vue.es'
import Video from './Video.vue'

let currentVideoOnScreen: HTMLVideoElement

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

let observer: IntersectionObserver

const containvideoRefs = $(useTemplateRefsList<HTMLDivElement>())
const { idle } = useIdle(APP_CONFIGS.TIME_IDLE_REELS)

let activeKey = reactive<IActiveKey>({
  up: false,
  down: false,
  m: false,
  l: false,
})

watch(idle, (val) => {
  if (val) {
    currentVideoOnScreen!.pause()
  } else {
    currentVideoOnScreen!.play()
  }
})

const kBListener = (e: KeyboardEvent) => {
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
      break
    case ' ':
      currentVideoOnScreen!.paused ? currentVideoOnScreen!.play() : currentVideoOnScreen!.pause()
  }
}

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
  containvideoRefs.forEach((containVideoEl) => {
    observer.observe(containVideoEl.children[0].children[0])
  })

  document.addEventListener('keydown', kBListener)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', kBListener)

  containvideoRefs.forEach((containVideoEl) => {
    observer.unobserve(containVideoEl.children[0].children[0])
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
        v-for="(i, idx) in reels"
        :key="idx"
        class="keen-slider__slide flex !w-auto items-start justify-center bg-c19 md:bg-transparent"
      >
        <div ref="containvideoRefs">
          <Video v-bind="i" />
        </div>
        <ReelCap :user="i.user" :caption="i.caption_text" />
        <ReelAction :totalLike="i.like_count" :totalComment="i.total_comment" />
      </div>
    </div>
    <ReelKeyBoardShortcut :active-key="activeKey" />
  </div>
</template>
