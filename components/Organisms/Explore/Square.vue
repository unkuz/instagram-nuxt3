<script lang="ts" setup>
import ReelIcon_ from '@/assets/svg/reel_icon.svg'
import { APP_CONFIGS } from '@/configs'
import HeartIcon_ from '@/assets/svg/mingcute/heart.svg'
import ChatIcon_ from '@/assets/svg/mingcute/chat.svg'
import { isImage, isVideo } from '@/utils'
import ReelIconSelected_ from '@/assets/svg/reel_icon_selected.svg'

interface IProps {
  src: string
  isBig?: boolean
  id?: number
  skeleton?: boolean
}

withDefaults(defineProps<IProps>(), { isBig: false, img: '', skeleton: false })
</script>

<template>
  <div
    :class="[
      'group relative aspect-square h-full w-full cursor-pointer overflow-hidden',
      {
        'col-span-2 row-span-2': isBig,
        'skeleton ': skeleton,
      },
    ]"
  >
    <NuxtLink v-if="!skeleton" :to="`/explore/${'1'}`">
      <nuxt-img
        v-if="isImage(src)"
        :src="src"
        :alt="src"
        class="h-full w-full object-cover duration-200 group-hover:scale-[1.1]"
        :quality="APP_CONFIGS.QUALITY_IMAGE.EXPLORE"
      />

      <template v-if="isVideo(src)"
        ><video
          :src="src"
          class="h-full w-full object-cover duration-200 group-hover:scale-[1.1]" />
        <ReelIconSelected_
          :class="[
            'absolute right-[5px] top-[5px] z-10 fill-c1 dark:fill-c1 md:right-[20px] md:top-[20px]',
          ]"
      /></template>

      <div
        class="absolute inset-0 hidden items-center justify-center bg-black/20 backdrop-blur-[5px] duration-200 group-hover:flex"
      >
        <div class="flex gap-[20px] text-c1 dark:text-c1 md:gap-[30px]">
          <div class="flex flex-col">
            <HeartIcon_ />
            <span>{{ $formatNum(300) }}</span>
          </div>
          <div class="flex flex-col">
            <ChatIcon_ />
            <span>{{ $formatNum(300) }}</span>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
