<script setup lang="ts">
import CameraFillIcon_ from '@/assets/svg/mingcute/camera_fill.svg'
import EmojiFillIcon_ from '@/assets/svg/mingcute/emoji_fill.svg'
import LikeFillIcon_ from '@/assets/svg/mingcute/like_fill.svg'
import MicFillIcon_ from '@/assets/svg/mingcute/mic_fill.svg'
import PictureFillIcon_ from '@/assets/svg/mingcute/picture_fill.svg'
import RightFillIcon_ from '@/assets/svg/mingcute/right_fill.svg'

import { useFocus } from '@vueuse/core'
import { gsap } from 'gsap'
import Emoji from '~~/components/Utils/Emoji.vue'

let showEmoji = $ref(false)
const emojiRef = ref<HTMLDivElement>()
const aniInputRef = $ref<HTMLSpanElement>()
const inputRef = ref<HTMLInputElement>()
const { focused } = useFocus(inputRef, { initialValue: false })

const inputValue = $ref('')

const toggleEmoji = () => (showEmoji = !showEmoji)

const hiddenLeft = $computed(() => {
  return focused.value && inputValue
})

let tl = gsap.timeline({})

watch(focused, (focused) => {
  if (focused) {
    tl.to(aniInputRef!, {
      width: '100%',
    })
  } else {
    tl.to(aniInputRef!, {
      width: '0%',
    })
  }
})

onBeforeUnmount(() => {
  tl.kill()
})
// onClickOutside(emojiRef, () => (showEmoji = true))
</script>

<template>
  <div class="">
    <div class="relative" ref="emojiRef">
      <Emoji v-if="showEmoji" :top="-378" class="!left-0" />
    </div>

    <div
      class="absolute bottom-0 right-0 left-0 flex h-[60px] items-center justify-evenly bg-c1 py-[5px] [&__svg]:w-[22px] [&__svg]:cursor-pointer [&__svg]:text-blue-400"
    >
      <template v-if="hiddenLeft"
        ><span><RightFillIcon_ /></span
      ></template>

      <template v-else>
        <span><CameraFillIcon_ /></span>
        <span><PictureFillIcon_ /></span>
        <span><MicFillIcon_ /></span
      ></template>

      <div
        :class="[
          'relative h-[36px]  overflow-hidden rounded-[18px] border-[1px] border-c4',
          hiddenLeft ? 'w-[80%]' : 'w-[60%]',
        ]"
      >
        <span ref="aniInputRef" class="absolute h-full w-[0px] bg-c4/50"></span>
        <span class="absolute inset-0 px-[10px]"
          ><input
            ref="inputRef"
            v-model="inputValue"
            type="text"
            class="h-full w-[calc(100%-30px)] bg-transparent caret-c7 outline-none active:outline-none"
            :placeholder="focused ? 'Type a message...' : 'Message'"
        /></span>

        <span @click="toggleEmoji" class="absolute right-[10px] bottom-1/2 translate-y-1/2"
          ><EmojiFillIcon_ />
        </span>
      </div>
      <div>
        <LikeFillIcon_ />
      </div>
    </div>
  </div>
</template>
