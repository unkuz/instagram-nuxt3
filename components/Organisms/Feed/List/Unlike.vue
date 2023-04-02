<script lang="ts" setup>
import UnlikeIcon_ from '@/assets/svg/unlike_icon.svg'
import { Elastic, gsap } from 'gsap'

const unlikeRef = $ref<HTMLDivElement>()
let tl = gsap.timeline({})

onMounted(() => {
  tl.to(unlikeRef!, {
    scale: 4,
    duration: 0.5,
    ease: Elastic.easeOut.config(1, 0.3),
  }).to(unlikeRef!, {
    display: 'none',
    duration: 0,
  })
})
onBeforeUnmount(() => tl.kill())
</script>

<template>
  <div ref="unlikeRef" class="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
    <UnlikeIcon_ />
  </div>
</template>
