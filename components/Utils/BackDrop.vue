<script lang="ts" setup>
import { useTopBackDrop } from '~~/composables/useTopBackDrop'
const backDropRef = ref(null)
useTopBackDrop(backDropRef)
</script>

<template>
  <div
    ref="backDropRef"
    class="absolute left-0 z-10 flex h-screen w-full items-center justify-center bg-black/80"
  >
    <slot />
  </div>
</template>
