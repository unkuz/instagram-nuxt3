<script lang="ts" setup>
import Navbarbottom from './navbarbottom.vue'
</script>

<template>
  <div>
    <div class="mx-auto mt-[50px] w-full text-[0.8rem] sm:mt-[84px] lg:w-[605px]">
      <slot />
    </div>
    <Navbarbottom />
  </div>
</template>
