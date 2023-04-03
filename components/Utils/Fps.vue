<script lang="ts" setup>
import { useFps } from '@vueuse/core'

const fps = useFps()
</script>

<template>
  <div class="fixed bottom-0 left-0 bg-c2 text-[0.75rem] text-c1">
    <div class="hidden px-[10px] py-[5px] xl:flex">
      <div>FPS :</div>
      <div>{{ fps }}</div>
    </div>
    <div class="flex items-center justify-center" />
  </div>
</template>
