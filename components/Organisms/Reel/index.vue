<script setup lang="ts">
import ReelAction from '@/components/Atoms/ReelAction.vue'
import ReelCap from '@/components/Atoms/Video/ReelCap.vue'
import ReelKeyBoardShortcut from '@/components/Utils/ReelKeyBoardShortcut.vue'
import { APP_CONFIGS } from '@/configs'
import { useReelStore } from '@/store'
import { IActiveKey, IPending } from '@/type'
import { useIdle, useTemplateRefsList } from '@vueuse/core'
import { useKeenSlider } from 'keen-slider/vue.es'
import Video from './Video.vue'
import ReelSkeleton from '@/components/Skeleton/Reel/index.vue'
import TopBarSm from '@/components/Molecules/TopBarSm.vue'

defineProps<IPending>()

let currentVideoOnScreen: HTMLVideoElement

const router = useRouter()
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
let mutationOb: MutationObserver | null = null

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

  mutationOb = new MutationObserver(() => slider.value?.update())

  mutationOb.observe(container.value!, {
    childList: true,
    subtree: true,
  })
  console.log('containvideoRefs', containvideoRefs)

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
    <TopBarSm text="Reel" @back="router.push('/')" />
    <div
      ref="container"
      class="keen-slider flex h-[calc(100vh-65px)] flex-col !flex-nowrap items-center md:h-[calc(100vh-84px)]"
    >
      <ReelSkeleton v-if="isPending" />
      <template v-else>
        <div
          v-for="i in reels"
          :key="i.id"
          class="keen-slider__slide flex !w-auto items-start justify-center bg-c19 md:bg-transparent"
        >
          <div ref="containvideoRefs">
            <Video :src="i?.videos?.[0]?.src" />
          </div>
          <ReelCap :user="i.user" :caption="i.caption_text" />
          <ReelAction :totalLike="0" :totalComment="0" />
        </div>
      </template>
    </div>
    <ReelKeyBoardShortcut :active-key="activeKey" />
  </div>
</template>
