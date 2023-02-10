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
import { useAddStore, useGlobalStore, useMoreStore, useThemeStore } from '@/store'
import { storeToRefs } from 'pinia'

const { section, getIsMobile: isMobile } = $(storeToRefs(useGlobalStore()))
const addStore = useAddStore()
const { isShow: isShowMore } = $(storeToRefs(useMoreStore()))
const { darkMode: isDarkMode } = $(storeToRefs(useThemeStore()))
const { isShowPrelude } = usePrelude()

registerSeviceWorkerPWA()
useScrollBarTheme()
useScroll()
useResizeWindow()
useWatchRouteSetSection()

useHead({
  meta: [{ name: 'theme-color', content: isDarkMode ? '#121212' : '#fff' }],
})
</script>

<template>
  <div
    :class="[
      'scroll-smooth font-quicksan',
      {
        'dark ': isDarkMode,
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
