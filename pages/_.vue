<script lang="ts" setup>
import { APP_API } from '@/apis'
import Suggestions from '@/components/Huge/Suggestions/index.vue'
import Stories from '@/components/Molecules/Stories/Stories.vue'
import Feed from '@/components/Organisms/Feed/List/index.vue'
import { useWindowResizeCallback } from '@/composables'
import { IStory, ITimeLine } from '@/models'
import { useStoriesStore, useSuggestionStore, useFeedStore } from '@/store'

const rightRef = $ref<HTMLElement | null>(null)
const leftRef = $ref<HTMLElement | null>(null)

const storiesStore = useStoriesStore()
const timeLineStore = useFeedStore()
const suggestionStore = useSuggestionStore()

const { data: _stories, pending: pendingStories } = await useLazyFetch<IStory[]>(
  APP_API.stories.list
)
const { data: _suggestions, pending: pendingSugestion } = await useLazyFetch<IStory[]>(
  APP_API.suggestions.list
)
// const { data: _timeline, pending: pendingTimeline } = await useLazyFetch<ITimeLine[]>(APP_API.timeLine.list)

// storiesStore.save(_stories.value)
// timeLineStore.save(_timeline.value)
// suggestionStore.save(_suggestions.value)

const calcLeftSuggestion = () => {
  if (rightRef && leftRef && leftRef.getClientRects()[0]) {
    rightRef.style.left = `${leftRef?.getClientRects()[0].left + leftRef.clientWidth! + 28}px`
  }
}

onMounted(() => {
  leftRef && calcLeftSuggestion()
})

useWindowResizeCallback(calcLeftSuggestion)
</script>

<template>
  <div>
    <div class="relative flex w-full justify-center lg:block">
      <div ref="leftRef" class="inline-flex w-full flex-col items-center md:w-[614px] lg:block">
        <Stories :isPending="pendingStories" v-if="storiesStore.data.length > 0" />
        <Feed :isPending="false" />
      </div>
      <div ref="rightRef" class="fixed left-0 top-[84px] hidden w-[293px] text-sm lg:block">
        <Suggestions :isPending="pendingSugestion" />
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
