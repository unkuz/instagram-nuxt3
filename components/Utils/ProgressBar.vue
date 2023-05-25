<script lang="ts" setup>
import { gsap } from 'gsap'
const progressBarRef = $ref<HTMLDivElement>()

onMounted(() => {
  gsap.to(progressBarRef!, {
    width: '100%',
    duration: 1,
  })
})
</script>

<template>
  <div ref="progressBarRef" class="fixed left-0 top-0 z-50 h-[3px] w-0 bg-c2" />
</template>
