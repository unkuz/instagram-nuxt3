<script lang="ts" setup>
import { APP_API } from '@/apis'
import Reel from '@/components/Organisms/Reel/index.vue'
import { IStory, ITimeLine } from '@/models'
import ReelSkl from '@/components/Skeleton/Reel.vue';
const { data: _timeline, pending } = await useLazyFetch<ITimeLine[]>(APP_API.timeLine.list)
const { data: _stories } = await useLazyFetch<IStory[]>(APP_API.stories.list)
const { data: _suggestions } = await useLazyFetch<IStory[]>(APP_API.suggestions.list)
</script>

<template>
  <div>
    <Reel v-if="!pending" class="text-[.8rem]" />
    <ReelSkl v-else/>
  </div>
</template>
