<script lang="ts" setup>
import { useNetwork, useBattery, useFps, useGeolocation } from '@vueuse/core'

const fps = useFps()




</script>

<template>
    <div class="fixed bottom-0 left-0  bg-fuchsia-300 px-[5px] xl:flex hidden text-[0.8rem] ">
        <div>FPS :</div>
        <div>{{ fps }}</div>
    </div>
</template>
