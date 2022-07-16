<script lang="ts" setup>
import { useLockScroll } from '~~/composables/useLockScroll'
import Logo from '~~/assets/svg/logo.svg'

const isReadyFont = ref(false)

onBeforeMount(() => {
  document.fonts.ready.then(() => {
    isReadyFont.value = true
  })
})

useLockScroll()
</script>

<template>
  <div
    class="fixed top-0 left-0 z-20 flex h-screen w-full flex-col items-center justify-center space-y-[50px] bg-white"
  >
    <div class="w-[100px] lg:w-[120px]"><Logo /></div>
    <p
      v-if="isReadyFont"
      class="font-august text-[1.7rem] uppercase tracking-wide lg:text-[1.8rem]"
    >
      cuzknothz
    </p>
  </div>
</template>
