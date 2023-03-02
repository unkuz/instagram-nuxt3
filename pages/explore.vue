<script lang="ts" setup>
import Explore from '@/components/Organisms/Explore/index.vue'
import { useExploreStore } from '@/store'
import { axios } from '@/services/axios'
import { APP_API } from '~~/apis'

const exploreStore = useExploreStore()
const explore = computed(() => exploreStore.data)

const { data, pending } = await useLazyAsyncData<any>('explore', async () => {
  const res = await axios.get(APP_API.EXPLORE.LIST)
  return res.data
})

watchEffect(() => {
  exploreStore.save(data.value)
})
</script>

<template>
  <div class="mb-[84px] pt-[20px] text-[.85rem]">
    <ClientOnly>
      <div v-for="(i, idx) in _chunk(explore, 3)" :key="idx">
        <Explore :cluster="i" :idx="idx" />
      </div>
    </ClientOnly>
    <NuxtPage />
  </div>
</template>
