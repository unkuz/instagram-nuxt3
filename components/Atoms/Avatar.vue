<script setup lang="ts">
import { SizeAvatarEnum } from '@@/type'

const { T, S, M, L } = SizeAvatarEnum

interface IProps {
  url: string
  size?: SizeAvatarEnum
  quality?: number
}

defineProps<IProps>()
</script>
<template>
  <nuxt-img
    :class="[
      'non-drag cursor-pointer select-none rounded-[50%] bg-cover bg-center',
      {
        'h-[24px] w-[24px]': size === T,
        'h-[32px] w-[32px]': size === S,
        'h-[56px] w-[56px]': size === M,
        'h-[130px] w-[130px]': size === L,
      },
    ]"
    :src="url"
    :quality="quality"
  />
</template>
