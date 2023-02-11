<script lang="ts" setup>
import NavBarBottom from '@/components/Molecules/NavBarBottom.vue'
</script>

<template>
  <div>
    <div class="mx-auto mt-[50px] w-full sm:mt-[84px] lg:w-[935px]">
      <slot />
    </div>
    <NavBarBottom />
  </div>
</template>
