<script lang="ts" setup>
import UnlikeIcon_ from '@@/assets/svg/unlike_icon.svg'
import { gsap } from 'gsap'

const unlikeIconRef = ref<HTMLElement | null>(null)
let tl = gsap.timeline()

onMounted(() => {
  tl.to(unlikeIconRef.value, {
    scale: 1.5,
    duration: 0.1,
  })

  tl.to(unlikeIconRef.value, {
    scale: 1,
    duration: 0.1,
  })
})

onBeforeUnmount(() => {
  tl.kill()
})
</script>

<template>
  <div ref="unlikeIconRef"><UnlikeIcon_ /></div>
</template>
