<script lang="ts" setup>
import SearchIcon from "@@/assets/svg/search_icon_2367fdg.svg";
</script>

<template>
  <div
    class="relative h-[40px] w-full overflow-hidden rounded-[10px] bg-black/60 text-white shadow-xl"
  >
    <SearchIcon class="absolute top-1/2 left-[12px] -translate-y-1/2" />
    <input type="text" class="h-full w-full bg-transparent focus:outline-none">
    <p class="absolute top-1/2 left-[35px] -translate-y-1/2">
      Search
    </p>
  </div>
</template>
