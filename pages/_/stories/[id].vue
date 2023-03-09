<script lang="ts" setup>
import BackDrop from '@/components/Utils/BackDrop.vue'
import Detail from '@/components/Organisms/Story/Detail.vue'
import { APP_API } from '@/apis'
import { axios } from '@/services/axios'
import { useStoryDetailStore } from '@/store'

definePageMeta({
  middleware: 'auth',
})
const route = useRoute()

const storyDetailStore = useStoryDetailStore()

const { data, pending } = await useLazyAsyncData<any>('story-detail', async () => {
  const res = await axios.get(`${APP_API.STORY.LIST}${route.params.id}/`)
  return res.data
})

watchEffect(() => {
  storyDetailStore.save(data.value)
})

const back = () => navigateTo('/')

onBeforeUnmount(() => {
  storyDetailStore.$reset()
})
</script>

<template>
  <div>
    <BackDrop @click.self="back">
      <Detail />
    </BackDrop>
  </div>
</template>
