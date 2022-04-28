<script lang="ts" setup>
import HeroPagelet from "~~/components/HeroPagelet/index.vue";
import HeroPlaceHolder from "~~/components/HeroPlaceHolder/index.vue";
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="">
    <HeroPagelet />
    <HeroPlaceHolder />
  </div>
</template>
