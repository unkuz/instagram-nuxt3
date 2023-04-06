<script lang="ts" setup>
import Profile from '@/components/Organisms/Profile/index.vue'
import { axios } from '@/services/axios'
import { APP_API } from '~/apis'
import { useProfileStore } from '~/store'
import TopBarSm from '@/components/Molecules/TopBarSm.vue'
import { useFeedUserStore } from '~/store/feed-user'

definePageMeta({
  middleware: 'auth',
})

const route = useRoute()
const profileStore = useProfileStore()
const feedUserStore = useFeedUserStore()

const { data, pending: pendingTimeline } = await useLazyAsyncData<any>('profile', async () => {
  const res = await axios.get(APP_API.USER.detail, {
    params: {
      user_name: route.params.user,
    },
  })
  return res.data
})

const { data: feedList, pending: pendingFeed } = await useLazyAsyncData<any>('profile', async () => {
  const res = await axios.get(APP_API.PROFILE.FEED.LIST, {
    params: {
      user_name: route.params.user,
    },
  })
  return res.data
})

watchEffect(() => {
  profileStore.save(data.value)
})
watchEffect(() => {
  feedUserStore.save(feedList.value)
})
</script>

<template>
  <div>
    <TopBarSm text="cuzknothz"> <div>Options</div> </TopBarSm><Profile class="mt-[60px] md:mt-0" />
  </div>
</template>
