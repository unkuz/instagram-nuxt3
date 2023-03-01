<script lang="ts" setup>
import { APP_API } from '@/apis'
import Suggestions from '@/components/Huge/Suggestions/index.vue'
import Stories from '@/components/Molecules/Stories/Stories.vue'
import Feed from '@/components/Organisms/Feed/List/index.vue'
import { useWindowResizeCallback } from '@/composables'
import { IStory, ITimeLine } from '@/models'
import { useStoriesStore, useSuggestionStore, useFeedStore } from '@/store'
import { gsap } from 'gsap'
import { axios } from '~~/services/axios'

const rightRef = $ref<HTMLElement>()
const leftRef = $ref<HTMLElement>()

const storiesStore = useStoriesStore()
const timeLineStore = useFeedStore()
const suggestionStore = useSuggestionStore()

const { data: _stories, pending: pendingStories } = await useLazyFetch<IStory[]>(
  APP_API.stories.list
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

// storiesStore.save(_stories.value)
timeLineStore.save(_timeline.value)
suggestionStore.save(_suggestions.value)

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
        <Stories :isPending="false" v-if="storiesStore.data.length" />
        <Feed :isPending="false" />
      </div>
      <div ref="rightRef" class="fixed left-0 top-[84px] hidden w-[293px] text-sm lg:block">
        <Suggestions :isPending="false" />
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
