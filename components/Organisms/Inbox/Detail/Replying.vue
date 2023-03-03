<script setup lang="ts">
import { gsap } from 'gsap'

let tl = gsap.timeline({ repeat: 100 })

onMounted(() => {
  tl.to('.replying___', {
    y: 0,
    stagger: 0.1,
    opacity: 0.5,
  }).to('.replying___', {
    y: -3,
    stagger: 0.1,
    opacity: 1,
  })
})

onBeforeUnmount(() => tl.kill())
</script>
<template>
  <div class="flex h-[18px] items-center justify-center gap-[3px] px-[10px]">
    <div
      v-for="(i, idx) in 3"
      :key="idx"
      class="-y-[3px] replying___ h-[4px] w-[4px] rounded-[50%] bg-black"
    ></div>
  </div>
</template>
