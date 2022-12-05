<script setup lang="ts">
import clsx from 'classnames'
import { useThemeStore } from '~~/store'

const themeStore = useThemeStore()
const isDarkMode = computed(() => themeStore.darkMode)
</script>

<template>
  <div
    class="absolute top-[35px] -left-[62px] w-[200px] -translate-x-1/2 border-[1px] border-c4 bg-c1 py-[20px] text-[0.7rem] dark:border-c20 dark:bg-c19"
  >
    <div class="flex w-full cursor-pointer select-none justify-center">
      <div
        class="relative h-[20px] w-[40px] overflow-hidden rounded-[10px] bg-c2 dark:bg-c1"
        @click="themeStore.toggleDarkMode"
      >
        <div
          :class="
            clsx('relative top-1/2 -translate-y-1/2 translate-x-[2.5px] duration-200', {
              'translate-x-[23px]': isDarkMode,
            })
          "
        >
          <div
            class="absolute top-1/2 h-[15px] w-[15px] -translate-y-1/2 translate-x-0 rounded-[50%] bg-c11"
          ></div>
          <div
            :class="
              clsx(
                'absolute top-1/2 h-[15px] w-[15px] -translate-y-[calc(50%+3px)] -translate-x-[8px] scale-0 rounded-[50%] bg-c2 duration-75 dark:bg-c1',
                {
                  '!scale-100': isDarkMode,
                }
              )
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
