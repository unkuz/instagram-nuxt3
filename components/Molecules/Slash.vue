<script setup lang="ts">
import { TIME_DURATION_SLASH } from '@/configs'
import HeartFly from '@/lotties/heart-fly.lotties.json'
import Luv from '@/lotties/luv.lotties.json'
import { useSlashStore } from '@/store'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanSm = $(breakpoints.greater('md'))

const slashStore = useSlashStore()

const showSlash = $computed(() => slashStore.show)
const animation = $computed(() => slashStore.animation)

let timer: NodeJS.Timer
const mapData = () => {
  type TData = {
    [key: string]: number | string | any
  }
  const data: TData = {
    luv: Luv,
    'heart-fly': HeartFly,
  }
  return data[`${animation}`]
}

watchEffect(() => {
  if (showSlash) {
    timer = setTimeout(() => {
      slashStore.setHideSlash()
    }, TIME_DURATION_SLASH)
  } else {
    clearTimeout(timer)
    slashStore.setHideSlash()
  }
})

onBeforeUnmount(() => clearTimeout(timer))
</script>
<template>
  <ClientOnly>
    <Vue3Lottie
      v-if="showSlash && largerThanSm"
      :animationData="mapData()"
      class="lotties pointer-events-none fixed inset-0 z-50 !h-screen !w-screen"
      :loop="false"
      renderer="svg"
    >
    </Vue3Lottie>
  </ClientOnly>
</template>
