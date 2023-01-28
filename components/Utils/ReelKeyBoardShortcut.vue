<script setup lang="ts">
import KeyboardIcon_ from '@@/assets/svg/keyboard.svg'
import Button from '@@/components/Atoms/Button.vue'
import KbUpIcon_ from '@@/assets/svg/kb_up.svg'
import KbDownIcon_ from '@@/assets/svg/kb_down.svg'
import KbLIcon_ from '@@/assets/svg/kb_l.svg'
import KbMIcon_ from '@@/assets/svg/kb_m.svg'
import { gsap } from 'gsap'

const intructionMap = [
  { icon: KbUpIcon_, content: 'Go to previous video' },
  { icon: KbDownIcon_, content: 'Go to next video' },
  { icon: KbLIcon_, content: 'Like / Unlike video' },
  { icon: KbMIcon_, content: 'Mute / Unmute video ' },
]

const containerRef = $ref<HTMLDivElement | null>(null)
let tl: TimelineLite = gsap.timeline({})

const ok = () => {
  tl.reverse()
}

onMounted(() => {
  tl.to(containerRef, {
    bottom: 40,
    ease: 'elastic.out(1, 0.5)',
    duration: 1,
  })
})

onBeforeUnmount(() => tl.kill())
</script>
<template>
  <div
    ref="containerRef"
    :class="[
      'fixed right-0 -bottom-[300px] hidden cursor-help rounded-[0.5rem] bg-c1 p-[40px_24px_20px_24px] shadow-md  dark:bg-c2  dark:text-c1 md:right-[40px]   md:block  md:w-[280px]',
    ]"
  >
    <KeyboardIcon_
      class="absolute -top-[23px] right-1/2 w-[65px] origin-center translate-x-1/2 -rotate-[20deg] dark:fill-c1"
    />
    <div class="text-[0.8rem]">
      <p class="mt-[15px] mb-[10px] text-center text-[0.85rem]">
        <span>{{ 'Keyboard shortcuts! ヾ(⌐■_■)ノ♪' }}</span>
      </p>
      <p
        class="flex items-center gap-[15px]"
        v-for="({ icon, content }, idx) in intructionMap"
        :key="idx"
      >
        <span><component :is="icon" class="w-[20px]" /></span>{{ content }}
      </p>

      <div class="flex w-full justify-end">
        <Button
          text="OK"
          @click="ok"
          class="select-none bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500"
        />
      </div>
    </div>
  </div>
</template>
