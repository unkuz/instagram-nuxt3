<script lang="ts" setup>
import { useFps, useNetwork } from '@vueuse/core'
import { useThemeStore } from '@@/store'

const themeStore = useThemeStore()

const isDarkMode = computed<boolean>(() => themeStore.darkMode)

const fps = useFps()
</script>

<template>
  <div class="fixed bottom-0 left-0 bg-c2 text-[0.75rem] text-c1">
    <div class="hidden py-[5px] px-[10px] xl:flex">
      <div>FPS :</div>
      <div>{{ fps }}</div>
    </div>
    <div @click="themeStore.toggleDarkMode" class="flex items-center justify-center">
      <span v-if="isDarkMode">Dark</span>
      <span v-else>Normal</span>
    </div>
  </div>
</template>
