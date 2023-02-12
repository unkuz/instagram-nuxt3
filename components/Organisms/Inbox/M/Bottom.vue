<script setup lang="ts">
import CameraFillIcon_ from '@/assets/svg/mingcute/camera_fill.svg'
import PictureFillIcon_ from '@/assets/svg/mingcute/picture_fill.svg'

import MicFillIcon_ from '@/assets/svg/mingcute/mic_fill.svg'

import EmojiFillIcon_ from '@/assets/svg/mingcute/emoji_fill.svg'

import LikeFillIcon_ from '@/assets/svg/mingcute/like_fill.svg'
</script>

<template>
  <div
    class="absolute bottom-0 right-0 left-0 flex h-[60px] items-center justify-between bg-black/80 p-[5px] [&__svg]:w-[22px] [&__svg]:text-blue-400"
  >
    <span><CameraFillIcon_ /></span>
    <span><PictureFillIcon_ /></span>
    <span><MicFillIcon_ /></span>
    <div class="relative w-[60%] bg-red-50">
      Input

      <span class="absolute right-0 bottom-1/2 translate-y-1/2"><EmojiFillIcon_ /></span>
    </div>
    <div>
      <LikeFillIcon_ />
    </div>
  </div>
</template>
