<script setup lang="ts">
import ActivityFeedNotification from '@/components/Organisms/ActivityFeedNotification/index.vue'
definePageMeta({
  middleware: 'auth',
})
</script>
<template>
  <div>
    <ActivityFeedNotification />
  </div>
</template>
