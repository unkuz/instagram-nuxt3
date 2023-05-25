<script setup>
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()
const isDarkMode = computed(() => themeStore.darkMode)
</script>
<template>
  <div
    class="relative h-[20px] w-[40px] overflow-hidden rounded-[10px] border-[1px] border-c2 bg-transparent dark:border-white dark:bg-transparent"
    @click="themeStore.toggleDarkMode"
  >
    <div
      :class="[
        'relative top-1/2 -translate-y-1/2 translate-x-[2.5px] duration-200',
        {
          'translate-x-[22px]': isDarkMode,
        },
      ]"
    >
      <div
        class="absolute top-1/2 h-[15px] w-[15px] -translate-y-1/2 translate-x-0 rounded-[50%] bg-c11"
      />
      <div
        :class="[
          'absolute top-1/2 h-[15px] w-[15px] -translate-x-[8px] -translate-y-[calc(50%+3px)] scale-0 rounded-[50%] bg-c2 duration-75 dark:bg-c2',
          {
            '!scale-100': isDarkMode,
          },
        ]"
      />
    </div>
  </div>
</template>
