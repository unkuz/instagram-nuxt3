<script lang="ts" setup>
import Square from '@/components/Organisms/Explore/Square.vue'
</script>

<template>
  <div>
    <div class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]">
      <Square skeleton :is-big="true" src="" />
      <Square skeleton src="" />
      <Square skeleton src="" />
    </div>
    <div class="mt-[2px] grid w-full grid-cols-3 gap-[2px] md:mt-[15px] md:gap-[15px]">
      <Square skeleton src="" />
      <Square skeleton :is-big="true" src="" />
      <Square skeleton src="" />
    </div>
  </div>
</template>
