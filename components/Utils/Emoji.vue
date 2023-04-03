<script lang="ts" setup>
import { EMOJI } from '@/constants'
import { gsap, Elastic } from 'gsap'
interface IProps {
  top: number
}

const props = withDefaults(defineProps<IProps>(), {
  top: -310,
})

defineEmits(['emoji-add'])

const el = $ref<HTMLDivElement>()

let tl: TimelineLite = gsap.timeline({})

onMounted(() => {
  tl.to(el!, {
    height: 300,
    top: props.top,
    duration: 0.3,
    ease: Elastic.easeOut.config(1, 0.6),
  })
})

onBeforeUnmount(() => {
  tl.kill()
})
</script>

<template>
  <div
    ref="el"
    class="absolute -left-[17px] top-0 h-0 w-screen overflow-y-scroll border-[1px] border-c4 bg-c1 dark:border-c20 dark:bg-c19 sm:w-auto"
  >
    <div v-for="({ label, icons }, idx) in EMOJI" :key="idx">
      <p class="mt-[10px] h-[20px] pl-[10px] text-[0.8rem] font-[500]">
        {{ label }}
      </p>
      <div class="grid w-full grid-cols-8 text-[1.5rem] sm:w-[280px] sm:grid-cols-7">
        <div
          v-for="(icon, idx) in icons"
          :key="idx"
          class="flex h-[40px] cursor-pointer select-none items-center justify-center"
          @click="$emit('emoji-add', icon)"
        >
          {{ icon }}
        </div>
      </div>
    </div>
  </div>
</template>
