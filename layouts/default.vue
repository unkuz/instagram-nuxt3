<script lang="ts" setup>
import Navbarbottom from "./navbarbottom.vue";
import Header from "~~/components/Header/index.vue";
</script>

<template>
  <div>
    <Header />
    <div class="mx-auto mt-[50px] w-full sm:mt-[84px] lg:w-[935px]">
      <slot />
    </div>
    <Navbarbottom />
    <footer />
  </div>
</template>
