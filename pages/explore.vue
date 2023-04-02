<script lang="ts" setup>
import Explore from '@/components/Organisms/Explore/index.vue'
import { useExploreStore } from '@/store'
import { axios } from '@/services/axios'
import { APP_API } from '@/apis'
import ExploreSkeleton from '@/components/Skeleton/Explore/index.vue'
import Search from '@/components/Molecules/Search.vue'
definePageMeta({
  middleware: 'auth',
})
const exploreStore = useExploreStore()
let keyword = $ref('')
let isFocus = $ref(false)

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
  <div>
    <div class="fixed top-[10px] w-full px-[10px]">
      <Search v-model:value="keyword" v-model:is-focus="isFocus" class="h-[36px] w-[full]" />
    </div>

    <div class="mb-[84px] pt-[20px] text-[.85rem]">
      <ExploreSkeleton v-if="pending" />
      <template v-else>
        <div v-for="(i, idx) in exploreChunk" :key="idx">
          <Explore :cluster="i" :idx="idx" /></div
      ></template>
      <NuxtPage />
    </div>
  </div>
</template>
