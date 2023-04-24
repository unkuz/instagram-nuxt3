<script lang="ts" setup>
import { APP_API } from '@/apis'
import Reel from '@/components/Organisms/Reel/index.vue'
import { IStory, ITimeLine } from '@/models'
import { axios } from '@/services/axios'
import { useReelStore } from '@/store'

definePageMeta({
  middleware: 'auth',
})

const reelStore = useReelStore()

const { data, pending } = await useLazyAsyncData<IStory[]>('reel', async () => {
  const res = await axios.get(APP_API.REEL.LIST)
  return res.data
})

watchEffect(() => {
  reelStore.save(unref(data))
})
</script>

<template>
  <div>
    <Reel class="text-[.8rem]" :isPending="pending" />
  </div>
</template>
