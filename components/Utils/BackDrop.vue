<script lang="ts" setup>
const backDropRef = ref(null)
useTopBackDrop(backDropRef)
</script>

<template>
  <div ref="backDropRef" class="absolute left-0 z-10 h-screen w-full bg-gray-200 opacity-60"></div>
</template>
