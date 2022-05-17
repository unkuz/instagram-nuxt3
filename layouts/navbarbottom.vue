<script lang="ts" setup>
import HomeIcon from "~~/components/Nav/HomeIcon.vue";
import Search from "~~/components/Nav/Search.vue";
import Reels from "../components/Nav/Reels.vue";
import Activity from "../components/Nav/Activity.vue";
import SelfAvatar from "~~/components/Nav/SelfAvatar.vue";
</script>

<template>
  <div
    class="fixed bottom-0 z-10 h-[65px] w-full border-t-[1px] border-gray-200 bg-white md:hidden"
  >
    <div class="mt-3 flex items-center justify-around">
      <HomeIcon :isHidden="true" />
      <Search :isHidden="true" />
      <Reels :isHidden="true" />
      <Activity :isHidden="true" />
      <div>
        <SelfAvatar :isHidden="true" />
      </div>
    </div>
  </div>
</template>
