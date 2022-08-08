<script lang="ts" setup>
import Explore from '~~/components/Explore/index.vue'
import _ from 'lodash'
import { useExploreStore } from '~~/store/explore'
definePageMeta({
  layout: 'main',
})

const exploreStore = useExploreStore()

const explore = computed(() => exploreStore.list)
</script>

<template>
  <div class="mb-[84px]">
    <div v-for="(i, idx) in _.chunk(_.shuffle(explore), 3)">
      <Explore :cluster="i" />
    </div>
    <NuxtChild />
  </div>
</template>
