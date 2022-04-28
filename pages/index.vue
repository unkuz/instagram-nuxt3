<script lang="ts" setup>
import HeroPagelet from "~~/components/HeroPagelet/index.vue";
import HeroPlaceHolder from "~~/components/HeroPlaceHolder/index.vue";
import Post from "~~/components/Post/index.vue";
definePageMeta({
  layout: "default",
});
definePageMeta({
  layout: "main",
});
</script>

<template>
  <div>
    <HeroPagelet />

    <Post v-for="i in Array.from(Array(5).keys())" :key="i" />
  </div>
  <!-- <HeroPlaceHolder /> -->
</template>
