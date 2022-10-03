<script lang="ts" setup>
import { usePrelude } from '~~/composables/usePrelude'
import { useResizeWindow } from '~~/composables/useResizeWindow'
import { SECTION } from '~~/constants/section'
import { useGlobalStore } from '~~/store/global'
import { useMoreStore } from '~~/store/more'
import NewPost from './components/Huge/NewPost/index.vue'
import NewPostMobile from './components/Huge/NewPostMobile/index.vue'
import More from './components/Utils/More.vue'
import Prelude from './components/Utils/Prelude.vue'
import { useStoryStore } from './store/story'

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
const storyStore = useStoryStore()
const moreStore = useMoreStore()
const { isShowPrelude } = usePrelude()
const { width, height } = useResizeWindow()
const isTransition = computed(() => globalStore.getIsTransition)
const section = computed(() => globalStore.getSection)
const isMobile = computed(() => globalStore.getIsMobile)
const isShowStory = computed(() => storyStore.getIsShowStory)
const isShowMore = computed(() => moreStore.isShow)
// usePreventSpace()

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
    <NewPost v-if="section === SECTION.NEW_POST && !isMobile" />
    <NewPostMobile v-if="section === SECTION.NEW_POST && isMobile" />
    <More v-if="isShowMore" />
  </div>
</template>
