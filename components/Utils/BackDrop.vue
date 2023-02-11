<script lang="ts" setup>
import { APP_CONFIGS } from '~~/configs'
</script>

<template>
  <div
    :class="[
      'fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-c2/60',
      {
        'backdrop-blur-[1.5px]': APP_CONFIGS.BACK_DROP_BLUR,
      },
    ]"
  >
    <slot />
  </div>
</template>
