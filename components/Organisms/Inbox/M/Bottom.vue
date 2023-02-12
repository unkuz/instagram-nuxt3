<script setup lang="ts">
import CameraFillIcon_ from '@/assets/svg/mingcute/camera_fill.svg'
import PictureFillIcon_ from '@/assets/svg/mingcute/picture_fill.svg'
import MicFillIcon_ from '@/assets/svg/mingcute/mic_fill.svg'
import EmojiFillIcon_ from '@/assets/svg/mingcute/emoji_fill.svg'
import LikeFillIcon_ from '@/assets/svg/mingcute/like_fill.svg'
import Emoji from '~~/components/Utils/Emoji.vue'

let showEmoji = $ref(false)

const toggleEmoji = () => (showEmoji = !showEmoji)
</script>

<template>
  <div class=" ">
    <div class="relative"><Emoji :top="-378" class="!left-0" /></div>

    <div
      class="absolute bottom-0 right-0 left-0 flex h-[60px] items-center justify-between bg-black/80 p-[5px] [&__svg]:w-[22px] [&__svg]:cursor-pointer [&__svg]:text-blue-400"
    >
      <span><CameraFillIcon_ /></span>
      <span><PictureFillIcon_ /></span>
      <span><MicFillIcon_ /></span>
      <div class="relative h-[30px] w-[60%] overflow-hidden rounded-[15px] bg-c1 px-[10px]">
        <span
          ><input
            type="text"
            class="h-full w-full bg-transparent outline-none placeholder:pl-[10px] active:outline-none"
            placeholder="Message"
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
