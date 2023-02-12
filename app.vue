<script lang="ts" setup>
import Loading from '@/components/Atoms/Loading.vue'
import Add_ from '@/components/Molecules/Add/Add_.vue'
import Slash from '@/components/Molecules/Slash.vue'
import Cookie from '@/components/Utils/Cookie.vue'
import More from '@/components/Utils/More.vue'
import Prelude from '@/components/Utils/Prelude.vue'
import {
  usePrelude,
  useResizeWindow,
  useScroll,
  useScrollBarTheme,
  useWatchRouteSetSection,
} from '@/composables'
import { registerSeviceWorkerPWA } from '@/helpers'
import { useAddStore, useMoreStore, useThemeStore } from '@/store'
import { useWebNotification } from '@vueuse/core'
import { storeToRefs } from 'pinia'

const addStore = useAddStore()
const moreStore = useMoreStore()
const isShowMore = computed(() => moreStore.isShow)
const { darkMode } = storeToRefs(useThemeStore())
const { isShowPrelude } = usePrelude()

registerSeviceWorkerPWA()
useScroll()
useResizeWindow()
useWatchRouteSetSection()
useScrollBarTheme()

useHead({
  meta: [{ name: 'theme-color', content: unref(darkMode) ? '#121212' : '#fff' }],
})

const { isSupported, notification, show, close, onClick, onShow, onError, onClose } =
  useWebNotification({
    title: '😍',
    dir: 'auto',
    lang: 'en',
    renotify: true,
    tag: 'test',
  })

onMounted(() => {
  setInterval(() => {
    show()
  }, 5 * 1000 * 60)
})
</script>

<template>
  <div
    :class="[
      'scroll-smooth font-quicksan',
      {
        'dark ': darkMode,
      },
    ]"
    v-signature
  >
    <div class="selection:bg-c2 selection:text-c1 dark:selection:bg-c1 dark:selection:text-c2">
      <Prelude v-if="isShowPrelude" />
      <div class="min-h-screen dark:bg-c19 dark:text-c21">
        <NuxtLayout>
          <NuxtLoadingIndicator color="#7fccff" :height="3" :duration="500" />
          <Loading />
          <SeoKit />
          <OgImageScreenshot />
          <NuxtPage />
        </NuxtLayout>
        <Add_ v-if="addStore.isShow" />
        <More v-if="isShowMore" />
        <Cookie />
      </div>
    </div>
    <Slash />
  </div>
</template>
