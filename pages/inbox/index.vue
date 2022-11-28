<script setup lang="ts">
import Inbox from '@@/components/Huge/Inbox/index.vue'
import { APP_API } from '~~/apis'
import { IStory, ITimeLine } from '~~/models'

const { data: _timeline } = await useFetch<ITimeLine[]>(APP_API.timeLine.list)
const { data: _stories } = await useFetch<IStory[]>(APP_API.stories.list)
const { data: _suggestions } = await useFetch<IStory[]>(APP_API.suggestions.list)
const { data: _timelinez } = await useFetchCamel(APP_API.timeLine.list)
</script>

<template>
  <Inbox />
</template>

<style scoped></style>
