<script lang="ts" setup>
import Logo from '@/assets/svg/logo.svg'
import { useLockScroll } from '@/composables'

useLockScroll()
</script>

<template>
  <div
    v-once
    class="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-[50px] bg-c1 duration-75 dark:bg-c19"
  >
    <div class="w-[100px]">
      <Logo />
    </div>
  </div>
</template>
