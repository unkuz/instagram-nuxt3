<script lang="ts" setup>
import { gsap } from 'gsap'
import UnlikeIcon_ from '@@/assets/svg/unlike_icon.svg'

const unlikeIconRef = ref<HTMLElement>(null)

onMounted(() => {
  const tl = gsap.timeline()
  tl.to(unlikeIconRef.value, {
    scale: 1.5,
    duration: 0.1,
  })
  tl.to(unlikeIconRef.value, {
    scale: 1,
    duration: 0.1,
  })
})
</script>

<template>
  <div ref="unlikeIconRef"><UnlikeIcon_ /></div>
</template>
