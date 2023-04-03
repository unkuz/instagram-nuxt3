<script setup lang="ts">
import KbDownIcon_ from '@/assets/svg/kb_down.svg'
import KbLIcon_ from '@/assets/svg/kb_l.svg'
import KbMIcon_ from '@/assets/svg/kb_m.svg'
import KbUpIcon_ from '@/assets/svg/kb_up.svg'
import KeyboardIcon_ from '@/assets/svg/keyboard.svg'
import Button from '@/components/Atoms/Button.vue'
import { APP_CONFIGS } from '@/configs'
import { gsap } from 'gsap'
import { IActiveKey } from '@/type'
import KbSpaceIcon_ from '@/assets/svg/kb_space.svg'

interface IProps {
  activeKey: IActiveKey
}

const props = defineProps<IProps>()

const intructionMap = reactive([
  {
    icon: KbUpIcon_,
    content: 'Go to previous video',
    isPress: props.activeKey.up,
  },
  {
    icon: KbDownIcon_,
    content: 'Go to next video',
    isPress: props.activeKey.down,
  },
  {
    icon: KbLIcon_,
    content: 'Like / Unlike video',
    isPress: props.activeKey.l,
  },
  {
    icon: KbMIcon_,
    content: 'Mute / Unmute video',
    isPress: props.activeKey.m,
  },
])

const containerRef = $ref<HTMLDivElement>()
let tl: TimelineLite = gsap.timeline({})
let timer: NodeJS.Timer

const ok = () => {
  tl.reverse()
}

onMounted(() => {
  timer = setTimeout(() => {
    tl.to(containerRef!, {
      bottom: 40,
      ease: 'elastic.out(1, 0.5)',
      duration: 1,
    })
  }, APP_CONFIGS.TIME_DELAY_START_APPARENT_TOOLTIP)
})

onBeforeUnmount(() => {
  tl.kill()
  clearTimeout(timer)
})
</script>
<template>
  <div
    ref="containerRef"
    :class="[
      'fixed -bottom-[300px] right-0 hidden cursor-help rounded-[0.5rem] bg-c1/50 p-[40px_24px_20px_24px] shadow-md  backdrop-blur-[5px] dark:bg-c2/50  dark:text-c1 md:right-[40px]   md:block  md:w-[280px]',
    ]"
  >
    <KeyboardIcon_
      class="absolute -top-[23px] right-1/2 w-[65px] origin-center translate-x-1/2 -rotate-[20deg] duration-500 hover:rotate-0 dark:fill-c1"
    />
    <div class="text-[0.8rem]">
      <p class="mb-[10px] mt-[15px] text-center text-[0.85rem]">
        <span>{{ 'Keyboard shortcuts! ヾ(⌐■_■)ノ♪' }}</span>
      </p>
      <p
        class="flex items-center gap-[15px]"
        v-for="({ icon, content, isPress }, idx) in intructionMap"
        :key="idx"
      >
        <span
          ><component
            :is="icon"
            :class="[
              'w-[20px]',
              {
                'fill-c11': isPress,
              },
            ]" /></span
        >{{ content }}
      </p>

      <div class="flex w-full justify-end">
        <Button
          text="OK"
          @click="ok"
          class="select-none !bg-c15 px-[20px] py-[6px] text-[0.8rem] text-c1 duration-500 active:!bg-c17"
        />
      </div>
    </div>
  </div>
</template>
