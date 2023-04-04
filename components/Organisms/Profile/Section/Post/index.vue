<script setup lang="ts">
import IndividualPost from './IndividualPost.vue'
</script>

<template>
  <div class="grid h-full w-full grid-cols-3 gap-[3px] md:gap-[10px]">
    <IndividualPost v-for="i in 8" />
  </div>
</template>
