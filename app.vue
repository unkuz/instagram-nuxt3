<script lang="ts" setup>
import Loading from '@@/components/Atom/Loading.vue'
import NewPost from '@@/components/Huge/NewPost/index.vue'
import More from '@@/components/Utils/More.vue'
import Prelude from '@@/components/Utils/Prelude.vue'
import { usePrelude, useResizeWindow, useScroll, useSignature } from '@@/composables'
import { SECTION } from '@@/constants'
import { registerSeviceWorkerPWA } from '@@/helpers'
import { useGlobalStore, useMoreStore, useThemeStore } from '@@/store'
import clsx from 'classnames'

if (process.client) {
  window.addEventListener('load', registerSeviceWorkerPWA)
}

const globalStore = useGlobalStore()
const moreStore = useMoreStore()
const themeStore = useThemeStore()
const { isShowPrelude } = usePrelude()

const isDarkMode = computed<boolean>(() => themeStore.darkMode)
const section = computed<SECTION>(() => globalStore.section)
const isMobile = computed<boolean>(() => globalStore.getIsMobile)
const isShowMore = computed<boolean>(() => moreStore.isShow)

useScroll()
useSignature()
useResizeWindow()
</script>

<template>
  <!-- <NuxtErrorBoundary > -->
  <div
    :class="
      clsx('scroll-smooth font-quicksan selection:bg-c2 selection:text-c1 ', {
        'dark ': isDarkMode,
      })
    "
  >
    <div class="min-h-screen dark:bg-c19 dark:text-c21">
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
