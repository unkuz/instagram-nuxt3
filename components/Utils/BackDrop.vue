<script lang="ts" setup>
import { APP_CONFIGS } from '@/configs'
</script>

<template>
  <div
    :class="[
      'fixed left-0 top-0 z-20 flex h-full w-screen items-center justify-center bg-c2/20',
      {
        'backdrop-blur-[1.5px]': APP_CONFIGS.BACK_DROP_BLUR,
      },
    ]"
  >
    <slot />
  </div>
</template>
