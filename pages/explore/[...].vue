<script lang="ts" setup>
import Explore from '@@/components/Explore/index.vue'
import { useExploreStore } from '@@/store'
import { APP_API } from '@@/apis'
import { IStory, ITimeLine } from '@@/models'
import ErrorPage from '@@/components/Utils/ErrorPage.vue'

const exploreStore = useExploreStore()

const { data: _timeline } = await useFetch<ITimeLine[]>(APP_API.timeLine.list)
const { data: _stories } = await useFetch<IStory[]>(APP_API.stories.list)
const { data: _suggestions } = await useFetch<IStory[]>(
  APP_API.suggestions.list
)
const { data: _timelinez } = await useFetchCamel(APP_API.timeLine.list)

const explore = computed(() => exploreStore.list)
</script>

<template>
  <div class="mb-[84px] pt-[20px]">
    <div
      class="flex h-[calc(100vh-84px)] w-full items-center justify-center text-[0.85rem]"
    >
      <ErrorPage />
    </div>
    <!-- <div v-for="(i, idx) in _chunk(_shuffle(explore), 3)" :key="idx">
      <Explore :cluster="i" />
    </div> -->
    <NuxtChild />
  </div>
</template>
