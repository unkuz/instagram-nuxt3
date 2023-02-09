<script setup lang="ts">
import Inbox from '@/components/Huge/Inbox/index.vue'
import { APP_API } from '@/apis'
import { IStory, ITimeLine } from '@/models'
import ErrorPage from '@/components/Utils/ErrorPage.vue'

const { data: _timeline } = await useLazyFetch<ITimeLine[]>(APP_API.timeLine.list)
const { data: _stories } = await useLazyFetch<IStory[]>(APP_API.stories.list)
const { data: _suggestions } = await useLazyFetch<IStory[]>(APP_API.suggestions.list)
</script>

<template>
  <!-- <Inbox /> -->
  <div><ErrorPage /></div>
</template>
