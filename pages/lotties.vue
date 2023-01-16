<script setup lang="ts">
import Luv from '~~/lotties/luv.lotties.json'
</script>
<template>
  <div>
    <ClientOnly>
      <Vue3Lottie :animationData="Luv" class="w-full h-full"> </Vue3Lottie>
    </ClientOnly>
  </div>
</template>
