<script lang="ts" setup>
import SearchIcon from '@@/assets/svg/search_icon_2367fdg.svg';

</script>

<template>
    <div class="w-full h-[40px] rounded-[10px] bg-black/60 relative text-white overflow-hidden">
        <SearchIcon class="top-1/2 -translate-y-1/2 absolute left-[12px]" />
        <input type="text" class="focus:outline-none w-full h-full bg-transparent">
        <p class="absolute top-1/2 -translate-y-1/2 left-[35px]">Search</p>
     
    </div>
</template>
