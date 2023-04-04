<script setup lang="ts">
import IndivudualReel from './IndivudualReel.vue'
</script>

<template>
  <div class="grid h-full w-full grid-cols-3 gap-[3px] md:grid-cols-4 md:gap-[10px]">
    <IndivudualReel v-for="i in 10" />
  </div>
</template>
