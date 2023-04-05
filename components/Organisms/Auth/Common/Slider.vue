<script lang="ts" setup>
import { useWatchWithMounted } from '@/composables/useWatchWithMounted'
import { gsap } from 'gsap'

interface IProps {
  arr: { text: string; section: string }[]
  select: string
}

const props = defineProps<IProps>()

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
    class="relative mx-auto flex h-[40px] w-[250px] items-center justify-around overflow-hidden rounded-2xl bg-transparent px-[5px]"
  >
    <div class="absolute h-[80%] rounded-[10px] bg-c19/50 dark:bg-white" ref="sliderRef" />
    <button
      v-for="(i, idx) in arr"
      :key="idx"
      class="relative cursor-pointer"
      @click="$emit('set', i.section)"
    >
      {{ i.text }}
    </button>
  </div>
</template>
