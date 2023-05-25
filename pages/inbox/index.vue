<script setup lang="ts">
import InboxList from '@/components/Organisms/Inbox/List/index.vue'
import { useInboxListUserStore, useInboxStore } from '@/store'
import { axios } from '@/services/axios'
import { APP_API } from '@/apis'
definePageMeta({
  middleware: 'auth',
})
const inboxStore = useInboxStore()
const inboxListUserStore = useInboxListUserStore()

const { data, pending } = await useLazyAsyncData('inbox-list', async () => {
  const res = await axios.get(APP_API.INBOX.LIST)
  return res.data
})
watchEffect(() => {
  inboxStore.save(unref(data))
})

const { data: listUser, pending: pendingListUser } = await useLazyAsyncData(
  'inbox-list-user',
  async () => {
    const res = await axios.get(APP_API.USER.LIST)
    return res.data
  }
)

watchEffect(() => {
  inboxListUserStore.save(unref(listUser))
})
</script>
<template>
  <div>
    <InboxList />
  </div>
</template>
