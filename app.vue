<script lang="ts" setup>
import { useResizeWindow } from '~~/composables/useResizeWindow'
import { useGlobalStore } from '~~/store/global'

const globalStore = useGlobalStore()
const isTransition = computed(() => globalStore.getIsTransition)
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
      v-if="isTransition"
      class="absolute inset-0 z-50 flex animate-pulse items-center justify-center bg-fuchsia-400 opacity-30"
    ></div>
  </div>
</template>
