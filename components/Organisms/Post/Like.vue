<script lang="ts" setup>
import { Elastic, gsap } from 'gsap'
import LikeIcon_ from '@@/assets/svg/heart_break_icon.svg'

const likeRef = $ref<HTMLDivElement>()
let tl: TimelineLite = gsap.timeline({})

onMounted(() => {
  tl.to(likeRef, {
    scale: 4,
    duration: 0.5,
    ease: Elastic.easeOut.config(1, 0.3),
  })
  tl.to(likeRef, {
    display: 'none',
    duration: 0,
  })
})
onBeforeUnmount(() => tl.kill())
</script>

<template>
  <div ref="likeRef" class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
    <LikeIcon_ />
  </div>
</template>
