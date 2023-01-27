<script setup lang="ts">
import Error_lottie from '@@/lotties/error.lotties.json'
</script>
<template>
  <div>
    <ClientOnly>
      <Vue3Lottie :animation-data="Error_lottie" class="h-full w-full" />
    </ClientOnly>
  </div>
</template>
