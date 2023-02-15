<script lang="ts" setup>
import Explore from '@/components/Organisms/Explore/index.vue'
import { useExploreStore } from '@/store'

const exploreStore = useExploreStore()
const explore = computed(() => exploreStore.list)
</script>

<template>
  <div class="mb-[84px] pt-[20px] text-[.85rem]">
    <ClientOnly>
      <div v-for="(i, idx) in _chunk(explore, 3)" :key="idx">
        <Explore :cluster="i" :idx="idx" />
      </div>
    </ClientOnly>
    <NuxtPage/>
  </div>
</template>
