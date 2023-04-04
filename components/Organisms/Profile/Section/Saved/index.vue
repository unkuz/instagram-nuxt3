<script setup lang="ts">
import IndividualSaved from './IndividualSaved.vue'
</script>

<template>
  <div class="grid h-full w-full grid-cols-3 gap-[3px] md:gap-[10px]">
    <IndividualSaved v-for="i in 10" />
  </div>
</template>
