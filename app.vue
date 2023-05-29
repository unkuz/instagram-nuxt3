<script lang="ts" setup>
import Loading from '@/components/Atoms/Loading.vue'
import Slash from '@/components/Molecules/Slash.vue'
import OverLay from '@/components/Organisms/OverLay/index.vue'
import Prelude from '@/components/Utils/Prelude.vue'
import {
  usePrelude,
  useResizeWindow,
  useScroll,
  useScrollBarTheme,
  useWatchRouteSetSection,
} from '@/composables'
import { useThemeStore } from '@/store'
import { useWebNotification } from '@vueuse/core'
import { storeToRefs } from 'pinia'

const { darkMode } = storeToRefs(useThemeStore())
const { isShowPrelude } = usePrelude()

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
</script>

<template>
  <div
    :class="[
      'scroll-smooth font-quicksan text-[.85rem] selection:bg-c2 selection:text-c1 dark:selection:bg-c1 dark:selection:text-c2',
      {
        'dark ': darkMode,
      },
    ]"
    v-signature
  >
    <Prelude v-if="isShowPrelude" />
    <div class="min-h-screen dark:bg-c19 dark:text-c21">
      <NuxtLayout>
        <NuxtLoadingIndicator color="#7fccff" :height="3" :duration="500" />
        <Loading />
        <SeoKit />
        <NuxtPage />
      </NuxtLayout>
      <OverLay />
    </div>
    <Slash />
  </div>
</template>
