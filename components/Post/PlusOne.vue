<script setup lang="ts">
import { gsap } from 'gsap'
const elRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  let tl = gsap.timeline()
  tl.to(elRef.value, {
    top: -15,
    duration: 0.3,
  })
  tl.to(elRef.value, {
    display: 'none',
    duration: 0.3,
  })
})
</script>

<template>
  <div class="absolute top-0 left-1/2 -translate-x-1/2 text-red-500" ref="elRef">{{ '+1' }}</div>
</template>
