<script lang="ts" setup>
import ReelIcon_ from '@@/assets/svg/reel_icon.svg'
import clsx from 'classnames'

interface IProps {
  img: string | undefined
  isBig?: boolean
}

defineProps<IProps>()
</script>

<template>
  <div
    v-if="!!img"
    :class="
      clsx('group relative aspect-square w-full cursor-pointer overflow-hidden', {
        'col-span-2 row-span-2 ': isBig,
      })
    "
  >
    <img
      v-if="!!img"
      :src="img"
      :alt="img"
      class="h-full w-full object-cover duration-150 group-hover:scale-110"
    />
    <div class="absolute top-1 right-1 sm:top-4 sm:right-4">
      <ReelIcon_ class="w-[20px] sm:w-[24px]" />
    </div>
    <div class="absolute inset-0 hidden bg-black/20 group-hover:block"></div>
  </div>
</template>
