<script lang="ts" setup>
import Loading from '@@/components/Atoms/Loading.vue'
import NewPost from '@@/components/Huge/NewPost/index.vue'
import More from '@@/components/Utils/More.vue'
import Prelude from '@@/components/Utils/Prelude.vue'
import {
  usePrelude,
  useResizeWindow,
  useScroll,
  useScrollBarTheme,
  useSignature,
} from '@@/composables'
import { SectionEnum } from '@@/constants'
import { registerSeviceWorkerPWA } from '@@/helpers'
import { useGlobalStore, useMoreStore, useThemeStore } from '@@/store'
import Luv from '@@/lotties/lf20_5vy0an4n.json'

const globalStore = useGlobalStore()
const moreStore = useMoreStore()
const themeStore = useThemeStore()
const { isShowPrelude } = usePrelude()

const isDarkMode = computed<boolean>(() => themeStore.darkMode)
const section = computed<SectionEnum>(() => globalStore.section)
const isMobile = computed<boolean>(() => globalStore.getIsMobile)
const isShowMore = computed<boolean>(() => moreStore.isShow)

registerSeviceWorkerPWA()
useScrollBarTheme()
useScroll()
useSignature()
useResizeWindow()
// useAuthBasic()

useHead({
  meta: [{ name: 'theme-color', content: isDarkMode.value ? '#121212' : '#fff' }],
})
</script>

<template>
  <!-- <NuxtErrorBoundary > -->
  <div
    :class="[
      'scroll-smooth font-quicksan',
      {
        'dark ': isDarkMode,
      },
    ]"
  >
    <div class="selection:bg-c2 selection:text-c1 dark:selection:bg-c1 dark:selection:text-c2">
      <div class="min-h-screen dark:bg-c19 dark:text-c21">
        <NuxtLayout>
          <Prelude v-if="isShowPrelude" />
          <NuxtLoadingIndicator color="#7fccff" :height="3" :duration="500" />
          <Loading />
          <NuxtPage />
        </NuxtLayout>
        <NewPost v-if="section === SectionEnum.NEW_POST && !isMobile" />
        <More v-if="isShowMore" />
      </div>
    </div>
    <ClientOnly>
      <Vue3Lottie :animationData="Luv" class="absolute inset-0 -z-10 h-full w-full"> </Vue3Lottie>
    </ClientOnly>
  </div>
  <!-- </NuxtErrorBoundary> -->
</template>
