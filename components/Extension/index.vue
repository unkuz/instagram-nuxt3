<script lang="ts" setup>
import { useNetwork, useBattery, useFps, useGeolocation } from '@vueuse/core'

const fps = useFps()
</script>

<template>
  <div class="fixed bottom-0 left-0 hidden bg-fuchsia-300 px-[5px] text-[0.8rem] xl:flex">
    <div>FPS :</div>
    <div>{{ fps }}</div>
  </div>
</template>
