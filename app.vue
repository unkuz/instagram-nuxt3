<script lang="ts" setup>
import { useResizeWindow } from '~~/composables/useResizeWindow'
import { SECTION } from '~~/constants/section'
import { useGlobalStore } from '~~/store/global'
import NewPost from './components/Huge/NewPost/index.vue'
import NewPostMobile from './components/Huge/NewPostMobile/index.vue'
import { useTopBackDrop } from '~~/composables/useTopBackDrop'
import Story from './components/Huge/Story/index.vue'
import { useStoryStore } from './store/story'
import ViewPost from './components/Huge/ViewPost/index.vue'
import { useViewPostStore } from './store/viewPost'
import Prelude from './components/Utils/Prelude.vue'
import { usePrelude } from '~~/composables/usePrelude'

useHead({
  title: 'Instagram',
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
    },
    {
      name: 'theme-color',
      content: '#fff',
    },
  ],
})

const globalStore = useGlobalStore()
const viewPostStore = useViewPostStore()
const storyStore = useStoryStore()

const { isShowPrelude } = usePrelude()
const { width, height } = useResizeWindow()
const isTransition = computed(() => globalStore.getIsTransition)
const section = computed(() => globalStore.getSection)
const isMobile = computed(() => globalStore.getIsMobile)
const isShowStory = computed(() => storyStore.getIsShowStory)
const isShowViewPost = computed(() => viewPostStore.getIsShow)

watch([width, height], () => {
  globalStore.setClientSize(width.value, height.value)
})

watch(isTransition, () => {
  if (isTransition) {
    window.scrollTo({ top: 0 })
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      document.body.style.overflow = ''
    }, 1000)
  }
})

if (process.client) {
  window.addEventListener('load', () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('serviceWorker is not supported in current browser!')
    }
    navigator.serviceWorker.register('/sw.js')
  })
}
</script>

<template>
  <div class="font-quicksan">
    <Prelude v-if="isShowPrelude" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div
      v-if="isTransition"
      class="absolute inset-0 z-40 flex items-center justify-center bg-violet-200 transition"
    ></div>
    <NewPost v-if="section === SECTION.NEW_POST && !isMobile" />
    <NewPostMobile v-if="section === SECTION.NEW_POST && isMobile" />
    <Story v-if="isShowStory" />
    <ViewPost v-if="isShowViewPost" />
  </div>
</template>
<style scoped>
.transition {
  animation: transition 1s linear infinite;
}

@keyframes transition {
  0% {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  }
  10% {
    clip-path: polygon(82% 0, 100% 0, 100% 100%, 68% 100%);
  }
  20% {
    clip-path: polygon(65% 0, 100% 0, 100% 100%, 44% 100%);
  }
  30% {
    clip-path: polygon(24% 0, 100% 0, 100% 100%, 10% 100%);
  }
  40% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  60% {
    clip-path: polygon(0 0, 95% 0, 75% 100%, 0 100%);
  }
  80% {
    clip-path: polygon(0 0, 59% 0, 30% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
}
</style>
