<script lang="ts" setup>
const isOdd = (a) => a % 2 !== 0
</script>

<template>
  <div class="grid h-[500px] w-full grid-cols-3 gap-[2px] md:gap-[28px]">
    <div
      v-for="i in Array.from(Array(100).keys())"
      :class="`aspect-square w-full bg-fuchsia-300  ${
        18 * (i - 1) - 8 == i
          ? 'col-start-3 row-span-2 row-start-1 w-full bg-fuchsia-300 md:col-span-2 md:col-start-2 md:aspect-square'
          : ''
      }`"
    ></div>
  </div>
</template>
