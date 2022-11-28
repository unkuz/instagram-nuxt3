<script lang="ts" setup>
import Explore from '@@/components/Explore/index.vue'
import { useExploreStore } from '@@/store'
import _ from 'lodash'

const exploreStore = useExploreStore()

const explore = computed(() => exploreStore.list)
</script>

<template>
  <div class="mb-[84px]">
    <div v-for="(i, idx) in _.chunk(_.shuffle(explore), 3)" :key="idx">
      <Explore :cluster="i" />
    </div>
    <NuxtChild />
  </div>
</template>
