<script lang="ts" setup>
import { useLockScroll } from '@@/composables'
import Logo from '@@/assets/svg/logo.svg'

useLockScroll()

const isFontReady = ref<boolean>(false)

onMounted(() => {
  document.fonts.ready.then(() => {
    isFontReady.value = true
  })
})
</script>

<template>
  <div
    v-once
    class="fixed top-0 left-0 z-20 flex h-screen w-full flex-col items-center justify-center space-y-[50px] bg-white duration-75"
  >
    <div class="w-[100px]"><Logo /></div>

    <p
      v-if="isFontReady"
      class="font-august text-[1.7rem] uppercase tracking-wide lg:text-[1.8rem]"
    >
      cuzknothz
    </p>
  </div>
</template>
