<script setup lang="ts">
import { SizeAvatarEnum } from '@@/type'

const { T, S, M, L } = SizeAvatarEnum

interface IProps {
  url: string
  size?: SizeAvatarEnum
  className?: string
}

const { size, url, className } = defineProps<IProps>()
</script>
<template>
  <div
    :class="[
      'cursor-pointer rounded-[50%] bg-cover bg-center',
      {
        'h-[24px] w-[24px]': size === T,
        'h-[32px] w-[32px]': size === S,
        'h-[56px] w-[56px]': size === M,
        'h-[130px] w-[130px]': size === L,
      },
      className,
    ]"
    :style="{ backgroundImage: `url(${url})` }"
  ></div>
</template>
