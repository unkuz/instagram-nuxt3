<script lang="ts" setup>
import Explore from '@/components/Organisms/Explore/index.vue'
import { useExploreStore } from '@/store'

const exploreStore = useExploreStore()
const explore = computed(() => exploreStore.list)
</script>

<template>
  <div class="mb-[84px] pt-[20px]">
    <div v-for="(i, idx) in _chunk(_shuffle(explore), 3)" :key="idx">
      <Explore :cluster="i" />
    </div>
    <NuxtChild />
  </div>
</template>
