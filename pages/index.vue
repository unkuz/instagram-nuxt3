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
    <Post />
  </div>
  <!-- <HeroPlaceHolder /> -->
</template>
