<script lang="ts" setup>
import { gsap } from 'gsap'
import { useWatchWithMounted } from '@/composables/useWatchWithMounted'

interface IProps {
  arr: { text: string; section: string }[]
  select: string
}

const props = withDefaults(defineProps<IProps>(), {
  arr: [{ text: 'HEHE', section: 'SIGN_IN' }],
})

const sliderRef = $ref<HTMLDivElement>()

useWatchWithMounted(
  () => props.select,
  () => {
    const length = props.arr.length
    const parentW = sliderRef!.parentElement?.clientWidth
    const sliderW = parentW! / length - 5
    const idx = _findIndex(props.arr, { section: props.select })
    const left = idx * sliderW + 5
    gsap.to(sliderRef!, { width: sliderW, left, ease: 'elastic.out(1, 0.3)', duration: 1 })
  }
)
</script>

<template>
  <div
    class="relative mx-auto flex h-[40px] w-[250px] items-center justify-around overflow-hidden rounded-2xl bg-c19/10 px-[5px]"
  >
    <div class="absolute h-[80%] rounded-[10px] bg-white" ref="sliderRef" />
    <div v-for="(i, idx) in arr" :key="idx" class="relative" @click="$emit('set', i.section)">
      {{ i.text }}
    </div>
  </div>
</template>
