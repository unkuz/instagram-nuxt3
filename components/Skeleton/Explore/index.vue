<script lang="ts" setup>
import Square from '@/components/Organisms/Explore/Square.vue'
</script>

<template>
  <div>
    <div class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]">
      <Square skeleton :is-big="true" />
      <Square skeleton />
      <Square skeleton />
    </div>
    <div class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]">
      <Square skeleton />
      <Square skeleton :is-big="true" />
      <Square skeleton />
    </div>
  </div>
</template>
