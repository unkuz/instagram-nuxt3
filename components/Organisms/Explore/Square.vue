<script lang="ts" setup>
import ReelIcon_ from '@/assets/svg/reel_icon.svg'
import { APP_CONFIGS } from '@/configs'

interface IProps {
  img: string | undefined
  isBig?: boolean
}

withDefaults(defineProps<IProps>(), { isBig: false, img: '' })
</script>

<template>
  <div
    :class="[
      'group relative aspect-square w-full cursor-pointer overflow-hidden',
      {
        'col-span-2 row-span-2 ': isBig,
      },
    ]"
  >
    <nuxt-img
      :src="img"
      :alt="img"
      class="h-full w-full object-cover duration-150 group-hover:scale-110"
      :quality="APP_CONFIGS.QUALITY_IMAGE.EXPLORE"
    />

    <div class="absolute inset-0 hidden bg-black/20 group-hover:block" />
  </div>
</template>
