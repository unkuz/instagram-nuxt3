<script lang="ts" setup>
import { useTopBackDrop } from '~~/composables/useTopBackDrop';
const backDropRef = ref(null)
useTopBackDrop(backDropRef)
</script>

<template>
  <div ref="backDropRef" class="absolute left-0 z-10 h-screen w-full bg-black/80 flex justify-center items-center"><slot /></div>
</template>
