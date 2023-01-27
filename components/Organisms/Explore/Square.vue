<script lang="ts" setup>
import ReelIcon_ from '@@/assets/svg/reel_icon.svg'
import { QUALITY_IMAGE } from '@@/configs'

interface IProps {
  img: string | undefined
  isBig?: boolean
}

withDefaults(defineProps<IProps>(), { isBig: false })
</script>

<template>
  <div
    v-if="!!img"
    :class="[
      'group relative aspect-square w-full cursor-pointer overflow-hidden',
      {
        'col-span-2 row-span-2 ': isBig,
      },
    ]"
  >
    <nuxt-img
      v-if="!!img"
      :src="img"
      :alt="img"
      class="h-full w-full object-cover duration-150 group-hover:scale-110"
      :quality="QUALITY_IMAGE.EXPLORE"
    />
    <div class="absolute top-1 right-1 sm:top-4 sm:right-4">
      <ReelIcon_ class="w-[20px] sm:w-[24px]" />
    </div>
    <div class="absolute inset-0 hidden bg-black/20 group-hover:block" />
  </div>
</template>
