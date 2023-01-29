<script lang="ts" setup>
import { APP_API } from '@@/apis'
import { IStory, ITimeLine } from '@@/models'
import Reel from '@@/components/Organisms/Reel/index.vue'
import ErrorPage from '@@/components/Utils/ErrorPage.vue'

const { data: _timeline } = await useFetch<ITimeLine[]>(APP_API.timeLine.list)
const { data: _stories } = await useFetch<IStory[]>(APP_API.stories.list)
const { data: _suggestions } = await useFetch<IStory[]>(APP_API.suggestions.list)
const { data: _timelinez } = await useFetchCamel(APP_API.timeLine.list)
</script>

<template>
  <div>
    <Reel class="text-[.8rem]" />
  </div>
</template>
