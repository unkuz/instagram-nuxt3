<script setup lang="ts">
import { APP_CONFIGS } from '@/configs'

interface IProps {
  mediaArr: any[]
  current: number
}

defineProps<IProps>()
</script>

<template>
  <div class="flex items-center justify-center space-x-[4px]">
    <div
      v-for="(_i, idx) in mediaArr.slice(0, APP_CONFIGS.MAX_DOT_CAROUSEL)"
      :key="idx"
      :class="[
        'h-[6px] w-[6px]  cursor-pointer  rounded-[50%]',
        current === idx ? 'bg-c7 dark:bg-c7' : 'bg-c3 dark:bg-c1',
      ]"
    />
    <div
      v-if="mediaArr.length > APP_CONFIGS.MAX_DOT_CAROUSEL"
      :class="[
        'text-[.75rem] font-[600] ',
        {
          'text-c7 dark:text-c7': current >= APP_CONFIGS.MAX_DOT_CAROUSEL,
        },
      ]"
    >
      {{ `+${mediaArr.length - APP_CONFIGS.MAX_DOT_CAROUSEL}` }}
    </div>
  </div>
</template>
