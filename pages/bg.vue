<script setup lang="ts">
definePageMeta({
  layout: 'empty',
})
</script>

<template>
  <div class="relative h-screen w-screen opacity-20 md:opacity-80">
    <div
      class="absolute right-[10vw] top-[15vh] h-[200px] w-[200px] rounded-full bg-c11 mix-blend-multiply blur-[200px] delay-100"
    />
    <div
      class="absolute left-[10vw] top-[10vh] h-[200px] w-[200px] rounded-full bg-c17 mix-blend-multiply blur-[200px]"
    />
    <div
      class="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-c17 mix-blend-multiply blur-[200px]"
    />
    <div
      class="absolute bottom-[100px] right-[100px] h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-c13 mix-blend-multiply blur-[200px]"
    />
    <div
      class="absolute bottom-[100px] left-[25vw] h-[200px] w-[200px] rounded-full bg-c12 mix-blend-multiply blur-[200px]"
    />
    <div
      class="leff-[20vw] absolute top-1/2 h-[200px] w-[200px] rounded-full bg-c18 mix-blend-multiply blur-[200px]"
    />
  </div>
</template>
