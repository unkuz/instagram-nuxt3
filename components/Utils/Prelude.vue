<script lang="ts" setup>
import { useLockScroll } from '@@/composables'
import Logo from '@@/assets/svg/logo.svg'
import welcome from '@@/lotties/welcome.lotties.json'

useLockScroll()
</script>

<template>
  <div
    v-once
    class="fixed top-0 left-0 z-20 flex h-screen w-full flex-col items-center justify-center space-y-[50px] bg-c1 duration-75 dark:bg-c19"
  >
    <div class="w-[100px] md:w-[120px]">
      <ClientOnly>
        <Vue3Lottie
          :animationData="welcome"
          class="pointer-events-none absolute inset-0 h-full w-full"
        >
        </Vue3Lottie>
      </ClientOnly>
    </div>
  </div>
</template>
