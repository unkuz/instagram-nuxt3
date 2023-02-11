<script setup lang="ts">
import Luv from '@/lotties/luv.lotties.json'
</script>
<template>
  <div>
    <ClientOnly>
      <Vue3Lottie :animation-data="Luv" class="h-full w-full" />
    </ClientOnly>
  </div>
</template>
