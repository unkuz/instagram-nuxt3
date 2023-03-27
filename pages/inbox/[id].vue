<script setup lang="ts">
import Detail from '@/components/Organisms/Inbox/Detail/Detail.vue'
import { axios } from '@/services/axios'
import { APP_API } from '@/apis'
import { useInboxDetailStore } from '@/store'
definePageMeta({
  middleware: 'auth',
})
const route = useRoute()
const inboxDetailStore = useInboxDetailStore()

const { data, pending } = await useLazyAsyncData('inbox-detail', async () => {
  const res = await axios.get(`${APP_API.INBOX.LIST}${route.params.id}/`)
  return res.data
})

watchEffect(() => {
  inboxDetailStore.save(data.value)
})
</script>

<template>
  <Detail />
</template>
