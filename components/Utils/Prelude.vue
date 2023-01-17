<script lang="ts" setup>
import { useLockScroll } from "@@/composables";
import Logo from "@@/assets/svg/logo.svg";

useLockScroll();
</script>

<template>
  <div
    v-once
    class="fixed top-0 left-0 z-20 flex h-screen w-full flex-col items-center justify-center space-y-[50px] bg-c1 duration-75 dark:bg-c19"
  >
    <div class="w-[100px]">
      <Logo />
    </div>
  </div>
</template>
