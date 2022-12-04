<script lang="ts" setup>
import { useFps, useNetwork } from '@vueuse/core'

const fps = useFps()
</script>

<template>
  <div class="fixed bottom-0 left-0 hidden bg-c2 py-[5px] px-[10px] text-[0.75rem] text-c1 xl:flex">
    <div>FPS :</div>
    <div>{{ fps }}</div>
  </div>
</template>
