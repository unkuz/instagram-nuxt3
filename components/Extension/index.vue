<script lang="ts" setup>
import { useFps, useNetwork } from '@vueuse/core'

const fps = useFps()
</script>

<template>
  <div
    class="fixed bottom-0 left-0 hidden bg-black py-[5px] px-[10px] text-[0.75rem] text-white xl:flex"
  >
    <div>FPS :</div>
    <div>{{ fps }}</div>
  </div>
</template>
