<script setup lang="ts">
import { SizeAvatarEnum } from '@@/type'
import clsx from 'classnames'

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
    :class="
      clsx(`cursor-pointer rounded-[50%] bg-cover bg-center ${className}`, {
        'h-[24px] w-[24px]': size === T,
        'h-[32px] w-[32px]': size === S,
        'h-[56px] w-[56px]': size === M,
        'h-[130px] w-[130px]': size === L,
      })
    "
    :style="{ backgroundImage: `url(${url})` }"
  ></div>
</template>
