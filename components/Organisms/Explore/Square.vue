<script lang="ts" setup>
import ChatIcon_ from '@/assets/svg/mingcute/chat.svg'
import HeartIcon_ from '@/assets/svg/mingcute/heart.svg'
import ReelIconSelected_ from '@/assets/svg/reel_icon_selected.svg'
import { APP_CONFIGS } from '@/configs'
import { isImage, isVideo } from '@/utils'
import MutipleMediaIcon_ from '@/assets/svg/mutiple_media.svg'
import NuxtImageCustom from '@/components/Atoms/NuxtImage.vue'

interface IProps {
  src: string
  isBig?: boolean
  id?: number
  skeleton?: boolean
  views?: number
  likes: number
  comments?: number
  isMutiple: boolean
  isReel?: boolean
}

withDefaults(defineProps<IProps>(), {
  isBig: false,
  img: '',
  skeleton: false,
  comments: 0,
  likes: 0,
  views: 0,
  isMutiple: false,
  isReel: false,
})
</script>

<template>
  <div
    :class="[
      'group relative  h-full w-full cursor-pointer overflow-hidden',
      {
        'col-span-2 row-span-2': isBig,
        'skeleton ': skeleton,
      },
      isReel ? 'aspect-[1/1.5]' : 'aspect-square',
    ]"
  >
    <NuxtImageCustom
      v-if="isImage(src)"
      class="bg-c2 [&__img]:duration-200 group-hover:[&__img]:scale-[1.1]"
      :src="src"
      :alt="src"
      :quality="APP_CONFIGS.QUALITY_IMAGE.EXPLORE"
    />

    <template v-if="isVideo(src)"
      ><video
        :src="src"
        class="h-full w-full bg-c2 object-cover duration-200 group-hover:scale-[1.1]" />
      <ReelIconSelected_
        :class="[
          'absolute right-[5px] top-[5px] z-10 fill-c1 dark:fill-c1 md:right-[20px] md:top-[20px]',
        ]"
    /></template>
    <MutipleMediaIcon_
      v-if="isMutiple"
      class="absolute right-[5px] top-[5px] z-10 fill-c1 dark:fill-c1 md:right-[20px] md:top-[20px]"
    />
    <div
      class="absolute inset-0 hidden items-center justify-center bg-black/20 backdrop-blur-[5px] duration-200 group-hover:flex"
    >
      <div class="flex gap-[20px] text-c1 dark:text-c1 md:gap-[30px]">
        <div class="flex flex-col items-center">
          <HeartIcon_ class="[&__path]:fill-c1" />
          <span>{{ $formatNum(likes) }}</span>
        </div>
        <div class="flex flex-col items-center">
          <ChatIcon_ class="[&__path]:fill-c1" />
          <span>{{ $formatNum(comments) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
