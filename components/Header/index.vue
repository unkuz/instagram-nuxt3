<script lang="ts" setup>
import Search from "~~/components/Header/Search.vue";
import Logo from "~~/components/Header/Logo.vue";
import HomeIcon from "~~/components/Nav/HomeIcon.vue";
import Messenger from "../Nav/Messenger.vue";
import NewPost from "../Nav/NewPost.vue";
import FindPeople from "../Nav/FindPeople.vue";
import ActivityFeed from "../Nav/ActivityFeed.vue";
import SelfAvatar from "../Nav/SelfAvatar.vue";
import { useResizeWindow } from "~~/composables/useResizeWindow";

const { width, height } = useResizeWindow();
const isMobileResponsive = ref(false);

watchEffect(() => {
  isMobileResponsive.value = width.value < 640;

  console.log(width.value);
  console.log(height.value);
  console.log("sss", isMobileResponsive.value);
});
</script>

<template>
  <header
    class="fixed top-0 z-10 h-[60px] w-full border-0 border-gray-200 bg-white shadow-gray-200 sm:border-b-[1px] sm:shadow-sm"
  >
    <div
      class="mx-[20px] grid h-full grid-cols-2 lg:mx-auto lg:w-[935px] lg:grid-cols-3"
    >
      <!-- logo  -->
      <div class="flex w-full items-center">
        <Logo />
      </div>
      <!-- search -->
      <div class="hidden w-full items-center justify-center lg:flex">
        <Search />
      </div>
      <!-- nav -->
      <div class="flex h-full w-full items-center justify-end space-x-[22px]">
        <HomeIcon :isHidden="!isMobileResponsive" />
        <Messenger :isHidden="true" />
        <NewPost :isHidden="true" />
        <FindPeople :isHidden="!isMobileResponsive" />
        <ActivityFeed :isHidden="!isMobileResponsive" />
        <SelfAvatar :isHidden="!isMobileResponsive" />
      </div>
    </div>
  </header>
</template>
