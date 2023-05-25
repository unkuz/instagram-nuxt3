<script lang="ts" setup>
import { APP_API } from '@/apis'
import Suggestions from '@/components/Huge/Suggestions/index.vue'
import Stories from '@/components/Molecules/Stories/Stories.vue'
import Feed from '@/components/Organisms/Feed/List/index.vue'
import StorySkeleton from '@/components/Skeleton/Story/index.vue'
import { useWindowResizeCallback } from '@/composables'
import { IStory, ITimeLine } from '@/models'
import { axios } from '@/services/axios'
import { useFeedStore, useStoriesStore, useSuggestionStore, useThemeStore } from '@/store'

definePageMeta({
  middleware: 'auth',
})

const rightRef = $ref<HTMLElement>()
const leftRef = $ref<HTMLElement>()

const storiesStore = useStoriesStore()
const timeLineStore = useFeedStore()
const suggestionStore = useSuggestionStore()

const { data: _stories, pending: pendingStories } = await useLazyAsyncData<IStory[]>(
  'story',
  async () => {
    const res = await axios.get(APP_API.STORY.LIST)
    return res.data
  }
)
const { data: _suggestions, pending: pendingSugestion } = await useLazyAsyncData<IStory[]>(
  'suggestion',
  async () => {
    const res = await axios.get(APP_API.SUGGESTION.user)
    return res.data
  }
)
const { data: _timeline, pending: pendingTimeline } = await useLazyAsyncData<ITimeLine[]>(
  'feed',
  async () => {
    const res = await axios.get(APP_API.FEED.list)
    return res.data
  }
)

const themeStore = useThemeStore()

watchEffect(() => {
  storiesStore.save(unref(_stories))
})
watchEffect(() => {
  suggestionStore.save(unref(_suggestions))
})
watchEffect(() => {
  timeLineStore.save(unref(_timeline))
})

const calcLeftSuggestion = () => {
  if (rightRef && leftRef) {
    rightRef.style.left = `${leftRef?.getClientRects()[0].left + leftRef.clientWidth! + 28}px`
  }
}

onMounted(() => {
  calcLeftSuggestion()
})

useWindowResizeCallback(calcLeftSuggestion)
</script>

<template>
  <div>
    <div class="relative flex w-full justify-center lg:block">
      <div ref="leftRef" class="inline-flex w-full flex-col items-center md:w-[614px] lg:block">
        <StorySkeleton v-if="pendingStories" />
        <Stories v-else />
        <Feed :isPending="pendingTimeline" />
      </div>
      <div ref="rightRef" class="fixed left-0 top-[84px] hidden w-[293px] text-sm lg:block">
        <Suggestions :isPending="pendingSugestion" />
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
