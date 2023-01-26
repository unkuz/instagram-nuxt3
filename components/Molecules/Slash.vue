<script setup lang="ts">
import { TIME_DURATION_SLASH } from '@@/configs';
import HeartFly from '@@/lotties/heart-fly.lotties.json';
import Luv from '@@/lotties/luv.lotties.json';
import { useSlashStore } from '@@/store';

const slashStore = useSlashStore()

const showSlash = $computed(() => slashStore.show)
const animation = $computed(() => slashStore.animation)

let timer: NodeJS.Timer
const mapData = (animation: string | null) => {
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
  <ClientOnly v-if="showSlash">
    <Vue3Lottie
      :animationData="mapData(animation)"
      class="pointer-events-none fixed inset-0 h-screen w-screen"
      :loop="false"
    >
    </Vue3Lottie>
  </ClientOnly>
</template>
