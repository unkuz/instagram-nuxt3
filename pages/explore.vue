<script lang="ts" setup>
import Explore from '@/components/Organisms/Explore/index.vue'
import { useExploreStore } from '@/store'
import { axios } from '@/services/axios'
import { APP_API } from '~~/apis'
import ExploreSkeleton from '@/components/Skeleton/Explore/index.vue'

const exploreStore = useExploreStore()

const { data, pending } = await useLazyAsyncData<any>('explore', async () => {
  const res = await axios.get(APP_API.EXPLORE.LIST)
  return res.data
})

watchEffect(() => {
  exploreStore.save(data.value)
})

const exploreChunk = $computed(() => exploreStore.list)
</script>

<template>
  <div class="mb-[84px] pt-[20px] text-[.85rem]">
    <ExploreSkeleton v-if="pending" />
    <template v-else>
      <div v-for="(i, idx) in exploreChunk" :key="idx">
        <Explore :cluster="i" :idx="idx" /></div
    ></template>
    <NuxtPage />
  </div>
</template>
