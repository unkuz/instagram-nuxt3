<script lang="ts" setup>
import { useTransition } from './store/transition'
import { useLockScroll } from '~~/composables/useLockScroll'
import { useGlobalStore } from '~~/store/global'
import { useResizeWindow } from '~~/composables/useResizeWindow'
const globalStore = useGlobalStore()

const transitionStore = useTransition()
const { width, height } = useResizeWindow()
watch([width, height], () => {
  globalStore.setClientSize(width.value, height.value)
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div
      v-if="transitionStore.isPrepare"
      class="absolute inset-0 z-50 flex animate-pulse items-center justify-center bg-fuchsia-400 opacity-30"
    >
      <div class="h-[200px] w-[200px] animate-spin bg-red-400">KAKA</div>
    </div>
  </div>
</template>
