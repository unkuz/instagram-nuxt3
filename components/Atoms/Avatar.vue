<script setup lang="ts">
import NuxtImageCustom from '@/components/Atoms/NuxtImage.vue'
import { SizeAvatarEnum } from '@/type'

const { T, S, M, L } = SizeAvatarEnum

interface IProps {
  url: string
  size?: SizeAvatarEnum
  quality?: number
  pending?: boolean
}

withDefaults(defineProps<IProps>(), {
  quality: 50,
  url: 'https://gextoneducation.com/wp-content/uploads/2015/06/no-avatar-female.png',
  pending: false,
})
</script>
<template>
  <div
    :class="[
      'non-drag cursor-pointer select-none overflow-hidden rounded-[50%]',
      {
        'h-[24px] w-[24px]': size === T,
        'h-[32px] w-[32px]': size === S,
        'h-[56px] w-[56px]': size === M,
        'h-[130px] w-[130px]': size === L,
      },
    ]"
  >
    <div v-if="pending" class="skeleton h-full w-full"></div>
    <NuxtImageCustom v-else :src="url" :quality="quality" />
  </div>
</template>
