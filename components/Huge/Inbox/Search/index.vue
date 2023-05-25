<script lang="ts" setup>
import SearchIcon from '@/assets/svg/search_icon_2367fdg.svg'
</script>

<template>
  <div
    class="relative h-[40px] w-full overflow-hidden rounded-[10px] bg-black/60 text-white shadow-xl"
  >
    <SearchIcon class="absolute left-[12px] top-1/2 -translate-y-1/2" />
    <input type="text" class="h-full w-full bg-transparent focus:outline-none" />
    <p class="absolute left-[35px] top-1/2 -translate-y-1/2">Search</p>
  </div>
</template>
