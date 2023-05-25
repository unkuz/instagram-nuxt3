<script setup lang="ts">
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()
const isDarkMode = computed(() => themeStore.darkMode)
</script>

<template>
  <div
    class="absolute -left-[70px] top-[29px] w-[200px] -translate-x-1/2 border-[1px] border-c4 bg-c1 py-[20px] text-[.8rem] dark:border-c20 dark:bg-c19"
  >
    <div
      class="flex w-full cursor-pointer select-none items-center justify-start gap-[30px] px-[20px]"
    >
      <div>Dark mode :</div>
      <div
        class="relative h-[20px] w-[40px] overflow-hidden rounded-[10px] bg-c2 dark:bg-c1"
        @click="themeStore.toggleDarkMode"
      >
        <div
          :class="[
            'relative top-1/2 -translate-y-1/2 translate-x-[2.5px] duration-200',
            {
              'translate-x-[23px]': isDarkMode,
            },
          ]"
        >
          <div
            class="absolute top-1/2 h-[15px] w-[15px] -translate-y-1/2 translate-x-0 rounded-[50%] bg-c11"
          />
          <div
            :class="[
              'absolute top-1/2 h-[15px] w-[15px] -translate-x-[8px] -translate-y-[calc(50%+3px)] scale-0 rounded-[50%] bg-c2 duration-75 dark:bg-c1',
              {
                '!scale-100': isDarkMode,
              },
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
