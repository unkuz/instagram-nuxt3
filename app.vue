<script lang="ts" setup>
import { useResizeWindow } from '~~/composables/useResizeWindow'
import { useGlobalStore } from '~~/store/global'
import Transition from '~~/components/Transition/index.vue'

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
      class="absolute inset-0 z-40 flex items-center justify-center bg-sky-300 transition"
    ></div>
  </div>
</template>
<style scoped>
.transition {
  animation: transition 1s linear;
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
