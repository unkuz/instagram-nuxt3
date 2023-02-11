<script setup lang="ts">
import Back from '@/components/Atoms/Icon/Back.vue'
import NewPost from '@/components/Atoms/Nav/NewPost.vue'
</script>
<template>
  <div
    class="fixed top-0 left-0 right-0 z-50 flex h-[60px] w-full items-center justify-between bg-transparent px-[20px] text-white"
  >
    <Back />
    <div class="text-[.8rem] uppercase">Reels</div>
    <div><NewPost :is-select="false" class="[&__svg]:text-white" /></div>
  </div>
</template>
