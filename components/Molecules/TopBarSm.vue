<script setup lang="ts">
import BackIcon_ from '@/assets/svg/mingcute/back.svg'

interface IProps {
  text: string
}

defineProps<IProps>()
</script>
<template>
  <div
    class="absolute left-0 right-0 top-0 z-20 flex h-[60px] items-center justify-between gap-[15px] bg-transparent px-[10px] text-[.85rem] md:hidden"
  >
    <div class="flex items-center gap-[20px]">
      <NuxtLink to="/_"><BackIcon_ /> </NuxtLink>
      <span class="font-[600] capitalize text-white">{{ text }}</span>
    </div>

    <slot />
  </div>
</template>
