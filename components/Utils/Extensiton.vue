<script setup lang="ts">
import { useThemeStore } from '~~/store'

const themeStore = useThemeStore()
</script>

<template>
  <div class="absolute top-[35px] -left-[62px] w-[200px] -translate-x-1/2 bg-red-100 text-[0.7rem]">
    <div
      class="flex h-[50px] w-full cursor-pointer select-none justify-center"
      @click="themeStore.toggleDarkMode"
    >
      Toggle Dark Mode
    </div>
  </div>
</template>
