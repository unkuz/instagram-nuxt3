<script lang="ts" setup>
import SaveIcon_ from '@/assets/svg/save_icon.svg'
import { Elastic, gsap } from 'gsap'

interface IProps {
  className: string
}
defineProps<IProps>()

const unlikeRef = $ref<HTMLDivElement>()

onMounted(() => {
  const tl = gsap.timeline()
  tl.to(unlikeRef!, {
    scale: 4,
    duration: 0.5,
    ease: Elastic.easeOut.config(1, 0.3),
  }).to(unlikeRef!, {
    display: 'none',
    duration: 0,
  })
})
</script>

<template>
  <div ref="unlikeRef" class="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
    <SaveIcon_ :class="className" />
  </div>
</template>
