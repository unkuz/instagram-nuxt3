<script lang="ts" setup>
import Profile from '@/components/Organisms/Profile/index.vue'
import { axios } from '@/services/axios'
import { APP_API } from '~/apis'
import { useProfileStore } from '~/store'

definePageMeta({
  middleware: 'auth',
})

const route = useRoute()
const profileStore = useProfileStore()

const { data, pending: pendingTimeline } = await useLazyAsyncData<any>('profile', async () => {
  const res = await axios.get(APP_API.USER.detail, {
    params: {
      user_name: route.params.user,
    },
  })
  return res.data
})

watchEffect(() => {
  profileStore.save(data.value)
})
</script>

<template>
  <div><Profile /></div>
</template>
