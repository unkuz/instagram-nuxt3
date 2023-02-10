<script setup lang="ts">
import Error_lottie from '@/lotties/error.lotties.json'
import { useLockScroll } from '@/composables'

// useLockScroll()
</script>
<template>
  <div class="flex h-[calc(100vh-84px)] w-full items-center justify-center text-[0.85rem]">
    <ClientOnly>
      <Vue3Lottie
        :animation-data="Error_lottie"
        class="h-full w-full dark:invert [&>svg__rect]:fill-transparent"
      />
    </ClientOnly>
  </div>
</template>
