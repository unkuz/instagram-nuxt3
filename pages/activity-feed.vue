<script setup lang="ts">
import TopBarSm from '@/components/Molecules/TopBarSm.vue'
import ActivityFeedNotification from '@/components/Organisms/ActivityFeedNotification/index.vue'
import { useNotificationStore } from '@/store'

definePageMeta({
  middleware: 'auth',
})

const router = useRouter()
const notificationStore = useNotificationStore()
const notificationList = $computed(() => notificationStore.data)
</script>
<template>
  <div>
    <TopBarSm text="activity" @back="router.push('/')" />
    <div class="mt-[60px] md:mt-0">
      <ActivityFeedNotification :notificationList="notificationList" />
    </div>
  </div>
</template>
