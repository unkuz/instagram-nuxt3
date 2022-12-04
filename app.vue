<script lang="ts" setup>
import Loading from '@@/components/Atom/Loading.vue'
import NewPost from '@@/components/Huge/NewPost/index.vue'
import More from '@@/components/Utils/More.vue'
import Prelude from '@@/components/Utils/Prelude.vue'
import { usePrelude, useResizeWindow, useScroll } from '@@/composables'
import { SECTION } from '@@/constants'
import { useGlobalStore, useMoreStore, useThemeStore } from '@@/store'
import { tagDev } from './utils'
import clsx from 'classnames'

const darkMode = ref(true)

useHead({
  title: 'Instagram',
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
    },
  ],
})

const globalStore = useGlobalStore()
const moreStore = useMoreStore()
const themeStore = useThemeStore()
const { isShowPrelude } = usePrelude()
const { width, height } = useResizeWindow()

const isDarkMode = computed<boolean>(() => themeStore.darkMode)
const section = computed<SECTION>(() => globalStore.section)
const isMobile = computed<boolean>(() => globalStore.getIsMobile)
const isShowMore = computed<boolean>(() => moreStore.isShow)

useScroll()

watch([width, height], () => {
  globalStore.setClientSize(width.value, height.value)
  darkMode.value = !darkMode.value
})

if (process.client) {
  window.addEventListener('load', () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('serviceWorker is not supported in current browser!')
    }
    navigator.serviceWorker.register('/sw.js')
  })
}

onMounted(() => {
  tagDev()
})
</script>

<template>
  <!-- <NuxtErrorBoundary > -->
  <div
    :class="
      clsx('dark scroll-smooth font-quicksan selection:bg-c2 selection:text-c1 ', {
        dark: isDarkMode,
      })
    "
  >
    <div class="dark:bg-c19 dark:text-c21">
      <NuxtLayout>
        <Prelude v-if="isShowPrelude" />
        <!-- <NuxtLoadingIndicator color="#7fccff" :height="3" :duration="500" /> -->
        <Loading />
        <NuxtPage />
      </NuxtLayout>
      <NewPost v-if="section === SECTION.NEW_POST && !isMobile" />
      <More v-if="isShowMore" />
    </div>
  </div>
  <!-- </NuxtErrorBoundary> -->
</template>
