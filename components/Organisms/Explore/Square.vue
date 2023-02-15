<script lang="ts" setup>
import ReelIcon_ from '@/assets/svg/reel_icon.svg'
import { APP_CONFIGS } from '@/configs'
import HeartIcon_ from '@/assets/svg/mingcute/heart.svg'
import ChatIcon_ from '@/assets/svg/mingcute/chat.svg'

interface IProps {
  img: string | undefined
  isBig?: boolean
  id: string
}

withDefaults(defineProps<IProps>(), { isBig: false, img: '', id: '' })
</script>

<template>
  <div
    :class="[
      'group relative aspect-square w-full cursor-pointer overflow-hidden',
      {
        '!col-span-2 !row-span-2 ': isBig,
      },
    ]"
  >
    <NuxtLink :to="`/explore/${'1'}`">
      <div>
        <nuxt-img
          :src="img"
          :alt="img"
          class="h-full w-full object-cover duration-200 group-hover:scale-[1.1]"
          :quality="APP_CONFIGS.QUALITY_IMAGE.EXPLORE"
        />

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
      </div>
    </NuxtLink>
  </div>
</template>
