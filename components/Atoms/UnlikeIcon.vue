<script lang="ts" setup>
import { gsap } from 'gsap'
import UnlikeIcon_ from '@/assets/svg/unlike_icon.svg'

const unlikeIconRef = $ref<HTMLElement>()
const tl = gsap.timeline()

onMounted(() => {
  tl.to(unlikeIconRef!, {
    scale: 1.5,
    duration: 0.1,
  }).to(unlikeIconRef!, {
    scale: 1,
    duration: 0.1,
  })
})

onBeforeUnmount(() => {
  tl.kill()
})
</script>

<template>
  <div ref="unlikeIconRef">
    <UnlikeIcon_ />
  </div>
</template>
