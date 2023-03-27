<script setup lang="ts">
import FeedDetail from '@/components/Organisms/Feed/Detail/FeedDetail.vue'

definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <div>
    <FeedDetail />
  </div>
</template>
