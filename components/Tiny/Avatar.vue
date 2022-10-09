<template>
  <div
    :class="
      clsx(`aspect-square cursor-pointer rounded-[50%] bg-cover bg-center ${className}`, {
        'w-[24px]': size === T,
        'w-[32px]': size === S,
        'w-[56px]': size === M,
        'w-[130px]': size === L,
      })
    "
    :style="{ backgroundImage: `url(${url})` }"
  ></div>
</template>

<script setup lang="ts">
import clsx from 'classnames'
import { SizeAvatarEnum } from '~~/type'

const { T, S, M, L } = SizeAvatarEnum

interface IProps {
  url: string
  size?: SizeAvatarEnum
  className?: string
}

const { size, url, className } = defineProps<IProps>()
</script>
