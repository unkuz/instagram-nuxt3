<script lang="ts" setup>
import HeroPagelet from "~~/components/HeroPagelet/index.vue";
import HeroPlaceHolder from "~~/components/HeroPlaceHolder/index.vue";
import Post from "~~/components/Post/index.vue";
definePageMeta({
  layout: "default",
});
useHead({
  titleTemplate: "Instagram",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <Head>
    <Title>{{ "Instagram" }}</Title>
  </Head>
  <div class="flex flex-col items-center lg:block">
    <HeroPagelet />
    <Post v-for="i in Array.from(Array(5).keys())" :key="i" />
  </div>
  <!-- <HeroPlaceHolder />  -->
</template>
