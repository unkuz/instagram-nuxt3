<script setup lang="ts">
import Error from '@@/lotties/error.lotties.json'
</script>
<template>
  <div>
    <ClientOnly>
      <Vue3Lottie :animation-data="Error" class="h-full w-full" />
    </ClientOnly>
  </div>
</template>
