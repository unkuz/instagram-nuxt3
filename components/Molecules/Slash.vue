<script setup lang="ts">
import { useTailwindBreakPoint } from '@/composables'
import { APP_CONFIGS } from '@/configs'
import HeartFly from '@/lotties/heart-fly.lotties.json'
import love from '@/lotties/love.lotties.json'
import Luv from '@/lotties/luv.lotties.json'
import { useSlashStore } from '@/store'

const { largeMd } = $(useTailwindBreakPoint())

const slashStore = useSlashStore()

const showSlash = $computed(() => slashStore.show)
const animation = $computed(() => slashStore.animation)

let timer: NodeJS.Timer
const mapData = () => {
  const data = {
    luv: Luv,
    'heart-fly': HeartFly,
    love: love,
  }
  return data[animation as keyof typeof data]
}

watchEffect(() => {
  if (showSlash) {
    timer = setTimeout(() => {
      slashStore.setHideSlash()
    }, APP_CONFIGS.TIME_DURATION_SLASH)
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
      v-if="showSlash"
      :animationData="mapData()"
      class="lotties pointer-events-none fixed inset-0 z-50 hidden !h-screen !w-screen md:block"
      :loop="false"
      renderer="svg"
    >
    </Vue3Lottie>
  </ClientOnly>
</template>
